"use client";

import Link from "next/link";

import {
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Heart,
  LogOut,
  Package,
  Store,
  TicketPercent,
  UserRound,
} from "lucide-react";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { useAuthStore } from "@/store/authStore";

import "@/components/animations/css/header/account-dropdown.css";

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

export function AccountDropdown() {
  const [isOpen, setIsOpen] =
    useState(false);

  const [avatarFailed, setAvatarFailed] =
    useState(false);

  const wrapperRef =
    useRef<HTMLDivElement>(null);

  const {
    user,
    logout,
    isLoading,
  } = useAuthStore();

  const avatarUrl =
    getAvatarUrl(user?.avatar);

  useEffect(() => {
    const handleOutsideClick = (
      event: MouseEvent
    ) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(
          event.target as Node
        )
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  useEffect(() => {
    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  useEffect(() => {
    setAvatarFailed(false);
  }, [avatarUrl]);

  if (!user) {
    return null;
  }

  const firstName =
    user.name
      ?.trim()
      .split(/\s+/)[0] ||
    "Account";

  const initials =
    user.name
      ?.trim()
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase() ||
    "ST";

  const closeDropdown = () =>
    setIsOpen(false);

  const handleLogout = async () => {
    if (isLoading) {
      return;
    }

    setIsOpen(false);

    await logout();

    window.location.href = "/";
  };

  return (
    <div
      className="sth-account-dropdown"
      ref={wrapperRef}
    >
      <button
        type="button"
        className={`sth-account-dropdown__trigger ${
          isOpen
            ? "sth-account-dropdown__trigger--active"
            : ""
        }`}
        onClick={() =>
          setIsOpen(
            (current) => !current
          )
        }
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        <span className="sth-account-dropdown__trigger-avatar">
          <span className="sth-account-dropdown__trigger-avatar-fallback">
            {initials}
          </span>

          {avatarUrl &&
            !avatarFailed && (
              <img
                src={avatarUrl}
                alt={`${user.name} profile`}
                onError={() =>
                  setAvatarFailed(true)
                }
              />
            )}
        </span>

        <span className="sth-account-dropdown__trigger-text">
          <span className="sth-account-dropdown__trigger-name">
            {firstName}
          </span>

          <span className="sth-account-dropdown__trigger-caption">
            My Account
          </span>
        </span>

        <ChevronDown
          className={`sth-account-dropdown__chevron ${
            isOpen
              ? "sth-account-dropdown__chevron--open"
              : ""
          }`}
          size={14}
          strokeWidth={2}
        />
      </button>

      {isOpen && (
        <div
          className="sth-account-dropdown__menu"
          role="menu"
        >
          <div className="sth-account-dropdown__identity">
            <div className="sth-account-dropdown__avatar">
              <span>
                {initials}
              </span>

              {avatarUrl &&
                !avatarFailed && (
                  <img
                    src={avatarUrl}
                    alt={`${user.name} profile`}
                    onError={() =>
                      setAvatarFailed(true)
                    }
                  />
                )}
            </div>

            <div className="sth-account-dropdown__identity-copy">
              <strong>
                {user.name}
              </strong>

              <span>
                {user.email}
              </span>
            </div>
          </div>

          <div className="sth-account-dropdown__divider" />

          <div className="sth-account-dropdown__items">
            <Link
              href="/profile"
              className="sth-account-dropdown__item"
              onClick={closeDropdown}
            >
              <span className="sth-account-dropdown__item-icon">
                <UserRound size={17} />
              </span>

              <span className="sth-account-dropdown__item-copy">
                <strong>
                  My Profile
                </strong>

                <small>
                  Personal & account details
                </small>
              </span>

              <ChevronRight
                size={15}
                className="sth-account-dropdown__arrow"
              />
            </Link>

            <Link
              href="/orders"
              className="sth-account-dropdown__item"
              onClick={closeDropdown}
            >
              <span className="sth-account-dropdown__item-icon sth-account-dropdown__item-icon--orange">
                <Package size={17} />
              </span>

              <span className="sth-account-dropdown__item-copy">
                <strong>
                  My Orders
                </strong>

                <small>
                  Orders & delivery status
                </small>
              </span>

              <ChevronRight
                size={15}
                className="sth-account-dropdown__arrow"
              />
            </Link>

            <Link
              href="/wishlist"
              className="sth-account-dropdown__item"
              onClick={closeDropdown}
            >
              <span className="sth-account-dropdown__item-icon sth-account-dropdown__item-icon--orange">
                <Heart size={17} />
              </span>

              <span className="sth-account-dropdown__item-copy">
                <strong>
                  Wishlist
                </strong>

                <small>
                  Saved solar products
                </small>
              </span>

              <ChevronRight
                size={15}
                className="sth-account-dropdown__arrow"
              />
            </Link>

            <Link
              href="/coupons"
              className="sth-account-dropdown__item"
              onClick={closeDropdown}
            >
              <span className="sth-account-dropdown__item-icon sth-account-dropdown__item-icon--orange">
                <TicketPercent size={17} />
              </span>

              <span className="sth-account-dropdown__item-copy">
                <strong>
                  My Coupons
                </strong>

                <small>
                  Offers & available coupons
                </small>
              </span>

              <ChevronRight
                size={15}
                className="sth-account-dropdown__arrow"
              />
            </Link>
          </div>

          <div className="sth-account-dropdown__divider" />

          <Link
            href="/seller"
            className="sth-account-dropdown__item sth-account-dropdown__item--supplier"
            onClick={closeDropdown}
          >
            <span className="sth-account-dropdown__item-icon sth-account-dropdown__item-icon--supplier">
              <Store size={17} />
            </span>

            <span className="sth-account-dropdown__item-copy">
              <strong>
                Become a Supplier
              </strong>

              <small>
                Sell on Solar Trade Hub
              </small>
            </span>

            <ChevronRight
              size={15}
              className="sth-account-dropdown__arrow"
            />
          </Link>

          <div className="sth-account-dropdown__divider" />

          <Link
            href="/help"
            className="sth-account-dropdown__item"
            onClick={closeDropdown}
          >
            <span className="sth-account-dropdown__item-icon">
              <CircleHelp size={17} />
            </span>

            <span className="sth-account-dropdown__item-copy">
              <strong>
                Help & Support
              </strong>

              <small>
                Get help with your account
              </small>
            </span>

            <ChevronRight
              size={15}
              className="sth-account-dropdown__arrow"
            />
          </Link>

          <button
            type="button"
            className="sth-account-dropdown__logout"
            onClick={handleLogout}
            disabled={isLoading}
          >
            <LogOut
              size={17}
              strokeWidth={1.8}
            />

            <span>
              {isLoading
                ? "Signing Out..."
                : "Sign Out"}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}