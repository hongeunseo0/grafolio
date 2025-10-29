
import { useState } from 'react';
import TopNavigation from '../../components/feature/TopNavigation';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import PostComposer from './components/PostComposer';
import FeedPost from './components/FeedPost';
import NewPostModal from './components/NewPostModal';
import { communityPosts } from '../../mocks/communityPosts';

export default function Community() {
  const [posts, setPosts] = useState(communityPosts);
  const [activeMenu, setActiveMenu] = useState('커뮤니티');
  const [isNewPostModalOpen, setIsNewPostModalOpen] = useState(false);

  const menuItems = ['프로젝트', '커뮤니티', '배경화면', '크리에이터'];

  const handleMenuClick = (item: string) => {
    setActiveMenu(item);
    if (item === '프로젝트') {
      window.REACT_APP_NAVIGATE('/');
    }
  };

  const handleNewPost = (content: string, images?: string[], tags?: string[]) => {
    const newPost = {
      id: Date.now().toString(),
      author: {
        name: '현재 사용자',
        username: '@current_user',
        avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20korean%20artist%20with%20creative%20background%2C%20studio%20lighting%2C%20modern%20aesthetic%2C%20clean%20background&width=40&height=40&seq=current-user&orientation=squarish'
      },
      content,
      images: images || [],
      timestamp: '방금 전',
      likes: 0,
      comments: 0,
      shares: 0,
      isLiked: false,
      tags: tags || []
    };
    setPosts([newPost, ...posts]);
    setIsNewPostModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <TopNavigation />
      
      {/* Main Header Menu - Fixed */}
      <div className="fixed top-16 left-0 right-0 bg-white border-b border-gray-100 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex space-x-12 py-4">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleMenuClick(item)}
                className={`text-lg transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                  activeMenu === item
                    ? 'text-[#00b57f] border-b-2 border-[#00b57f] pb-2 font-bold'
                    : 'text-gray-600 hover:text-gray-800 pb-2 font-medium'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </div>
      
      <div className="flex max-w-7xl mx-auto pt-32">
        {/* Left Sidebar - Fixed */}
        <div className="w-64 fixed left-0 top-32 h-[calc(100vh-8rem)] bg-white border-r border-gray-200 overflow-y-auto z-30">
          <LeftSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64 mr-80 px-6 py-6">
          {/* Post Composer */}
          <div className="mb-6">
            <PostComposer onOpenModal={() => setIsNewPostModalOpen(true)} />
          </div>

          {/* Feed */}
          <div className="space-y-6">
            {posts.map((post) => (
              <FeedPost key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Right Sidebar - Fixed */}
        <div className="w-80 fixed right-0 top-32 h-[calc(100vh-8rem)] bg-white border-l border-gray-200 overflow-y-auto z-30">
          <RightSidebar />
        </div>
      </div>

      {/* New Post Modal */}
      {isNewPostModalOpen && (
        <NewPostModal
          onClose={() => setIsNewPostModalOpen(false)}
          onPost={handleNewPost}
        />
      )}
    </div>
  );
}
