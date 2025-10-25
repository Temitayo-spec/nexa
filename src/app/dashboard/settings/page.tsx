"use client";

import { useState, ChangeEvent } from "react";
import Image from "next/image";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<"profile" | "password">("profile");

  // Profile state
  const [fullName, setFullName] = useState("Robert Jake");
  const [email, setEmail] = useState("robert.jake@nexa.io");
  const [profilePic, setProfilePic] = useState("https://i.pravatar.cc/150?img=12");

  // Password state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleProfilePicChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePic(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-8 bg-[#020213] text-white min-h-screen">
      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b border-gray-700">
        {["profile", "password"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 font-semibold ${
              activeTab === tab
                ? "border-b-2 border-blue-500 text-white"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab(tab as "profile" | "password")}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "profile" && (
        <section className="bg-[#0b085d] rounded-xl p-6 max-w-4xl mx-auto flex flex-col gap-6">
          {/* Profile Picture & Info */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="relative w-24 h-24 rounded-full overflow-hidden">
              <Image
                src={profilePic}
                alt="Profile"
                width={96}
                height={96}
                className="object-cover rounded-full"
              />
              <label className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-1 cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleProfilePicChange}
                />
                ✎
              </label>
            </div>

            <div className="flex-1 flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col w-full">
                  <label className="text-gray-400 text-sm">Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="px-4 py-2 rounded-lg text-white text-sm outline-none bg-[#1a1670] w-full"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-gray-400 text-sm">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-2 rounded-lg text-white text-sm outline-none bg-[#1a1670] w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === "password" && (
        <section className="bg-[#0b085d] rounded-xl p-6 max-w-4xl mx-auto flex flex-col gap-4">
          <input
            type="password"
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="px-4 py-2 rounded-lg text-white text-sm outline-none bg-[#1a1670] w-full"
          />
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="px-4 py-2 rounded-lg text-white text-sm outline-none bg-[#1a1670] w-full"
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="px-4 py-2 rounded-lg text-white text-sm outline-none bg-[#1a1670] w-full"
          />
          <button className="mt-4 px-4 py-2 rounded-lg font-semibold w-40 bg-blue-700 hover:bg-blue-600 transition">
            Update Password
          </button>
        </section>
      )}
    </div>
  );
}