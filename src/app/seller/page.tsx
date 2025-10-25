"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import logo from "./nexa.png";
import { Users, ShoppingCart, FileText, TrendingUp, Bell, Mail, Search, Settings, LogOut, Home, User, Package, Upload } from 'lucide-react';

type PageType = 'Dashboard' | 'Customer' | 'Products' | 'Orders';

export default function Page() {
  const [activeMenu, setActiveMenu] = useState<PageType>('Dashboard');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const statsCards = [
    { value: '2000+', label: 'Total Customers', icon: Users, color: '#120aff' },
    { value: '140+', label: 'Total Products', icon: ShoppingCart, color: '#120aff' },
    { value: '1600+', label: 'Total Orders', icon: FileText, color: '#120aff' },
    { value: '2000+', label: 'Total Sales', icon: TrendingUp, color: '#120aff' }
  ];

  const salesTrendData = [
    { month: 'January', value: 58 },
    { month: 'February', value: 40 },
    { month: 'March', value: 30 },
    { month: 'April', value: 38 },
    { month: 'May', value: 52 },
    { month: 'June', value: 45 },
    { month: 'July', value: 42 },
    { month: 'August', value: 35 },
    { month: 'September', value: 28 }
  ];

  const productViewsData = {
    thisWeek: [60, 45, 35, 62, 48, 52, 58],
    lastWeek: [45, 52, 48, 60, 45, 52, 45]
  };

  const days = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

  const orders = [
    { id: '#23456', product: '👟', customer: 'James Amarachukwu', date: '1st Jan', price: '2 ETH', status: 'Completed' },
    { id: '#23456', product: '⌚', customer: 'Peter Amarachukwu', date: '1st Oct', price: '0.5 ETH', status: 'Pending' },
    { id: '#23456', product: '📱', customer: 'Sonia Amarachukwu', date: '1st Sep', price: '0.2 ETH', status: 'Completed' },
    { id: '#23456', product: '⌚', customer: 'Esther Amachukwu', date: '1st Dec', price: '0.1 ETH', status: 'Pending' },
    { id: '#23456', product: '📱', customer: 'Anatu Amarachukwu', date: '1st May', price: '0.1 ETH', status: 'Completed' },
    { id: '#23456', product: '👟', customer: 'James Amarachukwu', date: '1st Jan', price: '2 ETH', status: 'Completed' },
    { id: '#23456', product: '⌚', customer: 'Peter Amarachukwu', date: '1st Oct', price: '0.5 ETH', status: 'Pending' },
    { id: '#23456', product: '📱', customer: 'Sonia Amarachukwu', date: '1st Sep', price: '0.2 ETH', status: 'Completed' },
    { id: '#23456', product: '⌚', customer: 'Esther Amachukwu', date: '1st Dec', price: '0.1 ETH', status: 'Pending' }
  ];

  const topSoldItems = [
    { name: 'Laptops', percentage: 75 },
    { name: "Men's Wear", percentage: 90 },
    { name: 'T-Shirt', percentage: 60 },
    { name: 'Watches', percentage: 40 },
    { name: 'Laptops', percentage: 75 },
    { name: "Men's Wear", percentage: 90 },
    { name: 'T-Shirt', percentage: 60 },
    { name: 'Watches', percentage: 40 }
  ];

  const customers = [
    { id: 1, avatar: 'https://i.pravatar.cc/100?img=11', name: 'James Amarachukwu', orders: 24, spent: '2.5 ETH' },
    { id: 2, avatar: 'https://i.pravatar.cc/100?img=23', name: 'Peter Amarachukwu', orders: 18, spent: '1.8 ETH' },
    { id: 3, avatar: 'https://i.pravatar.cc/100?img=31', name: 'Sonia Amarachukwu', orders: 32, spent: '3.2 ETH' },
    { id: 4, avatar: 'https://i.pravatar.cc/100?img=44', name: 'Esther Amachukwu', orders: 15, spent: '1.5 ETH' }
  ];

  const menuItems = [
    { icon: Home, label: 'Dashboard' as PageType },
    { icon: User, label: 'Customer' as PageType },
    { icon: Package, label: 'Products' as PageType },
    { icon: FileText, label: 'Orders' as PageType }
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderDashboard = () => (
    <>
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="col-span-2 rounded-xl p-6" style={{ background: 'linear-gradient(135deg, #0b085d 0%, #09074e 100%)' }}>
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
                d={`M 0 ${200 - salesTrendData[0].value * 2} ${salesTrendData.map((d, i) => `L ${(i / (salesTrendData.length - 1)) * 600} ${200 - d.value * 2}`).join(' ')} L 600 200 L 0 200 Z`}
                fill="url(#gradient)"
              />
              <path
                d={`M 0 ${200 - salesTrendData[0].value * 2} ${salesTrendData.map((d, i) => `L ${(i / (salesTrendData.length - 1)) * 600} ${200 - d.value * 2}`).join(' ')}`}
                fill="none"
                stroke="#3933ff"
                strokeWidth="2"
              />
            </svg>
            <div className="flex justify-between mt-2 px-2">
              {['January', 'March', 'May', 'July', 'September'].map((month, i) => (
                <span key={i} className="text-gray-400 text-xs">{month}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl p-6" style={{ background: 'linear-gradient(135deg, #0b085d 0%, #09074e 100%)' }}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white text-lg font-semibold">Product Views</h3>
            <div className="flex gap-3 text-xs">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#3933ff' }}></div>
                <span className="text-gray-400">This week</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00d9ff' }}></div>
                <span className="text-gray-400">Last week</span>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-between h-48 gap-2">
            {days.map((day, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full flex flex-col-reverse gap-1">
                  <div
                    className="w-full rounded"
                    style={{
                      backgroundColor: '#3933ff',
                      height: `${productViewsData.thisWeek[i] * 1.5}px`
                    }}
                  ></div>
                  <div
                    className="w-full rounded"
                    style={{
                      backgroundColor: '#00d9ff',
                      height: `${productViewsData.lastWeek[i] * 1.5}px`
                    }}
                  ></div>
                </div>
                <span className="text-gray-400 text-xs mt-2">{day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 rounded-xl p-6" style={{ background: 'linear-gradient(135deg, #0b085d 0%, #09074e 100%)' }}>
          <h3 className="text-white text-lg font-semibold mb-6">All Orders</h3>
          <table className="w-full">
            <thead>
              <tr className="border-b" style={{ borderColor: '#343178' }}>
                <th className="text-left py-3 text-gray-400 text-sm font-medium">Products</th>
                <th className="text-left py-3 text-gray-400 text-sm font-medium">Order ID</th>
                <th className="text-left py-3 text-gray-400 text-sm font-medium">Customer Name</th>
                <th className="text-left py-3 text-gray-400 text-sm font-medium">Date</th>
                <th className="text-left py-3 text-gray-400 text-sm font-medium">Price</th>
                <th className="text-left py-3 text-gray-400 text-sm font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.slice(0, 1).map((order, i) => (
                <tr key={i}>
                  <td className="py-4 text-2xl">{order.product}</td>
                  <td className="py-4 text-white text-sm">{order.id}</td>
                  <td className="py-4 text-white text-sm">{order.customer}</td>
                  <td className="py-4 text-white text-sm">{order.date}</td>
                  <td className="py-4 text-white text-sm">{order.price}</td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      order.status === 'Completed' 
                        ? 'bg-green-500 bg-opacity-20 text-green-400'
                        : 'bg-red-500 bg-opacity-20 text-red-400'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-xl p-6" style={{ background: 'linear-gradient(135deg, #0b085d 0%, #09074e 100%)' }}>
          <h3 className="text-white text-lg font-semibold mb-6">Top Sold Items</h3>
          <div className="space-y-6">
            {topSoldItems.slice(0, 2).map((item, i) => (
              <div key={i}>
                <div className="flex justify-between mb-2">
                  <span className="text-white text-sm">{item.name}</span>
                  <span className="text-white text-sm">{item.percentage}%</span>
                </div>
                <div className="w-full h-2 rounded-full" style={{ backgroundColor: '#343178' }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      backgroundColor: '#120aff',
                      width: `${item.percentage}%`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  const renderCustomers = () => (
    <div className="grid grid-cols-2 gap-8">
      {customers.map((customer) => (
        <div key={customer.id} className="rounded-xl p-8" style={{ background: 'linear-gradient(135deg, #0b085d 0%, #09074e 100%)' }}>
          <div className="flex flex-col items-center mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <img src={customer.avatar} alt={customer.name} className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 rounded-lg text-white font-semibold" style={{ backgroundColor: '#120aff' }}>
              Public Comment
            </button>
            <button className="px-8 py-3 rounded-lg text-white font-semibold" style={{ backgroundColor: '#120aff' }}>
              Direct Message
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderProducts = () => (
    <div className="grid grid-cols-2 gap-8">
      <div className="rounded-xl p-8 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0b085d 0%, #09074e 100%)' }}>
        <div className="text-center">
          <input
            type="file"
            id="product-image"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          <label htmlFor="product-image" className="cursor-pointer">
            {selectedImage ? (
              <img src={selectedImage} alt="Product" className="w-full max-w-md mx-auto rounded-lg" />
            ) : (
              <div className="w-full max-w-md mx-auto h-96 flex items-center justify-center border-2 border-dashed border-gray-600 rounded-lg">
                <div className="text-center">
                  <Upload className="mx-auto mb-4 text-gray-400" size={48} />
                  <p className="text-gray-400">Click to upload product image</p>
                </div>
              </div>
            )}
          </label>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-white text-sm mb-2">Product Name</label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg text-white outline-none"
            style={{ backgroundColor: '#120aff' }}
            placeholder="Enter product name"
          />
          <p className="text-gray-400 text-xs mt-2">A product name is required and recommended to be unique</p>
        </div>

        <div>
          <label className="block text-white text-sm mb-2">Description</label>
          <textarea
            className="w-full px-4 py-3 rounded-lg text-white outline-none h-32 resize-none"
            style={{ backgroundColor: '#120aff' }}
            placeholder="Enter product description"
          />
          <p className="text-gray-400 text-xs mt-2">Set a description to the product for better visibility</p>
        </div>

        <div>
          <label className="block text-white text-sm mb-2">Pricing</label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg text-white outline-none"
            style={{ backgroundColor: '#120aff' }}
            placeholder="Enter price in ETH"
          />
        </div>

        <button className="w-full py-3 rounded-lg text-white font-semibold" style={{ backgroundColor: '#120aff' }}>
          Add Product
        </button>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 rounded-xl p-6" style={{ background: 'linear-gradient(135deg, #0b085d 0%, #09074e 100%)' }}>
        <h3 className="text-white text-lg font-semibold mb-6">All Orders</h3>
        <div className="overflow-y-auto max-h-[600px]">
          <table className="w-full">
            <thead className="sticky top-0" style={{ background: 'linear-gradient(135deg, #0b085d 0%, #09074e 100%)' }}>
              <tr className="border-b" style={{ borderColor: '#343178' }}>
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
                <tr key={i} className="border-b" style={{ borderColor: '#343178' }}>
                  <td className="py-4 text-2xl">{order.product}</td>
                  <td className="py-4 text-white text-sm">{order.id}</td>
                  <td className="py-4 text-white text-sm">{order.customer}</td>
                  <td className="py-4 text-white text-sm">{order.date}</td>
                  <td className="py-4 text-white text-sm">{order.price}</td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      order.status === 'Completed' 
                        ? 'bg-green-500 bg-opacity-20 text-green-400'
                        : 'bg-red-500 bg-opacity-20 text-red-400'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-xl p-6" style={{ background: 'linear-gradient(135deg, #0b085d 0%, #09074e 100%)' }}>
        <h3 className="text-white text-lg font-semibold mb-6">Top Sold Items</h3>
        <div className="space-y-4 overflow-y-auto max-h-[600px]">
          {topSoldItems.map((item, i) => (
            <div key={i}>
              <div className="flex justify-between mb-2">
                <span className="text-white text-sm">{item.name}</span>
                <span className="text-white text-sm">{item.percentage}%</span>
              </div>
              <div className="w-full h-2 rounded-full" style={{ backgroundColor: '#343178' }}>
                <div
                  className="h-full rounded-full"
                  style={{
                    backgroundColor: i % 2 === 0 ? '#120aff' : '#00d9ff',
                    width: `${item.percentage}%`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen" style={{ background: 'linear-gradient(135deg, #020213 0%, #04031f 25%, #06042f 50%, #09074e 75%, #0b085d 100%)' }}>
      <div className="w-64 flex flex-col" style={{ background: 'linear-gradient(180deg, #06042f 0%, #07053e 50%, #09074e 100%)' }}>
        <div className="p-6">
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              alt="logo"
              width={200}
              height={60}
              quality={100}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        <div className="flex-1 px-4">
          {menuItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveMenu(item.label)}
              className={`flex items-center gap-3 px-4 py-3 mb-2 rounded-lg cursor-pointer transition-all ${
                activeMenu === item.label ? 'bg-blue-600 bg-opacity-20' : 'hover:bg-white hover:bg-opacity-5'
              }`}
            >
              <item.icon className="text-white" size={20} />
              <span className="text-white">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="px-4 pb-6">
          <div className="flex items-center gap-3 px-4 py-3 mb-2 rounded-lg cursor-pointer hover:bg-white hover:bg-opacity-5">
            <Settings className="text-white" size={20} />
            <span className="text-white">Settings</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer hover:bg-white hover:bg-opacity-5">
            <LogOut className="text-white" size={20} />
            <span className="text-white">Log out</span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex items-center justify-between px-8 py-4" style={{ background: 'linear-gradient(90deg, #04031f 0%, #06042f 100%)' }}>
          <div className="text-white text-xl">
            {activeMenu === 'Products' ? 'Add New Product' : `Hello, Robert Jake 👋`}
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search your products"
                className="px-4 py-2 rounded-lg text-white text-sm outline-none w-80"
                style={{ backgroundColor: '#0b085d' }}
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            
            <div className="relative">
              <Bell className="text-white cursor-pointer" size={20} />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            
            <Mail className="text-white cursor-pointer" size={20} />
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-600 overflow-hidden">
                <img src="https://i.pravatar.cc/100?img=12" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-white text-sm font-medium">Robert Jake</div>
                <div className="text-gray-400 text-xs">Merchant</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8">
          <div className="grid grid-cols-4 gap-6 mb-8">
            {statsCards.map((stat, index) => (
              <div key={index} className="rounded-xl p-6" style={{ background: 'linear-gradient(135deg, #0b085d 0%, #09074e 100%)' }}>
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

          {activeMenu === 'Dashboard' && renderDashboard()}
          {activeMenu === 'Customer' && renderCustomers()}
          {activeMenu === 'Products' && renderProducts()}
          {activeMenu === 'Orders' && renderOrders()}
        </div>
      </div>
    </div>
  );
}