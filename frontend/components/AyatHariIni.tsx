import { getAyatHariIni } from "@/lib/scraper";

export default async function AyatHariIni() {
  const ayat = await getAyatHariIni();

  if (!ayat.text) return null;

  return (
    <div className="relative z-10 flex flex-col items-center">
      {/* Teks Ayat */}
      <p className="text-2xl md:text-4xl font-serif italic leading-relaxed text-white mb-10 drop-shadow-sm max-w-4xl mx-auto px-4">
        "{ayat.text}"
      </p>
      
      {/* Referensi / Nats */}
      <div className="flex items-center gap-6">
        <div className="h-px w-12 bg-white/20"></div>
        <p className="text-yellow-400 font-black tracking-[0.1em] text-sm md:text-lg uppercase drop-shadow-md">
          {ayat.ref}
        </p>
        <div className="h-px w-12 bg-white/20"></div>
      </div>
      
      <p className="text-[9px] text-white/20 mt-10 uppercase tracking-[0.3em] font-medium">
        Daily Verse via Bible.com
      </p>
    </div>
  );
}