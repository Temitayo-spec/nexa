"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  FiUsers,
  FiShoppingCart,
  FiBox,
  FiSettings,
  FiLogOut,
  FiGrid,
} from "react-icons/fi";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [active, setActive] = useState(pathname);
  const [loggingOut, setLoggingOut] = useState(false);

  const navItems = [
    { label: "Dashboard", href: "/dashboard/sellers", icon: <FiGrid /> },
    { label: "Customers", href: "/dashboard/customers", icon: <FiUsers /> },
    { label: "Products", href: "/dashboard/products", icon: <FiBox /> },
    { label: "Orders", href: "/dashboard/orders", icon: <FiShoppingCart /> },
  ];

  const handleLogout = () => {
    setLoggingOut(true);
    // Clear session/cookies here
    setTimeout(() => {
      router.push("/login");
    }, 1500);
  };

  return (
    <aside className="bg-[#030237] text-gray-300 w-64 h-screen flex flex-col border-r border-[#004ceb47] p-6">
      {/* === Top Section === */}
      <div>
        <h1 className="text-2xl font-bold text-white mb-8 tracking-wide">NEXA</h1>

        {/* === Navigation Links === */}
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setActive(item.href)}
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition ${
                pathname === item.href
                  ? "bg-[#004CEB] text-white"
                  : "hover:bg-[#1a2144] hover:text-white"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* === Bottom Section === */}
      <div className="mt-auto pt-10">
        {/* Settings Link */}
        <Link
          href="/dashboard/settings"
          className={`flex items-center gap-3 px-3 py-2 mb-3 rounded-md transition ${
            pathname === "/dashboard/settings"
              ? "bg-[#004CEB] text-white"
              : "hover:bg-[#1a2144] hover:text-white"
          }`}
        >
          <FiSettings className="text-white" size={18} />
          <span className="font-medium text-white">Settings</span>
        </Link>

        {/* Logout Button */}
        <div className="border-t border-[#1e1a4f] pt-4 mt-6">
          {loggingOut ? (
            <div className="flex flex-col items-center justify-center gap-2 text-red-400">
              <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-red-400 border-opacity-70"></div>
              <span>Logging out...</span>
            </div>
          ) : (
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-red-500/10 text-red-400 font-medium w-full text-left"
            >
              <FiLogOut size={18} />
              <span>Logout</span>
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}