import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-gradient text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🐾</span>
              <span className="font-[family-name:var(--font-playfair)] text-xl font-bold">
                Pets Locally
              </span>
            </Link>
            <p className="text-gray-300 text-sm">
              Your trusted guide to finding quality pet services across the UK. Helping pet owners connect with local vets, groomers, and more.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/services#vets" className="hover:text-[#D4A574] transition-colors">Veterinary Clinics</Link></li>
              <li><Link href="/services#groomers" className="hover:text-[#D4A574] transition-colors">Dog Groomers</Link></li>
              <li><Link href="/services#walkers" className="hover:text-[#D4A574] transition-colors">Dog Walkers</Link></li>
              <li><Link href="/services#shops" className="hover:text-[#D4A574] transition-colors">Pet Shops</Link></li>
              <li><Link href="/services#kennels" className="hover:text-[#D4A574] transition-colors">Kennels & Catteries</Link></li>
            </ul>
          </div>

          {/* Popular Locations */}
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold mb-4">Popular Locations</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/locations/london" className="hover:text-[#D4A574] transition-colors">London</Link></li>
              <li><Link href="/locations/manchester" className="hover:text-[#D4A574] transition-colors">Manchester</Link></li>
              <li><Link href="/locations/birmingham" className="hover:text-[#D4A574] transition-colors">Birmingham</Link></li>
              <li><Link href="/locations/edinburgh" className="hover:text-[#D4A574] transition-colors">Edinburgh</Link></li>
              <li><Link href="/locations/bristol" className="hover:text-[#D4A574] transition-colors">Bristol</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/guides" className="hover:text-[#D4A574] transition-colors">Pet Guides</Link></li>
              <li><Link href="/about" className="hover:text-[#D4A574] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#D4A574] transition-colors">Contact</Link></li>
              <li><Link href="/sitemap.xml" className="hover:text-[#D4A574] transition-colors">Sitemap</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Pets Locally. All rights reserved.</p>
          <p className="mt-2">Made with ❤️ for pet lovers across the UK</p>
        </div>
      </div>
    </footer>
  );
}
