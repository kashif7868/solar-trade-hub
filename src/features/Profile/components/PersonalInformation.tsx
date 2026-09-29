"use client";

import {
  useEffect,
  useState,
} from "react";
import {
  AlertCircle,
  CheckCircle2,
  Mail,
  MapPin,
  Pencil,
  Phone,
  Save,
  UserRound,
  X,
} from "lucide-react";

import type { AuthUser } from "@/services/auth/auth.service";
import { useAuthStore } from "@/store/authStore";

import "@/components/animations/css/profile/personal-information.css";

interface PersonalInformationProps {
  user: AuthUser;
}

interface ProfileForm {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
}

export function PersonalInformation({
  user,
}: PersonalInformationProps) {
  const updateProfile =
    useAuthStore(
      (state) => state.updateProfile
    );

  const isLoading =
    useAuthStore(
      (state) => state.isLoading
    );

  const storeError =
    useAuthStore(
      (state) => state.error
    );

  const clearError =
    useAuthStore(
      (state) => state.clearError
    );

  const [isEditing, setIsEditing] =
    useState(false);

  const [successMessage, setSuccessMessage] =
    useState<string | null>(null);

  const [form, setForm] =
    useState<ProfileForm>({
      name: user.name || "",
      email: user.email || "",
      countryCode:
        user.countryCode || "+92",
      phone: user.phone || "",
    });

  useEffect(() => {
    if (isEditing) {
      return;
    }

    setForm({
      name: user.name || "",
      email: user.email || "",
      countryCode:
        user.countryCode || "+92",
      phone: user.phone || "",
    });
  }, [user, isEditing]);

  const phone =
    user.phoneE164 ||
    [user.countryCode, user.phone]
      .filter(Boolean)
      .join(" ") ||
    "Not added";

  const handleChange = (
    field: keyof ProfileForm,
    value: string
  ) => {
    setSuccessMessage(null);

    if (storeError) {
      clearError();
    }

    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleEdit = () => {
    clearError();
    setSuccessMessage(null);

    setForm({
      name: user.name || "",
      email: user.email || "",
      countryCode:
        user.countryCode || "+92",
      phone: user.phone || "",
    });

    setIsEditing(true);
  };

  const handleCancel = () => {
    clearError();
    setSuccessMessage(null);

    setForm({
      name: user.name || "",
      email: user.email || "",
      countryCode:
        user.countryCode || "+92",
      phone: user.phone || "",
    });

    setIsEditing(false);
  };

  const handleSave = async () => {
    clearError();
    setSuccessMessage(null);

    const name =
      form.name.trim();

    const email =
      form.email
        .trim()
        .toLowerCase();

    const phoneValue =
      form.phone.trim();

    const countryCode =
      form.countryCode.trim();

    if (!name) {
      return;
    }

    if (!email) {
      return;
    }

    if (
      !phoneValue ||
      !countryCode
    ) {
      return;
    }

    const updatedUser =
      await updateProfile({
        name,
        email,
        phone: phoneValue,
        countryCode,
      });

    if (!updatedUser) {
      return;
    }

    setSuccessMessage(
      "Profile updated successfully."
    );

    setIsEditing(false);
  };

  return (
    <section className="sth-personal-info">
      <div className="sth-personal-info__header">
        <div className="sth-personal-info__heading">
          <div className="sth-personal-info__heading-icon">
            <UserRound
              size={20}
              strokeWidth={1.8}
            />
          </div>

          <div>
            <h2>
              Personal Information
            </h2>

            <p>
              Manage your personal details and
              contact information.
            </p>
          </div>
        </div>

        <div className="sth-personal-info__actions">
          {isEditing ? (
            <>
              <button
                type="button"
                className="sth-personal-info__cancel"
                onClick={handleCancel}
                disabled={isLoading}
              >
                <X
                  size={14}
                  strokeWidth={2}
                />

                <span>
                  Cancel
                </span>
              </button>

              <button
                type="button"
                className="sth-personal-info__save"
                onClick={handleSave}
                disabled={isLoading}
              >
                <Save
                  size={14}
                  strokeWidth={1.9}
                />

                <span>
                  {isLoading
                    ? "Saving..."
                    : "Save Changes"}
                </span>
              </button>
            </>
          ) : (
            <button
              type="button"
              className="sth-personal-info__edit"
              onClick={handleEdit}
            >
              <Pencil
                size={14}
                strokeWidth={1.9}
              />

              <span>
                Edit Profile
              </span>
            </button>
          )}
        </div>
      </div>

      {storeError && isEditing && (
        <div className="sth-personal-info__message sth-personal-info__message--error">
          <AlertCircle
            size={15}
            strokeWidth={1.9}
          />

          <span>
            {storeError}
          </span>
        </div>
      )}

      {successMessage && (
        <div className="sth-personal-info__message sth-personal-info__message--success">
          <CheckCircle2
            size={15}
            strokeWidth={2}
          />

          <span>
            {successMessage}
          </span>
        </div>
      )}

      {isEditing ? (
        <div className="sth-personal-info__form">
          <div className="sth-personal-info__field">
            <label htmlFor="profile-name">
              Full Name
              <span>*</span>
            </label>

            <div className="sth-personal-info__input-wrap">
              <div className="sth-personal-info__input-icon">
                <UserRound
                  size={16}
                  strokeWidth={1.8}
                />
              </div>

              <input
                id="profile-name"
                type="text"
                value={form.name}
                onChange={(event) =>
                  handleChange(
                    "name",
                    event.target.value
                  )
                }
                placeholder="Enter your full name"
                autoComplete="name"
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="sth-personal-info__field">
            <label htmlFor="profile-email">
              Email Address
              <span>*</span>
            </label>

            <div className="sth-personal-info__input-wrap">
              <div className="sth-personal-info__input-icon">
                <Mail
                  size={16}
                  strokeWidth={1.8}
                />
              </div>

              <input
                id="profile-email"
                type="email"
                value={form.email}
                onChange={(event) =>
                  handleChange(
                    "email",
                    event.target.value
                  )
                }
                placeholder="Enter your email address"
                autoComplete="email"
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="sth-personal-info__field">
            <label htmlFor="profile-phone">
              Mobile Number
              <span>*</span>
            </label>

            <div className="sth-personal-info__phone-field">
              <div className="sth-personal-info__phone-icon">
                <Phone
                  size={16}
                  strokeWidth={1.8}
                />
              </div>

              <select
                aria-label="Country code"
                value={form.countryCode}
                onChange={(event) =>
                  handleChange(
                    "countryCode",
                    event.target.value
                  )
                }
                disabled={isLoading}
              >
                <option value="+92">
                  +92
                </option>
              </select>

              <input
                id="profile-phone"
                type="tel"
                value={form.phone}
                onChange={(event) =>
                  handleChange(
                    "phone",
                    event.target.value
                  )
                }
                placeholder="300 1234567"
                autoComplete="tel"
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="sth-personal-info__field">
            <label>
              Address
            </label>

            <div className="sth-personal-info__input-wrap">
              <div className="sth-personal-info__input-icon">
                <MapPin
                  size={16}
                  strokeWidth={1.8}
                />
              </div>

              <input
                type="text"
                value="Not added"
                disabled
                aria-label="Address"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="sth-personal-info__grid">
          <div className="sth-personal-info__item">
            <div className="sth-personal-info__icon">
              <UserRound
                size={18}
                strokeWidth={1.8}
              />
            </div>

            <div className="sth-personal-info__content">
              <span>
                Full Name
              </span>

              <strong>
                {user.name || "Not added"}
              </strong>
            </div>
          </div>

          <div className="sth-personal-info__item">
            <div className="sth-personal-info__icon">
              <Mail
                size={18}
                strokeWidth={1.8}
              />
            </div>

            <div className="sth-personal-info__content">
              <span>
                Email Address
              </span>

              <strong title={user.email}>
                {user.email || "Not added"}
              </strong>
            </div>
          </div>

          <div className="sth-personal-info__item">
            <div className="sth-personal-info__icon">
              <Phone
                size={18}
                strokeWidth={1.8}
              />
            </div>

            <div className="sth-personal-info__content">
              <span>
                Mobile Number
              </span>

              <strong>
                {phone}
              </strong>
            </div>
          </div>

          <div className="sth-personal-info__item">
            <div className="sth-personal-info__icon">
              <MapPin
                size={18}
                strokeWidth={1.8}
              />
            </div>

            <div className="sth-personal-info__content">
              <span>
                Address
              </span>

              <strong>
                Not added
              </strong>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}