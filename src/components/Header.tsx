"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl">🐾</span>
            <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2D5A3D]">
              Pets Locally
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-gray-700 hover:text-[#2D5A3D] font-medium transition-colors">
              Services
            </Link>
            <Link href="/locations" className="text-gray-700 hover:text-[#2D5A3D] font-medium transition-colors">
              Locations
            </Link>
            <Link href="/guides" className="text-gray-700 hover:text-[#2D5A3D] font-medium transition-colors">
              Pet Guides
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#2D5A3D] font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="btn-primary text-sm">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-4">
              <Link href="/services" className="text-gray-700 hover:text-[#2D5A3D] font-medium" onClick={() => setMobileMenuOpen(false)}>
                Services
              </Link>
              <Link href="/locations" className="text-gray-700 hover:text-[#2D5A3D] font-medium" onClick={() => setMobileMenuOpen(false)}>
                Locations
              </Link>
              <Link href="/guides" className="text-gray-700 hover:text-[#2D5A3D] font-medium" onClick={() => setMobileMenuOpen(false)}>
                Pet Guides
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-[#2D5A3D] font-medium" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="btn-primary text-center" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
