"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Kita fetch data di Client Side kali ini agar interaksi Lightbox lebih mulus
// atau bisa Server Side tapi kita butuh state untuk Lightbox.
// Disini saya pakai pendekatan Hybrid: Data diambil via fetch biasa di useEffect (Client Component)

export default function GaleriPage() {
  const [galeriData, setGaleriData] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [currentSlides, setCurrentSlides] = useState<any[]>([]);

  // Fetch Data dari Strapi
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

  // Fungsi saat Album diklik
  const handleOpenAlbum = (item: any) => {
    // Ambil semua foto dari item tersebut
    const fotos = item.foto || item.attributes?.foto;
    
    // Format data untuk Lightbox
    // Strapi bisa array (banyak foto) atau object (1 foto)
    let slidesData: any[] = [];
    
    if (Array.isArray(fotos)) {
        slidesData = fotos.map((img: any) => ({
            src: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${img.url}`,
        }));
    } else if (fotos?.data) { // Strapi v4 nested array
        slidesData = fotos.data.map((img: any) => ({
            src: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${img.attributes.url}`,
        }));
    } else if (fotos) { // Single photo
         const url = fotos.url || fotos.data?.attributes?.url;
         slidesData = [{ src: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}` }];
    }

    setCurrentSlides(slidesData);
    setOpen(true);
  };

  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Dokumentasi Kegiatan</h1>
          <p className="mt-2 text-gray-600">
            Rekaman momen sukacita dan pelayanan di HKBP Bonang Indah.
          </p>
        </div>

        {/* GRID ALBUM */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galeriData.map((item: any) => {
            const attr = item.attributes || item; // Handle v4/v5
            const judul = attr.judul;
            const tanggal = attr.tanggal;
            
            // Ambil Foto Pertama sebagai Cover
            const fotos = attr.foto?.data || attr.foto; // v4 vs v5
            const coverImg = Array.isArray(fotos) ? fotos[0] : fotos;
            const coverUrl = coverImg?.attributes?.url || coverImg?.url;
            const jumlahFoto = Array.isArray(fotos) ? fotos.length : 1;

            return (
              <div 
                key={item.id} 
                className="group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                onClick={() => handleOpenAlbum(item)}
              >
                {/* Cover Image */}
                <div className="relative h-64 w-full bg-gray-200 overflow-hidden">
                  {coverUrl ? (
                    <Image
                      src={`${STRAPI_URL}${coverUrl}`}
                      alt={judul}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      unoptimized
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      No Image
                    </div>
                  )}
                  
                  {/* Overlay Jumlah Foto */}
                  <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm flex items-center gap-1">
                    <span>📷</span> {jumlahFoto} Foto
                  </div>
                </div>

                {/* Info Album */}
                <div className="p-6">
                  <p className="text-sm text-blue-600 font-semibold mb-1">
                    {new Date(tanggal).toLocaleDateString("id-ID", { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                    {judul}
                  </h3>
                  <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                    {attr.deskripsi || "Klik untuk melihat foto kegiatan ini."}
                  </p>
                  <div className="mt-4 text-sm font-medium text-blue-600 flex items-center gap-1">
                    Lihat Galeri <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* COMPONENT LIGHTBOX (Overlay Gambar Fullscreen) */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={currentSlides}
        />

      </div>
    </main>
  );
}