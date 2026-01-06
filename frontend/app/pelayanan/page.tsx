// frontend/app/pelayanan/page.tsx

async function getJadwal() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/jadwals?sort=urutan:asc`,
    { cache: "no-store" }
  );
  if (!res.ok) return { data: [] };
  return res.json();
}

async function getWijk() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/wijks?sort=nama:asc`,
    { cache: "no-store" }
  );
  if (!res.ok) return { data: [] };
  return res.json();
}

// --- FUNGSI BANTUAN RENDER BLOCKS STRAPI ---
// Ini untuk mengatasi masalah Rich Text yang kosong
function renderStrapiBlocks(content: any) {
  if (!content) return null;
  
  // Jika content berupa string biasa (bukan JSON blocks)
  if (typeof content === 'string') {
    return <p className="mb-2 whitespace-pre-line">{content}</p>;
  }

  // Jika content adalah Array (Blocks JSON dari Strapi)
  if (Array.isArray(content)) {
    return content.map((block: any, index: number) => {
      
      // KASUS 1: LIST / BULLET POINTS (Biasanya Daftar Nama Sintua ada disini)
      if (block.type === 'list') {
        const Tag = block.format === 'ordered' ? 'ol' : 'ul';
        return (
          <Tag key={index} className="list-disc pl-5 mb-4 space-y-1 text-gray-700">
            {block.children.map((item: any, itemIndex: number) => (
              <li key={itemIndex}>
                {item.children.map((textNode: any) => textNode.text).join('')}
              </li>
            ))}
          </Tag>
        );
      }

      // KASUS 2: PARAGRAF BIASA
      if (block.type === 'paragraph') {
        return (
          <p key={index} className="mb-2 text-gray-700">
            {block.children?.map((child: any) => {
              // Handle Bold/Italic sederhana
              if (child.bold) return <strong key={child.text}>{child.text}</strong>;
              return child.text;
            })}
          </p>
        );
      }

      // KASUS 3: HEADING (Jika ada)
      if (block.type === 'heading') {
        return <h4 key={index} className="font-bold mt-2 mb-1">{block.children?.[0]?.text}</h4>
      }

      return null;
    });
  }

  return null;
}

export default async function PelayananPage() {
  const jadwalData = await getJadwal();
  const wijkData = await getWijk();

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Pelayanan & Wilayah</h1>
          <p className="mt-2 text-gray-600">
            Jadwal kegiatan sepekan dan informasi pembagian sektor pelayanan (Wijk).
          </p>
        </div>

        {/* --- BAGIAN 1: JADWAL SEPEKAN --- */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-blue-600 text-white p-2 rounded-lg">📅</span>
            <h2 className="text-2xl font-bold text-gray-900">Jadwal Sepekan</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jadwalData.data?.map((item: any) => (
              <div key={item.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-bold text-blue-800">
                    {item.hari || item.attributes?.hari}
                  </h3>
                  <span className="text-xs font-mono bg-gray-100 text-gray-500 px-2 py-1 rounded">
                    Hari ke-{item.urutan || item.attributes?.urutan}
                  </span>
                </div>
                <div className="text-sm">
                   {/* Panggil fungsi render baru disini */}
                   {renderStrapiBlocks(item.kegiatan || item.attributes?.kegiatan)}
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* --- BAGIAN 2: DATA WIJK --- */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-teal-600 text-white p-2 rounded-lg">map</span>
            <h2 className="text-2xl font-bold text-gray-900">Pembagian Wilayah (Wijk)</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {wijkData.data?.map((item: any) => {
               const nama = item.nama || item.attributes?.nama;
               const area = item.area || item.attributes?.area;
               const pelayanRaw = item.pelayan || item.attributes?.pelayan;

               return (
                <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-md border-t-4 border-teal-600 flex flex-col h-full">
                  <div className="bg-teal-50 p-4 border-b border-teal-100">
                    <h3 className="text-xl font-bold text-teal-900">{nama}</h3>
                    <p className="text-sm text-teal-700 mt-1 flex items-center gap-1">
                      📍 {area}
                    </p>
                  </div>
                  
                  <div className="p-6 flex-grow">
                    <h4 className="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wide border-b pb-2">
                      Daftar Pelayan & Kontak:
                    </h4>
                    <div className="text-sm text-gray-700">
                      {/* Panggil fungsi render baru disini */}
                      {renderStrapiBlocks(pelayanRaw)}
                    </div>
                  </div>
                </div>
               );
            })}
          </div>
        </section>

      </div>
    </main>
  );
}