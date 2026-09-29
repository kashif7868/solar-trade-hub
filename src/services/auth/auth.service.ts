import axios from "axios";

import api, {
  clearAuthStorage,
  getStoredAuthUser,
  isRememberedLogin,
  setAuthTokens,
  setStoredAuthUser,
} from "../api";

/* =========================================================
   TYPES
========================================================= */

export interface AuthUser {
  _id: string;
  id?: string;

  accountType?: string;

  name: string;
  email: string;

  phone?: string;
  countryCode?: string;
  phoneE164?: string;

  avatar?: string;

  role?: string;

  isVerified?: boolean;
  isPhoneVerified?: boolean;

  status?: string;

  createdAt?: string;
  updatedAt?: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  phone: string;
  countryCode: string;
}

export interface LoginPayload {
  identifier: string;
  password: string;
}

export interface PhoneOtpPayload {
  email: string;
}

export interface VerifyPhoneOtpPayload {
  email: string;
  otp: string;
}

export interface UpdateCustomerProfilePayload {
  name?: string;
  email?: string;
  phone?: string;
  countryCode?: string;
}

export interface ChangePasswordPayload {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface ResetPasswordPayload {
  newPassword: string;
  confirmPassword: string;
}

export interface AuthResponse {
  success?: boolean;
  message?: string;

  accessToken?: string;
  refreshToken?: string;

  user?: AuthUser;

  nextAction?: string;

  phoneVerification?: {
    required?: boolean;
    sent?: boolean;
    verified?: boolean;
    phone?: string;
    phoneE164?: string;
    expiresAt?: string;
  };
}

interface WrappedAuthResponse extends AuthResponse {
  data?: AuthResponse;
}

interface ApiErrorResponse {
  success?: boolean;
  message?: string;

