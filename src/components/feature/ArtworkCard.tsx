
import { useState } from 'react';

interface ArtworkCardProps {
  id: string;
  title: string;
  creator: string;
  imageUrl: string;
  likes: number;
  views: number;
  date: string;
  tags?: string[];
  showBadge?: boolean; // '주목받는' 섹션 작품에만 뱃지 표시
}

export default function ArtworkCard({ 
  title, 
  creator, 
  imageUrl, 
  likes, 
  views, 
  tags = [],
  showBadge = false
}: ArtworkCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [isHovered, setIsHovered] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Artwork Image - Large Landscape format */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-top"
        />
        
        {/* Darker Gradient Overlay - Visible on hover */}
        <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          {/* Title and Tags - Bottom Left */}
          <div className="absolute bottom-4 left-4 right-16">
            <h3 className="font-semibold text-white text-lg mb-2 drop-shadow-lg">{title}</h3>
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag, index) => (
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

        {/* Badge - Only for '주목받는' section artworks - Show only on hover */}
        {showBadge && (
          <div className={`absolute top-4 right-16 z-10 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="relative">
              <div className="w-8 h-10 bg-[#00b57f] relative">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#00b57f]"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center pt-1">
                <span className="text-white font-bold text-sm">G</span>
              </div>
            </div>
          </div>
        )}

        {/* Like Button - Always visible at Top Right */}
        <button
          onClick={handleLike}
          className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-200 z-10 ${
            isLiked 
              ? 'bg-red-500 text-white shadow-lg' 
              : 'bg-white/80 text-gray-700 hover:bg-white shadow-md'
          }`}
        >
          <i className={`${isLiked ? 'ri-heart-fill' : 'ri-heart-line'} text-sm w-4 h-4 flex items-center justify-center`}></i>
        </button>
      </div>

      {/* Bottom Info - Artist Profile + Stats */}
      <div className="px-3 py-2 flex items-center justify-between">
        {/* Artist Profile - Left */}
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-gradient-to-br from-[#00b57f] to-emerald-400 rounded-full flex items-center justify-center flex-shrink-0">
            <i className="ri-user-line text-white text-xs"></i>
          </div>
          <span className="text-sm text-gray-700 font-medium truncate">{creator}</span>
        </div>

        {/* Views and Likes - Right */}
        <div className="flex items-center space-x-3 text-gray-500 text-sm">
          <div className="flex items-center space-x-1">
            <i className="ri-heart-line w-4 h-4 flex items-center justify-center"></i>
            <span>{likeCount.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <i className="ri-eye-line w-4 h-4 flex items-center justify-center"></i>
            <span>{views.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}