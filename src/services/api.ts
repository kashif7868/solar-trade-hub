import axios, {
  AxiosError,
  AxiosHeaders,
  type InternalAxiosRequestConfig,
} from "axios";

/* =========================================================
   API CONFIGURATION
========================================================= */

const normalizeBaseUrl = (
  value: string
): string => {
  return value
    .trim()
    .replace(/\/+$/, "");
};

export const API_BASE_URL =
  normalizeBaseUrl(
    process.env.NEXT_PUBLIC_API_BASE_URL?.trim() ||
      "http://localhost:5000/api/v1"
  );

const API_TIMEOUT = 60_000;

/* =========================================================
   STORAGE KEYS
========================================================= */

const ACCESS_TOKEN_KEY =
  "accessToken";

const REFRESH_TOKEN_KEY =
  "refreshToken";

const AUTH_USER_KEY =
  "authUser";

/* =========================================================
   TYPES
========================================================= */

type RetryRequestConfig =
  InternalAxiosRequestConfig & {
    _retry?: boolean;
  };

type RefreshTokenResponse = {
  success?: boolean;
  message?: string;

  accessToken?: string;
  refreshToken?: string;
  user?: unknown;

  data?: {
    accessToken?: string;
    refreshToken?: string;
    user?: unknown;
  };
};

/* =========================================================
   BROWSER
========================================================= */

const isBrowser = (): boolean => {
  return (
    typeof window !== "undefined" &&
    typeof localStorage !== "undefined" &&
    typeof sessionStorage !== "undefined"
  );
};

/* =========================================================
   TOKEN STORAGE
========================================================= */

export const getAccessToken =
  (): string | null => {
    if (!isBrowser()) {
      return null;
    }

    return (
      localStorage.getItem(
        ACCESS_TOKEN_KEY
      ) ||
      sessionStorage.getItem(
        ACCESS_TOKEN_KEY
      )
    );
  };

export const getRefreshToken =
  (): string | null => {
    if (!isBrowser()) {
      return null;
    }

    return (
      localStorage.getItem(
        REFRESH_TOKEN_KEY
      ) ||
      sessionStorage.getItem(
        REFRESH_TOKEN_KEY
      )
    );
  };

export const isRememberedLogin =
  (): boolean => {
    if (!isBrowser()) {
      return false;
    }

    return Boolean(
      localStorage.getItem(
        ACCESS_TOKEN_KEY
      ) ||
        localStorage.getItem(
          REFRESH_TOKEN_KEY
        )
    );
  };

export const setAuthTokens = (
  accessToken: string,
  refreshToken: string,
  rememberMe = false
): void => {
  if (!isBrowser()) {
    return;
  }

  const normalizedAccessToken =
    accessToken.trim();

  const normalizedRefreshToken =
    refreshToken.trim();

  if (
    !normalizedAccessToken ||
    !normalizedRefreshToken
  ) {
    throw new Error(
      "Authentication tokens are invalid."
    );
  }

  localStorage.removeItem(
    ACCESS_TOKEN_KEY
  );

  localStorage.removeItem(
    REFRESH_TOKEN_KEY
  );

  sessionStorage.removeItem(
    ACCESS_TOKEN_KEY
  );

  sessionStorage.removeItem(
    REFRESH_TOKEN_KEY
  );

  const storage =
    rememberMe
      ? localStorage
      : sessionStorage;

  storage.setItem(
    ACCESS_TOKEN_KEY,
    normalizedAccessToken
  );

  storage.setItem(
    REFRESH_TOKEN_KEY,
    normalizedRefreshToken
  );
};

/* =========================================================
   AUTH USER STORAGE
========================================================= */

export const setStoredAuthUser = (
  user: unknown,
  rememberMe = false
): void => {
  if (
    !isBrowser() ||
    !user ||
    typeof user !== "object"
  ) {
    return;
  }

  localStorage.removeItem(
    AUTH_USER_KEY
  );

  sessionStorage.removeItem(
    AUTH_USER_KEY
  );

  const storage =
    rememberMe
      ? localStorage
      : sessionStorage;

  storage.setItem(
    AUTH_USER_KEY,
    JSON.stringify(user)
  );
};

export const getStoredAuthUser =
  <T = unknown>(): T | null => {
    if (!isBrowser()) {
      return null;
    }

    const value =
      localStorage.getItem(
        AUTH_USER_KEY
      ) ||
      sessionStorage.getItem(
        AUTH_USER_KEY
      );

    if (!value) {
      return null;
    }

    try {
      return JSON.parse(value) as T;
    } catch {
      localStorage.removeItem(
        AUTH_USER_KEY
      );

      sessionStorage.removeItem(
        AUTH_USER_KEY
      );

      return null;
    }
  };

/* =========================================================
   CLEAR AUTH
========================================================= */

export const clearAuthStorage =
  (): void => {
    if (!isBrowser()) {
      return;
    }

    localStorage.removeItem(
      ACCESS_TOKEN_KEY
    );

    localStorage.removeItem(
      REFRESH_TOKEN_KEY
    );

    localStorage.removeItem(
      AUTH_USER_KEY
    );

    sessionStorage.removeItem(
      ACCESS_TOKEN_KEY
    );

    sessionStorage.removeItem(
      REFRESH_TOKEN_KEY
    );

    sessionStorage.removeItem(
      AUTH_USER_KEY
    );
  };

