import * as cheerio from 'cheerio';

export async function getRenungan() {
  try {
    // 1. Ambil daftar renungan terbaru
    const listRes = await fetch('https://hkbp.or.id/en/category/renungan/', {
      next: { revalidate: 3600 }
    });
    const listHtml = await listRes.text();
    const $list = cheerio.load(listHtml);
    
    const firstCard = $list('.uael-post__content-wrap').first();
    const link = firstCard.find('.uael-post__title a').attr('href');
    const title = firstCard.find('.uael-post__title a').text().trim();
    const date = firstCard.find('.uael-post__date').text().trim();
    const snippet = firstCard.find('.uael-post__excerpt').text().trim().replace(/&nbsp;/g, '');

    if (!link) return null;

    // 2. Ambil isi lengkap dari link tersebut
    const contentRes = await fetch(link, { next: { revalidate: 3600 } });
    const contentHtml = await contentRes.text();
    const $content = cheerio.load(contentHtml);
    
    // Ambil konten di dalam widget post-content
    const fullBody = $content('.elementor-widget-theme-post-content .elementor-widget-container').html() || "";

    return { title, date, snippet, fullBody, link };
  } catch (error) {
    console.error("Scraping failed", error);
    return null;
  }
}