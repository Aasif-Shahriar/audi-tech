"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { TiThMenu } from "react-icons/ti";
import toast from "react-hot-toast";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const path = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isSigningOut, setIsSigningOut] = useState(false);

  // Don't show navbar on dashboard pages
  if (path.includes("/dashboard")) {
    return null;
  }

  const isActive = (href) => path === href;

  const handleSignOut = async () => {
    setIsSigningOut(true);
    try {
      await signOut({
        redirect: false,
        callbackUrl: "/",
      });
      // Manually redirect after successful signout
      toast.success("Sign out is successful");
      router.push("/");
      router.refresh(); // Refresh to update auth state
    } catch (error) {
      console.error("Sign out error:", error);
    } finally {
      setIsSigningOut(false);
    }
  };

  const navlinks = (
    <>
      <li>
        <Link href={"/"} className={isActive("/") ? "active" : ""}>
          Home
        </Link>
      </li>
      <li>
        <Link
          href={"/products"}
          className={isActive("/products") ? "active" : ""}
        >
          Products
        </Link>
      </li>
      <li>
        <Link
          href={"/dashboard"}
          className={isActive("/dashboard") ? "active" : ""}
        >
          Dashboard
        </Link>
      </li>
      <li>
        <Link href={"/about"} className={isActive("/about") ? "active" : ""}>
          About
        </Link>
      </li>
    </>
  );

  return (
    <div className="py-5 sticky top-0 z-50">
      <nav className="navbar bg-base-100 shadow-sm  max-w-[1560px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-amber-400 lg:hidden"
              aria-label="Toggle menu"
            >
              <TiThMenu size={20} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              {navlinks}
            </ul>
          </div>

          <Link href={"/"} className="text-xl font-bold">
            <h3 className="text-2xl font-bold">
              Audi<span className="text-amber-400">Tech</span>
            </h3>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{navlinks}</ul>
        </div>

        <div className="navbar-end flex items-center gap-4">
          {status === "loading" || isSigningOut ? (
            <div className="flex items-center gap-2">
              <div className="skeleton h-8 w-20"></div>
            </div>
          ) : session ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn cursor-pointer bg-amber-400 text-neutral hover:bg-neutral-focus"
              >
                <p className="flex items-center gap-1">
                  {session.user?.name || session.user?.email || "User"}
                  <IoIosArrowDown size={20} />
                </p>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <button
                    onClick={handleSignOut}
                    disabled={isSigningOut}
                    className={
                      isSigningOut ? "opacity-50 cursor-not-allowed" : ""
                    }
                  >
                    {isSigningOut ? "Signing out..." : "Sign Out"}
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link href={"/login"} className="btn btn-ghost">
                Sign in
              </Link>
              <Link href={"/register"} className="btn bg-amber-400">
                Sign up
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
