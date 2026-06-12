import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/utils/data';

export const metadata = {
  title: 'Blog — Appliance Repair Tips & Guides | HomeRepairPro',
  description: 'AC, washing machine, fridge repair tips in Hindi & English. Expert guides from HomeRepairPro technicians.',
  alternates: { canonical: 'https://homerepairpro.in/blog' },
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#1B4FD8] py-10 px-4 text-center">
        <h1 className="text-3xl font-black text-white mb-2">Repair Tips & Guides</h1>
        <p className="text-blue-200">AC, washing machine, fridge repair ke baare mein sab kuch jaano</p>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="relative h-48 flex-shrink-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 400px"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 bg-[#1B4FD8] text-white text-xs font-semibold px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                      <span>📅 {post.date}</span>
                      <span>⏱ {post.readTime} read</span>
                    </div>
                    <h2 className="font-bold text-gray-900 mb-2 leading-snug group-hover:text-[#1B4FD8] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm flex-1">{post.excerpt}</p>
                    <span className="mt-3 text-[#1B4FD8] font-semibold text-sm">Padhein →</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-[#F97316] text-center">
        <p className="text-white font-bold text-lg mb-1">Repair chahiye? Abhi call karo</p>
        <a href="tel:+918889539174" className="inline-block bg-white text-[#F97316] font-black px-8 py-3 rounded-xl mt-2">
          📞 +91 88895 39174
        </a>
      </section>
    </>
  );
}