  errors?: Array<{
    field?: string;
    message?: string;
  }>;
}

/* =========================================================
   RESPONSE NORMALIZER
========================================================= */

const normalizeResponse = (
  response: WrappedAuthResponse
): AuthResponse => {
  if (
    response.data &&
    typeof response.data === "object"
  ) {
    return {
      ...response,
      ...response.data,
      data: undefined,
    } as AuthResponse;
  }

  return response;
};

/* =========================================================
   USER RESPONSE
========================================================= */

const getUserFromResponse = (
  response: WrappedAuthResponse,
  fallbackMessage: string
): AuthUser => {
  const data =
    normalizeResponse(response);

  if (!data.user) {
    throw new Error(
      data.message || fallbackMessage
    );
  }

  setStoredAuthUser(
    data.user,
    isRememberedLogin()
  );

  return data.user;
};

/* =========================================================
   REGISTER CUSTOMER
========================================================= */

export const registerCustomer = async (
  payload: RegisterPayload
): Promise<AuthResponse> => {
  const response =
    await api.post<WrappedAuthResponse>(
      "/auth/register",
      {
        source: "storefront",
        name: payload.name.trim(),
        email: payload.email
          .trim()
          .toLowerCase(),
        password: payload.password,
        phone: payload.phone.trim(),
        countryCode:
          payload.countryCode.trim(),
      }
    );

  return normalizeResponse(
    response.data
  );
};

/* =========================================================
   SEND PHONE OTP
========================================================= */

export const sendPhoneOtp = async (
  payload: PhoneOtpPayload
): Promise<AuthResponse> => {
  const response =
    await api.post<WrappedAuthResponse>(
      "/auth/send-phone-otp",
      {
        source: "storefront",
        email: payload.email
          .trim()
          .toLowerCase(),
      }
    );

  return normalizeResponse(
    response.data
  );
};

/* =========================================================
   VERIFY PHONE OTP
========================================================= */

export const verifyPhoneOtp = async (
  payload: VerifyPhoneOtpPayload
): Promise<AuthResponse> => {
  const response =
    await api.post<WrappedAuthResponse>(
      "/auth/verify-phone-otp",
      {
        source: "storefront",
        email: payload.email
          .trim()
          .toLowerCase(),
        otp: payload.otp.trim(),
      }
    );

  return normalizeResponse(
    response.data
  );
};

/* =========================================================
   LOGIN CUSTOMER
========================================================= */

export const loginCustomer = async (
  payload: LoginPayload,
  rememberMe = false
): Promise<AuthResponse> => {
  const identifier =
    payload.identifier.trim();

  const response =
    await api.post<WrappedAuthResponse>(
      "/auth/login",
      {
        source: "storefront",
        identifier:
          identifier.includes("@")
            ? identifier.toLowerCase()
            : identifier,
        password: payload.password,
      }
    );

  const data =
    normalizeResponse(
      response.data
    );

  if (
    !data.accessToken ||
    !data.refreshToken ||
    !data.user
  ) {
    clearAuthStorage();

    throw new Error(
      data.message ||
        "Login response is incomplete."
    );
  }

  setAuthTokens(
    data.accessToken,
    data.refreshToken,
    rememberMe
  );

  setStoredAuthUser(
    data.user,
    rememberMe
  );

  return data;
};

/* =========================================================
   GET PROFILE
========================================================= */

export const getCustomerProfile =
  async (): Promise<AuthUser> => {
    const response =
      await api.get<WrappedAuthResponse>(
        "/auth/profile"
      );

    return getUserFromResponse(
      response.data,
      "User profile was not returned."
    );
  };

/* =========================================================
   UPDATE PROFILE

   PATCH /users/:id

   Backend accepts:
   - name
   - email
   - phone
   - countryCode
========================================================= */

export const updateCustomerProfile =
  async (
    userId: string,
    payload: UpdateCustomerProfilePayload
  ): Promise<AuthUser> => {
    const updateData:
      UpdateCustomerProfilePayload = {};

    if (payload.name !== undefined) {
      updateData.name =
        payload.name.trim();
    }

    if (payload.email !== undefined) {
      updateData.email =
        payload.email
          .trim()
          .toLowerCase();
    }

    if (payload.phone !== undefined) {
      updateData.phone =
        payload.phone.trim();
    }

    if (
      payload.countryCode !== undefined
    ) {
      updateData.countryCode =
        payload.countryCode.trim();
    }

    const response =
      await api.patch<WrappedAuthResponse>(
        `/users/${userId}`,
        updateData
      );

    return getUserFromResponse(
      response.data,
      "Updated user profile was not returned."
    );
  };

/* =========================================================
   UPLOAD / REPLACE AVATAR

   PATCH /users/:id/avatar
   multipart/form-data
   field: avatar
========================================================= */

export const uploadCustomerAvatar =
  async (
    userId: string,
    file: File
  ): Promise<AuthUser> => {
    const formData =
      new FormData();

    formData.append(
      "avatar",
      file
    );

    const response =
      await api.patch<WrappedAuthResponse>(
        `/users/${userId}/avatar`,
        formData
      );

    return getUserFromResponse(
      response.data,
      "Updated profile picture was not returned."
    );
  };

/* =========================================================
   REMOVE AVATAR
========================================================= */

export const removeCustomerAvatar =
  async (
    userId: string
  ): Promise<AuthUser> => {
    const response =
      await api.delete<WrappedAuthResponse>(
        `/users/${userId}/avatar`
      );

    return getUserFromResponse(
      response.data,
      "Updated user profile was not returned."
    );
  };

/* =========================================================
   CHANGE PASSWORD

   PATCH /auth/change-password
========================================================= */

export const changeCustomerPassword =
  async (
    payload: ChangePasswordPayload
  ): Promise<AuthResponse> => {
    const response =
      await api.patch<WrappedAuthResponse>(
        "/auth/change-password",
        {
          oldPassword:
            payload.currentPassword,
          newPassword:
            payload.newPassword,
          confirmPassword:
            payload.confirmPassword,
        }
      );

    return normalizeResponse(
      response.data
    );
  };

/* =========================================================
   FORGOT PASSWORD

   POST /auth/forgot-password
========================================================= */

export const forgotCustomerPassword =
  async (
    payload: ForgotPasswordPayload
  ): Promise<AuthResponse> => {
    const response =
      await api.post<WrappedAuthResponse>(
        "/auth/forgot-password",
        {
          source: "storefront",
          email: payload.email
            .trim()
            .toLowerCase(),
        }
      );

    return normalizeResponse(
      response.data
    );
  };

/* =========================================================
   RESET PASSWORD

   PATCH /auth/reset-password/:token
========================================================= */

export const resetCustomerPassword =
  async (
    token: string,
    payload: ResetPasswordPayload
  ): Promise<AuthResponse> => {
    const normalizedToken =
      token.trim();

    if (!normalizedToken) {
      throw new Error(
        "Reset token is required."
      );
    }

    const response =
      await api.patch<WrappedAuthResponse>(
        `/auth/reset-password/${encodeURIComponent(
          normalizedToken
        )}`,
        {
          newPassword:
            payload.newPassword,
          confirmPassword:
            payload.confirmPassword,
        }
      );

    return normalizeResponse(
      response.data
    );
  };

/* =========================================================
   STORED USER
========================================================= */

export const getStoredCustomer =
  (): AuthUser | null => {
    return getStoredAuthUser<AuthUser>();
  };

/* =========================================================
   LOGOUT
========================================================= */

export const logoutCustomer =
  async (): Promise<void> => {
    try {
      await api.post(
        "/auth/logout"
      );
    } finally {
      clearAuthStorage();
    }
  };

/* =========================================================
   ERROR MESSAGE
========================================================= */

export const getAuthErrorMessage = (
  error: unknown
): string => {
  if (
    axios.isAxiosError<ApiErrorResponse>(
      error
    )
  ) {
    const message =
      error.response?.data?.message;

    if (message) {
      return message;
    }

    const validationMessage =
      error.response?.data
        ?.errors?.[0]?.message;

    if (validationMessage) {
      return validationMessage;
    }

    if (
      error.code === "ERR_NETWORK"
    ) {
      return "Unable to connect to Solar Trade Hub.";
    }

    if (error.message) {
      return error.message;
    }
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Something went wrong. Please try again.";
};