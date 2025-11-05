
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
  const [displayedArtworks, setDisplayedArtworks] = useState(
    artworksData.slice(0, 8)
  );
  // Fixed syntax error: removed extra "="
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [showUploadDropdown, setShowUploadDropdown] = useState(false); // 기본값을 false로 변경

  const menuItems = ['프로젝트', '커뮤니티', '배경화면', '크리에이터'];

  const handleMenuClick = (item: string) => {
    setActiveMenu(item);
    // Guarded navigation – falls back to a simple location change if the
    // custom navigation helper is not defined.
    if (item === '커뮤니티') {
      if (typeof window !== 'undefined' && typeof window.location !== 'undefined') {
        // If a global navigation function exists (e.g., injected via env),
        // use it; otherwise, default to changing the URL.
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (typeof window.REACT_APP_NAVIGATE === 'function') {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          window.REACT_APP_NAVIGATE('/community');
        } else {
          window.location.href = '/community';
        }
      }
    }
  };

  const handleUploadClick = () => {
    setShowUploadDropdown(!showUploadDropdown);
  };

  const handleProjectUpload = () => {
    setShowUploadDropdown(false);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (typeof window.REACT_APP_NAVIGATE === 'function') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.REACT_APP_NAVIGATE('/upload');
    } else {
      window.location.href = '/upload';
    }
  };

  const handleCreatorStudio = () => {
    setShowUploadDropdown(false);
    console.log('크리에이터 스튜디오 페이지로 이동');
  };

  // Infinite‑scroll loader – functional update eliminates stale‑state bugs.
  const loadMoreArtworks = useCallback(() => {
    if (loading || !hasMore) return;

    setLoading(true);

    // In a real app this would be an API call. Here we simulate latency.
    setTimeout(() => {
      try {
        setDisplayedArtworks((prev) => {
          const currentLength = prev.length;
          const nextBatch: typeof artworksData[0][] = [];

          // Re‑use the mock data to generate a new batch.
          for (let i = 0; i < 8; i++) {
            const originalIndex = (currentLength + i) % artworksData.length;
            const artwork = { ...artworksData[originalIndex] };
            // Ensure each generated item has a unique id.
            artwork.id = `${artwork.id}-${Math.floor(
              (currentLength + i) / artworksData.length
            )}`;
            nextBatch.push(artwork);
          }

          const updated = [...prev, ...nextBatch];

          // Stop further loading after roughly 100 items.
          if (updated.length >= 100) {
            setHasMore(false);
          }

          return updated;
        });
      } catch (err) {
        console.error('Failed to load more artworks:', err);
        // Gracefully stop loading on error.
        setHasMore(false);
      } finally {
        setLoading(false);
      }
    }, 1000);
  }, [loading, hasMore]);

  // Scroll listener – fires loadMoreArtworks when near the page bottom.
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight +
          document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        loadMoreArtworks();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMoreArtworks]);

  return (
    <div className="min-h-screen bg-white">
      <TopNavigation />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50">
        <div className="w-full px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <img
                  src="https://static.readdy.ai/image/f60abcf09db3aff2007405d721dad765/995027753dcedd7587796507707f4e5f.png"
                  alt="Logo"
                  className="h-8 w-auto"
                />
              </div>
              <nav className="flex space-x-8">
                {menuItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleMenuClick(item)}
                    className={`text-base transition-colors duration-200 cursor-pointer whitespace-nowrap font-medium ${
                      activeMenu === item
                        ? 'text-[#00b57f]'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input
                  placeholder="작품, 크리에이터를 검색해보세요"
                  className="w-full px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00B67E] focus:border-transparent"
                />
                <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button 
                  onClick={handleUploadClick}
                  className="px-4 py-2 bg-[#00B67E] text-white rounded-full hover:bg-[#00a06f] transition-colors duration-200 font-medium cursor-pointer whitespace-nowrap"
                >
                  업로드
                </button>
                
                {/* Upload Dropdown - 클릭했을 때만 표시 */}
                {showUploadDropdown && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <button 
                      onClick={handleProjectUpload}
                      className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 transition-colors duration-200 cursor-pointer whitespace-nowrap border-b border-gray-100 flex items-center"
                    >
                      <i className="ri-folder-upload-line text-[#00B67E] mr-3 w-4 h-4 flex items-center justify-center"></i>
                      프로젝트 업로드
                    </button>
                    <button 
                      onClick={handleCreatorStudio}
                      className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 transition-colors duration-200 cursor-pointer whitespace-nowrap flex items-center"
                    >
                      <i className="ri-video-line text-[#00B67E] mr-3 w-4 h-4 flex items-center justify-center"></i>
                      크리에이터 스튜디오
                    </button>
                  </div>
                )}
              </div>
              <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors duration-200 cursor-pointer">
                <i className="ri-notification-line text-xl"></i>
              </button>
              <button className="w-8 h-8 bg-gray-300 rounded-full hover:bg-gray-400 transition-colors duration-200 cursor-pointer"></button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-20">
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
