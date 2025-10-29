
import React, { useState } from 'react';
import TopNavigation from '../../components/feature/TopNavigation';
import LeftSidebar from '../community/components/LeftSidebar';
import MoodboardGrid from './components/MoodboardGrid';
import SimilarArtworks from './components/SimilarArtworks';
import { artworksData } from '../../mocks/artworks';

export default function Moodboard() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['전체', '일러스트', '디자인', '사진', '3D'];

  const filteredArtworks = selectedCategory === '전체' 
    ? artworksData 
    : artworksData.filter(artwork => {
        if (selectedCategory === '일러스트') return artwork.tags.includes('일러스트') || artwork.tags.includes('회화');
        if (selectedCategory === '디자인') return artwork.tags.includes('디자인');
        if (selectedCategory === '사진') return artwork.tags.includes('사진');
        if (selectedCategory === '3D') return artwork.tags.includes('3D') || artwork.tags.includes('AI');
        return true;
      });

  return (
    <div className="min-h-screen bg-white">
      <TopNavigation />
      
      {/* Header with breadcrumb */}
      <div className="bg-white border-b border-gray-100 pt-16">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <button 
              onClick={() => window.REACT_APP_NAVIGATE('/community')}
              className="hover:text-[#00B67E] transition-colors duration-200 cursor-pointer"
            >
              커뮤니티
            </button>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-[#00B67E] font-medium">무드보드</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* My Moodboards Section */}
        <div className="mb-12">
          <MoodboardGrid />
        </div>

        {/* Similar Artworks Section */}
        <div>
          <SimilarArtworks />
        </div>
      </div>
    </div>
  );
}
