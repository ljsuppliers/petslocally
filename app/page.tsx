import Link from "next/link";
import Image from "next/image";

const services = [
  { name: "Vets", icon: "🏥", description: "Find trusted veterinary practices near you", href: "/services#vets" },
  { name: "Dog Groomers", icon: "✂️", description: "Professional grooming services for all breeds", href: "/services#groomers" },
  { name: "Dog Walkers", icon: "🦮", description: "Reliable walkers to exercise your furry friend", href: "/services#walkers" },
  { name: "Pet Shops", icon: "🛒", description: "Quality food, toys, and supplies locally", href: "/services#pet-shops" },
  { name: "Kennels", icon: "🏠", description: "Safe boarding when you are away", href: "/services#kennels" },
  { name: "Pet Sitters", icon: "💝", description: "In-home care for your pets", href: "/services#sitters" },
];

const locations = [
  { name: "London", count: "2,400+", href: "/locations/london" },
  { name: "Manchester", count: "800+", href: "/locations/manchester" },
  { name: "Birmingham", count: "750+", href: "/locations/birmingham" },
  { name: "Edinburgh", count: "450+", href: "/locations/edinburgh" },
  { name: "Bristol", count: "380+", href: "/locations/bristol" },
  { name: "Leeds", count: "350+", href: "/locations/leeds" },
];

const guides = [
  { title: "How to Choose a Vet", excerpt: "Finding the right veterinary practice for your pet", href: "/guides/how-to-choose-a-vet" },
  { title: "Dog Grooming Guide", excerpt: "Everything you need to know about keeping your dog well-groomed", href: "/guides/dog-grooming-guide" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-forest)] to-[var(--color-sage)] text-white py-20 md:py-32">
        <div className="content-wide">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Find Trusted Pet Services
              <span className="text-[var(--color-gold)]"> Near You</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 opacity-90">
              Discover vets, groomers, dog walkers, and more across the UK. 
              Your pet deserves the best local care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/locations" className="btn-primary bg-[var(--color-gold)] text-[var(--color-charcoal)] hover:bg-white">
                Find Services Near Me
              </Link>
              <Link href="/guides" className="btn-outline border-white text-white hover:bg-white hover:text-[var(--color-forest)]">
                Read Pet Care Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="content-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[var(--color-forest)]">
              Pet Services We Cover
            </h2>
            <p className="text-lg text-[var(--color-charcoal)]/70 max-w-2xl mx-auto">
              Whatever your pet needs, find trusted local providers in your area
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link key={service.name} href={service.href} className="card group">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-[var(--color-forest)] transition-colors">
                  {service.name}
                </h3>
                <p className="text-[var(--color-charcoal)]/70">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="section-padding bg-[var(--color-warm-white)]">
        <div className="content-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-[var(--color-forest)]">
              Popular Locations
            </h2>
            <p className="text-lg text-[var(--color-charcoal)]/70 max-w-2xl mx-auto">
              Browse pet services in major UK cities and towns
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {locations.map((location) => (
              <Link 
                key={location.name} 
                href={location.href}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <h3 className="font-display font-bold text-lg group-hover:text-[var(--color-forest)] transition-colors">
                  {location.name}
                </h3>
                <p className="text-sm text-[var(--color-sage)] font-semibold">{location.count} services</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/locations" className="btn-outline">
              View All Locations
            </Link>
          </div>
        </div>
      </section>

      {/* Why PetsLocally */}
      <section className="section-padding">
        <div className="content-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-[var(--color-forest)]">
                Why Pet Owners Trust Us
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-2xl">✅</div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-1">Verified Listings</h3>
                    <p className="text-[var(--color-charcoal)]/70">Every service provider is checked for quality and reliability</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-1">Truly Local</h3>
                    <p className="text-[var(--color-charcoal)]/70">Find services in your neighbourhood, not miles away</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl">💬</div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-1">Real Reviews</h3>
                    <p className="text-[var(--color-charcoal)]/70">Read honest feedback from local pet owners</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl">🆓</div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-1">Completely Free</h3>
                    <p className="text-[var(--color-charcoal)]/70">No fees, no registration required to find services</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[var(--color-sage)]/20 to-[var(--color-forest)]/10 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🐕 🐈 🐰</div>
              <p className="font-display text-2xl font-bold text-[var(--color-forest)] mb-2">
                10,000+ Pet Services
              </p>
              <p className="text-[var(--color-charcoal)]/70">
                Listed across the UK
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guides Preview */}
      <section className="section-padding bg-[var(--color-forest)] text-white">
        <div className="content-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Pet Care Guides
            </h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Expert advice to help you care for your furry friends
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {guides.map((guide) => (
              <Link 
                key={guide.title}
                href={guide.href}
                className="bg-white/10 rounded-xl p-8 hover:bg-white/20 transition-colors group"
              >
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-[var(--color-gold)] transition-colors">
                  {guide.title}
                </h3>
                <p className="opacity-80">{guide.excerpt}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/guides" className="btn-primary bg-[var(--color-gold)] text-[var(--color-charcoal)] hover:bg-white">
              View All Guides
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="content-narrow text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-[var(--color-forest)]">
            Ready to Find Pet Services?
          </h2>
          <p className="text-lg text-[var(--color-charcoal)]/70 mb-8 max-w-xl mx-auto">
            Browse thousands of trusted vets, groomers, walkers, and more in your local area.
          </p>
          <Link href="/locations" className="btn-primary">
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
