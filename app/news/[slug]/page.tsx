import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getContentBySlug, getAllSlugs, getContentByType, ContentItem } from "@/lib/content";
import { marked } from "marked";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs("news");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = getContentBySlug("news", slug);
  
  if (!content) {
    return { title: "Article Not Found" };
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

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const content = getContentBySlug("news", slug);

  if (!content) {
    notFound();
  }

  const htmlContent = marked(content.content);
  const allNews = getContentByType("news");
  const relatedNews = allNews.filter((n: ContentItem) => n.slug !== slug).slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm mb-4">
            <Link href="/" className="text-[#2D5A3D] hover:underline">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/news" className="text-[#2D5A3D] hover:underline">News</Link>
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
            <div className="relative aspect-[21/9] rounded-xl overflow-hidden shadow-lg">
              <Image 
                src={content.image} 
                alt={content.title}
                fill
                className="object-cover"
                priority
              />
            </div>
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

      {/* Related News */}
      {relatedNews.length > 0 && (
        <section className="py-12 bg-[#FDF8F3]">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-[#2D5A3D]">
              More News
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedNews.map((item: ContentItem) => (
                <Link 
                  key={item.slug}
                  href={`/news/${item.slug}`}
                  className="card group overflow-hidden"
                >
                  {item.image && (
                    <div className="aspect-video relative overflow-hidden">
                      <Image 
                        src={item.image} 
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <time className="text-xs text-gray-400">
                      {new Date(item.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short"
                      })}
                    </time>
                    <h3 className="font-bold text-[#2D5A3D] group-hover:text-[#E67E22] transition-colors mt-1">
                      {item.title}
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
            Find Pet Services Near You
          </h2>
          <p className="text-gray-200 mb-6">
            Discover trusted vets, groomers, and more in your area.
          </p>
          <Link href="/locations" className="btn-secondary">
            Browse Locations
          </Link>
        </div>
      </section>
    </div>
  );
}
