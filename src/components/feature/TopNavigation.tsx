
import { useState } from 'react';

export default function TopNavigation() {
  const [showUploadDropdown, setShowUploadDropdown] = useState(false);

  const handleUploadClick = () => {
    setShowUploadDropdown(!showUploadDropdown);
  };

  const handleProjectUpload = () => {
    setShowUploadDropdown(false);
    window.REACT_APP_NAVIGATE('/upload');
  };

  const handleSalesContentUpload = () => {
    setShowUploadDropdown(false);
    // 판매 콘텐츠 등록 페이지로 이동 (추후 구현)
    console.log('판매 콘텐츠 등록 페이지로 이동');
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="https://static.readdy.ai/image/f60abcf09db3aff2007405d721dad765/995027753dcedd7587796507707f4e5f.png" 
                alt="Logo" 
                className="h-8 w-auto"
              />
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="작품, 크리에이터를 검색해보세요"
                  className="w-full px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00B67E] focus:border-transparent"
                />
                <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button 
                  onClick={handleUploadClick}
                  className="px-4 py-2 bg-[#00B67E] text-white rounded-full hover:bg-[#00a06f] transition-colors duration-200 font-medium cursor-pointer whitespace-nowrap"
                >
                  업로드
                </button>
                
                {/* Upload Dropdown */}
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
                      onClick={handleSalesContentUpload}
                      className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 transition-colors duration-200 cursor-pointer whitespace-nowrap flex items-center"
                    >
                      <i className="ri-shopping-bag-line text-[#00B67E] mr-3 w-4 h-4 flex items-center justify-center"></i>
                      판매 콘텐츠 등록
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

      {/* Overlay to close dropdown when clicking outside */}
      {showUploadDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowUploadDropdown(false)}
        ></div>
      )}
    </>
  );
}
