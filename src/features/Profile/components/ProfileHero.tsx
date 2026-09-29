"use client";

import {
  ChangeEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import {
  AlertCircle,
  Camera,
  ImagePlus,
  LoaderCircle,
  Mail,
} from "lucide-react";

import type { AuthUser } from "@/services/auth/auth.service";
import { useAuthStore } from "@/store/authStore";

import "@/components/animations/css/profile/profile-hero.css";

interface ProfileHeroProps {
  user: AuthUser;
}

const DEFAULT_BANNER =
  "/images/profile/profile-solar-banner.jpg";

const API_ORIGIN =
  "http://localhost:5000";

const getAvatarUrl = (
  avatar?: string
): string => {
  const value = avatar?.trim();

  if (!value) {
    return "";
  }

  if (
    value.startsWith("http://") ||
    value.startsWith("https://") ||
    value.startsWith("data:") ||
    value.startsWith("blob:")
  ) {
    return value;
  }

  return `${API_ORIGIN}${
    value.startsWith("/")
      ? value
      : `/${value}`
  }`;
};

export function ProfileHero({
  user,
}: ProfileHeroProps) {
  const avatarInputRef =
    useRef<HTMLInputElement>(null);

  const bannerInputRef =
    useRef<HTMLInputElement>(null);

  const uploadAvatar =
    useAuthStore(
      (state) => state.uploadAvatar
    );

  const clearError =
    useAuthStore(
      (state) => state.clearError
    );

  const storeError =
    useAuthStore(
      (state) => state.error
    );

  const [isUploadingAvatar, setIsUploadingAvatar] =
    useState(false);

  const [avatarFailed, setAvatarFailed] =
    useState(false);

  const [bannerPreview, setBannerPreview] =
    useState<string | null>(null);

  const initials =
    user.name
      ?.trim()
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase() || "ST";

  const avatarSource =
    getAvatarUrl(user.avatar);

  const bannerSource =
    bannerPreview ||
    DEFAULT_BANNER;

  useEffect(() => {
    setAvatarFailed(false);
  }, [avatarSource]);

  useEffect(() => {
    return () => {
      if (bannerPreview) {
        URL.revokeObjectURL(
          bannerPreview
        );
      }
    };
  }, [bannerPreview]);

  const handleAvatarSelect = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file =
      event.target.files?.[0];

    event.target.value = "";

    if (!file) {
      return;
    }

    clearError();
    setAvatarFailed(false);
    setIsUploadingAvatar(true);

    try {
      await uploadAvatar(file);
    } finally {
      setIsUploadingAvatar(false);
    }
  };

  const handleBannerSelect = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file =
      event.target.files?.[0];

    event.target.value = "";

    if (!file) {
      return;
    }

    if (bannerPreview) {
      URL.revokeObjectURL(
        bannerPreview
      );
    }

    setBannerPreview(
      URL.createObjectURL(file)
    );
  };

  return (
    <section className="sth-profile-hero">
      <Image
        src={bannerSource}
        alt="Solar Trade Hub profile banner"
        fill
        priority
        sizes="(max-width: 640px) 100vw, 1440px"
        className="sth-profile-hero__background"
      />

      <div className="sth-profile-hero__overlay" />

      <input
        ref={bannerInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="sth-profile-hero__file-input"
        onChange={handleBannerSelect}
      />

      <button
        type="button"
        className="sth-profile-hero__banner-action"
        onClick={() =>
          bannerInputRef.current?.click()
        }
      >
        <ImagePlus
          size={15}
          strokeWidth={1.9}
        />

        <span>
          Change Banner
        </span>
      </button>

      <div className="sth-profile-hero__content">
        <div className="sth-profile-hero__avatar-wrap">
          <div className="sth-profile-hero__avatar">
            <span>
              {initials}
            </span>

            {avatarSource &&
              !avatarFailed && (
                <img
                  src={avatarSource}
                  alt={`${user.name} profile`}
                  className="sth-profile-hero__avatar-image"
                  onError={() =>
                    setAvatarFailed(true)
                  }
                />
              )}

            {isUploadingAvatar && (
              <div className="sth-profile-hero__avatar-loading">
                <LoaderCircle
                  size={24}
                  strokeWidth={2}
                />
              </div>
            )}
          </div>

          <input
            ref={avatarInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className="sth-profile-hero__file-input"
            onChange={handleAvatarSelect}
          />

          <button
            type="button"
            className="sth-profile-hero__avatar-action"
            onClick={() =>
              avatarInputRef.current?.click()
            }
            disabled={isUploadingAvatar}
            aria-label="Change profile photo"
            title="Change profile photo"
          >
            {isUploadingAvatar ? (
              <LoaderCircle
                size={15}
                strokeWidth={2}
                className="sth-profile-hero__spinner"
              />
            ) : (
              <Camera
                size={15}
                strokeWidth={2}
              />
            )}
          </button>
        </div>

        <div className="sth-profile-hero__copy">
          <span className="sth-profile-hero__eyebrow">
            My Account
          </span>

          <h1 className="sth-profile-hero__name">
            {user.name}
          </h1>

          <div className="sth-profile-hero__email">
            <Mail
              size={14}
              strokeWidth={1.8}
            />

            <span>
              {user.email}
            </span>
          </div>

          <p className="sth-profile-hero__description">
            Manage your Solar Trade Hub account,
            orders and marketplace activity.
          </p>

          {storeError && (
            <div className="sth-profile-hero__error">
              <AlertCircle
                size={14}
                strokeWidth={2}
              />

              <span>
                {storeError}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}