
import { useState, useEffect, useCallback } from 'react';
import TopNavigation from '../../components/feature/TopNavigation';
import MainBanner from '../../components/feature/MainBanner';
import FilterSection from '../../components/feature/FilterSection';
import ArtworkCard from '../../components/feature/ArtworkCard';
import MiddleBanner from '../../components/feature/MiddleBanner';
import { artworksData } from '../../mocks/artworks';

export default function Home() {
  const [activeMenu, setActiveMenu] = useState('프로젝트');
  const [activeFilter, setActiveFilter] = useState('주목받는');
  const [activeCategory, setActiveCategory] = useState('전체');
  const [sortOrder, setSortOrder] = useState('추천순');
  const [displayedArtworks, setDisplayedArtworks] = useState(artworksData.slice(0, 8));
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const menuItems = ['프로젝트', '커뮤니티', '배경화면', '크리에이터'];

  const handleMenuClick = (item: string) => {
    setActiveMenu(item);
    if (item === '커뮤니티') {
      window.REACT_APP_NAVIGATE('/community');
    }
  };

  // 무한 스크롤 로딩 함수
  const loadMoreArtworks = useCallback(() => {
    if (loading || !hasMore) return;

    setLoading(true);

    // 실제로는 API 호출이지만, 여기서는 기존 데이터를 반복 사용
    setTimeout(() => {
      const currentLength = displayedArtworks.length;
      const nextBatch = [];

      // 기존 데이터를 반복하여 새로운 배치 생성
      for (let i = 0; i < 8; i++) {
        const originalIndex = (currentLength + i) % artworksData.length;
        const artwork = { ...artworksData[originalIndex] };
        artwork.id = `${artwork.id}-${Math.floor((currentLength + i) / artworksData.length)}`;
        nextBatch.push(artwork);
      }

      setDisplayedArtworks(prev => [...prev, ...nextBatch]);
      setLoading(false);

      // 임의로 100개 정도에서 로딩 중단
      if (currentLength + nextBatch.length >= 100) {
        setHasMore(false);
      }
    }, 1000);
  }, [displayedArtworks.length, loading, hasMore]);

  // 스크롤 이벤트 핸들러
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100) {
        loadMoreArtworks();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMoreArtworks]);

  return (
    <div className="min-h-screen bg-white">
      <TopNavigation />

      {/* Main Header Menu */}
      <div className="pt-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex space-x-12 py-4">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleMenuClick(item)}
                className={`text-lg font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                  activeMenu === item
                    ? 'text-[#00b57f] border-b-2 border-[#00b57f] pb-2'
                    : 'text-gray-600 hover:text-gray-800 pb-2'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6">
        {/* Main Banner Section */}
        <MainBanner />

        {/* Filter Section */}
        <FilterSection
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />

        {/* First 2 Rows of Artworks (8 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {displayedArtworks.slice(0, 8).map((artwork) => (
            <ArtworkCard
              key={artwork.id}
              id={artwork.id}
              title={artwork.title}
              creator={artwork.creator}
              imageUrl={artwork.imageUrl}
              likes={artwork.likes}
              views={artwork.views}
              date={artwork.date}
              tags={artwork.tags}
              showBadge={activeFilter === '주목받는'}
            />
          ))}
        </div>

        {/* Middle Banner - Challenge Section */}
        <div className="mb-12">
          <MiddleBanner />
        </div>

        {/* Remaining Artworks - Continue from 9th item */}
        {displayedArtworks.length > 8 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {displayedArtworks.slice(8).map((artwork) => (
              <ArtworkCard
                key={artwork.id}
                id={artwork.id}
                title={artwork.title}
                creator={artwork.creator}
                imageUrl={artwork.imageUrl}
                likes={artwork.likes}
                views={artwork.views}
                date={artwork.date}
                tags={artwork.tags}
                showBadge={activeFilter === '주목받는'}
              />
            ))}
          </div>
        )}

        {/* Loading Indicator */}
        {loading && (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#00b57f]"></div>
            <span className="ml-3 text-gray-600">작품을 불러오는 중...</span>
          </div>
        )}

        {/* End Message */}
        {!hasMore && (
          <div className="flex justify-center py-8">
            <p className="text-gray-500">모든 작품을 확인했습니다.</p>
          </div>
        )}
      </main>
    </div>
  );
}
