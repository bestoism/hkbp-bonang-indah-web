import Link from "next/link";

export default function KontakPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Hubungi Kami</h1>
          <p className="text-gray-600 mt-2">
            Informasi alamat, kontak pelayanan, dan nomor rekening gereja.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* KOLOM KIRI: ALAMAT & MAPS */}
          <div className="space-y-8">
            {/* KARTU ALAMAT */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold text-blue-900 mb-4 border-b pb-2">
                📍 Lokasi Gereja
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800">Gedung Gereja:</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Perumahan Dasana Indah Blok UF 3 (Kompleks Gereja Dasana Indah),<br/>
                    Kel. Bojong Nangka, Kec. Kelapa Dua,<br/>
                    Kab. Tangerang, Prov. Banten.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Kantor Sekretariat:</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Perumahan Dasana Indah Blok UA 1 No. 17 (Depan Gereja HKBP Bonang Indah),<br/>
                    Kel. Bojong Nangka, Kec. Kelapa Dua,<br/>
                    Kab. Tangerang, Prov. Banten.
                  </p>
                </div>
              </div>
            </div>

            {/* GOOGLE MAPS EMBED (UPDATED) */}
            <div className="bg-gray-200 rounded-xl overflow-hidden h-96 shadow-sm border border-gray-200 relative">
              <iframe 
                title="Peta Lokasi HKBP Bonang Indah"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0398327376747!2d106.5975021!3d-6.2507062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fc7c56475659%3A0x286317740523097c!2sHKBP%20Bonang%20Indah!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
              {/* Tombol Buka di App (Overlay) */}
              <div className="absolute bottom-4 right-4">
                 <a 
                   href="https://maps.app.goo.gl/6yym7SufM35fcFz3A" 
                   target="_blank"
                   className="bg-white text-blue-700 text-xs font-bold px-3 py-2 rounded shadow-lg hover:bg-gray-100 flex items-center gap-1"
                 >
                   🗺️ Buka di Google Maps
                 </a>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: KONTAK PERSONAL & BANK */}
          <div className="space-y-8">
            
            {/* KARTU KONTAK PERSON */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold text-blue-900 mb-6 border-b pb-2">
                📞 Kontak Pelayanan
              </h2>
              
              <div className="space-y-6">
                {/* Pendeta Ressort */}
                <div className="flex gap-4 items-start">
                  <div className="bg-blue-100 p-2 rounded-full shrink-0">👤</div>
                  <div>
                    <h3 className="font-bold text-gray-800">Pdt. Harris Tanda Huria Sitorus, S.Th. M.M.</h3>
                    <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide">Pendeta Ressort</p>
                    <a href="https://wa.me/6281396115427" target="_blank" className="text-sm text-gray-600 hover:text-green-600 mt-1 block">
                      Whatsapp: 0813-9611-5427
                    </a>
                  </div>
                </div>

                {/* Pendeta Fungsional */}
                <div className="flex gap-4 items-start">
                  <div className="bg-blue-100 p-2 rounded-full shrink-0">👤</div>
                  <div>
                    <h3 className="font-bold text-gray-800">Pdt. Kristian Mual Tua Lumbantobing, S.Th.</h3>
                    <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide">Pendeta Fungsional</p>
                    <a href="https://wa.me/6282199666795" target="_blank" className="text-sm text-gray-600 hover:text-green-600 mt-1 block">
                      Whatsapp: 0821-9966-6795
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-100 my-4"></div>

                {/* Sekretaris */}
                <div className="flex gap-4 items-start">
                  <div className="bg-gray-100 p-2 rounded-full shrink-0">📝</div>
                  <div>
                    <h3 className="font-bold text-gray-800">St. R. Nainggolan</h3>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Sekretaris Jemaat</p>
                    <p className="text-sm text-gray-600">0813-8207-3499</p>
                  </div>
                </div>

                {/* Bendahara */}
                <div className="flex gap-4 items-start">
                  <div className="bg-gray-100 p-2 rounded-full shrink-0">💰</div>
                  <div>
                    <h3 className="font-bold text-gray-800">St. N. br. Butarbutar</h3>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Bendahara Jemaat</p>
                    <p className="text-sm text-gray-600">0812-9503-9224</p>
                  </div>
                </div>

                {/* Staff Admin */}
                <div className="flex gap-4 items-start">
                  <div className="bg-gray-100 p-2 rounded-full shrink-0">🖥️</div>
                  <div>
                    <h3 className="font-bold text-gray-800">Inang. D. br. Simanungkalit</h3>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Staff Admin Sekretariat</p>
                    <p className="text-sm text-gray-600">0813-1015-0145</p>
                  </div>
                </div>
              </div>
            </div>

            {/* KARTU REKENING */}
            <div className="bg-linear-to-r from-blue-800 to-blue-900 p-6 rounded-xl shadow-lg text-white">
              <h2 className="text-lg font-bold mb-4 opacity-90">
                🏦 Rekening Persembahan
              </h2>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <p className="text-sm opacity-80 mb-1">BANK BCA</p>
                <p className="text-2xl font-mono font-bold tracking-wider mb-2">6310 2345 73</p>
                <p className="text-sm font-medium">A.n. Nurhayati Butarbutar</p>
              </div>
              <p className="text-xs mt-4 opacity-70 text-center">
                Mohon konfirmasi ke Bendahara setelah mengirim persembahan.
              </p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}