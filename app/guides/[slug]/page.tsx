import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getContentBySlug, getAllSlugs, getContentByType, ContentItem } from "@/lib/content";
import { marked } from "marked";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs("guides");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = getContentBySlug("guides", slug);
  
  if (!content) {
    return { title: "Guide Not Found" };
  }

  return {
    title: `${content.title} | Pets Locally`,
    description: content.description,
    openGraph: {
      title: content.title,
      description: content.description,
      type: "article",
      images: content.image ? [content.image] : [],
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const content = getContentBySlug("guides", slug);

  if (!content) {
    notFound();
  }

  const htmlContent = marked(content.content);
  const allGuides = getContentByType("guides");
  const relatedGuides = allGuides.filter((g: ContentItem) => g.slug !== slug).slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm mb-4">
            <Link href="/" className="text-[#2D5A3D] hover:underline">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/guides" className="text-[#2D5A3D] hover:underline">Guides</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Article</span>
          </nav>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#2D5A3D]">
            {content.title}
          </h1>
          <p className="text-xl text-gray-700">
            {content.description}
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Published on {new Date(content.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric"
            })}
          </div>
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

      {/* Author/Source Note */}
      <section className="py-8 bg-[#E8F5E9]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-start gap-4 p-6 bg-white rounded-lg">
            <span className="text-4xl">🐾</span>
            <div>
              <h3 className="font-bold text-[#2D5A3D] mb-1">About This Guide</h3>
              <p className="text-gray-600 text-sm">
                This guide was written by pet care enthusiasts and reviewed for accuracy. 
                For specific health concerns, always consult with a qualified veterinarian.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      {relatedGuides.length > 0 && (
        <section className="py-12 bg-[#FDF8F3]">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-[#2D5A3D]">
              Related Guides
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedGuides.map((guide: ContentItem) => (
                <Link 
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="card group"
                >
                  {guide.image && (
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={guide.image} 
                        alt={guide.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-bold text-[#2D5A3D] group-hover:text-[#E67E22] transition-colors">
                      {guide.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 bg-[#2D5A3D]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Ready to Find Pet Services?
          </h2>
          <p className="text-gray-200 mb-6">
            Now that you're informed, find trusted services near you.
          </p>
          <Link href="/locations" className="btn-secondary">
            Browse Locations
          </Link>
        </div>
      </section>
    </div>
  );
}
