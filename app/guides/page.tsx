import Link from "next/link";
import { getContentByType } from "@/lib/content";

export const metadata = {
  title: "Pet Care Guides",
  description: "Expert guides to help you care for your pets. Tips on choosing vets, grooming, feeding, and more.",
};

export default function GuidesPage() {
  const guides = getContentByType('guides');
  
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-forest)] to-[var(--color-sage)] text-white py-16">
        <div className="content-wide">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Pet Care Guides
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Expert advice and tips to help you give your pet the best care possible
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="content-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guides.map((guide) => (
              <Link 
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="card group"
              >
                <span className="text-sm text-[var(--color-sage)] font-semibold">{guide.readTime}</span>
                <h2 className="font-display text-xl font-bold my-2 group-hover:text-[var(--color-forest)] transition-colors">
                  {guide.title}
                </h2>
                <p className="text-[var(--color-charcoal)]/70">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
