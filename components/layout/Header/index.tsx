import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-background text-foreground shadow-md">
      <div className="text-4xl font-extralight text-chart-1">Phantom Power</div>
      <nav className="flex space-x-4">
        <a href="/dashboard" className="hover:text-chart-2">Dashboard</a>
        <a href="/blog" className="hover:text-chart-3">Blog</a>
        <a href="/features" className="hover:text-chart-4">Features</a>
        <a href="/contact" className="hover:text-chart-5">Contact</a>
      </nav>
    </header>
  );
};

export default Header; 