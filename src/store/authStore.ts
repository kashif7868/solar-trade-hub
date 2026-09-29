import { create } from "zustand";

import {
  type AuthUser,
  type LoginPayload,
  type RegisterPayload,
  type UpdateCustomerProfilePayload,
  getAuthErrorMessage,
  getCustomerProfile,
  getStoredCustomer,
  loginCustomer,
  logoutCustomer,
  registerCustomer,
  removeCustomerAvatar,
  sendPhoneOtp,
  updateCustomerProfile,
  uploadCustomerAvatar,
  verifyPhoneOtp,
} from "@/services/auth/auth.service";

import {
  getAccessToken,
  getRefreshToken,
} from "@/services/api";

/* =========================================================
   TYPES
========================================================= */

interface AuthState {
  user: AuthUser | null;

  isAuthenticated: boolean;
  isInitializing: boolean;
  isLoading: boolean;

  error: string | null;

  pendingVerificationEmail:
    string | null;

  register: (
    payload: RegisterPayload
  ) => Promise<boolean>;

  sendOtp: (
    email?: string
  ) => Promise<boolean>;

  verifyOtp: (
    otp: string
  ) => Promise<boolean>;

  login: (
    payload: LoginPayload,
    rememberMe?: boolean
  ) => Promise<boolean>;

  initializeAuth:
    () => Promise<void>;

  refreshProfile:
    () => Promise<AuthUser | null>;

  updateProfile: (
    payload: UpdateCustomerProfilePayload
  ) => Promise<AuthUser | null>;

  uploadAvatar: (
    file: File
  ) => Promise<AuthUser | null>;

  removeAvatar:
    () => Promise<AuthUser | null>;

  logout:
    () => Promise<void>;

  clearError:
    () => void;

  clearPendingVerification:
    () => void;
}

/* =========================================================
   STORE
========================================================= */

