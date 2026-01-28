import Link from "next/link";
import Image from "next/image";
import { getContentByType } from "@/lib/content";

export const metadata = {
  title: "Pet News | Pets Locally",
  description: "Latest news and updates from the UK pet industry. Stay informed about pet health, regulations, and trends.",
};

export default function NewsPage() {
  const news = getContentByType('news');
  
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-forest)] to-[var(--color-sage)] text-white py-16">
        <div className="content-wide">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Pet News
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Stay updated with the latest news from the UK pet industry
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="content-wide">
          {news.length > 0 ? (
            <div className="space-y-8">
              {news.map((item, index) => (
                <article 
                  key={item.slug}
                  className={`group ${index === 0 ? 'pb-8 border-b border-gray-200' : ''}`}
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    {item.image && (
                      <Link href={`/news/${item.slug}`} className="block aspect-video relative overflow-hidden rounded-xl">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </Link>
                    )}
                    <div className={item.image ? "md:col-span-2" : "md:col-span-3"}>
                      <time className="text-sm text-gray-400">
                        {new Date(item.date).toLocaleDateString('en-GB', { 
                          day: 'numeric', 
                          month: 'long', 
                          year: 'numeric' 
                        })}
                      </time>
                      <h2 className="font-display text-2xl font-bold my-2 group-hover:text-[var(--color-forest)] transition-colors">
                        <Link href={`/news/${item.slug}`}>
                          {item.title}
                        </Link>
                      </h2>
                      <p className="text-[var(--color-charcoal)]/70 mb-4">
                        {item.description}
                      </p>
                      <Link 
                        href={`/news/${item.slug}`}
                        className="text-[var(--color-forest)] font-semibold hover:underline"
                      >
                        Read more →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500">News articles coming soon.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
