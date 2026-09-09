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

import "@/components/animations/css/auth/sign-in-form.css";

interface SignInFormProps {
  onSwitchToSignUp: () => void;
}

export function SignInForm({
  onSwitchToSignUp,
}: SignInFormProps) {
  const [
    showPassword,
    setShowPassword,
  ] = useState(false);

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

      <form className="sth-sign-in__form">
        <label className="sth-sign-in__field">
          <span>
            Email Address
          </span>

          <div className="sth-sign-in__input">
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
            >
              {showPassword ? (
                <EyeOff size={16} />
              ) : (
                <Eye size={16} />
              )}
            </button>
          </div>
        </label>

        <div className="sth-sign-in__options">
          <label className="sth-sign-in__remember">
            <input
              type="checkbox"
            />

            <span>
              Remember me
            </span>
          </label>

          <Link
            href="/forgot-password"
            className="sth-sign-in__forgot"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="sth-sign-in__submit"
        >
          <span>
            Login to Account
          </span>

          <ArrowRight
            size={16}
          />
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
        >
          Create Account
        </button>
      </div>
    </div>
  );
}