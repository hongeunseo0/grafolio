
import { useState } from 'react';
import { artworksData } from '../../../mocks/artworks';

export default function SimilarArtworks() {
  const [filter, setFilter] = useState('전체');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filters = ['전체', '일러스트', '디자인', '사진', '3D'];

  // Filter artworks based on selected filter
  const filteredArtworks = filter === '전체' 
    ? artworksData 
    : artworksData.filter(artwork => {
        if (filter === '일러스트') return artwork.tags.includes('일러스트') || artwork.tags.includes('회화');
        if (filter === '디자인') return artwork.tags.includes('디자인');
        if (filter === '사진') return artwork.tags.includes('사진');
        if (filter === '3D') return artwork.tags.includes('3D') || artwork.tags.includes('AI');
        return true;
      });

  // Get first 6 artworks for display
  const displayArtworks = filteredArtworks.slice(0, 6);

  return (
    <div>
      {/* Header with Filter */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">무드보드와 비슷한 작품들이에요!</h2>
        
        {/* Filter Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer whitespace-nowrap"
          >
            <span className="text-gray-700">{filter}</span>
            <i className={`ri-arrow-down-s-line text-gray-500 transition-transform duration-200 w-4 h-4 flex items-center justify-center ${isFilterOpen ? 'rotate-180' : ''}`}></i>
          </button>
          
          {isFilterOpen && (
            <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[120px]">
              {filters.map((filterName) => (
                <button
                  key={filterName}
                  onClick={() => {
                    setFilter(filterName);
                    setIsFilterOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors duration-200 cursor-pointer whitespace-nowrap first:rounded-t-lg last:rounded-b-lg ${
                    filter === filterName ? 'bg-[#00B67E]/10 text-[#00B67E]' : 'text-gray-700'
                  }`}
                >
                  {filterName}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Artworks Grid - 3x2 layout with wider aspect ratio */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        {displayArtworks.map((artwork) => (
          <div 
            key={artwork.id} 
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer group"
          >
            {/* Image with Hover Overlay - Changed to wider aspect ratio */}
            <div className="aspect-[4/3] overflow-hidden relative">
              <img 
                src={artwork.imageUrl} 
                alt={artwork.title}
                className="w-full h-full object-cover"
              />
              
              {/* Hover Overlay with gradient - Title and tags positioned at bottom left */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-start text-white p-4">
                <h3 className="font-bold text-lg mb-2">{artwork.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {artwork.tags.map((tag, index) => (
                    <span key={index} className="text-xs text-white/90">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Profile and Stats */}
            <div className="p-4">
              <div className="flex items-center justify-between">
                {/* Profile */}
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#00B67E] to-[#00a06f] rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {artwork.creator.charAt(0)}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{artwork.creator}</span>
                </div>
                
                {/* Stats */}
                <div className="flex items-center space-x-3 text-sm text-gray-500">
                  <span className="flex items-center">
                    <i className="ri-heart-line mr-1 w-4 h-4 flex items-center justify-center"></i>
                    {artwork.likes}
                  </span>
                  <span className="flex items-center">
                    <i className="ri-eye-line mr-1 w-4 h-4 flex items-center justify-center"></i>
                    {artwork.views}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More Button - positioned at bottom right */}
      <div className="flex justify-end">
        <button className="text-[#00B67E] hover:text-[#00a06f] font-medium cursor-pointer whitespace-nowrap">
          추천 프로젝트 더보기
        </button>
      </div>
    </div>
  );
}
