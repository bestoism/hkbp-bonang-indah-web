"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Camera, Calendar, ArrowRight, Images } from "lucide-react";

export default function GaleriPage() {
  const [galeriData, setGaleriData] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [currentSlides, setCurrentSlides] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/galeris?populate=*&sort=tanggal:desc`
        );
        const json = await res.json();
        setGaleriData(json.data || []);
      } catch (error) {
        console.error("Gagal ambil galeri:", error);
      }
    }
    fetchData();
  }, []);

  const handleOpenAlbum = (item: any) => {
    const fotos = item.foto || item.attributes?.foto;
    let slidesData: any[] = [];
    
    if (Array.isArray(fotos)) {
        slidesData = fotos.map((img: any) => ({
            src: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${img.url}`,
        }));
    } else if (fotos?.data) {
        slidesData = fotos.data.map((img: any) => ({
            src: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${img.attributes.url}`,
        }));
    } else if (fotos) {
         const url = fotos.url || fotos.data?.attributes?.url;
         slidesData = [{ src: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}` }];
    }

    setCurrentSlides(slidesData);
    setOpen(true);
  };

  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

  return (
    <main className="min-h-screen bg-white">
      
      {/* --- 1. HERO SECTION (Compact & Consistent) --- */}
      <section className="relative h-[35vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-black">
          <Image
            src="/foto-gereja.jpg"
            alt="Dokumentasi HKBP Bonang Indah"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-blue-900/40" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Dokumentasi
          </h1>
          <p className="text-blue-200 text-xs md:text-sm font-bold mt-3 tracking-[0.3em] uppercase">
            Arsip Kegiatan & Momen Pelayanan
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        
        {/* --- 2. GRID ALBUM --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galeriData.map((item: any) => {
            const attr = item.attributes || item;
            const judul = attr.judul;
            const tanggal = attr.tanggal;
            
            const fotos = attr.foto?.data || attr.foto;
            const coverImg = Array.isArray(fotos) ? fotos[0] : fotos;
            const coverUrl = coverImg?.attributes?.url || coverImg?.url;
            const jumlahFoto = Array.isArray(fotos) ? fotos.length : 1;

            return (
              <div 
                key={item.id} 
                className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                onClick={() => handleOpenAlbum(item)}
              >
                {/* Image Container */}
                <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
                  {coverUrl ? (
                    <Image
                      src={`${STRAPI_URL}${coverUrl}`}
                      alt={judul}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      unoptimized
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-300">
                      <Images size={48} strokeWidth={1} />
                    </div>
                  )}
                  
                  {/* Photo Count Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-2xl shadow-sm flex items-center gap-2">
                    <Camera size={14} className="text-blue-600" />
                    <span className="text-[10px] font-black text-gray-800 uppercase tracking-tighter">
                      {jumlahFoto} Foto
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-7">
                  <div className="flex items-center gap-2 text-blue-600 mb-3">
                    <Calendar size={14} />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      {new Date(tanggal).toLocaleDateString("id-ID", { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight mb-3">
                    {judul}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-6">
                    {attr.deskripsi || "Dokumentasi kegiatan dan persekutuan di HKBP Bonang Indah."}
                  </p>

                  <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                    Lihat Album <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {galeriData.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
            <Images size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 font-medium">Belum ada dokumentasi yang diunggah.</p>
          </div>
        )}

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={currentSlides}
        />

      </div>
    </main>
  );
}