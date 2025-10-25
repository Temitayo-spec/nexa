"use client";

import React, { useState } from "react";
import Image from "next/image";
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
  Upload,
} from "lucide-react";

export default function ProductsPage() {
  const [activeMenu, setActiveMenu] = useState("Products");
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [thumbnailPreview, setThumbnailPreview] = useState("https://placehold.co/400x400");

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

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!["image/png", "image/jpeg", "image/jpg"].includes(file.type)) {
        alert("Only PNG, JPG, and JPEG files are allowed.");
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        alert("File too large. Max size is 2MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => setThumbnailPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (!productName || !price) {
      alert("Product name and price are required.");
      return;
    }

    const newProduct = {
      name: productName,
      description,
      price,
      thumbnail: thumbnailPreview,
    };

    console.log("✅ Saving product:", newProduct);
    alert("Product saved (mocked). You can now connect your backend.");

    // Reset form
    handleCancel();
  };

  const handleCancel = () => {
    setProductName("");
    setDescription("");
    setPrice("");
    setThumbnailPreview("https://placehold.co/400x400");
  };

  return (
    <div className="flex h-screen" style={{ backgroundColor: "#020213" }}>
     

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Header */}
        <div
          className="flex items-center justify-between px-8 py-4"
          style={{ backgroundColor: "#04031f" }}
        >
          <div className="text-white text-2xl font-semibold">Add New Product</div>

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
                <div className="text-white text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Product Form */}
        <div className="p-8 pt-0">
          <div
            className="rounded-xl p-8 flex gap-8"
            style={{ backgroundColor: "#0b085d" }}
          >
            {/* Thumbnail Section */}
            <div className="w-80">
              <h3 className="text-white text-lg font-semibold mb-4">Thumbnail</h3>
              <div
                className="w-full h-96 rounded-lg flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: "#1a1670" }}
              >
                <img
                  src={thumbnailPreview}
                  alt="Product thumbnail"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex justify-center mt-4">
                <label
                  htmlFor="thumbnail"
                  className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer text-sm transition-colors"
                >
                  <Upload size={16} />
                  Upload Thumbnail
                </label>
              </div>
              <input
                type="file"
                id="thumbnail"
                accept=".png,.jpg,.jpeg"
                onChange={handleThumbnailChange}
                className="hidden"
              />
              <p className="text-gray-400 text-xs mt-4 text-center">
                Only *.png, *.jpg and *.jpeg image files are accepted.
              </p>
            </div>

            {/* General Section */}
            <div className="flex-1">
              <h3 className="text-white text-lg font-semibold mb-6">General</h3>

              <div className="space-y-6">
                {/* Product Name */}
                <div>
                  <label className="text-white text-sm block mb-2">
                    Product Name
                  </label>
                  <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg text-white outline-none"
                    style={{ backgroundColor: "#1a1670" }}
                  />
                  <p className="text-gray-500 text-xs mt-2">
                    A product name is required and recommended to be unique.
                  </p>
                </div>

                {/* Description */}
                <div>
                  <label className="text-white text-sm block mb-2">
                    Description
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg text-white outline-none resize-none"
                    style={{ backgroundColor: "#1a1670" }}
                  />
                  <p className="text-gray-500 text-xs mt-2">
                    Set a description for better visibility.
                  </p>
                </div>

                {/* Pricing */}
                <div>
                  <label className="text-white text-sm block mb-2">Pricing</label>
                  <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg text-white outline-none"
                    style={{ backgroundColor: "#1a1670" }}
                  />
                  <p className="text-gray-500 text-xs mt-2">
                    Set your product price.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 justify-end pt-4">
                  <button
                    onClick={handleCancel}
                    className="px-8 py-3 rounded-lg text-white font-medium border border-gray-600 hover:bg-white hover:bg-opacity-5 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={!productName || !price}
                    className={`px-8 py-3 rounded-lg text-white font-medium transition-colors ${
                      !productName || !price
                        ? "bg-gray-600 cursor-not-allowed"
                        : "bg-blue-700 hover:bg-blue-600"
                    }`}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}