
import { useState } from 'react';

export default function LeftSidebar() {
  const [activeMenu, setActiveMenu] = useState('모든 게시물');
  const [showTrendSubmenu, setShowTrendSubmenu] = useState(false);
  const [showAllPostsSubmenu, setShowAllPostsSubmenu] = useState(false);

  const menuItems = [
    { name: '모든 게시물', icon: 'ri-file-list-3-line', hasSubmenu: true },
    { name: '팔로잉', icon: 'ri-user-follow-line', hasSubmenu: false },
    { name: '트렌드', icon: 'ri-fire-line', hasSubmenu: true },
    { name: '무드보드', icon: 'ri-image-2-line', hasSubmenu: false }
  ];

  const trendSubmenuItems = [
    '디지털 아트',
    '일러스트레이션',
    '사진',
    '3D 모델링',
    '애니메이션',
    'UI/UX 디자인'
  ];

  const allPostsSubmenuItems = [
    '정보 게시판',
    '고민 게시판',
    '피드백 게시판'
  ];

  const handleMenuClick = (menuName: string) => {
    if (menuName === '무드보드') {
      window.REACT_APP_NAVIGATE('/moodboard');
      return;
    }
    
    setActiveMenu(menuName);
    if (menuName === '트렌드') {
      setShowTrendSubmenu(!showTrendSubmenu);
      setShowAllPostsSubmenu(false);
    } else if (menuName === '모든 게시물') {
      setShowAllPostsSubmenu(!showAllPostsSubmenu);
      setShowTrendSubmenu(false);
    } else {
      setShowTrendSubmenu(false);
      setShowAllPostsSubmenu(false);
    }
  };

  const handleSubmenuClick = (submenuName: string) => {
    setActiveMenu(submenuName);
  };

  return (
    <div className="p-6">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <div key={item.name}>
            <button
              onClick={() => handleMenuClick(item.name)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors duration-200 cursor-pointer ${
                activeMenu === item.name
                  ? 'bg-[#00B67E]/10 text-[#00B67E]'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center space-x-3">
                <i className={`${item.icon} text-lg w-5 h-5 flex items-center justify-center`}></i>
                <span className="font-medium">{item.name}</span>
              </div>
              {item.hasSubmenu && (
                <i className={`ri-arrow-down-s-line text-lg transition-transform duration-200 w-5 h-5 flex items-center justify-center ${
                  (item.name === '트렌드' && showTrendSubmenu) || (item.name === '모든 게시물' && showAllPostsSubmenu) ? 'rotate-180' : ''
                }`}></i>
              )}
            </button>
            
            {/* Trend Submenu */}
            {item.name === '트렌드' && showTrendSubmenu && (
              <div className="ml-8 mt-2 space-y-1">
                {trendSubmenuItems.map((subItem) => (
                  <button
                    key={subItem}
                    onClick={() => handleSubmenuClick(subItem)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 cursor-pointer ${
                      activeMenu === subItem
                        ? 'bg-[#00B67E]/10 text-[#00B67E]'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {subItem}
                  </button>
                ))}
              </div>
            )}

            {/* All Posts Submenu */}
            {item.name === '모든 게시물' && showAllPostsSubmenu && (
              <div className="ml-8 mt-2 space-y-1">
                {allPostsSubmenuItems.map((subItem) => (
                  <button
                    key={subItem}
                    onClick={() => handleSubmenuClick(subItem)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 cursor-pointer ${
                      activeMenu === subItem
                        ? 'bg-[#00B67E]/10 text-[#00B67E]'
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
