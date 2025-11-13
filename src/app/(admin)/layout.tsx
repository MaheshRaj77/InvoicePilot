'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { Home, Users, ShoppingCart, FileText, BarChart3, Settings, LogOut } from 'lucide-react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-indigo-600">InvoicePilot</h1>
          <p className="text-xs text-gray-500 mt-1">Admin Dashboard</p>
        </div>

        <nav className="p-4 space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 rounded-lg transition"
          >
            <Home size={20} />
            <span>Dashboard</span>
          </Link>

          <Link
            href="/customers"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 rounded-lg transition"
          >
            <Users size={20} />
            <span>Customers</span>
          </Link>

          <Link
            href="/products"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 rounded-lg transition"
          >
            <ShoppingCart size={20} />
            <span>Products</span>
          </Link>

          <Link
            href="/orders"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 rounded-lg transition"
          >
            <ShoppingCart size={20} />
            <span>Orders</span>
          </Link>

          <Link
            href="/invoices"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 rounded-lg transition"
          >
            <FileText size={20} />
            <span>Invoices</span>
          </Link>

          <Link
            href="/reports"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 rounded-lg transition"
          >
            <BarChart3 size={20} />
            <span>Reports</span>
          </Link>

          <Link
            href="/settings"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 rounded-lg transition"
          >
            <Settings size={20} />
            <span>Settings</span>
          </Link>
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition font-medium">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
