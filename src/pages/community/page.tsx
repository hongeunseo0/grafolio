
import { useState } from 'react';
import TopNavigation from '../../components/feature/TopNavigation';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import PostComposer from './components/PostComposer';
import FeedPost from './components/FeedPost';
import NewPostModal from './components/NewPostModal';
import MissionRoom from './components/MissionRoom';
import { communityPosts } from '../../mocks/communityPosts';

export default function Community() {
  const [posts, setPosts] = useState(communityPosts);
  const [activeMenu, setActiveMenu] = useState('커뮤니티');
  const [isNewPostModalOpen, setIsNewPostModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('모든 게시물'); // 초기값을 '모든 게시물'로 변경
  const [bookmarkedPosts, setBookmarkedPosts] = useState<string[]>([]);
  const [selectedHashtag, setSelectedHashtag] = useState<string>(''); // 초기값을 빈 문자열로 변경
  const [selectedMissionRoom, setSelectedMissionRoom] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showUploadDropdown, setShowUploadDropdown] = useState(false);

  const menuItems = ['프로젝트', '커뮤니티', '배경화면', '크리에이터'];

  const handleMenuClick = (item: string) => {
    setActiveMenu(item);
    if (item === '프로젝트') {
      window.REACT_APP_NAVIGATE('/');
    }
  };

  const handleUploadClick = () => {
    setShowUploadDropdown(!showUploadDropdown);
  };

  const handleProjectUpload = () => {
    setShowUploadDropdown(false);
    window.REACT_APP_NAVIGATE('/upload');
  };

  const handleCreatorStudio = () => {
    setShowUploadDropdown(false);
    console.log('크리에이터 스튜디오 페이지로 이동');
  };

  // 기존 코드 시작
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
      tags: tags || [],
      category: '일반'
    };
    setPosts([newPost, ...posts]);
    setIsNewPostModalOpen(false);
  };

  const handleMissionRoomClick = (roomName: string) => {
    setSelectedMissionRoom(roomName);
  };

  const handleBookmark = (postId: string) => {
    if (bookmarkedPosts.includes(postId)) {
      setBookmarkedPosts(bookmarkedPosts.filter(id => id !== postId));
    } else {
      setBookmarkedPosts([...bookmarkedPosts, postId]);
    }
  };

  const handleBackToAll = () => {
    if (selectedMissionRoom) {
      // 미션방에서 뒤로가기 시 미션 목록으로
      setSelectedMissionRoom(null);
    } else {
      // 다른 경우는 모든 게시물로
      setActiveFilter('모든 게시물');
      setSelectedHashtag(null);
    }
  };

  const handleSearch = (query: string) => {
    // 검색 기능 제거 - 빈 함수로 변경
  };

  const getMissionRoomPosts = (roomName: string) => {
    const missionPosts = [
      {
        id: `mission-${roomName}-1`,
        author: {
          name: '아티스트김',
          username: '@artist_kim',
          avatar: 'https://readdy.ai/api/search-image?query=korean%20artist%20portrait%2C%20creative%20professional%2C%20artistic%20background%2C%20modern%20style&width=40&height=40&seq=artist-kim&orientation=squarish'
        },
        content: `${roomName} 미션에 참여했습니다! 정말 재미있는 도전이었어요. 시간 제한이 있어서 더욱 집중할 수 있었습니다.`,
        images: ['https://readdy.ai/api/search-image?query=creative%20artwork%20for%20mission%20challenge%2C%20vibrant%20colors%2C%20artistic%20composition%2C%20digital%20art%20style%2C%20mission%20theme%20related&width=400&height=300&seq=mission-art-1&orientation=landscape'],
        timestamp: '1시간 전',
        likes: 24,
        comments: 8,
        shares: 3,
        isLiked: false,
        tags: ['미션', '챌린지'],
        category: '미션'
      },
      {
        id: `mission-${roomName}-2`,
        author: {
          name: '크리에이터박',
          username: '@creator_park',
          avatar: 'https://readdy.ai/api/search-image?query=creative%20designer%20portrait%2C%20artistic%20professional%2C%20modern%20aesthetic%2C%20clean%20background&width=40&height=40&seq=creator-park&orientation=squarish'
        },
        content: `${roomName} 완료! 다른 참가자들의 작품도 정말 인상적이네요. 많은 영감을 받았습니다.`,
        images: ['https://readdy.ai/api/search-image?query=mission%20artwork%20submission%2C%20creative%20digital%20art%2C%20colorful%20composition%2C%20artistic%20challenge%20result&width=400&height=300&seq=mission-art-2&orientation=landscape'],
        timestamp: '2시간 전',
        likes: 31,
        comments: 12,
        shares: 5,
        isLiked: false,
        tags: ['미션완료', '아트'],
        category: '미션'
      },
      {
        id: `mission-${roomName}-3`,
        author: {
          name: '디자이너이',
          username: '@designer_lee',
          avatar: 'https://readdy.ai/api/search-image?query=professional%20designer%20portrait%2C%20creative%20workspace%2C%20artistic%20background%2C%20modern%20style&width=40&height=40&seq=designer-lee&orientation=squarish'
        },
        content: `${roomName} 진행 중입니다! 아직 시간이 남아있어서 더 디테일을 추가하고 있어요. 모든 분들 화이팅!`,
        images: ['https://readdy.ai/api/search-image?query=work%20in%20progress%20artwork%2C%20creative%20process%2C%20artistic%20development%2C%20mission%20challenge%20art&width=400&height=300&seq=mission-art-3&orientation=landscape'],
        timestamp: '3시간 전',
        likes: 18,
        comments: 6,
        shares: 2,
        isLiked: false,
        tags: ['진행중', '미션'],
        category: '미션'
      },
      {
        id: `mission-${roomName}-4`,
        author: {
          name: '아티스트최',
          username: '@artist_choi',
          avatar: 'https://readdy.ai/api/search-image?query=young%20artist%20portrait%2C%20creative%20professional%2C%20artistic%20style%2C%20modern%20background&width=40&height=40&seq=artist-choi&orientation=squarish'
        },
        content: `${roomName}에서 새로운 기법을 시도해봤어요! 실험적인 접근이었지만 결과가 만족스럽습니다.`,
        images: ['https://readdy.ai/api/search-image?query=experimental%20artwork%2C%20innovative%20art%20technique%2C%20creative%20mission%20result%2C%20artistic%20innovation&width=400&height=300&seq=mission-art-4&orientation=landscape'],
        timestamp: '4시간 전',
        likes: 27,
        comments: 9,
        shares: 4,
        isLiked: false,
        tags: ['실험', '새로운기법'],
        category: '미션'
      },
      {
        id: `mission-${roomName}-5`,
        author: {
          name: '크리에이터정',
          username: '@creator_jung',
          avatar: 'https://readdy.ai/api/search-image?query=creative%20professional%20portrait%2C%20artistic%20background%2C%20modern%20aesthetic%2C%20designer%20style&width=40&height=40&seq=creator-jung&orientation=squarish'
        },
        content: `${roomName} 첫 참여인데 정말 즐거웠어요! 다른 참가자들과 소통하면서 많이 배웠습니다.`,
        images: ['https://readdy.ai/api/search-image?query=beginner%20mission%20artwork%2C%20learning%20process%20art%2C%20creative%20challenge%20submission%2C%20artistic%20growth&width=400&height=300&seq=mission-art-5&orientation=landscape'],
        timestamp: '5시간 전',
        likes: 22,
        comments: 11,
        shares: 3,
        isLiked: false,
        tags: ['첫참여', '학습'],
        category: '미션'
      }
    ];
    return missionPosts;
  };
  // 기존 코드 종료

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    if (filter === '정보 게시물') {
      setSelectedHashtag('#정보');
    } else {
      setSelectedHashtag('');
    }
    setSelectedMissionRoom(null);
  };

  const handleHashtagClick = (hashtag: string) => {
    setSelectedHashtag(hashtag);
  };

  // 정보 게시물의 해시태그별 게시물 생성 함수
  const getInfoPostsByHashtag = (hashtag: string) => {
    if (hashtag === '#정보') {
      return [
        {
          id: 'info-1',
          author: {
            name: '아트가이드',
            username: '@art_guide',
            avatar: 'https://readdy.ai/api/search-image?query=professional%20art%20guide%20portrait%2C%20educational%20background%2C%20modern%20aesthetic&width=40&height=40&seq=art-guide&orientation=squarish'
          },
          content: 'AI 최신 동향 분석: 2024년 디지털 아트 분야에서 주목해야 할 AI 기술 트렌드를 정리했습니다. 창작자들이 알아야 할 핵심 정보를 담았어요.',
          images: ['https://readdy.ai/api/search-image?query=AI%20technology%20trends%20analysis%2C%20digital%20art%20innovation%2C%20futuristic%20design%2C%20informative%20content&width=400&height=300&seq=info-guide-1&orientation=landscape'],
          timestamp: '2시간 전',
          likes: 45,
          comments: 12,
          shares: 8,
          isLiked: false,
          tags: ['정보', 'AI'],
          category: '정보'
        },
        {
          id: 'info-2',
          author: {
            name: '크리에이터팟',
            username: '@creator_tips',
            avatar: 'https://readdy.ai/api/search-image?query=creative%20professional%20portrait%2C%20tips%20and%20advice%20background%2C%20modern%20style&width=40&height=40&seq=creator-tips&orientation=squarish'
          },
          content: '금주의 디자인 트렌드 리포트: 미니멀리즘과 네오모피즘의 조화가 주목받고 있습니다. 최신 디자인 패턴과 색상 트렌드를 분석해보세요.',
          images: ['https://readdy.ai/api/search-image?query=design%20trends%20report%2C%20minimalism%20neomorphism%2C%20modern%20design%20patterns%2C%20professional%20analysis&width=400&height=300&seq=info-guide-2&orientation=landscape'],
          timestamp: '4시간 전',
          likes: 38,
          comments: 9,
          shares: 6,
          isLiked: false,
          tags: ['정보', '트렌드'],
          category: '정보'
        },
        {
          id: 'info-3',
          author: {
            name: '아트테크',
            username: '@art_tech',
            avatar: 'https://readdy.ai/api/search-image?query=tech%20art%20professional%20portrait%2C%20digital%20art%20background%2C%20modern%20aesthetic&width=40&height=40&seq=art-tech&orientation=squarish'
          },
          content: '디지털 아트 소프트웨어 완벽 가이드: Procreate, Photoshop, Clip Studio Paint 비교 분석과 각 프로그램별 최적 활용법을 정리했습니다.',
          images: ['https://readdy.ai/api/search-image?query=digital%20art%20software%20comparison%20guide%2C%20professional%20tools%20analysis%2C%20educational%20content&width=400&height=300&seq=info-guide-3&orientation=landscape'],
          timestamp: '6시간 전',
          likes: 52,
          comments: 15,
          shares: 11,
          isLiked: false,
          tags: ['정보', '소프트웨어'],
          category: '정보'
        },
        {
          id: 'info-4',
          author: {
            name: '디자인인사이트',
            username: '@design_insight',
            avatar: 'https://readdy.ai/api/search-image?query=design%20expert%20portrait%2C%20professional%20background%2C%20modern%20aesthetic&width=40&height=40&seq=design-insight&orientation=squarish'
          },
          content: '색채 심리학 완벽 정리: 브랜딩과 UI 디자인에서 색상이 사용자 심리에 미치는 영향을 과학적으로 분석한 종합 가이드입니다.',
          images: ['https://readdy.ai/api/search-image?query=color%20psychology%20guide%2C%20branding%20design%20analysis%2C%20scientific%20color%20theory%2C%20educational%20content&width=400&height=300&seq=info-guide-4&orientation=landscape'],
          timestamp: '8시간 전',
          likes: 67,
          comments: 21,
          shares: 14,
          isLiked: false,
          tags: ['정보', '색채학'],
          category: '정보'
        }
      ];
    } else if (hashtag === '#행사') {
      return [
        {
          id: 'event-1',
          author: {
            name: '이벤트알림',
            username: '@event_alert',
            avatar: 'https://readdy.ai/api/search-image?query=event%20organizer%20portrait%2C%20professional%20background%2C%20modern%20aesthetic&width=40&height=40&seq=event-alert&orientation=squarish'
          },
          content: '🎉 2024 디지털 아트 페스티벌 개최! 3월 15일부터 17일까지 코엑스에서 진행됩니다. 유명 아티스트들의 작품 전시와 워크샵이 준비되어 있어요.',
          images: ['https://readdy.ai/api/search-image?query=digital%20art%20festival%20poster%2C%20event%20announcement%2C%20colorful%20design%2C%20artistic%20exhibition&width=400&height=300&seq=event-1&orientation=landscape'],
          timestamp: '1시간 전',
          likes: 67,
          comments: 23,
          shares: 18,
          isLiked: false,
          tags: ['행사', '페스티벌'],
          category: '정보'
        },
        {
          id: 'event-2',
          author: {
            name: '갤러리소식',
            username: '@gallery_news',
            avatar: 'https://readdy.ai/api/search-image?query=gallery%20curator%20portrait%2C%20art%20exhibition%20background%2C%20professional%20style&width=40&height=40&seq=gallery-news&orientation=squarish'
          },
          content: '신진 작가 공모전 접수 시작! 4월 30일까지 접수 가능하며, 우수작은 갤러리 전시 기회가 주어집니다. 많은 참여 부탁드려요!',
          images: ['https://readdy.ai/api/search-image?query=art%20competition%20announcement%2C%20gallery%20exhibition%2C%20professional%20art%20contest%2C%20modern%20design&width=400&height=300&seq=event-2&orientation=landscape'],
          timestamp: '3시간 전',
          likes: 41,
          comments: 16,
          shares: 12,
          isLiked: false,
          tags: ['행사', '공모전'],
          category: '정보'
        },
        {
          id: 'event-3',
          author: {
            name: '워크샵안내',
            username: '@workshop_info',
            avatar: 'https://readdy.ai/api/search-image?query=workshop%20instructor%20portrait%2C%20educational%20background%2C%20creative%20environment&width=40&height=40&seq=workshop-info&orientation=squarish'
          },
          content: '무료 디지털 페인팅 워크샵 개최! 매주 토요일 오후 2시, 온라인으로 진행됩니다. 초보자도 환영해요!',
          images: ['https://readdy.ai/api/search-image?query=digital%20painting%20workshop%2C%20online%20education%2C%20art%20learning%20session%2C%20creative%20workspace&width=400&height=300&seq=event-3&orientation=landscape'],
          timestamp: '5시간 전',
          likes: 34,
          comments: 11,
          shares: 7,
          isLiked: false,
          tags: ['행사', '워크샵'],
          category: '정보'
        }
      ];
    }
    return [];
  };

  // 필터링된 게시물
  const filteredPosts = selectedMissionRoom 
    ? getMissionRoomPosts(selectedMissionRoom)
    : selectedHashtag && activeFilter === '정보 게시물'
    ? getInfoPostsByHashtag(selectedHashtag)
    : posts.filter(post => {
        if (selectedHashtag) {
          return post.tags?.some(tag => tag.includes(selectedHashtag.replace('#', '')));
        }
        
        switch (activeFilter) {
          case '모든 게시물':
            return true;
          case '정보 게시물':
            return post.category === '정보' || post.content.includes('정보') || post.content.includes('팁') || post.content.includes('가이드');
          case '고민 게시물':
            return post.category === '고민' || post.content.includes('고민') || post.content.includes('도움') || post.content.includes('조언');
          case '피드백 게시물':
            return post.category === '피드백' || post.content.includes('피드백') || post.content.includes('의견') || post.hasTimeLimit;
          case '북마크':
            return bookmarkedPosts.includes(post.id);
          default:
            return true;
        }
      });

  // 기존 코드 시작 (함수 정의)
  const getFilterTitle = () => {
    if (selectedMissionRoom) {
      return selectedMissionRoom;
    }
    return activeFilter;
  };

  const showBackButton = activeFilter !== '모든 게시물' || selectedHashtag || selectedMissionRoom;

  const getFilterHashtags = () => {
    if (activeFilter === '정보 게시물' && !selectedMissionRoom) {
      return ['정보', '행사'];
    }
    return [];
  };

  const filterHashtags = getFilterHashtags();

  const defaultSelectedHashtag = activeFilter === '정보 게시물' && !selectedHashtag ? '#정보' : selectedHashtag;

  const currentMissionRoom = selectedMissionRoom ? getMissionRoomInfo(selectedMissionRoom) : null;
  // 기존 코드 종료

  return (
    <div className="min-h-screen bg-white">
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="작품, 크리에이터를 검색해보세요"
                  className="w-full px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-full focus-outline-none focus:ring-2 focus:ring-[#00B67E] focus:border-transparent"
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
      
      <div className="flex max-w-7xl mx-auto pt-16">
        {/* Left Sidebar - Fixed */}
        <div className="w-64 fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 overflow-y-auto z-30">
          <LeftSidebar 
            activeFilter={activeFilter} 
            onFilterChange={handleFilterChange}
            bookmarkedCount={0}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64 mr-80 px-6 py-6">
          {/* 미션 방 표시 */}
          {activeFilter === '미션' && !selectedMissionRoom && (
            <MissionRoom onRoomClick={handleMissionRoomClick} />
          )}

          {/* 미션방 내부 또는 일반 게시물 */}
          {(activeFilter !== '미션' || selectedMissionRoom) && (
            <>
              {/* Section Title */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  {showBackButton && (
                    <button
                      onClick={handleBackToAll}
                      className="p-1 text-gray-500 hover:text-gray-700 cursor-pointer"
                    >
                      <i className="ri-arrow-left-line text-lg w-5 h-5 flex items-center justify-center"></i>
                    </button>
                  )}
                  <h2 className="text-xl font-semibold text-gray-800">{getFilterTitle()}</h2>
                </div>
              </div>

              {/* 미션방 헤더 */}
              {selectedMissionRoom && currentMissionRoom && (
                <div className="mb-8 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-3xl">{currentMissionRoom.emoji}</span>
                      <div>
                        <h1 className="text-2xl font-bold text-gray-800 mb-2">{currentMissionRoom.title}</h1>
                        <p className="text-gray-600 mb-3">{currentMissionRoom.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>참가자 {currentMissionRoom.participants}명</span>
                          <span>⏰ 남은 시간: {currentMissionRoom.timeLeft}</span>
                        </div>
                      </div>
                    </div>
                    <button className="px-6 py-3 bg-[#00B67E] text-white rounded-full hover:bg-[#00a06f] transition-colors duration-200 font-medium cursor-pointer whitespace-nowrap">
                      미션 참여하기
                    </button>
                  </div>
                  
                  {/* 목표 달성률 */}
                  <div className="mt-6 grid grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="w-8 h-8 mx-auto mb-2 text-[#00B67E] flex items-center justify-center">
                        <i className="ri-trophy-line text-xl"></i>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">목표 달성</p>
                      <p className="text-2xl font-bold text-gray-800">75%</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="w-8 h-8 mx-auto mb-2 text-orange-500 flex items-center justify-center">
                        <i className="ri-fire-line text-xl"></i>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">연속 참여</p>
                      <p className="text-2xl font-bold text-gray-800">5일</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Post Composer - 북마크 상태일 때 숨김 */}
              {activeFilter !== '북마크' && !selectedMissionRoom && !searchQuery && (
                <div className="mb-6">
                  <PostComposer onOpenModal={() => setIsNewPostModalOpen(true)} />
                </div>
              )}

              {/* Persistent Filter Bar - 정보 게시물에만 표시 */}
              {activeFilter === '정보 게시물' && !selectedMissionRoom && (
                <div className="mb-8">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => handleHashtagClick('#정보')}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer ${
                        selectedHashtag === '#정보'
                          ? 'bg-gray-600 text-white'
                          : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      #정보
                    </button>
                    <button
                      onClick={() => handleHashtagClick('#행사')}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer ${
                        selectedHashtag === '#행사'
                          ? 'bg-gray-600 text-white'
                          : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      #행사
                    </button>
                  </div>
                </div>
              )}

              {/* Feed */}
              <div className="space-y-6">
                {activeFilter === '북마크' && bookmarkedPosts.length === 0 ? (
                  <div className="text-center py-12">
                    <i className="ri-bookmark-line text-4xl text-gray-300 mb-4"></i>
                    <p className="text-gray-500 text-lg">아직 북마크한 게시물이 없습니다.</p>
                    <p className="text-gray-400 text-sm mt-2">관심 있는 게시물을 북마크해보세요!</p>
                  </div>
                ) : filteredPosts.length === 0 ? (
                  <div className="text-center py-12">
                    <i className="ri-file-list-line text-4xl text-gray-300 mb-4"></i>
                    <p className="text-gray-500 text-lg">게시물이 없습니다.</p>
                    <p className="text-gray-400 text-sm mt-2">새로운 게시물을 작성해보세요!</p>
                  </div>
                ) : (
                  filteredPosts.map((post) => (
                    <FeedPost 
                      key={post.id} 
                      post={post} 
                      isBookmarked={bookmarkedPosts.includes(post.id)}
                      onBookmark={() => handleBookmark(post.id)}
                      onHashtagClick={handleHashtagClick}
                    />
                  ))
                )}
              </div>
            </>
          )}
        </div>

        {/* Right Sidebar - Fixed */}
        <div className="w-80 fixed right-0 top-16 h-[calc(100vh-4rem)] bg-white border-l border-gray-200 overflow-y-auto z-30">
          <RightSidebar onHashtagClick={handleHashtagClick} />
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

// 기존 코드 시작 (미션방 정보 가져오기)
const getMissionRoomInfo = (roomName: string) => {
  const missionRooms = [
    {
      title: '스피드드로잉 배틀',
      description: '30분 안에 주제를 완성하는 스피드 드로잉 챌린지',
      participants: 24,
      timeLeft: '2시간 23분',
      emoji: '🔥'
    },
    {
      title: '색감 마스터 챌린지',
      description: '주어진 팔레트로 아름다운 작품 만들기',
      participants: 18,
      timeLeft: '1일 5시간',
      emoji: '🎨'
    },
    {
      title: '일러스트 스토리텔링',
      description: '한 장의 그림으로 완전한 이야기 전달하기',
      participants: 31,
      timeLeft: '3일 12시간',
      emoji: '📚'
    },
    {
      title: '캐릭터 디자인 마스터',
      description: '독창적인 캐릭터 디자인 및 설정 만들기',
      participants: 27,
      timeLeft: '2일 8시간',
      emoji: '🌟'
    },
    {
      title: '환경 컨셉 아트',
      description: '상상의 세계와 환경을 시각화하기',
      participants: 22,
      timeLeft: '4일 15시간',
      emoji: '🏞️'
    },
    {
      title: '디지털 페인팅 기법',
      description: '고급 디지털 페인팅 테크닉 마스터하기',
      participants: 35,
      timeLeft: '1일 20시간',
      emoji: '✨'
    }
  ];
  return missionRooms.find(room => room.title === roomName);
};
