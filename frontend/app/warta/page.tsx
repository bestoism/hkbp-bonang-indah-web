import Link from "next/link";

// Fungsi format tanggal Indonesia
function formatDate(dateString: string) {
  if (!dateString) return "-";
  return new Date(dateString).toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

async function getWarta() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/wartas?populate=*&sort=tanggal:desc`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Gagal mengambil data warta");
  }

  return res.json();
}

export default async function WartaPage() {
  const { data } = await getWarta();
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">

        {/* JUDUL HALAMAN */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">
            Arsip Warta Jemaat
          </h1>
          <p className="mt-2 text-gray-600">
            Unduh warta jemaat mingguan HKBP Bonang Indah dalam format PDF.
          </p>
        </div>

        {/* LIST WARTA */}
        <div className="space-y-4">
          {data.length === 0 ? (
            <p className="text-center text-gray-500">
              Belum ada warta yang diunggah.
            </p>
          ) : (
            data.map((item: any) => {
              // ================= DEBUGGING =================
              const fileData = item.file_pdf || item.attributes?.file_pdf;

              console.log("--------------------------------");
              console.log(
                "Judul:",
                item.judul || item.attributes?.judul
              );
              console.log(
                "Data PDF:",
                JSON.stringify(fileData, null, 2)
              );
              console.log("--------------------------------");
              // =============================================

              // Variable definisi (TIDAK DIUBAH)
              const judul = item.judul || item.attributes?.judul;
              const tanggal = item.tanggal || item.attributes?.tanggal;
              const ringkasan = item.ringkasan || item.attributes?.ringkasan;

              // Logic URL PDF (tetap sama)
              const pdfUrl =
                fileData?.url ||                        // Struktur Flat (Strapi v5/v4 Optimized)
                fileData?.data?.attributes?.url ||      // Struktur Nested (Strapi v4 Default)
                fileData?.data?.[0]?.attributes?.url || // Struktur Array Nested
                fileData?.[0]?.url;                     // Struktur Array Flat

              return (
                <div
                  key={item.id || item.documentId}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  {/* KIRI: INFO */}
                  <div>
                    <div className="text-sm text-blue-600 font-semibold mb-1">
                      {formatDate(tanggal)}
                    </div>
                    <h2 className="text-xl font-bold text-gray-800">
                      {judul}
                    </h2>

                    {ringkasan && (
                      <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                        {typeof ringkasan === "string"
                          ? ringkasan
                          : "Lihat detail di PDF"}
                      </p>
                    )}
                  </div>

                  {/* KANAN: DOWNLOAD */}
                  <div>
                    {pdfUrl ? (
                      <Link
                        href={`${STRAPI_URL}${pdfUrl}`}
                        target="_blank"
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none"
                      >
                        📄 Download PDF
                      </Link>
                    ) : (
                      <span className="text-gray-400 text-sm italic">
                        PDF belum tersedia
                      </span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>
    </main>
  );
}
