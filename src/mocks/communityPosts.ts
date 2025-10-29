
export const communityPosts = [
  {
    id: '1',
    author: {
      name: '김아티스트',
      username: '@kim_artist',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20korean%20female%20artist%20with%20paint%20brushes%2C%20artistic%20studio%20background%2C%20natural%20lighting%2C%20creative%20atmosphere&width=40&height=40&seq=kim-artist&orientation=squarish'
    },
    content: '새로운 디지털 아트 작업을 완성했어요! 몇 주 동안 작업한 결과물인데, 여러분의 피드백이 궁금합니다. 색감과 구성에 대해 어떻게 생각하시나요?',
    images: [
      'https://readdy.ai/api/search-image?query=stunning%20digital%20art%20illustration%20of%20futuristic%20cityscape%20with%20neon%20lights%2C%20cyberpunk%20aesthetic%2C%20vibrant%20colors%2C%20detailed%20architecture%2C%20professional%20digital%20painting&width=600&height=400&seq=digital-art-1&orientation=landscape'
    ],
    timestamp: '2시간 전',
    likes: 124,
    comments: 18,
    shares: 7,
    isLiked: false,
    tags: ['디지털아트', '사이버펑크', '일러스트레이션', '미래도시']
  },
  {
    id: '2',
    author: {
      name: '박포토그래퍼',
      username: '@park_photo',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20korean%20male%20photographer%20with%20camera%20equipment%2C%20modern%20studio%20setting%2C%20confident%20expression&width=40&height=40&seq=park-photo&orientation=squarish'
    },
    content: '오늘 아침 한강에서 찍은 일출 사진들입니다. 날씨가 정말 좋아서 멋진 순간들을 담을 수 있었어요!',
    images: [
      'https://readdy.ai/api/search-image?query=beautiful%20sunrise%20over%20Han%20River%20Seoul%2C%20golden%20hour%20lighting%2C%20peaceful%20water%20reflection%2C%20city%20skyline%20silhouette%2C%20professional%20photography&width=600&height=400&seq=sunrise-1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=serene%20morning%20mist%20over%20river%20with%20bridge%2C%20soft%20golden%20light%2C%20minimalist%20composition%2C%20tranquil%20atmosphere%2C%20landscape%20photography&width=600&height=400&seq=sunrise-2&orientation=landscape'
    ],
    timestamp: '4시간 전',
    likes: 89,
    comments: 12,
    shares: 15,
    isLiked: true,
    tags: ['사진', '일출', '한강', '풍경사진', '골든아워']
  },
  {
    id: '3',
    author: {
      name: '이디자이너',
      username: '@lee_design',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20korean%20female%20UI%20designer%20with%20modern%20workspace%2C%20clean%20aesthetic%2C%20creative%20environment&width=40&height=40&seq=lee-design&orientation=squarish'
    },
    content: '새로운 모바일 앱 UI 디자인 프로젝트를 진행 중입니다. 사용자 경험을 중심으로 한 미니멀한 디자인을 목표로 하고 있어요.',
    images: [
      'https://readdy.ai/api/search-image?query=modern%20mobile%20app%20UI%20design%20mockup%2C%20clean%20interface%2C%20minimalist%20style%2C%20user-friendly%20layout%2C%20professional%20presentation&width=400&height=600&seq=ui-design-1&orientation=portrait',
      'https://readdy.ai/api/search-image?query=mobile%20app%20wireframe%20and%20design%20system%2C%20color%20palette%2C%20typography%2C%20modern%20UI%20elements%2C%20professional%20design%20showcase&width=600&height=400&seq=ui-design-2&orientation=landscape',
      'https://readdy.ai/api/search-image?query=mobile%20app%20prototype%20screens%2C%20user%20interface%20design%2C%20modern%20aesthetic%2C%20clean%20layout%2C%20professional%20UI%20design&width=400&height=600&seq=ui-design-3&orientation=portrait'
    ],
    timestamp: '6시간 전',
    likes: 156,
    comments: 23,
    shares: 11,
    isLiked: false,
    tags: ['UI디자인', 'UX', '모바일앱', '미니멀디자인', '프로토타입']
  },
  {
    id: '4',
    author: {
      name: '최일러스트',
      username: '@choi_illust',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20korean%20male%20illustrator%20with%20drawing%20tablet%2C%20artistic%20workspace%2C%20creative%20atmosphere&width=40&height=40&seq=choi-illust&orientation=squarish'
    },
    content: '캐릭터 디자인 연습 중입니다. 다양한 표정과 포즈를 그려보고 있어요. 어떤 스타일이 가장 매력적인지 의견 부탁드려요!',
    images: [
      'https://readdy.ai/api/search-image?query=character%20design%20sheet%20with%20multiple%20expressions%20and%20poses%2C%20anime%20style%20illustration%2C%20colorful%20characters%2C%20professional%20concept%20art&width=600&height=400&seq=character-1&orientation=landscape'
    ],
    timestamp: '8시간 전',
    likes: 78,
    comments: 15,
    shares: 6,
    isLiked: true,
    tags: ['캐릭터디자인', '일러스트', '컨셉아트', '애니메이션']
  },
  {
    id: '5',
    author: {
      name: '정3D아티스트',
      username: '@jung_3d',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20korean%203D%20artist%20with%20computer%20setup%2C%20modern%20workspace%2C%20technical%20environment&width=40&height=40&seq=jung-3d&orientation=squarish'
    },
    content: '3D 모델링 작업 중인 환경 디자인입니다. 판타지 세계관을 표현해보고 있어요. 아직 작업 중이지만 중간 과정을 공유합니다!',
    images: [
      'https://readdy.ai/api/search-image?query=fantasy%203D%20environment%20design%2C%20magical%20forest%20with%20glowing%20elements%2C%20detailed%203D%20modeling%2C%20atmospheric%20lighting%2C%20professional%203D%20art&width=600&height=400&seq=3d-env-1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=3D%20fantasy%20castle%20architecture%2C%20detailed%20modeling%2C%20mystical%20atmosphere%2C%20professional%203D%20rendering%2C%20game%20environment%20design&width=600&height=400&seq=3d-env-2&orientation=landscape'
    ],
    timestamp: '12시간 전',
    likes: 203,
    comments: 31,
    shares: 19,
    isLiked: false,
    tags: ['3D모델링', '환경디자인', '판타지', '게임아트', '렌더링']
  },
  {
    id: '6',
    author: {
      name: '한그래픽',
      username: '@han_graphic',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20korean%20graphic%20designer%20with%20design%20materials%2C%20creative%20studio%2C%20modern%20aesthetic&width=40&height=40&seq=han-graphic&orientation=squarish'
    },
    content: '브랜드 아이덴티티 디자인 프로젝트를 완료했습니다. 로고부터 패키징까지 전체적인 브랜딩 작업이었어요.',
    images: [
      'https://readdy.ai/api/search-image?query=modern%20brand%20identity%20design%20showcase%2C%20logo%20design%2C%20business%20cards%2C%20packaging%20design%2C%20professional%20branding%20materials&width=600&height=400&seq=brand-1&orientation=landscape'
    ],
    timestamp: '1일 전',
    likes: 167,
    comments: 22,
    shares: 13,
    isLiked: true,
    tags: ['브랜딩', '로고디자인', '패키징', '그래픽디자인', '아이덴티티']
  },
  {
    id: '7',
    author: {
      name: '송애니메이터',
      username: '@song_anim',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20korean%20female%20animator%20with%20animation%20workspace%2C%20creative%20environment%2C%20artistic%20atmosphere&width=40&height=40&seq=song-anim&orientation=squarish'
    },
    content: '단편 애니메이션 작업 중입니다. 손으로 그린 프레임들을 하나씩 연결해가는 과정이 정말 즐거워요!',
    images: [
      'https://readdy.ai/api/search-image?query=hand-drawn%20animation%20frames%2C%20character%20movement%20sequence%2C%20traditional%20animation%20artwork%2C%20storyboard%20sketches&width=600&height=400&seq=animation-1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=animation%20workspace%20with%20drawing%20tablet%2C%20reference%20sheets%2C%20character%20designs%2C%20animator%20desk%20setup&width=600&height=400&seq=animation-2&orientation=landscape'
    ],
    timestamp: '1일 전',
    likes: 134,
    comments: 19,
    shares: 8,
    isLiked: false,
    tags: ['애니메이션', '손그림', '단편영화', '스토리보드', '전통애니메이션']
  }
];
