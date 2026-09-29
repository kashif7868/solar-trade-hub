"use client";

import { FormEvent, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  ArrowRight,
  Eye,
  EyeOff,
  KeyRound,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

import {
  getAuthErrorMessage,
  resetCustomerPassword,
} from "@/services/auth/auth.service";

import "@/components/animations/css/auth/reset-password-form.css";

export function ResetPasswordForm() {
  const router = useRouter();
  const params = useParams<{ token: string }>();

  const token =
    typeof params?.token === "string"
      ? decodeURIComponent(params.token).trim()
      : "";

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isLoading) {
      return;
    }

    if (!token) {
      toast.error("Reset token is missing or invalid.");
      return;
    }

    if (!newPassword) {
      toast.error("Please enter a new password.");
      return;
    }

    if (!confirmPassword) {
      toast.error("Please confirm your new password.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error(
        "New password and confirm password do not match."
      );
      return;
    }

    const toastId = toast.loading("Resetting password...");

    try {
      setIsLoading(true);

      const response = await resetCustomerPassword(token, {
        newPassword,
        confirmPassword,
      });

      setIsComplete(true);

      toast.success(
        response.message ||
          "Password reset successfully. Please sign in with your new password.",
        {
          id: toastId,
          duration: 3500,
        }
      );
    } catch (error) {
      toast.error(getAuthErrorMessage(error), {
        id: toastId,
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isComplete) {
    return (
      <section className="sth-reset-password">
        <div className="sth-reset-password__card">
          <div className="sth-reset-password__success">
            <span className="sth-reset-password__success-icon">
              <ShieldCheck size={28} strokeWidth={1.8} />
            </span>

            <h1>Password Updated</h1>

            <p>
              Your password has been reset successfully. You can now sign in
              with your new password.
            </p>

            <button
              type="button"
              className="sth-reset-password__submit"
              onClick={() => router.replace("/login")}
            >
              Sign In
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="sth-reset-password">
      <div className="sth-reset-password__card">
        <div className="sth-reset-password__heading">
          <span className="sth-reset-password__heading-icon">
            <KeyRound size={21} strokeWidth={1.8} />
          </span>

          <div>
            <h1>Reset Password</h1>
            <p>
              Create a new secure password for your Solar Trade Hub account.
            </p>
          </div>
        </div>

        {!token && (
          <div className="sth-reset-password__error" role="alert">
            This password reset link is missing its reset token. Please request
            a new password reset link.
          </div>
        )}

        <form
          className="sth-reset-password__form"
          onSubmit={handleSubmit}
        >
          <label className="sth-reset-password__field">
            <span>New Password</span>

            <div className="sth-reset-password__input">
              <LockKeyhole size={16} strokeWidth={1.8} />

              <input
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
                placeholder="Enter new password"
                autoComplete="new-password"
                disabled={isLoading || !token}
                required
              />

              <button
                type="button"
                className="sth-reset-password__visibility"
                onClick={() =>
                  setShowNewPassword((current) => !current)
                }
                disabled={isLoading || !token}
                aria-label={
                  showNewPassword
                    ? "Hide new password"
                    : "Show new password"
                }
              >
                {showNewPassword ? (
                  <EyeOff size={16} />
                ) : (
                  <Eye size={16} />
                )}
              </button>
            </div>
          </label>

          <label className="sth-reset-password__field">
            <span>Confirm New Password</span>

            <div className="sth-reset-password__input">
              <ShieldCheck size={16} strokeWidth={1.8} />

              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(event) =>
                  setConfirmPassword(event.target.value)
                }
                placeholder="Confirm new password"
                autoComplete="new-password"
                disabled={isLoading || !token}
                required
              />

              <button
                type="button"
                className="sth-reset-password__visibility"
                onClick={() =>
                  setShowConfirmPassword((current) => !current)
                }
                disabled={isLoading || !token}
                aria-label={
                  showConfirmPassword
                    ? "Hide confirmed password"
                    : "Show confirmed password"
                }
              >
                {showConfirmPassword ? (
                  <EyeOff size={16} />
                ) : (
                  <Eye size={16} />
                )}
              </button>
            </div>
          </label>

          <button
            type="submit"
            className="sth-reset-password__submit"
            disabled={isLoading || !token}
          >
            <span>
              {isLoading ? "Resetting..." : "Reset Password"}
            </span>

            {!isLoading && <ArrowRight size={16} />}
          </button>
        </form>

        {!token && (
          <button
            type="button"
            className="sth-reset-password__login"
            onClick={() => router.replace("/login")}
          >
            Return to Login
          </button>
        )}
      </div>
    </section>
  );
}