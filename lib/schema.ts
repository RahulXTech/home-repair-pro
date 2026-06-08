export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'HomeRepairPro',
    telephone: '+918889539174',
    url: 'https://homerepairpro.in',
    logo: 'https://www.homerepairpro.in/logo-round.png',
    description:
      'HomeRepairPro — Professional home appliance repair service. AC, Washing Machine, Refrigerator, Chimney, Geyser, Microwave repair in Indore, Bhopal and 8 more cities.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'Madhya Pradesh',
    },
    areaServed: [
      'Indore', 'Bhopal', 'Ujjain', 'Mhow', 'Dewas',
      'Sehore', 'Jabalpur', 'Jaipur', 'Pritampur', 'Mumbai',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Appliance Repair Services',
    },
    priceRange: '₹299 - ₹2999',
    openingHours: 'Mo-Su 06:00-22:00',
    taxID: '23DNCPG4775E1Z7',
    identifier: 'UDYAM-MP-10-0042011',
  };
}

export function servicePageSchema(service: string, city: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service} in ${city}`,
    serviceType: service,
    provider: {
      '@type': 'LocalBusiness',
      name: 'HomeRepairPro',
      telephone: '+918889539174',
      url: 'https://homerepairpro.in',
    },
    areaServed: {
      '@type': 'City',
      name: city,
    },
    url,
    description: `Professional ${service} in ${city} by verified technicians. Same day service, starting ₹299. GST & MSME registered.`,
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

export function blogSchema(post: {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: `https://homerepairpro.in/blog/${post.slug}`,
    author: {
      '@type': 'Organization',
      name: 'HomeRepairPro',
    },
    publisher: {
      '@type': 'Organization',
      name: 'HomeRepairPro',
      url: 'https://homerepairpro.in',
    },
  };
}
