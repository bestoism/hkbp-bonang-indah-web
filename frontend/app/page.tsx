import Image from "next/image";

// 1. Fungsi untuk mengambil data dari Strapi
async function getPendeta() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/pendetas?populate=*`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Gagal mengambil data pendeta");
  }

  return res.json();
}

export default async function Home() {
  // 2. Ambil data dari Strapi
  const { data } = await getPendeta();

  // Base URL Strapi
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL as string;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <header className="bg-blue-900 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">HKBP Bonang Indah</h1>
        <p className="mt-2 text-blue-200">Melayani dengan Kasih</p>
      </header>

      {/* SECTION PENDETA */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Pelayan Firman
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item: any) => {
            // DEBUGGING: Cek struktur data di Terminal VS Code
            console.log("Cek Data Item:", item);

            // Support Strapi v4 & v5 (flat / nested)
            const nama = item.nama_lengkap || item.attributes?.nama_lengkap;
            const jabatan = item.jabatan || item.attributes?.jabatan;

            // Logic ambil gambar (super aman)
            const fotoData = item.foto || item.attributes?.foto;
            const imgUrl =
              fotoData?.url ||
              fotoData?.data?.attributes?.url ||
              fotoData?.[0]?.url;

            return (
              <div
                key={item.id || item.documentId}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64 w-full bg-gray-200">
                  {imgUrl ? (
                    <Image
                      src={`${STRAPI_URL}${imgUrl}`}
                      alt={nama || "Foto Dokumentasi"}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      No Photo
                    </div>
                  )}
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">
                    {nama}
                  </h3>
                  <p className="text-blue-600 font-medium mt-1">
                    {jabatan}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
