import { notFound } from 'next/navigation';
import { services, cities } from '@/utils/data';
import ServiceCityPage from '@/components/ServiceCityPage/ServiceCityPage';

function parseSlug(slug) {
  for (const service of services) {
    for (const city of cities) {
      if (slug === `${service.slug}-${city.slug}`) {
        return { service, city };
      }
    }
  }
  return null;
}

export async function generateStaticParams() {
  const params = [];
  for (const service of services) {
    for (const city of cities) {
      params.push({ slug: `${service.slug}-${city.slug}` });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const parsed = parseSlug(slug);
  if (!parsed) return {};
  const { service, city } = parsed;

  return {
    title: `${service.name} in ${city.name} — Same Day | HomeRepairPro`,
    description: `${service.name} in ${city.name} — Call +91 88895 39174. Same day service, verified technicians, starting ₹299. GST & MSME registered.`,
    keywords: `${service.name} ${city.name}, ${service.slug} ${city.slug}, ${service.slug} near me ${city.name}`,
    alternates: { canonical: `https://homerepairpro.in/${slug}` },
    openGraph: {
      title: `${service.name} in ${city.name} — HomeRepairPro`,
      description: `Same day ${service.name} in ${city.name}. Verified technicians, starting ₹299.`,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const parsed = parseSlug(slug);
  if (!parsed) notFound();

  return <ServiceCityPage service={parsed.service} city={parsed.city} />;
}
