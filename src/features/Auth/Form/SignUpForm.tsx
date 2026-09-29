"use client";

import Link from "next/link";
import {
  FormEvent,
  useEffect,
  useState,
} from "react";

import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Phone,
  UserRound,
} from "lucide-react";

import { useAuthStore } from "@/store/authStore";

import "@/components/animations/css/auth/sign-up-form.css";

interface SignUpFormProps {
  onSwitchToSignIn: () => void;
  onRegistrationSuccess?: (
    email: string
  ) => void;
}

export function SignUpForm({
  onSwitchToSignIn,
  onRegistrationSuccess,
}: SignUpFormProps) {
  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState("");

  const [
    acceptedTerms,
    setAcceptedTerms,
  ] = useState(false);

  const [
    showPassword,
    setShowPassword,
  ] = useState(false);

  const [
    localError,
    setLocalError,
  ] = useState<string | null>(
    null
  );

  const {
    register,
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

    const normalizedName =
      name.trim();

    const normalizedEmail =
      email
        .trim()
        .toLowerCase();

    const normalizedPhone =
      phone
        .trim()
        .replace(/\s+/g, "");

    if (
      !normalizedName ||
      !normalizedEmail ||
      !normalizedPhone ||
      !password ||
      !confirmPassword
    ) {
      setLocalError(
        "Please complete all required fields."
      );

      return;
    }

    if (
      password !==
      confirmPassword
    ) {
      setLocalError(
        "Passwords do not match."
      );

      return;
    }

    if (password.length < 8) {
      setLocalError(
        "Password must be at least 8 characters."
      );

      return;
    }

    if (!acceptedTerms) {
      setLocalError(
        "Please accept the Terms & Conditions and Privacy Policy."
      );

      return;
    }

    const success =
      await register({
        name:
          normalizedName,

        email:
          normalizedEmail,

        countryCode:
          "+92",

        phone:
          normalizedPhone,

        password,
      });

    if (!success) {
      return;
    }

    onRegistrationSuccess?.(
      normalizedEmail
    );
  };

  const displayedError =
    localError || error;

  return (
    <div className="sth-sign-up">
      <div className="sth-sign-up__heading">
        <span className="sth-sign-up__heading-icon">
          <UserRound
            size={20}
            strokeWidth={1.8}
          />
        </span>

        <div>
          <h2>
            Create Account
          </h2>

          <p>
            Join Solar Trade Hub and
            start your solar journey.
          </p>
        </div>
      </div>

      <form
        className="sth-sign-up__form"
        onSubmit={handleSubmit}
      >
        <label className="sth-sign-up__field">
          <span>
            Full Name
          </span>

          <div className="sth-sign-up__input">
            <UserRound
              size={16}
              strokeWidth={1.8}
            />

            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(event) =>
                setName(
                  event.target.value
                )
              }
              autoComplete="name"
              disabled={isLoading}
              required
            />
          </div>
        </label>

        <label className="sth-sign-up__field">
          <span>
            Email Address
          </span>

          <div className="sth-sign-up__input">
            <Mail
              size={16}
              strokeWidth={1.8}
            />

            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(event) =>
                setEmail(
                  event.target.value
                )
              }
              autoComplete="email"
              disabled={isLoading}
              required
            />
          </div>
        </label>

        <label className="sth-sign-up__field">
          <span>
            Mobile Number
          </span>

          <div className="sth-sign-up__input sth-sign-up__phone-input">
            <Phone
              size={16}
              strokeWidth={1.8}
            />

            <span className="sth-sign-up__country-code">
              +92
            </span>

            <input
              type="tel"
              placeholder="3001234567"
              value={phone}
              onChange={(event) =>
                setPhone(
                  event.target.value
                )
              }
              autoComplete="tel-national"
              inputMode="tel"
              disabled={isLoading}
              required
            />
          </div>
        </label>

        <label className="sth-sign-up__field">
          <span>
            Password
          </span>

          <div className="sth-sign-up__input">
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
              placeholder="Minimum 8 characters"
              value={password}
              onChange={(event) =>
                setPassword(
                  event.target.value
                )
              }
              autoComplete="new-password"
              disabled={isLoading}
              required
            />

            <button
              type="button"
              className="sth-sign-up__password-toggle"
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

        <label className="sth-sign-up__field">
          <span>
            Confirm Password
          </span>

          <div className="sth-sign-up__input">
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
              placeholder="Re-enter password"
              value={confirmPassword}
              onChange={(event) =>
                setConfirmPassword(
                  event.target.value
                )
              }
              autoComplete="new-password"
              disabled={isLoading}
              required
            />
          </div>
        </label>

        {displayedError && (
          <div
            role="alert"
            className="sth-sign-up__error"
          >
            {displayedError}
          </div>
        )}

        <label className="sth-sign-up__terms">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(event) =>
              setAcceptedTerms(
                event.target.checked
              )
            }
            disabled={isLoading}
          />

          <span>
            I agree to the{" "}
            <Link href="/terms">
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy">
              Privacy Policy
            </Link>
            .
          </span>
        </label>

        <button
          type="submit"
          className="sth-sign-up__submit"
          disabled={isLoading}
        >
          <span>
            {isLoading
              ? "Creating Account..."
              : "Create Account"}
          </span>

          {!isLoading && (
            <ArrowRight
              size={16}
            />
          )}
        </button>
      </form>

      <div className="sth-sign-up__bottom">
        <span>
          Already have an account?
        </span>

        <button
          type="button"
          onClick={
            onSwitchToSignIn
          }
          disabled={isLoading}
        >
          Login
        </button>
      </div>
    </div>
  );
}