"use client";

import Link from "next/link";
import { useState } from "react";

import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  UserRound,
} from "lucide-react";

import "@/components/animations/css/auth/sign-up-form.css";

interface SignUpFormProps {
  onSwitchToSignIn: () => void;
}

export function SignUpForm({
  onSwitchToSignIn,
}: SignUpFormProps) {
  const [
    showPassword,
    setShowPassword,
  ] = useState(false);

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
            manage your solar journey.
          </p>
        </div>
      </div>

      <form className="sth-sign-up__form">
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
              placeholder="Create password"
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
              placeholder="Confirm password"
            />
          </div>
        </label>

        <label className="sth-sign-up__terms">
          <input
            type="checkbox"
          />

          <span>
            I agree to the{" "}
            <Link href="/terms">
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link href="/privacy">
              Privacy Policy
            </Link>
            .
          </span>
        </label>

        <button
          type="submit"
          className="sth-sign-up__submit"
        >
          <span>
            Create Account
          </span>

          <ArrowRight
            size={16}
          />
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
        >
          Login
        </button>
      </div>
    </div>
  );
}