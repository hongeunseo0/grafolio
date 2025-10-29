
import { useState } from 'react';

export default function RightSidebar() {
  const [followedUsers, setFollowedUsers] = useState<string[]>([]);
  const [showMoreTopics, setShowMoreTopics] = useState(false);
  const [showMoreUsers, setShowMoreUsers] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const trendingTopics = [
    { hashtag: '#디지털아트', posts: 1247 },
    { hashtag: '#일러스트', posts: 892 },
    { hashtag: '#사진작품', posts: 634 },
    { hashtag: '#3D모델링', posts: 521 },
    { hashtag: '#애니메이션', posts: 387 },
    { hashtag: '#UI디자인', posts: 298 },
    { hashtag: '#웹디자인', posts: 245 },
    { hashtag: '#브랜딩', posts: 198 },
    { hashtag: '#타이포그래피', posts: 156 },
    { hashtag: '#30일챌린지', posts: 342 },
    { hashtag: '#일일드로잉', posts: 289 },
    { hashtag: '#포트폴리오챌린지', posts: 234 },
    { hashtag: '#컬러챌린지', posts: 187 },
    { hashtag: '#미니멀챌린지', posts: 165 }
  ];

  const displayedTopics = showMoreTopics ? trendingTopics : trendingTopics.slice(0, 4);

  const suggestedUsers = [
    {
      id: '1',
      name: '김크리에이터',
      username: '@kimcreator',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20korean%20female%20digital%20artist%20with%20colorful%20creative%20background%2C%20studio%20lighting%2C%20modern%20aesthetic%2C%20artistic%20vibe&width=40&height=40&seq=suggest1&orientation=squarish',
      isOnline: true
    },
    {
      id: '2',
      name: '박일러스트',
      username: '@parkillust',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20korean%20male%20illustrator%20with%20sketching%20tools%20background%2C%20creative%20workspace%2C%20artistic%20atmosphere&width=40&height=40&seq=suggest2&orientation=squarish',
      isOnline: false
    },
    {
      id: '3',
      name: '이포토그래퍼',
      username: '@leephoto',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20korean%20photographer%20with%20camera%20equipment%20background%2C%20studio%20setting%2C%20professional%20lighting&width=40&height=40&seq=suggest3&orientation=squarish',
      isOnline: true
    },
    {
      id: '4',
      name: '최3D아티스트',
      username: '@choi3d',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20korean%203D%20artist%20with%20digital%20modeling%20background%2C%20tech%20workspace%2C%20modern%20creative%20environment&width=40&height=40&seq=suggest4&orientation=squarish',
      isOnline: false
    },
    {
      id: '5',
      name: '정애니메이터',
      username: '@jungani',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20korean%20animator%20with%20animation%20studio%20background%2C%20creative%20workspace%2C%20artistic%20tools&width=40&height=40&seq=suggest5&orientation=squarish',
      isOnline: true
    },
    {
      id: '6',
      name: '한UI디자이너',
      username: '@hanui',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20korean%20UI%20designer%20with%20design%20workspace%20background%2C%20modern%20office%2C%20creative%20environment&width=40&height=40&seq=suggest6&orientation=squarish',
      isOnline: false
    }
  ];

  const displayedUsers = showMoreUsers ? suggestedUsers : suggestedUsers.slice(0, 3);

  const handleFollow = (userId: string) => {
    if (followedUsers.includes(userId)) {
      setFollowedUsers(followedUsers.filter(id => id !== userId));
    } else {
      setFollowedUsers([...followedUsers, userId]);
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Search Bar */}
      <div className="bg-gray-50 rounded-xl p-4">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="해시태그 또는 게시물 검색"
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B67E]/50 focus:border-[#00B67E] transition-all duration-200 text-sm"
          />
          <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 flex items-center justify-center"></i>
        </div>
      </div>

      {/* Trending Topics */}
      <div className="bg-gray-50 rounded-xl p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">트렌드 토픽</h3>
        <div className="space-y-2">
          {displayedTopics.map((topic) => (
            <div key={topic.hashtag} className="flex items-center justify-between cursor-pointer hover:bg-white rounded-lg p-2 transition-colors duration-200">
              <div>
                <p className="font-medium text-[#00B67E] text-sm">{topic.hashtag}</p>
                <p className="text-xs text-gray-500">{topic.posts.toLocaleString()}개의 게시물</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => setShowMoreTopics(!showMoreTopics)}
          className="w-full mt-3 text-sm text-[#00B67E] hover:text-[#00a06f] transition-colors duration-200 cursor-pointer"
        >
          {showMoreTopics ? '접기' : '더보기'}
        </button>
      </div>

      {/* Suggested Users */}
      <div className="bg-gray-50 rounded-xl p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">알 수도 있는 사용자</h3>
        <div className="space-y-3">
          {displayedUsers.map((user) => (
            <div key={user.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  {user.isOnline && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-sm">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.username}</p>
                </div>
              </div>
              <button
                onClick={() => handleFollow(user.id)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                  followedUsers.includes(user.id)
                    ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    : 'bg-[#00B67E] text-white hover:bg-[#00a06f]'
                }`}
              >
                {followedUsers.includes(user.id) ? '팔로잉' : '팔로우'}
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={() => setShowMoreUsers(!showMoreUsers)}
          className="w-full mt-3 text-sm text-[#00B67E] hover:text-[#00a06f] transition-colors duration-200 cursor-pointer"
        >
          {showMoreUsers ? '접기' : '더보기'}
        </button>
      </div>
    </div>
  );
}
