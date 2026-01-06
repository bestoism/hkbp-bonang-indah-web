import { getRenungan } from "@/lib/scraper";
import Link from "next/link";

export default async function RenunganHarian() {
  const renungan = await getRenungan();

  if (!renungan) return null;

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
      <div className="bg-blue-900 md:w-1/4 p-8 flex flex-col justify-center items-center text-center text-white">
        <span className="text-4xl mb-4">📖</span>
        <p className="text-xs font-bold uppercase tracking-tighter opacity-70">Renungan Hari Ini</p>
        <p className="text-sm font-semibold mt-1">{renungan.date}</p>
      </div>

      <div className="p-8 md:p-10 md:w-3/4">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
          {renungan.title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3 italic">
          "{renungan.snippet}"
        </p>

        <div className="flex items-center justify-between">
          {/* LINK SEKARANG KE HALAMAN INTERNAL */}
          <Link 
            href="/renungan" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-blue-700 transition-all"
          >
            Baca Renungan Lengkap →
          </Link>
        </div>
      </div>
    </div>
  );
}