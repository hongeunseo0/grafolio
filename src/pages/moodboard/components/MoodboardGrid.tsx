
import { moodboards } from '../../../mocks/moodboards';

export default function MoodboardGrid() {
  return (
    <div>
      {/* Title and More Button */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">내 무드보드</h2>
        <button className="text-[#00B67E] hover:text-[#00a06f] font-medium cursor-pointer whitespace-nowrap">
          더보기
        </button>
      </div>
      
      {/* Moodboards Grid */}
      <div className="grid grid-cols-3 gap-6">
        {moodboards.map((moodboard, index) => (
          <div 
            key={moodboard.id} 
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer group"
          >
            {/* 2x2 Image Grid with Hover Effect */}
            <div className="grid grid-cols-2 gap-1 p-3 relative">
              {moodboard.images.slice(0, 4).map((image, imgIndex) => (
                <div key={imgIndex} className="aspect-square overflow-hidden rounded-lg">
                  <img 
                    src={image} 
                    alt={`Moodboard ${moodboard.id} image ${imgIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              {/* Private Lock Icon - Only for last moodboard - Moved to top right with larger size */}
              {index === moodboards.length - 1 && (
                <>
                  {/* Dark overlay for private moodboard (only on image area) */}
                  <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
                  {/* Lock icon in top right corner with larger size */}
                  <div className="absolute top-3 right-3 z-20">
                    <div className="bg-white/90 p-3 rounded-full">
                      <i className="ri-lock-line text-xl text-gray-700"></i>
                    </div>
                  </div>
                </>
              )}

              {/* Hover Effect - Show artwork count (above dark overlay) */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center rounded-lg z-10">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white px-3 py-1 rounded-full z-30">
                  <span className="text-sm font-medium text-gray-900">{moodboard.artworkCount}개 작품</span>
                </div>
              </div>
            </div>

            {/* Moodboard Info - Only Title */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">{moodboard.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
