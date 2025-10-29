
import { useState } from 'react';

interface FilterSectionProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  sortOrder: string;
  setSortOrder: (order: string) => void;
}

export default function FilterSection({
  activeFilter,
  setActiveFilter,
  activeCategory,
  setActiveCategory,
  sortOrder,
  setSortOrder
}: FilterSectionProps) {
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const filterOptions = ['주목받는', '베스트', '핫데뷔'];
  const sortOptions = ['추천순', '최신순', '팔로잉순'];

  const categories = [
    { name: '전체', icon: 'ri-grid-line' },
    { name: '일러스트', icon: 'ri-brush-line' },
    { name: '사진', icon: 'ri-camera-line' },
    { name: '디자인', icon: 'ri-palette-line' },
    { name: '회화', icon: 'ri-paint-brush-line' },
    { name: '조소/공예', icon: 'ri-hammer-line' },
    { name: '사운드', icon: 'ri-music-line' },
    { name: '애니메이션', icon: 'ri-play-circle-line' },
    { name: '캘리그라피', icon: 'ri-quill-pen-line' },
    { name: '글귀', icon: 'ri-file-text-line' },
    { name: '일상', icon: 'ri-heart-line' },
    { name: 'AI', icon: 'ri-robot-line' }
  ];

  return (
    <div className="py-6 border-b border-gray-100">
      {/* Filter Buttons - Centered */}
      <div className="flex justify-center mb-6">
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-full">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeFilter === filter
                  ? 'bg-[#00B67E] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Categories and Sort - Centered Layout */}
      <div className="flex items-center justify-center">
        <div className="flex items-center space-x-6">
          {/* Categories */}
          <div className="flex items-center space-x-6 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex flex-col items-center space-y-2 p-3 rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap min-w-fit ${
                  activeCategory === category.name
                    ? 'text-[#00b57f] bg-[#00b57f]/5'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <i className={`${category.icon} text-xl w-6 h-6 flex items-center justify-center`}></i>
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="relative ml-8">
            <button
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              <span className="text-sm font-medium">{sortOrder}</span>
              <i className={`ri-arrow-${showSortDropdown ? 'up' : 'down'}-s-line text-gray-500 w-4 h-4 flex items-center justify-center`}></i>
            </button>

            {/* Dropdown Menu */}
            {showSortDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-10">
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSortOrder(option);
                      setShowSortDropdown(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors duration-200 cursor-pointer ${
                      sortOrder === option ? 'text-[#00b57f] bg-[#00b57f]/5' : 'text-gray-700'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
