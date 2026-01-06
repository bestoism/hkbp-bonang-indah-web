import Link from "next/link";

// --- FETCH DATA WARTA ---
async function getWarta() {
  // PERBAIKAN: Ganti 'sort=tanggal:desc' menjadi 'sort=publishedAt:desc'
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/wartas?sort=publishedAt:desc`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    console.error("Gagal ambil Warta. Status:", res.status);
    return { data: [] }; 
  }

  return res.json();
}

// --- FETCH DATA TATA IBADAH ---
async function getTataIbadah() {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/tata-ibadahs?sort=publishedAt:desc`;
  console.log("Mencoba mengambil Tata Ibadah dari:", url); // DEBUG 1

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    console.error("Gagal ambil Tata Ibadah. Status:", res.status); // DEBUG 2
    return { data: [] };
  }

  const json = await res.json();
  console.log("Data Tata Ibadah ditemukan:", json.data.length); // DEBUG 3
  return json;
}

export default async function WartaPage() {
  const wartaData = await getWarta();
  const tataIbadahData = await getTataIbadah();

  const listWarta = wartaData.data || [];
  const listTataIbadah = tataIbadahData.data || [];

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Dokumen Mingguan</h1>
          <p className="mt-2 text-gray-600">
            Warta Jemaat dan Tata Ibadah HKBP Bonang Indah
          </p>
        </div>

        <div className="space-y-12">

          {/* === SECTION 1: WARTA JEMAAT === */}
          <section>
            <h2 className="text-xl font-bold text-blue-800 mb-4 border-b pb-2 border-blue-200">
              📂 Warta Jemaat
            </h2>

            <div className="flex flex-col gap-4">
              {listWarta.length === 0 ? (
                <p className="text-gray-500 italic">Belum ada warta.</p>
              ) : (
                listWarta.map((item: any) => {
                  const judul = item.judul || item.attributes?.judul;
                  const link =
                    item.link_drive_warta || item.attributes?.link_drive_warta;

                  return (
                    <div
                      key={item.id}
                      className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800 text-lg">
                          {judul}
                        </h3>
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded mt-1 inline-block">
                          Warta Mingguan
                        </span>
                      </div>

                      {link ? (
                        <Link
                          href={link}
                          target="_blank"
                          className="whitespace-nowrap px-6 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors text-sm"
                        >
                          Buka PDF
                        </Link>
                      ) : (
                        <span className="text-gray-400 text-sm">
                          Link Belum Ada
                        </span>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </section>

          {/* === SECTION 2: TATA IBADAH === */}
          <section>
            <h2 className="text-xl font-bold text-teal-800 mb-4 border-b pb-2 border-teal-200">
              📖 Tata Ibadah
            </h2>

            <div className="flex flex-col gap-4">
              {listTataIbadah.length === 0 ? (
                <p className="text-gray-500 italic">
                  Belum ada tata ibadah.
                </p>
              ) : (
                listTataIbadah.map((item: any) => {
                  const judul = item.judul || item.attributes?.judul;
                  const ringkasan =
                    item.ringkasan || item.attributes?.ringkasan;
                  const link =
                    item.link_drive_tata_ibadah ||
                    item.attributes?.link_drive_tata_ibadah;

                  return (
                    <div
                      key={item.id}
                      className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-teal-500 flex flex-col sm:flex-row justify-between items-center gap-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800 text-lg">
                          {judul}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          {typeof ringkasan === "string"
                            ? ringkasan
                            : "Tata Ibadah Minggu"}
                        </p>
                      </div>

                      {link ? (
                        <Link
                          href={link}
                          target="_blank"
                          className="whitespace-nowrap px-6 py-2 bg-teal-600 text-white font-medium rounded-full hover:bg-teal-700 transition-colors text-sm"
                        >
                          Buka Tata Ibadah
                        </Link>
                      ) : (
                        <span className="text-gray-400 text-sm">
                          Link Belum Ada
                        </span>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
