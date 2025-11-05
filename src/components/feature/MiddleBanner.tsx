
import { useState } from 'react';

export default function MiddleBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const challengeArtworks = [
    {
      id: 1,
      title: "디지털 아트 챌린지",
      creator: "아티스트_김민수",
      imageUrl: "https://readdy.ai/api/search-image?query=Digital%20art%20challenge%20artwork%20with%20vibrant%20colors%2C%20modern%20artistic%20style%2C%20creative%20digital%20painting%2C%20contemporary%20art%20piece%2C%20bright%20clean%20background%2C%20professional%20artwork%20quality&width=400&height=300&seq=challenge1&orientation=landscape",
      likes: 234,
      tags: ["디지털아트", "챌린지", "창작"]
    },
    {
      id: 2,
      title: "추상 아트 도전",
      creator: "크리에이터_박지영",
      imageUrl: "https://readdy.ai/api/search-image?query=Abstract%20digital%20art%20challenge%20piece%20with%20bold%20geometric%20shapes%2C%20modern%20color%20palette%2C%20artistic%20composition%2C%20contemporary%20digital%20artwork%2C%20bright%20clean%20background&width=400&height=300&seq=challenge2&orientation=landscape",
      likes: 189,
      tags: ["추상", "기하학", "모던"]
    },
    {
      id: 3,
      title: "미니멀 디자인",
      creator: "디자이너_이준호",
      imageUrl: "https://readdy.ai/api/search-image?query=Minimalist%20digital%20art%20challenge%20with%20clean%20lines%2C%20modern%20aesthetic%2C%20artistic%20design%2C%20contemporary%20style%2C%20bright%20professional%20background%2C%20creative%20artwork&width=400&height=300&seq=challenge3&orientation=landscape",
      likes: 312,
      tags: ["미니멀", "클린", "디자인"]
    },
    {
      id: 4,
      title: "컬러풀 아트",
      creator: "아티스트_최서연",
      imageUrl: "https://readdy.ai/api/search-image?query=Colorful%20digital%20art%20challenge%20piece%20with%20artistic%20flair%2C%20modern%20creative%20style%2C%20vibrant%20composition%2C%20contemporary%20digital%20painting%2C%20bright%20clean%20background&width=400&height=300&seq=challenge4&orientation=landscape",
      likes: 156,
      tags: ["컬러풀", "비브런트", "아트"]
    },
    {
      id: 5,
      title: "일러스트 챌린지",
      creator: "일러스트_이수진",
      imageUrl: "https://readdy.ai/api/search-image?query=Creative%20illustration%20challenge%20artwork%20with%20modern%20design%20elements%2C%20artistic%20composition%2C%20contemporary%20illustration%20style%2C%20bright%20clean%20background%2C%20professional%20quality&width=400&height=300&seq=challenge5&orientation=landscape",
      likes: 278,
      tags: ["일러스트", "창작", "아트"]
    },
    {
      id: 6,
      title: "포토그래피 도전",
      creator: "포토그래퍼_박현우",
      imageUrl: "https://readdy.ai/api/search-image?query=Photography%20challenge%20artwork%20with%20artistic%20composition%2C%20modern%20photographic%20style%2C%20creative%20visual%20elements%2C%20bright%20clean%20background%2C%20professional%20photography&width=400&height=300&seq=challenge6&orientation=landscape",
      likes: 195,
      tags: ["사진", "포토그래피", "예술"]
    },
    {
      id: 7,
      title: "그래픽 디자인",
      creator: "디자이너_김예린",
      imageUrl: "https://readdy.ai/api/search-image?query=Graphic%20design%20challenge%20piece%20with%20modern%20typography%2C%20creative%20layout%2C%20contemporary%20design%20elements%2C%20bright%20clean%20background%2C%20professional%20graphic%20design&width=400&height=300&seq=challenge7&orientation=landscape",
      likes: 342,
      tags: ["그래픽", "타이포", "디자인"]
    },
    {
      id: 8,
      title: "3D 아트워크",
      creator: "3D아티스트_정민호",
      imageUrl: "https://readdy.ai/api/search-image?query=3D%20art%20challenge%20artwork%20with%20modern%20three%20dimensional%20design%2C%20creative%203D%20composition%2C%20contemporary%20digital%20art%2C%20bright%20clean%20background%2C%20professional%203D%20rendering&width=400&height=300&seq=challenge8&orientation=landscape",
      likes: 267,
      tags: ["3D", "모델링", "렌더링"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= challengeArtworks.length - 4 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? challengeArtworks.length - 4 : prev - 1));
  };

  return (
    <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-8 mb-12 border border-emerald-200 shadow-lg">
      {/* Section Title - Left aligned */}
      <div className="text-left mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">#이달의_챌린지</h2>
        <p className="text-gray-600">크리에이터들의 도전 작품을 만나보세요</p>
      </div>

      {/* Challenge Artworks Slider */}
      <div className="relative overflow-hidden">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center shadow-md transition-all duration-200 cursor-pointer"
        >
          <i className="ri-arrow-left-line text-gray-600 text-lg w-5 h-5 flex items-center justify-center"></i>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center shadow-md transition-all duration-200 cursor-pointer"
        >
          <i className="ri-arrow-right-line text-gray-600 text-lg w-5 h-5 flex items-center justify-center"></i>
        </button>

        {/* Slides Container */}
        <div className="px-12 overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-4"
            style={{ transform: `translateX(-${currentSlide * 25}%)` }}
          >
            {challengeArtworks.map((artwork) => (
              <ChallengeArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Challenge Artwork Card Component with hover effects
function ChallengeArtworkCard({ artwork }: { artwork: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex-shrink-0 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer"
      style={{ width: 'calc(25% - 12px)' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Artwork Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={artwork.imageUrl}
          alt={artwork.title}
          className="w-full h-full object-cover object-top"
        />
        
        {/* Gradient Overlay - Visible on hover */}
        <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          {/* Title and Tags - Bottom Left */}
          <div className="absolute bottom-4 left-4 right-16">
            <h3 className="font-semibold text-white text-lg mb-2 drop-shadow-lg">{artwork.title}</h3>
            <div className="flex flex-wrap gap-2">
              {artwork.tags.slice(0, 3).map((tag: string, index: number) => (
                <span
                  key={index}
                  className="text-xs text-white drop-shadow-lg"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Like Button - Empty heart for challenge artworks */}
        <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full shadow-sm hover:bg-white transition-all duration-200">
          <i className="ri-heart-line text-gray-600 text-sm w-4 h-4 flex items-center justify-center"></i>
        </button>
      </div>

      {/* Bottom Info - Only Profile and Stats */}
      <div className="px-4 py-3 flex items-center justify-between">
        {/* Artist Profile - Left */}
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-gradient-to-br from-[#00b57f] to-emerald-400 rounded-full flex items-center justify-center flex-shrink-0">
            <i className="ri-user-line text-white text-xs"></i>
          </div>
          <span className="text-sm text-gray-700 font-medium truncate">{artwork.creator}</span>
        </div>

        {/* Likes - Right */}
        <div className="flex items-center space-x-1 text-gray-500 text-sm">
          <i className="ri-heart-line w-4 h-4 flex items-center justify-center"></i>
          <span>{artwork.likes.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
