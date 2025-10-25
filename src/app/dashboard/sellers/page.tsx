"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  ShoppingCart,
  FileText,
  TrendingUp,
  Bell,
  Mail,
  Search,
  Settings,
  LogOut,
  Home,
  User,
  Package,
} from "lucide-react";

export default function Page() {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const menuItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard/sellers" },
    { icon: User, label: "Customers", href: "/dashboard/customers" },
    { icon: Package, label: "Products", href: "/dashboard/products" },
    { icon: FileText, label: "Orders", href: "/dashboard/orders" },
  ];

  const statsCards = [
    { value: "2000+", label: "Total Customers", icon: Users, color: "#120aff" },
    { value: "140+", label: "Total Products", icon: ShoppingCart, color: "#120aff" },
    { value: "1600+", label: "Total Orders", icon: FileText, color: "#120aff" },
    { value: "2000+", label: "Total Sales", icon: TrendingUp, color: "#120aff" },
  ];

  const salesTrendData = [
    { month: "January", value: 58 },
    { month: "February", value: 40 },
    { month: "March", value: 30 },
    { month: "April", value: 38 },
    { month: "May", value: 52 },
    { month: "June", value: 45 },
    { month: "July", value: 42 },
    { month: "August", value: 35 },
    { month: "September", value: 28 },
  ];

  const productViewsData = {
    thisWeek: [60, 45, 35, 62, 48, 52, 58],
    lastWeek: [45, 52, 48, 60, 45, 52, 45],
  };

  const days = ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"];

  const orders = [
  { img: "/sneakers.png", orderId: "#23456", customer: "James Amarachukwu", date: "1st Jan", price: "2 ETH", status: "Completed" },
  { img: "/iphone.png", orderId: "#23457", customer: "Peter Amarachukwu", date: "1st Oct", price: "0.5 ETH", status: "Pending" },
  { img: "/sneakers.png", orderId: "#23458", customer: "Soola Amarachukwu", date: "1st Sep", price: "0.2 ETH", status: "Completed" },
  { img: "/watch.png", orderId: "#23460", customer: "Anuku Amarachukwu", date: "1st May", price: "0.1 ETH", status: "Completed" },
  { img: "/watch.png", orderId: "#23460", customer: "Anuku Amarachukwu", date: "1st May", price: "0.1 ETH", status: "Completed" },
  { img: "/sneakers.png", orderId: "#23459", customer: "Esther Amarachukwu", date: "1st Dec", price: "0.1 ETH", status: "Pending" },
  ];

  const topSoldItems = [
    { name: "Laptops", percentage: 75 },
    { name: "Men's Wear", percentage: 90 },
  ];

  return (
    <div className="flex h-screen" style={{ backgroundColor: "#020213" }}>
 
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Top Header */}
        <header className="flex items-center justify-between px-8 py-4" style={{ backgroundColor: "#04031f" }}>
          <div className="text-white text-xl">Hello, Robert Jake 👋</div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search your products"
                className="px-4 py-2 rounded-lg text-white text-sm outline-none w-80"
                style={{ backgroundColor: "#0b085d" }}
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>

            <div className="relative">
              <Bell className="text-white cursor-pointer" size={20} />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
            </div>

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
<button
  onClick={() => router.push('/marketplace')}
  className="bg-[#004CEB] hover:bg-[#003bbd] px-4 py-2 rounded-lg text-sm font-semibold transition"
>
  Go to Marketplace