export const useAuthStore =
  create<AuthState>((set, get) => ({
    user: null,

    isAuthenticated: false,
    isInitializing: true,
    isLoading: false,

    error: null,

    pendingVerificationEmail:
      null,

    register: async (
      payload
    ) => {
      set({
        isLoading: true,
        error: null,
      });

      try {
        await registerCustomer(
          payload
        );

        const email =
          payload.email
            .trim()
            .toLowerCase();

        set({
          pendingVerificationEmail:
            email,
        });

        await sendPhoneOtp({
          email,
        });

        set({
          isLoading: false,
        });

        return true;
      } catch (error) {
        set({
          isLoading: false,
          error:
            getAuthErrorMessage(
              error
            ),
        });

        return false;
      }
    },

    sendOtp: async (
      email
    ) => {
      const targetEmail =
        email
          ?.trim()
          .toLowerCase() ||
        get()
          .pendingVerificationEmail;

      if (!targetEmail) {
        set({
          error:
            "Verification email is missing.",
        });

        return false;
      }

      set({
        isLoading: true,
        error: null,
      });

      try {
        await sendPhoneOtp({
          email: targetEmail,
        });

        set({
          pendingVerificationEmail:
            targetEmail,
          isLoading: false,
        });

        return true;
      } catch (error) {
        set({
          isLoading: false,
          error:
            getAuthErrorMessage(
              error
            ),
        });

        return false;
      }
    },

    verifyOtp: async (
      otp
    ) => {
      const email =
        get()
          .pendingVerificationEmail;

      if (!email) {
        set({
          error:
            "Verification session is missing.",
        });

        return false;
      }

      const normalizedOtp =
        otp.trim();

      if (!normalizedOtp) {
        set({
          error:
            "Enter the verification code.",
        });

        return false;
      }

      set({
        isLoading: true,
        error: null,
      });

      try {
        await verifyPhoneOtp({
          email,
          otp: normalizedOtp,
        });

        set({
          isLoading: false,
          error: null,
        });

        return true;
      } catch (error) {
        set({
          isLoading: false,
          error:
            getAuthErrorMessage(
              error
            ),
        });

        return false;
      }
    },

    login: async (
      payload,
      rememberMe = false
    ) => {
      set({
        isLoading: true,
        error: null,
      });

      try {
        const response =
          await loginCustomer(
            payload,
            rememberMe
          );

        if (!response.user) {
          throw new Error(
            "User was not returned after login."
          );
        }

        set({
          user:
            response.user,

          isAuthenticated:
            true,

          isLoading:
            false,

          pendingVerificationEmail:
            null,

          error:
            null,
        });

        return true;
      } catch (error) {
        set({
          user: null,

          isAuthenticated:
            false,

          isLoading:
            false,

          error:
            getAuthErrorMessage(
              error
            ),
        });

        return false;
      }
    },

    initializeAuth:
      async () => {
        const accessToken =
          getAccessToken();

        const refreshToken =
          getRefreshToken();

        if (
          !accessToken &&
          !refreshToken
        ) {
          set({
            user: null,
            isAuthenticated:
              false,
            isInitializing:
              false,
          });

          return;
        }

        const storedUser =
          getStoredCustomer();

        if (storedUser) {
          set({
            user:
              storedUser,

            isAuthenticated:
              true,
          });
        }

        try {
          const user =
            await getCustomerProfile();

          set({
            user,

            isAuthenticated:
              true,

            isInitializing:
              false,

            error: null,
          });
        } catch {
          set({
            user: null,

            isAuthenticated:
              false,

            isInitializing:
              false,
          });
        }
      },

    refreshProfile:
      async () => {
        try {
          const user =
            await getCustomerProfile();

          set({
            user,
            isAuthenticated:
              true,
            error: null,
          });

          return user;
        } catch (error) {
          set({
            error:
              getAuthErrorMessage(
                error
              ),
          });

          return null;
        }
      },

    updateProfile:
      async (
        payload
      ) => {
        const currentUser =
          get().user;

        if (!currentUser) {
          set({
            error:
              "User session is missing.",
          });

          return null;
        }

        const userId =
          currentUser._id ||
          currentUser.id;

        if (!userId) {
          set({
            error:
              "User ID is missing.",
          });

          return null;
        }

        set({
          isLoading: true,
          error: null,
        });

        try {
          const user =
            await updateCustomerProfile(
              userId,
              payload
            );

          set({
            user,
            isAuthenticated:
              true,
            isLoading:
              false,
            error: null,
          });

          return user;
        } catch (error) {
          set({
            isLoading:
              false,
            error:
              getAuthErrorMessage(
                error
              ),
          });

          return null;
        }
      },

    uploadAvatar:
      async (
        file
      ) => {
        const currentUser =
          get().user;

        if (!currentUser) {
          set({
            error:
              "User session is missing.",
          });

          return null;
        }

        const userId =
          currentUser._id ||
          currentUser.id;

        if (!userId) {
          set({
            error:
              "User ID is missing.",
          });

          return null;
        }

        set({
          isLoading: true,
          error: null,
        });

        try {
          const user =
            await uploadCustomerAvatar(
              userId,
              file
            );

          set({
            user,
            isAuthenticated:
              true,
            isLoading:
              false,
            error: null,
          });

          return user;
        } catch (error) {
          set({
            isLoading:
              false,
            error:
              getAuthErrorMessage(
                error
              ),
          });

          return null;
        }
      },

    removeAvatar:
      async () => {
        const currentUser =
          get().user;

        if (!currentUser) {
          set({
            error:
              "User session is missing.",
          });

          return null;
        }

        const userId =
          currentUser._id ||
          currentUser.id;

        if (!userId) {
          set({
            error:
              "User ID is missing.",
          });

          return null;
        }

        set({
          isLoading: true,
          error: null,
        });

        try {
          const user =
            await removeCustomerAvatar(
              userId
            );

          set({
            user,
            isAuthenticated:
              true,
            isLoading:
              false,
            error: null,
          });

          return user;
        } catch (error) {
          set({
            isLoading:
              false,
            error:
              getAuthErrorMessage(
                error
              ),
          });

          return null;
        }
      },

    logout: async () => {
      set({
        isLoading: true,
        error: null,
      });

      try {
        await logoutCustomer();
      } finally {
        set({
          user: null,

          isAuthenticated:
            false,

          isLoading:
            false,

          pendingVerificationEmail:
            null,

          error: null,
        });
      }
    },

    clearError: () =>
      set({
        error: null,
      }),

    clearPendingVerification:
      () =>
        set({
          pendingVerificationEmail:
            null,

          error: null,
        }),
  }));