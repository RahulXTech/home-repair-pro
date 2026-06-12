import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogContent } from '@/utils/blogContent';
import { blogPosts } from '@/utils/data';
import { blogSchema, faqSchema } from '@/utils/schema';
import FAQ from '@/components/FAQ/FAQ';

export async function generateStaticParams() {
  return blogContent.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogContent.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | HomeRepairPro Blog`,
    description: post.excerpt,
    keywords: `${post.category}, home appliance repair, ${post.slug.replace(/-/g, ' ')}`,
    alternates: { canonical: `https://homerepairpro.in/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogContent.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema(post)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(post.content.faqs)) }}
      />

      <article className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-[#1B4FD8]">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[#1B4FD8]">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{post.title.slice(0, 40)}...</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-[#1B4FD8] text-white text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
          <span className="text-gray-500 text-sm">📅 {post.date}</span>
          <span className="text-gray-500 text-sm">⏱ {post.readTime} read</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-5 leading-tight">{post.title}</h1>

        <div className="relative h-56 md:h-80 rounded-2xl overflow-hidden mb-6">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 700px"
          />
        </div>

        <p className="text-gray-700 text-base leading-relaxed mb-8">{post.content.intro}</p>

        <div className="space-y-7">
          {post.content.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{section.heading}</h2>
              <p className="text-gray-700 leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>

        <div className="my-10 bg-[#1B4FD8] rounded-2xl p-6 text-center">
          <p className="text-white font-bold text-lg mb-1">Professional Help Chahiye?</p>
          <p className="text-blue-200 text-sm mb-4">Same day service, verified technicians, starting ₹299</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+918889539174"
              className="bg-[#F97316] text-white font-bold px-6 py-3 rounded-xl hover:bg-orange-600"
            >
              📞 Call +91 88895 39174
            </a>
            <a
              href="https://wa.me/918889539174"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-xl hover:bg-green-500"
            >
              <WhatsAppIcon className="w-5 h-5" /> WhatsApp Now
            </a>
          </div>
        </div>

        <FAQ items={post.content.faqs} title="Frequently Asked Questions" />

        {related.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Aur Padhein</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="flex gap-3 p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group">
                  <div className="relative w-20 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      className="object-cover"
                      sizes="80px"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">{r.category}</p>
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-[#1B4FD8] leading-snug">{r.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