</button>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {statsCards.map((stat, index) => (
              <div key={index} className="rounded-xl p-6" style={{ backgroundColor: "#0b085d" }}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: stat.color }}>
                    <stat.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-white text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {/* Sales Trend */}
            <section className="col-span-2 rounded-xl p-6" style={{ backgroundColor: "#0b085d" }}>
              <h3 className="text-white text-lg font-semibold mb-6">Sales Trend</h3>
              <div className="relative h-64">
                <svg className="w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3933ff" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3933ff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d={`M 0 ${200 - salesTrendData[0].value * 2} ${salesTrendData
                      .map((d, i) => `L ${(i / (salesTrendData.length - 1)) * 600} ${200 - d.value * 2}`)
                      .join(" ")} L 600 200 L 0 200 Z`}
                    fill="url(#gradient)"
                  />
                  <path
                    d={`M 0 ${200 - salesTrendData[0].value * 2} ${salesTrendData
                      .map((d, i) => `L ${(i / (salesTrendData.length - 1)) * 600} ${200 - d.value * 2}`)
                      .join(" ")}`}
                    fill="none"
                    stroke="#3933ff"
                    strokeWidth="2"
                  />
                </svg>
                <div className="flex justify-between mt-2 px-2">
                  {["January", "March", "May", "July", "September"].map((month, i) => (
                    <span key={i} className="text-gray-400 text-xs">
                      {month}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Product Views */}
            <aside className="rounded-xl p-6" style={{ backgroundColor: "#0b085d" }}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white text-lg font-semibold">Product Views</h3>
                <div className="flex gap-3 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#3933ff" }} />
                    <span className="text-gray-400">This week</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#00d9ff" }} />
                    <span className="text-gray-400">Last week</span>
                  </div>
                </div>
              </div>
              <div className="flex items-end justify-between h-48 gap-2">
                {days.map((day, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full flex flex-col-reverse gap-1">
                      <div className="w-full rounded" style={{ backgroundColor: "#3933ff", height: `${productViewsData.thisWeek[i] * 1.5}px` }} />
                      <div className="w-full rounded" style={{ backgroundColor: "#00d9ff", height: `${productViewsData.lastWeek[i] * 1.5}px` }} />
                    </div>
                    <span className="text-gray-400 text-xs mt-2">{day}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-3 gap-6">
            {/* All Orders */}
            <section className="col-span-2 rounded-xl p-6" style={{ backgroundColor: "#0b085d" }}>
              <h3 className="text-white text-lg font-semibold mb-6">All Orders</h3>
              <div className="overflow-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b" style={{ borderColor: "#343178" }}>
                      <th className="text-left py-3 text-gray-400 text-sm font-medium">Products</th>
                      <th className="text-left py-3 text-gray-400 text-sm font-medium">Order ID</th>
                      <th className="text-left py-3 text-gray-400 text-sm font-medium">Customer Name</th>
                      <th className="text-left py-3 text-gray-400 text-sm font-medium">Date</th>
                      <th className="text-left py-3 text-gray-400 text-sm font-medium">Price</th>
                      <th className="text-left py-3 text-gray-400 text-sm font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
  {orders.map((order, i) => (
    <tr key={i}>
      <td className="py-4">
        <img
          src={order.img}
          alt="Product"
          className="w-10 h-10 object-cover rounded-lg"
        />
      </td>
      <td className="py-4 text-white text-sm">{order.orderId}</td>
      <td className="py-4 text-white text-sm">{order.customer}</td>
      <td className="py-4 text-white text-sm">{order.date}</td>
      <td className="py-4 text-white text-sm">{order.price}</td>
      <td className="py-4">
        <span
          className={`text-sm font-medium ${
            order.status === "Completed" ? "text-green-400" : "text-red-400"
          }`}
        >
          {order.status}
        </span>
      </td>
    </tr>
  ))}
</tbody>
                </table>
              </div>
            </section>

{/* Top Sold Items */}
<aside
  className="rounded-xl p-6 flex flex-col justify-between"
  style={{ backgroundColor: "#0b085d", minHeight: "400px" }}
>
  <h2 className="text-white text-xl font-semibold mb-6">
    Top Sold Items
  </h2>

  <div className="space-y-6 flex-1">
    {topSoldItems.map((item, index) => (
      <div key={index}>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-300 text-sm">{item.name}</span>
          <span className="text-gray-400 text-sm">{item.percentage}%</span>
        </div>

        <div className="relative w-full h-3 bg-[#1a1670] rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full rounded-full transition-all duration-700"
            style={{
              width: `${item.percentage}%`,
              background:
                "linear-gradient(90deg, #00d4ff 0%, #120aff 100%)",
            }}
          />
        </div>
      </div>
                ))}
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}