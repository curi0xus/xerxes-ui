import React from 'react';
import { Navigation } from './Navigation';
import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-white relative">
      <Navigation />
      <div className="flex-1 flex flex-col lg:ml-0">
        <Header />
        <main className="flex-1 p-3 sm:p-4 lg:p-6 overflow-auto bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
};