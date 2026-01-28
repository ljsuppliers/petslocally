import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getContentBySlug, getAllSlugs } from "@/lib/content";
import { marked } from "marked";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs("locations");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = getContentBySlug("locations", slug);
  
  if (!content) {
    return { title: "Location Not Found" };
  }

  return {
    title: `${content.title} | Pets Locally`,
    description: content.description,
    openGraph: {
      title: content.title,
      description: content.description,
      images: content.image ? [content.image] : [],
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const content = getContentBySlug("locations", slug);

  if (!content) {
    notFound();
  }

  const htmlContent = marked(content.content);

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm mb-4">
            <Link href="/" className="text-[#2D5A3D] hover:underline">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/locations" className="text-[#2D5A3D] hover:underline">Locations</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">{content.title.replace("Pet Services in ", "")}</span>
          </nav>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#2D5A3D]">
            {content.title}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            {content.description}
          </p>
        </div>
      </section>

      {/* Featured Image */}
      {content.image && (
        <section className="bg-white">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <img 
              src={content.image} 
              alt={content.title}
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <article 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </section>

      {/* Related Locations */}
      <section className="py-12 bg-[#FDF8F3]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-[#2D5A3D]">
            Explore Other Locations
          </h2>
          <div className="flex flex-wrap gap-3">
            {["London", "Manchester", "Birmingham", "Edinburgh", "Bristol"].map((city) => {
              const citySlug = city.toLowerCase();
              if (citySlug === slug) return null;
              return (
                <Link 
                  key={city}
                  href={`/locations/${citySlug}`}
                  className="px-4 py-2 bg-white rounded-full border border-[#D4A574] hover:bg-[#2D5A3D] hover:text-white hover:border-[#2D5A3D] transition-colors"
                >
                  {city}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#E8F5E9]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4 text-[#2D5A3D]">
            Need Help Choosing a Service?
          </h2>
          <p className="text-gray-700 mb-6">
            Check out our pet care guides for expert advice on choosing the right services for your pet.
          </p>
          <Link href="/guides" className="btn-primary">
            Browse Pet Guides
          </Link>
        </div>
      </section>
    </div>
  );
}
