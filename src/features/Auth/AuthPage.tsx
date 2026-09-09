"use client";

import { useState } from "react";

import {
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { SignInForm } from "./Form/SignInForm";
import { SignUpForm } from "./Form/SignUpForm";

import styles from "@/components/animations/css/auth/auth.module.css";

type AuthMode =
  | "login"
  | "signup";

export function AuthPage() {
  const [mode, setMode] =
    useState<AuthMode>("login");

  const isLogin =
    mode === "login";

  return (
    <section className={styles.auth}>
      <div
        className={`${styles.decor} ${styles.decorLeft}`}
      />

      <div
        className={`${styles.decor} ${styles.decorRight}`}
      />

      <div className={styles.container}>
        <div className={styles.layout}>
          <aside className={styles.intro}>
            <div className={styles.introContent}>
              <span className={styles.eyebrow}>
                <Sparkles
                  size={15}
                  strokeWidth={1.8}
                />

                Pakistan&apos;s Solar Marketplace
              </span>

              <h1 className={styles.introTitle}>
                <span className={styles.orange}>
                  Power Your
                </span>{" "}
                <span className={styles.purple}>
                  Solar Journey
                </span>
              </h1>

              <p className={styles.introDescription}>
                Access trusted solar
                products, verified
                suppliers, pricing
                insights and renewable
                energy solutions from
                one marketplace.
              </p>

              <div className={styles.benefits}>
                <div className={styles.benefit}>
                  <span className={styles.benefitIcon}>
                    <ShieldCheck size={18} />
                  </span>

                  <div>
                    <strong>
                      Verified Marketplace
                    </strong>

                    <p>
                      Connect with trusted
                      suppliers and products.
                    </p>
                  </div>
                </div>

                <div className={styles.benefit}>
                  <span className={styles.benefitIcon}>
                    <LockKeyhole size={18} />
                  </span>

                  <div>
                    <strong>
                      Secure Account
                    </strong>

                    <p>
                      Manage orders,
                      quotes and saved
                      products securely.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <main className={styles.panel}>
            <div className={styles.panelInner}>
              <div className={styles.switcher}>
                <button
                  type="button"
                  className={`${styles.switchButton} ${
                    isLogin
                      ? styles.switchButtonActive
                      : ""
                  }`}
                  onClick={() =>
                    setMode("login")
                  }
                >
                  Login
                </button>

                <button
                  type="button"
                  className={`${styles.switchButton} ${
                    !isLogin
                      ? styles.switchButtonActive
                      : ""
                  }`}
                  onClick={() =>
                    setMode("signup")
                  }
                >
                  Sign Up
                </button>
              </div>

              {isLogin ? (
                <SignInForm
                  onSwitchToSignUp={() =>
                    setMode("signup")
                  }
                />
              ) : (
                <SignUpForm
                  onSwitchToSignIn={() =>
                    setMode("login")
                  }
                />
              )}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}