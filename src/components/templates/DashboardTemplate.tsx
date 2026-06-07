'use client';

import React from 'react';
import { DarkModeToggle } from '@/components/atoms/DarkModeToggle';
import Link from 'next/link';

interface DashboardTemplateProps {
  children: React.ReactNode;
  title: string;
}

export const DashboardTemplate: React.FC<DashboardTemplateProps> = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">
      <header className="bg-white dark:bg-gray-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h1>
          <Link
            href="/"
            className="inline-block bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200">
            Home
          </Link>
          <DarkModeToggle />
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};