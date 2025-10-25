"use client";
import Image from "next/image";

import React, { useState } from "react";
import {
  Home,
  Heart,
  ShoppingCart,
  Award,
  Settings,
  LogOut,
  Truck,
  Star,
} from "lucide-react";

type PageType = "Dashboard" | "Wishlist" | "Orders" | "Reputation" | "Settings";

export default function BuyerPage() {
  const [activeMenu, setActiveMenu] = useState<PageType>("Dashboard");
  const [username, setUsername] = useState("Orion");
  const [selectedAvatar, setSelectedAvatar] = useState(
    "https://i.pravatar.cc/150?img=33"
  );

  const menuItems = [
    { icon: Home, label: "Dashboard" as PageType },
    { icon: Heart, label: "Wishlist" as PageType },
    { icon: ShoppingCart, label: "Orders" as PageType },
    { icon: Award, label: "Reputation" as PageType },
  ];

  const wishlistProducts = [
    { id: 1, name: "Wireless Gaming Headset", price: "0.0025 ETH" },
    { id: 2, name: "Wireless Gaming Headset", price: "0.0025 ETH" },
    { id: 3, name: "Wireless Gaming Headset", price: "0.0025 ETH" },
  ];

  const orders = [
    {
      product: "Wireless Gaming Headset",
      date: "2025-08-19",
      status: "Pending",
      transaction: "0x7f3d...a21c",
    },
    {
      product: "Wireless Gaming Headset",
      date: "2025-08-19",
      status: "Shipped",
      transaction: "0x7f3d...a21c",
    },
    {
      product: "Wireless Gaming Headset",
      date: "2025-08-19",
      status: "Completed",
      transaction: "0x7f3d...a21c",
    },
  ];

  const recentActivity = [
    { text: "Order #773a Released", time: "2 hours ago", color: "bg-green-500" },
    { text: "Order #773a Released", time: "2 hours ago", color: "bg-cyan-500" },
    { text: "Order #773a Released", time: "2 hours ago", color: "bg-gray-500" },
  ];

  const trustFactors = [
    { label: "Completed Transactions", value: 47, max: 50 },
    { label: "Timely Confirmations", value: 42, max: 50 },
    { label: "Completed Transactions", value: 49, max: 50 },
  ];

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 rounded-2xl p-8 flex items-center justify-between border-2 bg-[#0b085d] border-[#8985ff]">
          <div>
            <h1 className="text-white text-4xl font-bold mb-6">
              Welcome back, {username}!
            </h1>
            <button className="flex items-center gap-3 px-6 py-3 bg-white rounded-full text-[#0b085d] font-semibold hover:bg-gray-100 transition-colors">
              Explore Marketplace <span className="text-xl">→</span>
            </button>
          </div>
          <div className="w-44 h-44 flex items-center justify-center">
          <Image
  src="/image.png"
  alt="Shopping"
  width={500}
  height={500}
  className="w-full h-full object-contain"
  onError={(e) => {
    const target = e.currentTarget as HTMLImageElement;
    target.style.display = "none";
  }}
  priority
/>
          </div>
        </div>

        <div className="rounded-2xl p-6 border bg-[#0b085d] border-[#343178]">
          <div className="flex items-center gap-3 mb-6">
            <Truck className="text-white" size={24} />
            <span className="text-white font-semibold text-lg">
              Current Orders
            </span>
          </div>
          <div className="text-white text-6xl font-bold mb-2">3</div>
          <div className="text-gray-400 text-sm">Active</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="rounded-2xl p-6 border bg-[#0b085d] border-[#343178]">
          <div className="flex items-center gap-3 mb-6">
            <Star className="text-white" size={24} />
            <span className="text-white font-semibold text-lg">Trust Score</span>
          </div>
          <div className="text-white text-6xl font-bold mb-2">94</div>
          <div className="text-gray-400 text-sm">Excellent Standing</div>
        </div>

        <div className="col-span-2 rounded-2xl p-6 border bg-[#0b085d] border-[#343178]">
          <h3 className="text-white text-xl font-bold mb-6">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((activity, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#343178]"
              >
                <div className={`w-4 h-4 rounded-full ${activity.color}`}></div>
                <div className="flex-1">
                  <div className="text-white text-base font-medium">
                    {activity.text}
                  </div>
                  <div className="text-gray-400 text-sm">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderWishlist = () => (
    <div className="grid grid-cols-3 gap-6">
      {wishlistProducts.map((product) => (
        <div
          key={product.id}
          className="rounded-2xl overflow-hidden border bg-[#0b085d] border-[#343178]"
        >
          <div className="relative">
            <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center z-10 hover:bg-gray-100 transition-colors">
              <span className="text-2xl text-gray-800 font-light">×</span>
            </button>
            <div className="h-64 bg-[#343178]"></div>
          </div>
          <div className="p-6">
            <h3 className="text-white text-lg font-semibold mb-2">
              {product.name}
            </h3>
            <div className="text-white text-2xl font-bold mb-6">
              {product.price}
            </div>
            <div className="flex gap-3">
              <button className="flex-1 py-3 rounded-xl text-white font-semibold hover:opacity-90 transition-opacity bg-[#120aff]">
                Add to cart
              </button>
              <button className="px-6 py-3 rounded-xl text-white font-semibold hover:opacity-80 transition-opacity border border-transparent">
                View
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderOrders = () => (
    <div className="rounded-2xl p-6 border bg-[#0b085d] border-[#343178]">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#343178]">
            <th className="text-left py-4 px-4 text-white text-base font-semibold">
              Product
            </th>
            <th className="text-left py-4 px-4 text-white text-base font-semibold">
              Date
            </th>
            <th className="text-left py-4 px-4 text-white text-base font-semibold">
              Status
            </th>
            <th className="text-left py-4 px-4 text-white text-base font-semibold">
              Transaction
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <tr key={i} className="border-b border-[#343178]">
              <td className="py-6 px-4 text-white text-base">
                {order.product}
              </td>
              <td className="py-6 px-4 text-white text-base">{order.date}</td>
              <td className="py-6 px-4">
                <span
                  className={`px-5 py-2 rounded-full text-base font-medium border ${
                    order.status === "Completed"
                      ? "text-green-500 bg-green-500/15 border-green-500"
                      : order.status === "Shipped"
                      ? "text-fuchsia-600 bg-fuchsia-600/15 border-fuchsia-600"
                      : "text-yellow-500 bg-yellow-500/15 border-yellow-500"
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td className="py-6 px-4 text-white text-base">
                <div className="flex items-center gap-2">
                  {order.transaction}
                  <button className="text-gray-400 hover:text-white">
                    <span className="text-lg">⊕</span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderReputation = () => (
    <div className="grid grid-cols-2 gap-6">
      <div className="rounded-2xl p-8 border bg-[#0b085d] border-[#343178]">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-white text-2xl font-bold">Trust Score</h2>
          <div className="px-4 py-2 rounded-full text-sm font-medium bg-green-500/15 text-green-500">
            On-chain Verified
          </div>
        </div>
        <div className="flex items-center justify-center mb-8">
          <div className="relative w-56 h-56">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="112"
                cy="112"
                r="90"
                stroke="#343178"
                strokeWidth="20"
                fill="none"
                strokeDasharray="10 10"
              />
              <circle
                cx="112"
                cy="112"
                r="90"
                stroke="#22c55e"
                strokeWidth="20"
                fill="none"
                strokeDasharray={`${(94 / 100) * 565.2} 565.2`}
                strokeLinecap="round"
                strokeDashoffset="0"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-green-500 text-6xl font-bold">94</div>
              <div className="text-white text-lg">/100</div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="text-white text-xl font-semibold">
            Excellent Standing
          </div>
        </div>
      </div>

      <div className="rounded-2xl p-8 border bg-[#0b085d] border-[#343178]">
        <h2 className="text-white text-2xl font-bold mb-8">Trust Factors</h2>
        <div className="space-y-6 mb-10">
          {trustFactors.map((factor, i) => (
            <div key={i}>
              <div className="flex justify-between mb-3">
                <span className="text-white text-base">{factor.label}</span>
                <span className="text-white text-base font-semibold">
                  {factor.value}/{factor.max}
                </span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-[#343178]">
                <div
                  className="h-full rounded-full bg-green-500"
                  style={{ width: `${(factor.value / factor.max) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#343178]">
          <div className="text-center">
            <div className="text-white text-4xl font-bold mb-2">50</div>
            <div className="text-gray-400 text-sm">Total Transactions</div>
          </div>
          <div className="text-center">
            <div className="text-white text-4xl font-bold mb-2">98.5%</div>
            <div className="text-gray-400 text-sm">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-white text-4xl font-bold mb-2">4.9</div>
            <div className="text-gray-400 text-sm">Average Rating</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <div className="rounded-2xl p-8 border bg-[#0b085d] border-[#343178]">
        <h2 className="text-white text-2xl font-bold mb-8">
          Profile Information
        </h2>

     <div className="mb-8">
  <label
    htmlFor="username"
    className="block text-gray-400 text-sm mb-3"
  >
    Username
  </label>
  <input
    id="username"
    type="text"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    placeholder="Enter your username"
    className="w-full px-5 py-4 rounded-xl text-white text-base outline-none border bg-[#343178] border-[#5c5a93] placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition"
  />
</div>


        <div className="mb-10">
          <label className="block text-gray-400 text-sm mb-4">Avatar</label>
          <div className="flex items-center gap-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#120aff]">
              <img
                src={selectedAvatar}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <input
                type="file"
                id="avatar-upload"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
              />
              <label
                htmlFor="avatar-upload"
                className="px-6 py-3 bg-white rounded-full font-semibold cursor-pointer hover:bg-gray-100 text-[#120aff] inline-block"
              >
                Change Avatar
              </label>
            </div>
          </div>
        </div>

        <button className="w-full py-4 rounded-xl text-white text-base font-semibold hover:opacity-90 transition-opacity bg-[#120aff]">
          Save Changes
        </button>
      </div>

      <div className="rounded-2xl p-8 border bg-[#0b085d] border-[#343178]">
        <h2 className="text-white text-2xl font-bold mb-6">Connected Wallet</h2>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-white text-xl font-semibold mb-2">
              0x77..99c7
            </div>
            <button className="text-sm font-medium text-[#120aff]">
              Change Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex bg-[#020213]">
      <div className="w-72 flex flex-col bg-[#06042f]">
        <div className="p-8">
          <div className="text-white text-3xl font-bold">NEXA</div>
        </div>

        <div className="flex-1 px-4">
          {menuItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveMenu(item.label)}
              className={`flex items-center gap-3 px-5 py-4 mb-2 rounded-xl cursor-pointer transition-all relative ${
                activeMenu === item.label ? "bg-black" : "hover:bg-white/5"
              }`}
            >
              {activeMenu === item.label && (
                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full bg-[#120aff]"></div>
              )}
              <item.icon className="text-white" size={22} />
              <span className="text-white text-base">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="px-4 pb-6">
          <div
            onClick={() => setActiveMenu("Settings")}
            className={`flex items-center gap-3 px-5 py-4 mb-2 rounded-xl cursor-pointer transition-all relative ${
              activeMenu === "Settings" ? "bg-black" : "hover:bg-white/5"
            }`}
          >
            {activeMenu === "Settings" && (
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full bg-[#120aff]"></div>
            )}
            <Settings className="text-white" size={22} />
            <span className="text-white text-base">Settings</span>
          </div>

          <div className="flex items-center gap-3 px-5 py-4 rounded-xl cursor-pointer hover:bg-white/5">
            <LogOut className="text-white" size={22} />
            <span className="text-white text-base">Logout</span>
          </div>
        </div>
      </div>

      <div className="flex-1 p-10 overflow-y-auto">
        {activeMenu === "Dashboard" && renderDashboard()}
        {activeMenu === "Wishlist" && renderWishlist()}
        {activeMenu === "Orders" && renderOrders()}
        {activeMenu === "Reputation" && renderReputation()}
        {activeMenu === "Settings" && renderSettings()}
      </div>
    </div>
  );
}
