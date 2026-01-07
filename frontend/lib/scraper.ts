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

export async function getAyatHariIni() {
  try {
    const response = await fetch('https://www.bible.com/id/verse-of-the-day', {
      next: { revalidate: 3600 },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    const html = await response.text();
    const $ = cheerio.load(html);

    // Cari container utama berdasarkan pola HTML yang kamu kirim
    // Kita cari <div> yang mengandung teks ayat dan nats
    const verseContainer = $('.mbs-2.border-l-large').first();

    // 1. Ambil Ayat (Anchor pertama di dalam container)
    let verseText = verseContainer.find('a').first().text().trim();

    // 2. Ambil Nats/Referensi (Tag <p> di dalam anchor kedua)
    let verseRef = verseContainer.find('p').text().trim();

    // FALLBACK: Jika selector di atas gagal (karena bible.com sering ganti class), 
    // kita pakai cara cadangan yang lebih umum:
    if (!verseText || !verseRef) {
        verseText = $('meta[property="og:description"]').attr('content') || "";
        verseRef = $('meta[property="og:title"]').attr('content')?.replace('Ayat Alkitab Hari Ini - ', '') || "";
        
        // Bersihkan jika masih dempet (seperti kasus sebelumnya)
        if (verseRef && verseText.startsWith(verseRef)) {
          verseText = verseText.replace(verseRef, "").trim();
        }
    }

    return {
      text: verseText,
      ref: verseRef
    };
  } catch (error) {
    console.error("Gagal scraping ayat:", error);
    return {
      text: "Tuhan adalah gembalaku, takkan kekurangan aku.",
      ref: "Mazmur 23:1"
    };
  }
}