"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";

import { useAuthStore } from "@/store/authStore";

import { ProfileHero } from "./components/ProfileHero";
import { PersonalInformation } from "./components/PersonalInformation";
import { AccountSecurity } from "./components/AccountSecurity";
import { AccountOverview } from "./components/AccountOverview";
import { AccountMenu } from "./components/AccountMenu";
import { SupplierBanner } from "./components/SupplierBanner";

import "@/components/animations/css/profile/profile-page.css";

export function ProfilePage() {
  const router = useRouter();

  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );
  const isInitializing = useAuthStore(
    (state) => state.isInitializing
  );
  const isLoading = useAuthStore(
    (state) => state.isLoading
  );
  const logout = useAuthStore(
    (state) => state.logout
  );

  useEffect(() => {
    if (!isInitializing && !isAuthenticated) {
      router.replace("/login");
    }
  }, [
    isAuthenticated,
    isInitializing,
    router,
  ]);

  const handleLogout = async () => {
    await logout();
    router.replace("/");
  };

  if (isInitializing) {
    return (
      <main className="sth-profile">
        <div className="sth-profile__container">
          <div className="sth-profile__loading">
            <div className="sth-profile__loading-spinner" />

            <span>
              Loading your account...
            </span>
          </div>
        </div>
      </main>
    );
  }

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <main className="sth-profile">
      <div className="sth-profile__container">

        <nav
          className="sth-profile__breadcrumb"
          aria-label="Breadcrumb"
        >
          <Link href="/">
            Home
          </Link>

          <ChevronRight
            size={13}
            strokeWidth={1.8}
          />

          <span>
            My Account
          </span>
        </nav>

        <ProfileHero user={user} />

        <div className="sth-profile__layout">

          <div className="sth-profile__main">
            <PersonalInformation user={user} />

            <AccountSecurity />

            <AccountOverview />

            <SupplierBanner />
          </div>

          <AccountMenu
            user={user}
            isLoading={isLoading}
            onLogout={handleLogout}
          />

        </div>

      </div>
    </main>
  );
}