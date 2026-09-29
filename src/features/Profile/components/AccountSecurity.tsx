"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  CheckCircle2,
  Eye,
  EyeOff,
  KeyRound,
  MailCheck,
  Phone,
  Save,
  ShieldCheck,
  X,
} from "lucide-react";

import { useAuthStore } from "@/store/authStore";
import {
  changeCustomerPassword,
  getAuthErrorMessage,
} from "@/services/auth/auth.service";

import "@/components/animations/css/profile/account-security.css";

interface PasswordForm {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export function AccountSecurity() {
  const router = useRouter();

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const [isChangingPassword, setIsChangingPassword] =
    useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const [passwords, setPasswords] =
    useState<PasswordForm>({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

  const [showCurrentPassword, setShowCurrentPassword] =
    useState(false);
  const [showNewPassword, setShowNewPassword] =
    useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  if (!user) {
    return null;
  }

  const emailVerified = Boolean(user.isVerified);
  const phoneVerified = Boolean(user.isPhoneVerified);

  const phone =
    user.phoneE164 ||
    [user.countryCode, user.phone]
      .filter(Boolean)
      .join(" ") ||
    "Not added";

  const handlePasswordChange = (
    field: keyof PasswordForm,
    value: string
  ) => {
    setPasswords((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const resetPasswordForm = () => {
    setPasswords({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

    setShowCurrentPassword(false);
    setShowNewPassword(false);
    setShowConfirmPassword(false);
  };

  const handleCancel = () => {
    if (isSaving) {
      return;
    }

    resetPasswordForm();
    setIsChangingPassword(false);
  };

  const handleSave = async () => {
    if (isSaving) {
      return;
    }

    const currentPassword =
      passwords.currentPassword;
    const newPassword =
      passwords.newPassword;
    const confirmPassword =
      passwords.confirmPassword;

    if (!currentPassword) {
      toast.error("Current password is required.");
      return;
    }

    if (!newPassword) {
      toast.error("New password is required.");
      return;
    }

    if (!confirmPassword) {
      toast.error(
        "Please confirm your new password."
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error(
        "New password and confirm password do not match."
      );
      return;
    }

    if (currentPassword === newPassword) {
      toast.error(
        "New password must be different from the current password."
      );
      return;
    }

    const toastId = toast.loading(
      "Updating password..."
    );

    try {
      setIsSaving(true);

      const response =
        await changeCustomerPassword({
          currentPassword,
          newPassword,
          confirmPassword,
        });

      resetPasswordForm();
      setIsChangingPassword(false);

      toast.success(
        response.message ||
          "Password changed successfully. Please sign in again.",
        {
          id: toastId,
          duration: 3000,
        }
      );

      await logout();

      router.replace("/login");
    } catch (error) {
      toast.error(
        getAuthErrorMessage(error),
        {
          id: toastId,
        }
      );
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <section className="sth-account-security">
      <div className="sth-account-security__header">
        <div className="sth-account-security__heading">
          <div className="sth-account-security__heading-icon">
            <ShieldCheck
              size={20}
              strokeWidth={1.8}
            />
          </div>

          <div>
            <h2>Account Security</h2>

            <p>
              Manage your password and account
              verification.
            </p>
          </div>
        </div>

        {isChangingPassword && (
          <div className="sth-account-security__actions">
            <button
              type="button"
              className="sth-account-security__cancel"
              onClick={handleCancel}
              disabled={isSaving}
            >
              <X
                size={14}
                strokeWidth={2}
              />

              <span>Cancel</span>
            </button>

            <button
              type="button"
              className="sth-account-security__save"
              onClick={handleSave}
              disabled={isSaving}
            >
              <Save
                size={14}
                strokeWidth={1.9}
              />

              <span>
                {isSaving
                  ? "Saving..."
                  : "Save Changes"}
              </span>
            </button>
          </div>
        )}
      </div>

      <div className="sth-account-security__content">
        {isChangingPassword ? (
          <div className="sth-account-security__password-form">
            <div className="sth-account-security__field">
              <label htmlFor="current-password">
                Current Password
                <span>*</span>
              </label>

              <div className="sth-account-security__input-wrap">
                <div className="sth-account-security__input-icon">
                  <KeyRound
                    size={16}
                    strokeWidth={1.8}
                  />
                </div>

                <input
                  id="current-password"
                  type={
                    showCurrentPassword
                      ? "text"
                      : "password"
                  }
                  value={passwords.currentPassword}
                  onChange={(event) =>
                    handlePasswordChange(
                      "currentPassword",
                      event.target.value
                    )
                  }
                  placeholder="Enter current password"
                  autoComplete="current-password"
                  disabled={isSaving}
                />

                <button
                  type="button"
                  className="sth-account-security__visibility"
                  onClick={() =>
                    setShowCurrentPassword(
                      (current) => !current
                    )
                  }
                  aria-label={
                    showCurrentPassword
                      ? "Hide current password"
                      : "Show current password"
                  }
                  disabled={isSaving}
                >
                  {showCurrentPassword ? (
                    <EyeOff
                      size={16}
                      strokeWidth={1.8}
                    />
                  ) : (
                    <Eye
                      size={16}
                      strokeWidth={1.8}
                    />
                  )}
                </button>
              </div>
            </div>

            <div className="sth-account-security__field">
              <label htmlFor="new-password">
                New Password
                <span>*</span>
              </label>

              <div className="sth-account-security__input-wrap">
                <div className="sth-account-security__input-icon">
                  <KeyRound
                    size={16}
                    strokeWidth={1.8}
                  />
                </div>

                <input
                  id="new-password"
                  type={
                    showNewPassword
                      ? "text"
                      : "password"
                  }
                  value={passwords.newPassword}
                  onChange={(event) =>
                    handlePasswordChange(
                      "newPassword",
                      event.target.value
                    )
                  }
                  placeholder="Enter new password"
                  autoComplete="new-password"
                  disabled={isSaving}
                />

                <button
                  type="button"
                  className="sth-account-security__visibility"
                  onClick={() =>
                    setShowNewPassword(
                      (current) => !current
                    )
                  }
                  aria-label={
                    showNewPassword
                      ? "Hide new password"
                      : "Show new password"
                  }
                  disabled={isSaving}
                >
                  {showNewPassword ? (
                    <EyeOff
                      size={16}
                      strokeWidth={1.8}
                    />
                  ) : (
                    <Eye
                      size={16}
                      strokeWidth={1.8}
                    />
                  )}
                </button>
              </div>
            </div>

            <div className="sth-account-security__field">
              <label htmlFor="confirm-password">
                Confirm New Password
                <span>*</span>
              </label>

              <div className="sth-account-security__input-wrap">
                <div className="sth-account-security__input-icon">
                  <ShieldCheck
                    size={16}
                    strokeWidth={1.8}
                  />
                </div>

                <input
                  id="confirm-password"
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  value={passwords.confirmPassword}
                  onChange={(event) =>
                    handlePasswordChange(
                      "confirmPassword",
                      event.target.value
                    )
                  }
                  placeholder="Confirm new password"
                  autoComplete="new-password"
                  disabled={isSaving}
                />

                <button
                  type="button"
                  className="sth-account-security__visibility"
                  onClick={() =>
                    setShowConfirmPassword(
                      (current) => !current
                    )
                  }
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirmed password"
                      : "Show confirmed password"
                  }
                  disabled={isSaving}
                >
                  {showConfirmPassword ? (
                    <EyeOff
                      size={16}
                      strokeWidth={1.8}
                    />
                  ) : (
                    <Eye
                      size={16}
                      strokeWidth={1.8}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="sth-account-security__password">
            <div className="sth-account-security__password-icon">
              <KeyRound
                size={19}
                strokeWidth={1.8}
              />
            </div>

            <div className="sth-account-security__password-copy">
              <strong>Password</strong>

              <span>
                Keep your account protected with
                a secure password.
              </span>
            </div>

            <button
              type="button"
              className="sth-account-security__password-button"
              onClick={() =>
                setIsChangingPassword(true)
              }
            >
              Change Password
            </button>
          </div>
        )}

        <div className="sth-account-security__divider" />

        <div className="sth-account-security__verification">
          <div className="sth-account-security__verification-heading">
            <span>
              Account Verification
            </span>

            {emailVerified && phoneVerified && (
              <div className="sth-account-security__secure">
                <ShieldCheck
                  size={13}
                  strokeWidth={2}
                />

                Account Secure
              </div>
            )}
          </div>

          <div className="sth-account-security__verification-grid">
            <div className="sth-account-security__verification-item">
              <div className="sth-account-security__verification-icon">
                <MailCheck
                  size={18}
                  strokeWidth={1.8}
                />
              </div>

              <div className="sth-account-security__verification-copy">
                <span>
                  Email Address
                </span>

                <strong title={user.email}>
                  {user.email}
                </strong>
              </div>

              <div
                className={
                  emailVerified
                    ? "sth-account-security__status sth-account-security__status--verified"
                    : "sth-account-security__status sth-account-security__status--pending"
                }
              >
                {emailVerified && (
                  <CheckCircle2
                    size={12}
                    strokeWidth={2.2}
                  />
                )}

                {emailVerified
                  ? "Verified"
                  : "Not Verified"}
              </div>
            </div>

            <div className="sth-account-security__verification-item">
              <div className="sth-account-security__verification-icon sth-account-security__verification-icon--orange">
                <Phone
                  size={18}
                  strokeWidth={1.8}
                />
              </div>

              <div className="sth-account-security__verification-copy">
                <span>
                  Mobile Number
                </span>

                <strong title={phone}>
                  {phone}
                </strong>
              </div>

              <div
                className={
                  phoneVerified
                    ? "sth-account-security__status sth-account-security__status--verified"
                    : "sth-account-security__status sth-account-security__status--pending"
                }
              >
                {phoneVerified && (
                  <CheckCircle2
                    size={12}
                    strokeWidth={2.2}
                  />
                )}

                {phoneVerified
                  ? "Verified"
                  : "Not Verified"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}