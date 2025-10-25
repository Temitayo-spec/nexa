"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Users, ShoppingCart, FileText, TrendingUp, Search, Bell, Mail, Settings, LogOut, Home, User, Package } from "lucide-react";

export default function CustomersPage() {
  const [activeMenu, setActiveMenu] = useState("Customer");

  const menuItems = [
      { icon: Home, label: "Dashboard", href: "/dashboard/sellers" },
      { icon: User, label: "Customers", href: "/dashboard/customers" },
      { icon: Package, label: "Products", href: "/dashboard/products" },
      { icon: FileText, label: "Orders", href: "/dashboard/orders" },
      
    ];

  const statsCards = [
    { value: "2000+", label: "Total Customers", icon: Users },
    { value: "140+", label: "Total Products", icon: ShoppingCart },
    { value: "1600+", label: "Total Orders", icon: FileText },
    { value: "2000+", label: "Total Sales", icon: TrendingUp },
  ];

  const customers = [
    {
      name: "Towhidur Rahman",
      spend: "$200",
      reviews: 14,
      comment:
        "My first and only gadget ordered, and I’m beyond delighted. I requested a custom gadget and I’m happy I got it.",
      img: "https://i.pravatar.cc/100?img=32",
    },
    {
      name: "Towhidur Rahman",
      spend: "$500",
      reviews: 18,
      comment:
        "My first and only gadget ordered, and I’m beyond delighted. I requested a custom gadget and I’m happy I got it.",
      img: "https://i.pravatar.cc/100?img=21",
    },
  ];

  return (
    <div className="flex h-screen" style={{ backgroundColor: "#020213" }}>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Header */}
        <div
          className="flex items-center justify-between px-8 py-4"
          style={{ backgroundColor: "#04031f" }}
        >
          <div className="text-white text-xl">Hello, Robert Jake 👋</div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search your products"
                className="px-4 py-2 rounded-lg text-white text-sm outline-none w-80"
                style={{ backgroundColor: "#0b085d" }}
              />
              <Search
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>
            <Bell className="text-white cursor-pointer" size={20} />
            <Mail className="text-white cursor-pointer" size={20} />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src="https://i.pravatar.cc/100?img=12"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-white text-sm font-medium">Robert Jake</div>
                <div className="text-gray-400 text-xs">Merchant</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 p-8">
          {statsCards.map((stat, index) => (
            <div
              key={index}
              className="rounded-xl p-6 flex items-start gap-4"
              style={{ backgroundColor: "#0b085d" }}
            >
              <div className="p-3 rounded-lg bg-blue-700 bg-opacity-30">
                <stat.icon className="text-white" size={20} />
              </div>
              <div>
                <div className="text-white text-3xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Cards */}
        <div className="p-8 pt-0">
          {customers.map((c, index) => (
            <div
              key={index}
              className="rounded-xl p-6 mb-6 flex justify-between items-start"
              style={{ backgroundColor: "#0b085d" }}
            >
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-white font-semibold">{c.name}</div>
                  <div className="text-gray-400 text-sm">
                    Total Spend: {c.spend}
                  </div>
                  <div className="text-gray-400 text-sm">
                    Total Review: {c.reviews}
                  </div>
                </div>
              </div>

              <div className="flex-1 text-gray-300 text-sm max-w-xl ml-12">
                {c.comment}
                <div className="flex gap-4 mt-4">
                  <button
                    className="px-4 py-2 rounded-md text-sm text-white"
                    style={{ backgroundColor: "#120aff" }}
                  >
                    Public Comment
                  </button>
                  <button
                    className="px-4 py-2 rounded-md text-sm text-white"
                    style={{ backgroundColor: "#120aff" }}
                  >
                    Direct Message
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}