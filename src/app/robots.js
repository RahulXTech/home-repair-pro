export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/landing/', '/admin/'],
      },
    ],
    sitemap: 'https://homerepairpro.in/sitemap.xml',
  };
}
