import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "PetsLocally | Find Local Pet Services Across the UK",
    template: "%s | PetsLocally"
  },
  description: "Find trusted local pet services near you. Vets, groomers, dog walkers, pet shops, and more across the UK.",
  metadataBase: new URL("https://petslocally.co.uk"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="paw-pattern">
        {/* Header */}
        <header className="bg-[var(--color-warm-white)] shadow-sm sticky top-0 z-50">
          <div className="content-wide">
            <nav className="flex items-center justify-between py-4">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-3xl">🐾</span>
                <span className="font-display text-xl font-bold text-[var(--color-forest)]">
                  PetsLocally
                </span>
              </Link>
              <div className="hidden md:flex items-center gap-8">
                <Link href="/services" className="nav-link">Services</Link>
                <Link href="/locations" className="nav-link">Locations</Link>
                <Link href="/guides" className="nav-link">Guides</Link>
                <Link href="/about" className="nav-link">About</Link>
                <Link href="/contact" className="btn-primary">Contact</Link>
              </div>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-[var(--color-charcoal)] text-[var(--color-cream)] py-16">
          <div className="content-wide">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🐾</span>
                  <span className="font-display text-lg font-bold">PetsLocally</span>
                </div>
                <p className="text-sm opacity-80">
                  Helping pet owners find trusted local services across the UK since 2026.
                </p>
              </div>
              <div>
                <h4 className="font-display font-bold mb-4">Services</h4>
                <ul className="space-y-2 text-sm opacity-80">
                  <li><Link href="/services#vets" className="hover:opacity-100">Vets</Link></li>
                  <li><Link href="/services#groomers" className="hover:opacity-100">Dog Groomers</Link></li>
                  <li><Link href="/services#walkers" className="hover:opacity-100">Dog Walkers</Link></li>
                  <li><Link href="/services#pet-shops" className="hover:opacity-100">Pet Shops</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-display font-bold mb-4">Popular Locations</h4>
                <ul className="space-y-2 text-sm opacity-80">
                  <li><Link href="/locations/london" className="hover:opacity-100">London</Link></li>
                  <li><Link href="/locations/manchester" className="hover:opacity-100">Manchester</Link></li>
                  <li><Link href="/locations/birmingham" className="hover:opacity-100">Birmingham</Link></li>
                  <li><Link href="/locations/edinburgh" className="hover:opacity-100">Edinburgh</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-display font-bold mb-4">Resources</h4>
                <ul className="space-y-2 text-sm opacity-80">
                  <li><Link href="/guides" className="hover:opacity-100">Pet Care Guides</Link></li>
                  <li><Link href="/about" className="hover:opacity-100">About Us</Link></li>
                  <li><Link href="/contact" className="hover:opacity-100">Contact</Link></li>
                  <li><Link href="/sitemap.xml" className="hover:opacity-100">Sitemap</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm opacity-60">
              <p>&copy; 2026 PetsLocally. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
