"use client";

interface CarouselProps {
  images: string[];
  type: 'email' | 'media' | 'web' | 'post' | 'reel' | 'web-vertical';
}

export default function InfiniteCarousel({ images, type }: CarouselProps) {
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <div 
      className="relative w-full overflow-hidden py-10 group/carousel"
      style={{
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 60px, black calc(100% - 60px), transparent)',
        maskImage: 'linear-gradient(to right, transparent, black 60px, black calc(100% - 60px), transparent)'
      }}
    >
      <div className="flex w-max animate-marquee gap-6 px-3 group-hover/carousel:[animation-play-state:paused]">
        {duplicatedImages.map((src, idx) => (
          <div key={idx} className="flex-shrink-0">
            
            {/* E-MAILS (Celulares finitos) */}
            {type === 'email' && (
              <div className="relative w-[220px] h-[400px] md:w-[300px] md:h-[550px] rounded-[16px] overflow-hidden transition-all duration-500 hover:scale-[1.05] hover:z-20 hover:shadow-2xl cursor-pointer bg-white group/email">
                <img src={src} alt="Email" className="w-full h-full object-cover object-top transform scale-110 transition-transform duration-700 ease-out group-hover/email:scale-100" />
              </div>
            )}

            {/* NUEVO: WEB VERTICAL (Para Rotoplas - Mockups de PC anchos y altos) */}
            {type === 'web-vertical' && (
              <div className="relative w-[280px] h-[400px] md:w-[420px] md:h-[550px] rounded-[16px] overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:z-20 hover:shadow-2xl cursor-pointer bg-white">
                {/* Usamos object-top para que si recorta un poco, siempre muestre la barra de navegación de la web */}
                <img src={src} alt="Web Page" className="w-full h-full object-cover object-top" />
              </div>
            )}

            {/* WEB (Banners Horizontales) */}
            {type === 'web' && (
              <div className="relative h-[160px] w-[350px] md:h-[200px] md:w-[450px] rounded-[16px] overflow-hidden transition-all duration-500 hover:w-[450px] md:hover:w-[650px] hover:z-20 hover:shadow-2xl cursor-pointer bg-[#e6e6e6]">
                <img src={src} alt="Web" className="w-full h-full object-cover object-center" />
              </div>
            )}

            {/* PAID MEDIA (Cuadrados grandes) */}
            {type === 'media' && (
              <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-[16px] overflow-hidden cursor-pointer shadow-lg bg-[#e6e6e6] group/media">
                <img src={src} alt="Media" className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/media:scale-110" />
              </div>
            )}

            {/* POSTS (Cuadrados chicos) */}
            {type === 'post' && (
              <div className="relative w-[200px] h-[200px] md:w-[260px] md:h-[260px] rounded-[16px] overflow-hidden cursor-pointer shadow-lg bg-white group/post">
                <img src={src} alt="Post" className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/post:scale-110" />
              </div>
            )}

            {/* REELS (Verticales chicos) */}
            {type === 'reel' && (
              <div className="relative w-[180px] h-[320px] md:w-[240px] md:h-[426px] rounded-[16px] overflow-hidden cursor-pointer shadow-lg bg-white group/reel">
                <img src={src} alt="Reel" className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/reel:scale-110" />
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}