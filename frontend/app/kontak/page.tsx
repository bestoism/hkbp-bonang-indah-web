import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, MessageCircle, CreditCard, Mail } from "lucide-react";

export default function KontakPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* --- 1. HERO SECTION (Konsisten dengan halaman lain) --- */}
      <section className="relative h-[35vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-black">
          <Image
            src="/foto-gereja.jpg"
            alt="Kontak HKBP Bonang Indah"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-blue-900/40" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Hubungi Kami
          </h1>
          <p className="text-blue-200 text-xs md:text-sm font-bold mt-3 tracking-[0.3em] uppercase">
            Informasi Alamat & Kontak Pelayanan
          </p>
        </div>
      </section>

      {/* --- 2. CONTENT AREA --- */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* KOLOM KIRI: ALAMAT & MAPS */}
          <div className="space-y-8">
            {/* KARTU ALAMAT */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <MapPin size={20} className="text-blue-600" /> Lokasi Gereja
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Gedung Gereja</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Perumahan Dasana Indah Blok UF 3 (Kompleks Gereja Dasana Indah),<br/>
                    Kel. Bojong Nangka, Kec. Kelapa Dua,<br/>
                    Kab. Tangerang, Prov. Banten.
                  </p>
                </div>
                <div>
                  <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Kantor Sekretariat</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Perumahan Dasana Indah Blok UA 1 No. 17 (Depan Gereja HKBP Bonang Indah),<br/>
                    Kel. Bojong Nangka, Kec. Kelapa Dua,<br/>
                    Kab. Tangerang, Prov. Banten.
                  </p>
                </div>
              </div>
            </div>

            {/* GOOGLE MAPS EMBED */}
            <div className="bg-gray-200 rounded-3xl overflow-hidden h-96 shadow-sm border border-gray-100 relative">
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
              <div className="absolute bottom-4 right-4">
                 <a 
                   href="https://maps.app.goo.gl/6yym7SufM35fcFz3A" 
                   target="_blank"
                   className="bg-white/90 backdrop-blur text-blue-700 text-[10px] font-black px-4 py-2 rounded-full shadow-lg hover:bg-white flex items-center gap-2 uppercase tracking-widest transition-all"
                 >
                   <MapPin size={12} /> Buka Google Maps
                 </a>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: KONTAK PERSONAL & BANK */}
          <div className="space-y-8">
            
            {/* KARTU KONTAK PERSON */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <Phone size={20} className="text-blue-600" /> Kontak Pelayanan
              </h2>
              
              <div className="space-y-6">
                {/* Pendeta Ressort */}
                <div className="flex gap-4 items-start">
                  <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 shrink-0">👤</div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-base">Pdt. Harris Tanda Huria Sitorus, S.Th. M.M.</h3>
                    <p className="text-[10px] text-blue-600 font-black uppercase tracking-[0.1em] mt-1">Pendeta Ressort</p>
                    <a href="https://wa.me/6281396115427" target="_blank" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-green-600 mt-2 transition-colors">
                      <MessageCircle size={14} /> 0813-9611-5427
                    </a>
                  </div>
                </div>

                {/* Pendeta Fungsional */}
                <div className="flex gap-4 items-start">
                  <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 shrink-0">👤</div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-base">Pdt. Kristian Mual Tua Lumbantobing, S.Th.</h3>
                    <p className="text-[10px] text-blue-600 font-black uppercase tracking-[0.1em] mt-1">Pendeta Fungsional</p>
                    <a href="https://wa.me/6282199666795" target="_blank" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-green-600 mt-2 transition-colors">
                      <MessageCircle size={14} /> 0821-9966-6795
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-50 my-4"></div>

                {/* Row Kontak Staff */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <ContactItem label="Sekretaris Jemaat" name="St. R. Nainggolan" phone="0813-8207-3499" />
                    <ContactItem label="Bendahara Jemaat" name="St. N. br. Butarbutar" phone="0812-9503-9224" />
                  </div>
                  <div className="space-y-4">
                    <ContactItem label="Staff Admin" name="Inang. D. br. Simanungkalit" phone="0813-1015-0145" />
                    <div>
                      <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Email Resmi</h3>
                      <p className="text-sm font-bold text-gray-700">hkbpbonangindah@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* KARTU REKENING */}
            <div className="bg-gradient-to-br from-blue-800 to-blue-950 p-8 rounded-[2rem] shadow-xl text-white relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all"></div>
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <CreditCard size={20} className="text-blue-300" /> Rekening Persembahan
              </h2>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <p className="text-[10px] font-black text-blue-200 uppercase tracking-widest mb-2">Bank Central Asia (BCA)</p>
                <p className="text-3xl font-black tracking-widest mb-2">6310 2345 73</p>
                <p className="text-sm font-medium text-blue-100">A.n. Nurhayati Butarbutar</p>
              </div>
              <p className="text-[10px] mt-6 opacity-60 text-center uppercase tracking-tighter">
                Mohon konfirmasi ke Bendahara setelah mengirim persembahan
              </p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

// Komponen Pembantu agar kode rapi
function ContactItem({ label, name, phone }: { label: string, name: string, phone: string }) {
  return (
    <div>
      <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{label}</h3>
      <p className="text-sm font-bold text-gray-800">{name}</p>
      <p className="text-xs text-gray-500 mt-0.5">{phone}</p>
    </div>
  );
}