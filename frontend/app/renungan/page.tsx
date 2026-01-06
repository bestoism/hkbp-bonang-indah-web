import { getRenungan } from "@/lib/scraper";

export default async function RenunganPage() {
  const data = await getRenungan();

  if (!data) return <div className="py-20 text-center">Gagal memuat renungan.</div>;

  return (
    <main className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Renungan Harian</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 leading-tight">
            {data.title}
          </h1>
          <p className="text-gray-500 mt-4 font-medium">Edisi {data.date}</p>
        </div>

        {/* Isi Renungan Lengkap */}
        <article 
          className="prose prose-blue prose-lg max-w-none text-gray-800 leading-relaxed
                     prose-p:mb-6 prose-strong:text-blue-900"
          dangerouslySetInnerHTML={{ __html: data.fullBody }}
        />

        <div className="mt-16 p-6 bg-gray-50 rounded-2xl text-center border border-gray-100">
          <p className="text-sm text-gray-500 mb-4 italic">Sumber: HKBP Pusat (hkbp.or.id)</p>
          <a href="/" className="text-blue-600 font-bold hover:underline">← Kembali ke Beranda</a>
        </div>
      </div>
    </main>
  );
}