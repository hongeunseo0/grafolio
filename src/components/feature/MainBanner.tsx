
import { useState } from 'react';

export default function MainBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const banners = [
    {
      id: 1,
      title: "크리에이터 챌린지",
      subtitle: "새로운 도전으로 창작의 영감을 찾아보세요",
      imageUrl: "https://readdy.ai/api/search-image?query=Creative%20artist%20challenge%20with%20modern%20digital%20art%20tools%2C%20vibrant%20colors%2C%20inspiring%20workspace%20with%20drawing%20tablet%20and%20colorful%20artwork%2C%20professional%20photography%20style%2C%20bright%20clean%20background%2C%20artistic%20atmosphere%2C%20wide%20landscape%20format&width=800&height=300&seq=banner1&orientation=landscape"
    },
    {
      id: 2,
      title: "아티스트 스포트라이트",
      subtitle: "이달의 주목받는 크리에이터들을 만나보세요",
      imageUrl: "https://readdy.ai/api/search-image?query=Featured%20artist%20spotlight%20showcase%20with%20beautiful%20artwork%20gallery%2C%20professional%20artist%20workspace%2C%20creative%20tools%20and%20paintings%2C%20modern%20minimalist%20studio%2C%20bright%20lighting%2C%20artistic%20inspiration%2C%20wide%20landscape%20format&width=800&height=300&seq=banner2&orientation=landscape"
    },
    {
      id: 3,
      title: "새로운 트렌드",
      subtitle: "최신 아트 트렌드와 기법을 탐험해보세요",
      imageUrl: "https://readdy.ai/api/search-image?query=Latest%20art%20trends%20and%20techniques%20showcase%2C%20modern%20digital%20art%20creation%2C%20trending%20artistic%20styles%2C%20creative%20process%20visualization%2C%20contemporary%20art%20studio%2C%20bright%20professional%20setting%2C%20wide%20landscape%20format&width=800&height=300&seq=banner3&orientation=landscape"
    },
    {
      id: 4,
      title: "디지털 아트 워크샵",
      subtitle: "전문가와 함께하는 실시간 창작 세션",
      imageUrl: "https://readdy.ai/api/search-image?query=Digital%20art%20workshop%20with%20professional%20artist%20teaching%2C%20creative%20learning%20environment%2C%20modern%20art%20studio%20setup%2C%20inspiring%20artistic%20atmosphere%2C%20bright%20clean%20background%2C%20wide%20landscape%20format&width=800&height=300&seq=banner4&orientation=landscape"
    },
    {
      id: 5,
      title: "커뮤니티 갤러리",
      subtitle: "크리에이터들의 최신 작품을 만나보세요",
      imageUrl: "https://readdy.ai/api/search-image?query=Community%20art%20gallery%20showcase%20with%20diverse%20artworks%2C%20creative%20exhibition%20space%2C%20modern%20gallery%20setting%2C%20artistic%20inspiration%2C%20bright%20professional%20lighting%2C%20wide%20landscape%20format&width=800&height=300&seq=banner5&orientation=landscape"
    }
  ];

  // Create extended array for infinite loop effect
  const extendedBanners = [...banners, ...banners, ...banners];

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const next = prev + 1;
      // Reset to beginning when reaching the end of second set
      if (next >= banners.length * 2) {
        return banners.length;
      }
      return next;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const next = prev - 1;
      // Reset to end when reaching the beginning of first set
      if (next < banners.length) {
        return banners.length * 2 - 1;
      }
      return next;
    });
  };

  // Initialize at the middle set for infinite loop
  const initialSlide = banners.length;
  if (currentSlide === 0) {
    setCurrentSlide(initialSlide);
  }

  return (
    <div className="relative py-12">
      {/* Banner Container */}
      <div className="relative overflow-hidden">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 cursor-pointer"
        >
          <i className="ri-arrow-left-line text-gray-700 text-xl w-6 h-6 flex items-center justify-center"></i>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 cursor-pointer"
        >
          <i className="ri-arrow-right-line text-gray-700 text-xl w-6 h-6 flex items-center justify-center"></i>
        </button>

        {/* Slides Container */}
        <div className="px-16">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ transform: `translateX(-${(currentSlide - 1) * (100 / 3 + 2)}%)` }}
          >
            {extendedBanners.map((banner, index) => (
              <div
                key={`${banner.id}-${Math.floor(index / banners.length)}`}
                className="flex-shrink-0 rounded-2xl overflow-hidden shadow-lg"
                style={{ width: 'calc(33.333% - 16px)' }}
              >
                <div className="relative h-64 group cursor-pointer">
                  <img
                    src={banner.imageUrl}
                    alt={banner.title}
                    className="w-full h-full object-cover object-top"
                  />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                        {banner.title}
                      </h3>
                      <p className="text-base text-white/90 drop-shadow-lg">
                        {banner.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index + banners.length)}
              className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer ${
                (currentSlide % banners.length) === index 
                  ? 'bg-[#00b57f] w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
