/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.jrmundofest.com.br',
  generateRobotsFile: true,
  generateIndexSitemap: false,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    additionalSitemaps: [
      'https://www.jrmundofest.com.br/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom transformation for each path
    const priority = getPriority(path);
    const changefreq = getChangeFreq(path);
    
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};

function getPriority(path) {
  if (path === '/') return 1.0;
  if (path === '/contato') return 0.8;
  if (path === '/politica-de-privacidade') return 0.3;
  return 0.5;
}

function getChangeFreq(path) {
  if (path === '/') return 'weekly';
  if (path === '/contato') return 'monthly';
  if (path === '/politica-de-privacidade') return 'yearly';
  return 'monthly';
}
