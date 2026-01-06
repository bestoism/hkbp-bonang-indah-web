export default function TentangPage() {
  return (
    <main className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Tentang HKBP Bonang Indah</h1>
          <p className="mt-2 text-gray-600">Sejarah dan Visi Misi Pelayanan</p>
        </div>

        <div className="prose max-w-none text-gray-700">
          <h3 className="text-xl font-bold text-blue-900">Sejarah Singkat</h3>
          <p>
            HKBP Bonang Indah berdiri pada tahun [Tahun], berawal dari persekutuan doa (Partangiangan) 
            di rumah jemaat di kawasan Bonang. Seiring berjalannya waktu, jumlah jemaat bertambah 
            hingga akhirnya diresmikan menjadi Huria (Gereja) yang mandiri.
          </p>

          <h3 className="text-xl font-bold text-blue-900 mt-6">Visi</h3>
          <p>
            Menjadi gereja yang inklusif, dialogis, dan terbuka serta mampu mengembangkan 
            pelayanan yang holistik bagi jemaat dan masyarakat.
          </p>

          <h3 className="text-xl font-bold text-blue-900 mt-6">Misi</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Meningkatkan spiritualitas jemaat berbasis Alkitab.</li>
            <li>Mewujudkan persekutuan yang harmonis dan saling menopang.</li>
            <li>Mengembangkan pelayanan sosial dan kepedulian terhadap lingkungan.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}