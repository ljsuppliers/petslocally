import Link from "next/link";
import { getContentByType } from "@/lib/content";

export const metadata = {
  title: "Pet Services by Location",
  description: "Find local pet services in cities and towns across the UK. Vets, groomers, dog walkers, and more near you.",
};

export default function LocationsPage() {
  const locations = getContentByType('locations');
  
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-forest)] to-[var(--color-sage)] text-white py-16">
        <div className="content-wide">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Find Pet Services by Location
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Browse trusted vets, groomers, dog walkers, and more in your area
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="content-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <Link 
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="card group"
              >
                <h2 className="font-display text-xl font-bold mb-2 group-hover:text-[var(--color-forest)] transition-colors">
                  {location.title}
                </h2>
                <p className="text-[var(--color-charcoal)]/70 text-sm line-clamp-2">
                  {location.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
