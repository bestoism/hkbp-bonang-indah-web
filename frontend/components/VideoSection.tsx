import { getLatestVideos } from "@/lib/youtube";
import { Youtube, PlayCircle } from "lucide-react";

export default async function VideoSection() {
  const videos = await getLatestVideos(6);

  if (videos.length === 0) return null;

  const featuredVideo = videos[0];
  const otherVideos = videos.slice(1);

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-8 border-b border-gray-50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-50 text-red-600 rounded-lg">
            <Youtube size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">Kanal YouTube</h2>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">Siaran Langsung & Dokumentasi Koor</p>
          </div>
        </div>
        <a 
          href="https://www.youtube.com/@hkbpbonangindah" 
          target="_blank" 
          className="text-xs font-bold text-red-600 hover:text-red-700 uppercase tracking-widest"
        >
          Kunjungi Channel →
        </a>
      </div>

      <div className="p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* VIDEO UTAMA (BESAR) */}
        <div className="lg:col-span-2">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg group">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${featuredVideo.id}`}
              title={featuredVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h3 className="mt-4 text-xl font-bold text-gray-900 line-clamp-2">
            {featuredVideo.title}
          </h3>
        </div>

        {/* LIST VIDEO LAINNYA (SCROLLABLE) */}
        <div className="flex flex-col gap-4 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar">
          <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Video Terbaru Lainnya</h4>
          {otherVideos.map((video: any) => (
            <a 
              key={video.id} 
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              className="flex gap-4 group cursor-pointer"
            >
              <div className="relative w-32 h-20 shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="text-white w-8 h-8" />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h5 className="text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-red-600 transition-colors">
                  {video.title}
                </h5>
                <p className="text-[10px] text-gray-400 mt-1 font-medium">
                  {new Date(video.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}