"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  ShoppingCart,
  FileText,
  TrendingUp,
  Search,
  Bell,
  Mail,
  Settings,
  LogOut,
  Home,
  User,
  Package,
} from "lucide-react";

export default function OrdersPage() {
  const [activeMenu, setActiveMenu] = useState("Orders");

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

  const orders = [
  { img: "/sneakers.png", orderId: "#23456", customer: "James Amarachukwu", date: "1st Jan", price: "2 ETH", status: "Completed" },
  { img: "/iphone.png", orderId: "#23457", customer: "Peter Amarachukwu", date: "1st Oct", price: "0.5 ETH", status: "Pending" },
  { img: "/sneakers.png", orderId: "#23458", customer: "Soola Amarachukwu", date: "1st Sep", price: "0.2 ETH", status: "Completed" },
  { img: "/watch.png", orderId: "#23460", customer: "Anuku Amarachukwu", date: "1st May", price: "0.1 ETH", status: "Completed" },
  { img: "/watch.png", orderId: "#23460", customer: "Anuku Amarachukwu", date: "1st May", price: "0.1 ETH", status: "Completed" },
  { img: "/sneakers.png", orderId: "#23459", customer: "Esther Amarachukwu", date: "1st Dec", price: "0.1 ETH", status: "Pending" },
  { img: "/sneakers.png", orderId: "#23459", customer: "Esther Amarachukwu", date: "1st Dec", price: "0.1 ETH", status: "Pending" },
  { img: "/iphone.png", orderId: "#23457", customer: "Peter Amarachukwu", date: "1st Oct", price: "0.5 ETH", status: "Pending" },
  { img: "/iphone.png", orderId: "#23457", customer: "Peter Amarachukwu", date: "1st Oct", price: "0.5 ETH", status: "Pending" },
  { img: "/sneakers.png", orderId: "#23459", customer: "Esther Amarachukwu", date: "1st Dec", price: "0.1 ETH", status: "Pending" },
  { img: "/sneakers.png", orderId: "#23459", customer: "Esther Amarachukwu", date: "1st Dec", price: "0.1 ETH", status: "Pending" },
  { img: "/iphone.png", orderId: "#23457", customer: "Peter Amarachukwu", date: "1st Oct", price: "0.5 ETH", status: "Pending" },
  { img: "/iphone.png", orderId: "#23457", customer: "Peter Amarachukwu", date: "1st Oct", price: "0.5 ETH", status: "Pending" },
  { img: "/iphone.png", orderId: "#23457", customer: "Peter Amarachukwu", date: "1st Oct", price: "0.5 ETH", status: "Pending" },
  { img: "/iphone.png", orderId: "#23457", customer: "Peter Amarachukwu", date: "1st Oct", price: "0.5 ETH", status: "Pending" },
  { img: "/sneakers.png", orderId: "#23459", customer: "Esther Amarachukwu", date: "1st Dec", price: "0.1 ETH", status: "Pending" },
  { img: "/sneakers.png", orderId: "#23459", customer: "Esther Amarachukwu", date: "1st Dec", price: "0.1 ETH", status: "Pending" },
  { img: "/sneakers.png", orderId: "#23459", customer: "Esther Amarachukwu", date: "1st Dec", price: "0.1 ETH", status: "Pending" },
  { img: "/watch.png", orderId: "#23460", customer: "Anuku Amarachukwu", date: "1st May", price: "0.1 ETH", status: "Completed" },
];

  const topSoldItems = [
    { name: "Laptops", percentage: 72 },
    { name: "Men’s Wear", percentage: 80 },
    { name: "T-Shirts", percentage: 60 },
    { name: "Watches", percentage: 60 },
  ];

  return (
    <div className="flex h-screen" style={{ backgroundColor: "#020213" }}>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
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
                placeholder="Search orders"
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

        {/* Orders Content */}
        <div className="flex-1 px-8 pb-8 flex gap-6 overflow-hidden">
          {/* Orders Table */}
          <div
            className="flex-1 rounded-xl p-6 overflow-hidden flex flex-col"
            style={{ backgroundColor: "#0b085d" }}
          >
            <h2 className="text-white text-xl font-semibold mb-4">
              All Orders
            </h2>

            <div className="overflow-y-auto flex-1">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-gray-400 text-left py-3 px-2 font-medium text-sm">
                      Product
                    </th>
                    <th className="text-gray-400 text-left py-3 px-2 font-medium text-sm">
                      Order ID
                    </th>
                    <th className="text-gray-400 text-left py-3 px-2 font-medium text-sm">
                      Customer
                    </th>
                    <th className="text-gray-400 text-left py-3 px-2 font-medium text-sm">
                      Date
                    </th>
                    <th className="text-gray-400 text-left py-3 px-2 font-medium text-sm">
                      Price
                    </th>
                    <th className="text-gray-400 text-left py-3 px-2 font-medium text-sm">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={index} className="border-b border-gray-800">
                <td className="py-4 px-2">
                  <Image
                   src={order.img}
                   alt={order.customer}
                   width={40}
                    height={40}
                    className="rounded-md object-cover"
                   />
                </td>
                      <td className="py-4 px-2 text-gray-300 text-sm">
                        {order.orderId}
                      </td>
                      <td className="py-4 px-2 text-gray-300 text-sm">
                        {order.customer}
                      </td>
                      <td className="py-4 px-2 text-gray-300 text-sm">
                        {order.date}
                      </td>
                      <td className="py-4 px-2 text-gray-300 text-sm">
                        {order.price}
                      </td>
                      <td className="py-4 px-2">
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
          </div>

          {/* Top Sold Items */}
          <div
            className="w-80 rounded-xl p-6 overflow-y-auto"
            style={{ backgroundColor: "#0b085d" }}
          >
            <h2 className="text-white text-xl font-semibold mb-6">
              Top Sold Items
            </h2>

            <div className="space-y-5">
              {topSoldItems.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 text-sm">{item.name}</span>
                    <span className="text-gray-400 text-sm">
                      {item.percentage}%
                    </span>
                  </div>
                  <div
                    className="w-full h-2 rounded-full"
                    style={{ backgroundColor: "#1a1670" }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${item.percentage}%`,
                        backgroundColor: "#00d4ff",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}