"use client";

import {
  FormEvent,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";

import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  UserRound,
} from "lucide-react";

import { useAuthStore } from "@/store/authStore";

import "@/components/animations/css/auth/sign-in-form.css";

interface SignInFormProps {
  onSwitchToSignUp: () => void;
  onForgotPassword: () => void;
}

export function SignInForm({
  onSwitchToSignUp,
  onForgotPassword,
}: SignInFormProps) {
  const router = useRouter();

  const [identifier, setIdentifier] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [rememberMe, setRememberMe] =
    useState(false);

  const [
    showPassword,
    setShowPassword,
  ] = useState(false);

  const [
    localError,
    setLocalError,
  ] = useState<string | null>(null);

  const {
    login,
    isLoading,
    error,
    clearError,
  } = useAuthStore();

  useEffect(() => {
    return () => {
      clearError();
    };
  }, [clearError]);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    clearError();
    setLocalError(null);

    const normalizedIdentifier =
      identifier.trim();

    if (
      !normalizedIdentifier ||
      !password
    ) {
      setLocalError(
        "Please enter your email or mobile number and password."
      );

      return;
    }

    const success =
      await login(
        {
          identifier:
            normalizedIdentifier,
          password,
        },
        rememberMe
      );

    if (!success) {
      return;
    }

    router.push("/profile");
  };

  const displayedError =
    localError || error;

  return (
    <div className="sth-sign-in">
      <div className="sth-sign-in__heading">
        <span className="sth-sign-in__heading-icon">
          <UserRound
            size={20}
            strokeWidth={1.8}
          />
        </span>

        <div>
          <h2>
            Welcome Back
          </h2>

          <p>
            Sign in to continue to
            Solar Trade Hub.
          </p>
        </div>
      </div>

      <form
        className="sth-sign-in__form"
        onSubmit={handleSubmit}
      >
        <label className="sth-sign-in__field">
          <span>
            Email or Mobile Number
          </span>

          <div className="sth-sign-in__input">
            <UserRound
              size={16}
              strokeWidth={1.8}
            />

            <input
              type="text"
              placeholder="Email or mobile number"
              value={identifier}
              onChange={(event) =>
                setIdentifier(
                  event.target.value
                )
              }
              autoComplete="username"
              disabled={isLoading}
              required
            />
          </div>
        </label>

        <label className="sth-sign-in__field">
          <span>
            Password
          </span>

          <div className="sth-sign-in__input">
            <LockKeyhole
              size={16}
              strokeWidth={1.8}
            />

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Enter your password"
              value={password}
              onChange={(event) =>
                setPassword(
                  event.target.value
                )
              }
              autoComplete="current-password"
              disabled={isLoading}
              required
            />

            <button
              type="button"
              className="sth-sign-in__password-toggle"
              onClick={() =>
                setShowPassword(
                  (current) =>
                    !current
                )
              }
              disabled={isLoading}
              aria-label={
                showPassword
                  ? "Hide password"
                  : "Show password"
              }
            >
              {showPassword ? (
                <EyeOff size={16} />
              ) : (
                <Eye size={16} />
              )}
            </button>
          </div>
        </label>

        {displayedError && (
          <div
            role="alert"
            className="sth-sign-in__error"
          >
            {displayedError}
          </div>
        )}

        <div className="sth-sign-in__options">
          <label className="sth-sign-in__remember">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(event) =>
                setRememberMe(
                  event.target.checked
                )
              }
              disabled={isLoading}
            />

            <span>
              Remember me
            </span>
          </label>

          <button
            type="button"
            className="sth-sign-in__forgot"
            onClick={onForgotPassword}
            disabled={isLoading}
          >
            Forgot Password?
          </button>
        </div>

        <button
          type="submit"
          className="sth-sign-in__submit"
          disabled={isLoading}
        >
          <span>
            {isLoading
              ? "Signing In..."
              : "Login to Account"}
          </span>

          {!isLoading && (
            <ArrowRight
              size={16}
            />
          )}
        </button>
      </form>

      <div className="sth-sign-in__bottom">
        <span>
          New to Solar Trade Hub?
        </span>

        <button
          type="button"
          onClick={
            onSwitchToSignUp
          }
          disabled={isLoading}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}