/* =========================================================
   PUBLIC AUTH REQUESTS
========================================================= */

const isPublicAuthRequest = (
  requestUrl = ""
): boolean => {
  return (
    requestUrl.includes(
      "/auth/login"
    ) ||
    requestUrl.includes(
      "/auth/register"
    ) ||
    requestUrl.includes(
      "/auth/refresh-token"
    ) ||
    requestUrl.includes(
      "/auth/forgot-password"
    ) ||
    requestUrl.includes(
      "/auth/reset-password/"
    ) ||
    requestUrl.includes(
      "/auth/verify-email/"
    ) ||
    requestUrl.includes(
      "/auth/resend-verification-email"
    ) ||
    requestUrl.includes(
      "/auth/send-phone-otp"
    ) ||
    requestUrl.includes(
      "/auth/verify-phone-otp"
    )
  );
};

/* =========================================================
   AXIOS INSTANCE
========================================================= */

export const api =
  axios.create({
    baseURL:
      API_BASE_URL,

    timeout:
      API_TIMEOUT,

    withCredentials:
      true,

    headers: {
      Accept:
        "application/json",
    },
  });

/* =========================================================
   REQUEST INTERCEPTOR
========================================================= */

api.interceptors.request.use(
  (
    config:
      InternalAxiosRequestConfig
  ) => {
    const requestUrl =
      config.url || "";

    const accessToken =
      getAccessToken();

    if (
      accessToken &&
      !isPublicAuthRequest(
        requestUrl
      )
    ) {
      if (!config.headers) {
        config.headers =
          new AxiosHeaders();
      }

      config.headers.set(
        "Authorization",
        `Bearer ${accessToken}`
      );
    } else if (
      config.headers
    ) {
      config.headers.delete(
        "Authorization"
      );
    }

    if (
      typeof FormData !==
        "undefined" &&
      config.data instanceof
        FormData
    ) {
      config.headers.delete(
        "Content-Type"
      );
    }

    return config;
  },
  (
    error: AxiosError
  ) => {
    return Promise.reject(
      error
    );
  }
);

/* =========================================================
   REFRESH TOKEN LOCK
========================================================= */

let refreshRequest:
  | Promise<{
      accessToken: string;
      refreshToken: string;
      user?: unknown;
    }>
  | null = null;

/* =========================================================
   REFRESH SESSION
========================================================= */

const requestNewTokens =
  async () => {
    const refreshToken =
      getRefreshToken();

    if (!refreshToken) {
      throw new Error(
        "Refresh token is missing."
      );
    }

    const response =
      await axios.post<RefreshTokenResponse>(
        `${API_BASE_URL}/auth/refresh-token`,
        {
          refreshToken,
        },
        {
          timeout:
            API_TIMEOUT,

          withCredentials:
            true,

          headers: {
            Accept:
              "application/json",

            "Content-Type":
              "application/json",
          },
        }
      );

    const body =
      response.data;

    const data =
      body?.data &&
      typeof body.data ===
        "object"
        ? body.data
        : body;

    const newAccessToken =
      typeof data
        ?.accessToken ===
      "string"
        ? data.accessToken.trim()
        : "";

    const newRefreshToken =
      typeof data
        ?.refreshToken ===
      "string"
        ? data.refreshToken.trim()
        : "";

    if (!newAccessToken) {
      throw new Error(
        "Access token was not returned by the server."
      );
    }

    if (!newRefreshToken) {
      throw new Error(
        "Refresh token was not returned by the server."
      );
    }

    return {
      accessToken:
        newAccessToken,

      refreshToken:
        newRefreshToken,

      user:
        data?.user,
    };
  };

/* =========================================================
   RESPONSE INTERCEPTOR
========================================================= */

api.interceptors.response.use(
  (response) => response,

  async (
    error: AxiosError
  ) => {
    const originalRequest =
      error.config as
        | RetryRequestConfig
        | undefined;

    if (!originalRequest) {
      return Promise.reject(
        error
      );
    }

    const requestUrl =
      originalRequest.url ||
      "";

    const shouldRefresh =
      error.response?.status ===
        401 &&
      !originalRequest._retry &&
      !isPublicAuthRequest(
        requestUrl
      );

    if (!shouldRefresh) {
      return Promise.reject(
        error
      );
    }

    if (!getRefreshToken()) {
      clearAuthStorage();

      return Promise.reject(
        error
      );
    }

    originalRequest._retry =
      true;

    try {
      if (!refreshRequest) {
        refreshRequest =
          requestNewTokens()
            .finally(() => {
              refreshRequest =
                null;
            });
      }

      const {
        accessToken,
        refreshToken,
        user,
      } =
        await refreshRequest;

      const rememberMe =
        isRememberedLogin();

      setAuthTokens(
        accessToken,
        refreshToken,
        rememberMe
      );

      if (user) {
        setStoredAuthUser(
          user,
          rememberMe
        );
      }

      if (
        !originalRequest.headers
      ) {
        originalRequest.headers =
          new AxiosHeaders();
      }

      originalRequest.headers.set(
        "Authorization",
        `Bearer ${accessToken}`
      );

      return api(
        originalRequest
      );
    } catch (
      refreshError
    ) {
      clearAuthStorage();

      return Promise.reject(
        refreshError
      );
    }
  }
);

export default api;