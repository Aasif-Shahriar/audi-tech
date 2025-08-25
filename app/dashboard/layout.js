"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function DashboardLayout({ children }) {
  const path = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Redirect if not authenticated
  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push("/login");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!session) {
    return null; // Will redirect in useEffect
  }

  const navItems = [
    { href: "/dashboard", label: "Overview", icon: "📊" },
    { href: "/dashboard/add-products", label: "Add Product", icon: "➕" },
    { href: "/dashboard/orders", label: "Orders", icon: "📦" },
    { href: "/dashboard/customers", label: "Customers", icon: "👥" },
    { href: "/dashboard/settings", label: "Settings", icon: "⚙️" },
    { href: "/dashboard/profile", label: "Profile", icon: "👤" },
  ];

  const isActive = (href) => path === href;

  return (
    <div className="min-h-screen bg-base-200">
      {/* Sidebar for mobile */}
      <div className="drawer lg:drawer-open">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={sidebarOpen}
          onChange={(e) => setSidebarOpen(e.target.checked)}
        />

        <div className="drawer-content flex flex-col">
          {/* Header */}
          <header className="bg-base-100 shadow-sm sticky top-0 z-40">
            <div className="navbar">
              <div className="navbar-start">
                <label
                  htmlFor="dashboard-drawer"
                  className="btn btn-ghost drawer-button lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </label>
                <h1 className="text-xl font-bold ml-2">Dashboard</h1>
              </div>

              <div className="navbar-end">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full bg-primary text-primary-content flex items-center justify-center">
                      <span className="text-sm font-bold">
                        {session.user?.name?.charAt(0) ||
                          session.user?.email?.charAt(0) ||
                          "U"}
                      </span>
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link href="/dashboard/profile">Profile</Link>
                    </li>
                    <li>
                      <Link href="/dashboard/settings">Settings</Link>
                    </li>
                    <li>
                      <Link href="/">Back to Site</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>

          {/* Main content */}
          <main className="flex-1 p-6">
            <div className="bg-base-100 rounded-lg shadow-sm p-6">
              {children}
            </div>
          </main>
        </div>

        {/* Sidebar */}
        <div className="drawer-side">
          <label
            htmlFor="dashboard-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <div className="bg-base-100 min-h-screen w-80 p-4">
            {/* Logo */}
            <div className="mb-8 p-4">
              <Link href="/" className="text-2xl font-bold">
                Audi<span className="text-primary">Tech</span>
              </Link>
              <p className="text-sm text-gray-500">Dashboard</p>
            </div>

            {/* Navigation */}
            <ul className="menu space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 ${
                      isActive(item.href) ? "active" : ""
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="text-lg">{item.icon}</span>
                    {item.label}
                  </Link>
                </li>
              ))}

              {/* Divider */}
              <div className="divider my-4"></div>

              <li>
                <Link href="/" className="flex items-center gap-3">
                  <span className="text-lg">🏠</span>
                  Back to Home
                </Link>
              </li>
            </ul>

            {/* User info at bottom */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-base-200 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-12">
                      <span className="text-sm">
                        {session.user?.name?.charAt(0) ||
                          session.user?.email?.charAt(0) ||
                          "U"}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold truncate">
                      {session.user?.name || session.user?.email}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {session.user?.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
