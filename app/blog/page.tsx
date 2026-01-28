import Link from "next/link";
import Image from "next/image";
import { getContentByType } from "@/lib/content";

export const metadata = {
  title: "Pet Blog | Pets Locally",
  description: "Tips, advice, and guides for UK pet owners. Learn about pet care, training, nutrition, and more.",
};

export default function BlogPage() {
  const posts = getContentByType('blog');
  
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-forest)] to-[var(--color-sage)] text-white py-16">
        <div className="content-wide">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Pet Blog
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Tips, advice, and insights for pet owners across the UK
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="content-wide">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.slug} className="card group overflow-hidden">
                  {post.image && (
                    <Link href={`/blog/${post.slug}`} className="block aspect-video relative overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                  )}
                  <div className="p-6">
                    <span className="text-sm text-[var(--color-sage)] font-semibold">{post.readTime}</span>
                    <h2 className="font-display text-xl font-bold my-2 group-hover:text-[var(--color-forest)] transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-[var(--color-charcoal)]/70 line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500">Blog posts coming soon.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
