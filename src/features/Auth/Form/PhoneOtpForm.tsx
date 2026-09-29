"use client";

import {
  FormEvent,
  useEffect,
  useState,
} from "react";

import {
  ArrowLeft,
  ArrowRight,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

import { useAuthStore } from "@/store/authStore";

import "@/components/animations/css/auth/sign-up-form.css";

interface PhoneOtpFormProps {
  onVerified: () => void;
  onBack: () => void;
}

export function PhoneOtpForm({
  onVerified,
  onBack,
}: PhoneOtpFormProps) {
  const [otp, setOtp] =
    useState("");

  const [localError, setLocalError] =
    useState<string | null>(null);

  const [message, setMessage] =
    useState<string | null>(null);

  const {
    pendingVerificationEmail,
    verifyOtp,
    sendOtp,
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
    setMessage(null);

    const normalizedOtp =
      otp.trim();

    if (!normalizedOtp) {
      setLocalError(
        "Enter the verification code."
      );

      return;
    }

    const success =
      await verifyOtp(
        normalizedOtp
      );

    if (success) {
      onVerified();
    }
  };

  const handleResend =
    async () => {
      clearError();
      setLocalError(null);
      setMessage(null);

      const success =
        await sendOtp();

      if (success) {
        setMessage(
          "A new verification code has been sent to your mobile number."
        );
      }
    };

  const handleOtpChange = (
    value: string
  ) => {
    setOtp(
      value
        .replace(/\D/g, "")
        .slice(0, 6)
    );
  };

  const displayedError =
    localError || error;

  return (
    <div className="sth-sign-up">
      <div className="sth-sign-up__heading">
        <span className="sth-sign-up__heading-icon">
          <ShieldCheck
            size={20}
            strokeWidth={1.8}
          />
        </span>

        <div>
          <h2>
            Verify Mobile Number
          </h2>

          <p>
            Enter the verification code
            sent to your mobile number.
          </p>
        </div>
      </div>

      {pendingVerificationEmail && (
        <p>
          Account:{" "}
          <strong>
            {pendingVerificationEmail}
          </strong>
        </p>
      )}

      <form
        className="sth-sign-up__form"
        onSubmit={handleSubmit}
      >
        <label className="sth-sign-up__field">
          <span>
            Verification Code
          </span>

          <div className="sth-sign-up__input">
            <ShieldCheck
              size={16}
              strokeWidth={1.8}
            />

            <input
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              placeholder="Enter OTP"
              value={otp}
              onChange={(event) =>
                handleOtpChange(
                  event.target.value
                )
              }
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

        {message && (
          <div role="status">
            {message}
          </div>
        )}

        <button
          type="submit"
          className="sth-sign-up__submit"
          disabled={
            isLoading ||
            !otp.trim()
          }
        >
          <span>
            {isLoading
              ? "Verifying..."
              : "Verify Number"}
          </span>

          {!isLoading && (
            <ArrowRight
              size={16}
            />
          )}
        </button>

        <button
          type="button"
          className="sth-sign-up__submit"
          onClick={
            handleResend
          }
          disabled={isLoading}
        >
          <RefreshCw
            size={16}
          />

          <span>
            Resend Code
          </span>
        </button>
      </form>

      <div className="sth-sign-up__bottom">
        <button
          type="button"
          onClick={onBack}
          disabled={isLoading}
        >
          <ArrowLeft
            size={15}
          />

          Back to Sign Up
        </button>
      </div>
    </div>
  );
}