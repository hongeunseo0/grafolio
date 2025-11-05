
import { useState } from 'react';

interface LeftSidebarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  bookmarkedCount: number;
}

export default function LeftSidebar({ activeFilter, onFilterChange, bookmarkedCount }: LeftSidebarProps) {
  const [showAllPostsSubmenu, setShowAllPostsSubmenu] = useState(true);

  const menuItems = [
    { name: '모든 게시물', icon: 'ri-file-list-3-line', hasSubmenu: true },
    { name: '미션', icon: 'ri-trophy-line', hasSubmenu: false },
    { name: '북마크', icon: 'ri-bookmark-line', hasSubmenu: false },
    { name: '팔로잉', icon: 'ri-user-follow-line', hasSubmenu: false }
  ];

  const allPostsSubmenuItems = [
    '정보 게시물',
    '고민 게시물',
    '피드백 게시물'
  ];

  const handleMenuClick = (menuName: string) => {
    if (menuName === '무드보드') {
      window.REACT_APP_NAVIGATE('/moodboard');
      return;
    }
    
    // 127버전처럼 모든 게시물 클릭 시에도 필터 변경
    onFilterChange(menuName);
  };

  const handleSubmenuClick = (submenuName: string) => {
    onFilterChange(submenuName);
  };

  const handleArrowClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowAllPostsSubmenu(!showAllPostsSubmenu);
  };

  return (
    <div className="p-6">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <div key={item.name}>
            <button
              onClick={() => handleMenuClick(item.name)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors duration-200 cursor-pointer ${
                activeFilter === item.name
                  ? 'bg-[#00B67E]/10 text-[#00B67E]'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center space-x-3">
                <i className={`${item.icon} text-lg w-5 h-5 flex items-center justify-center`}></i>
                <span className="font-medium">{item.name}</span>
              </div>
              {item.hasSubmenu && (
                <button
                  onClick={handleArrowClick}
                  className="p-1 hover:bg-gray-200 rounded transition-colors duration-200"
                >
                  <i className={`ri-arrow-down-s-line text-lg transition-transform duration-200 w-5 h-5 flex items-center justify-center ${
                    showAllPostsSubmenu ? 'rotate-180' : ''
                  }`}></i>
                </button>
              )}
            </button>
            
            {/* All Posts Submenu */}
            {item.name === '모든 게시물' && showAllPostsSubmenu && (
              <div className="ml-8 mt-2 space-y-1">
                {allPostsSubmenuItems.map((subItem) => (
                  <button
                    key={subItem}
                    onClick={() => handleSubmenuClick(subItem)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 cursor-pointer text-sm ${
                      activeFilter === subItem
                        ? 'bg-[#00B67E]/10 text-[#00B67E] font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {subItem}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
