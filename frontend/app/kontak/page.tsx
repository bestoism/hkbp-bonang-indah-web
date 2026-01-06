export default function KontakPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Kolom Kiri: Info Text */}
        <div className="p-8 md:w-1/2 space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">Hubungi Kami</h1>
          <p className="text-gray-600">
            Kami sangat senang menyambut Anda. Silakan hubungi kami atau datang langsung ke lokasi gereja.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-blue-900">Alamat Gereja</h3>
              <p className="text-gray-700">
                Jl. Bonang Raya Blok A No. 123<br/>
                Kelapa Dua, Tangerang, Banten
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-blue-900">Sekretariat</h3>
              <p className="text-gray-700">Telepon: (021) 555-1234</p>
              <p className="text-gray-700">WhatsApp: 0812-3456-7890</p>
            </div>

            <div>
              <h3 className="font-bold text-blue-900">Jadwal Kantor</h3>
              <p className="text-gray-700">Senin - Sabtu: 09.00 - 16.00 WIB</p>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Google Maps Embed */}
        <div className="bg-gray-200 md:w-1/2 min-h-[300px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.196327317765!2d106.6115!3d-6.2378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fc7d1d2c6b1f%3A0x401576d14feb9e0!2sHKBP%20Bonang%20Indah!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>

      </div>
    </main>
  );
}