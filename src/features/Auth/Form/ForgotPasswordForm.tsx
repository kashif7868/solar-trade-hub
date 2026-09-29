"use client";

import {
  FormEvent,
  useState,
} from "react";

import { toast } from "sonner";

import {
  ArrowLeft,
  ArrowRight,
  Mail,
  ShieldCheck,
} from "lucide-react";

import {
  forgotCustomerPassword,
  getAuthErrorMessage,
} from "@/services/auth/auth.service";

import "@/components/animations/css/auth/forgot-password-form.css";

interface ForgotPasswordFormProps {
  onBack: () => void;
}

export function ForgotPasswordForm({
  onBack,
}: ForgotPasswordFormProps) {
  const [email, setEmail] =
    useState("");

  const [isLoading, setIsLoading] =
    useState(false);

  const [isSent, setIsSent] =
    useState(false);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (isLoading) {
      return;
    }

    const normalizedEmail =
      email.trim().toLowerCase();

    if (!normalizedEmail) {
      toast.error(
        "Please enter your email address."
      );
      return;
    }

    const toastId =
      toast.loading(
        "Sending reset link..."
      );

    try {
      setIsLoading(true);

      const response =
        await forgotCustomerPassword({
          email: normalizedEmail,
        });

      setIsSent(true);

      toast.success(
        response.message ||
          "If an eligible account exists with this email, a password reset link has been sent.",
        {
          id: toastId,
        }
      );
    } catch (error) {
      toast.error(
        getAuthErrorMessage(error),
        {
          id: toastId,
        }
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (isSent) {
    return (
      <div className="sth-forgot-password">
        <div className="sth-forgot-password__success">
          <span className="sth-forgot-password__success-icon">
            <ShieldCheck
              size={26}
              strokeWidth={1.8}
            />
          </span>

          <h2>
            Check Your Email
          </h2>

          <p>
            If an eligible Solar Trade Hub
            account exists for{" "}
            <strong>{email}</strong>, a
            password reset link has been sent.
          </p>

          <button
            type="button"
            className="sth-forgot-password__back"
            onClick={onBack}
          >
            <ArrowLeft size={16} />

            Back to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="sth-forgot-password">
      <div className="sth-forgot-password__heading">
        <span className="sth-forgot-password__heading-icon">
          <Mail
            size={20}
            strokeWidth={1.8}
          />
        </span>

        <div>
          <h2>
            Forgot Password?
          </h2>

          <p>
            Enter your registered email
            address and we&apos;ll send you
            a password reset link.
          </p>
        </div>
      </div>

      <form
        className="sth-forgot-password__form"
        onSubmit={handleSubmit}
      >
        <label className="sth-forgot-password__field">
          <span>
            Email Address
          </span>

          <div className="sth-forgot-password__input">
            <Mail
              size={16}
              strokeWidth={1.8}
            />

            <input
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(
                  event.target.value
                )
              }
              placeholder="Enter your email address"
              autoComplete="email"
              disabled={isLoading}
              required
            />
          </div>
        </label>

        <button
          type="submit"
          className="sth-forgot-password__submit"
          disabled={isLoading}
        >
          <span>
            {isLoading
              ? "Sending..."
              : "Send Reset Link"}
          </span>

          {!isLoading && (
            <ArrowRight size={16} />
          )}
        </button>
      </form>

      <button
        type="button"
        className="sth-forgot-password__back"
        onClick={onBack}
        disabled={isLoading}
      >
        <ArrowLeft size={16} />

        Back to Login
      </button>
    </div>
  );
}