
export const communityPosts = [
  {
    id: '1',
    author: {
      name: '김아티스트',
      username: '@kimart',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20korean%20female%20digital%20artist%20with%20colorful%20creative%20background%2C%20studio%20lighting%2C%20modern%20aesthetic%2C%20artistic%20vibe&width=40&height=40&seq=author1&orientation=squarish'
    },
    content: '새로운 디지털 아트 작품을 완성했습니다! 이번에는 사이버펑크 테마로 작업해봤는데, 네온 색감과 미래적인 분위기를 표현하는 데 집중했어요. 여러분의 피드백을 듣고 싶습니다.',
    images: [
      'https://readdy.ai/api/search-image?query=cyberpunk%20digital%20art%20with%20neon%20colors%2C%20futuristic%20cityscape%2C%20vibrant%20purple%20and%20blue%20lighting%2C%20high-tech%20atmosphere%2C%20detailed%20digital%20painting&width=600&height=400&seq=cyber1&orientation=landscape'
    ],
    timestamp: '2시간 전',
    likes: 124,
    comments: 18,
    shares: 7,
    isLiked: false,
    tags: ['디지털아트', '사이버펑크', '네온', '미래'],
    category: '일반'
  },
  {
    id: '2',
    author: {
      name: '박일러스트',
      username: '@parkillust',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20korean%20male%20illustrator%20with%20sketching%20tools%20background%2C%20creative%20workspace%2C%20artistic%20atmosphere&width=40&height=40&seq=author2&orientation=squarish'
    },
    content: '일러스트 초보자를 위한 색칠 팁을 공유합니다! 1. 기본 색상부터 시작하기 2. 명암 이해하기 3. 색상 조화 고려하기 4. 레이어 활용하기. 이 네 가지만 기억하셔도 실력이 많이 늘 거예요.',
    images: [
      'https://readdy.ai/api/search-image?query=illustration%20tutorial%20showing%20color%20theory%20basics%2C%20step%20by%20step%20painting%20process%2C%20art%20supplies%20and%20color%20palette%2C%20educational%20art%20content&width=600&height=400&seq=tutorial1&orientation=landscape'
    ],
    timestamp: '4시간 전',
    likes: 89,
    comments: 25,
    shares: 12,
    isLiked: true,
    tags: ['일러스트', '튜토리얼', '색칠팁', '초보자'],
    category: '정보'
  },
  {
    id: '3',
    author: {
      name: '이포토그래퍼',
      username: '@leephoto',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20korean%20photographer%20with%20camera%20equipment%20background%2C%20studio%20setting%2C%20professional%20lighting&width=40&height=40&seq=author3&orientation=squarish'
    },
    content: '사진 구도에 대해 고민이 많습니다. 같은 피사체라도 어떤 각도에서 찍느냐에 따라 완전히 다른 느낌이 나는데, 구도 잡는 노하우가 있을까요? 특히 인물 사진에서 자연스러운 포즈를 이끌어내는 방법이 궁금해요.',
    images: [],
    timestamp: '6시간 전',
    likes: 45,
    comments: 31,
    shares: 3,
    isLiked: false,
    tags: ['사진작품', '구도', '인물사진', '포즈'],
    category: '고민'
  },
  {
    id: '4',
    author: {
      name: '최3D아티스트',
      username: '@choi3d',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20korean%203D%20artist%20with%20digital%20modeling%20background%2C%20tech%20workspace%2C%20modern%20creative%20environment&width=40&height=40&seq=author4&orientation=squarish'
    },
    content: '3D 캐릭터 모델링 작업 중입니다. 얼굴 표정과 헤어 스타일링 부분에서 피드백을 받고 싶어요. 특히 자연스러운 머리카락 표현이 어려워서 조언 부탁드립니다!',
    images: [
      'https://readdy.ai/api/search-image?query=3D%20character%20modeling%20work%20in%20progress%2C%20detailed%20facial%20features%20and%20hair%20styling%2C%20digital%20sculpting%20software%20interface%2C%20realistic%20character%20design&width=600&height=400&seq=3dmodel1&orientation=landscape'
    ],
    timestamp: '8시간 전',
    likes: 67,
    comments: 14,
    shares: 5,
    isLiked: false,
    tags: ['3D모델링', '캐릭터', '헤어스타일링', '표정'],
    category: '피드백',
    hasTimeLimit: true
  },
  {
    id: '5',
    author: {
      name: '정애니메이터',
      username: '@jungani',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20korean%20animator%20with%20animation%20studio%20background%2C%20creative%20workspace%2C%20artistic%20tools&width=40&height=40&seq=author5&orientation=squarish'
    },
    content: '2D 애니메이션 제작 과정을 단계별로 설명해드릴게요! 스토리보드 작성부터 최종 렌더링까지의 전체 워크플로우를 정리했습니다. 애니메이션에 관심 있는 분들께 도움이 되길 바라요.',
    images: [
      'https://readdy.ai/api/search-image?query=2D%20animation%20production%20workflow%20diagram%2C%20storyboard%20sketches%2C%20animation%20timeline%2C%20professional%20animation%20studio%20setup&width=600&height=400&seq=animation1&orientation=landscape'
    ],
    timestamp: '12시간 전',
    likes: 156,
    comments: 42,
    shares: 28,
    isLiked: true,
    tags: ['애니메이션', '2D', '워크플로우', '스토리보드'],
    category: '정보'
  },
  {
    id: '6',
    author: {
      name: '한UI디자이너',
      username: '@hanui',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20korean%20UI%20designer%20with%20design%20workspace%20background%2C%20modern%20office%2C%20creative%20environment&width=40&height=40&seq=author6&orientation=squarish'
    },
    content: '모바일 앱 UI 디자인에서 사용자 경험을 개선하는 방법에 대해 고민하고 있어요. 버튼 배치와 색상 선택에서 어려움을 겪고 있는데, 경험 많은 디자이너분들의 조언을 구합니다.',
    images: [],
    timestamp: '1일 전',
    likes: 73,
    comments: 19,
    shares: 8,
    isLiked: false,
    tags: ['UI디자인', '모바일앱', '사용자경험', 'UX'],
    category: '고민'
  },
  {
    id: '7',
    author: {
      name: '윤그래픽디자이너',
      username: '@yoongraphic',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20korean%20graphic%20designer%20with%20design%20materials%20background%2C%20creative%20studio%2C%20modern%20workspace&width=40&height=40&seq=author7&orientation=squarish'
    },
    content: '브랜드 로고 디자인 프로젝트를 진행 중입니다. 클라이언트의 요구사항과 디자인 트렌드 사이에서 균형을 맞추는 것이 쉽지 않네요. 여러 버전을 만들어봤는데 어떤 방향이 좋을지 의견 부탁드려요.',
    images: [
      'https://readdy.ai/api/search-image?query=brand%20logo%20design%20concepts%2C%20multiple%20logo%20variations%2C%20professional%20graphic%20design%20workspace%2C%20design%20sketches%20and%20digital%20mockups&width=600&height=400&seq=logo1&orientation=landscape'
    ],
    timestamp: '1일 전',
    likes: 91,
    comments: 27,
    shares: 11,
    isLiked: false,
    tags: ['브랜딩', '로고디자인', '그래픽디자인', '클라이언트'],
    category: '피드백',
    hasTimeLimit: true
  },
  {
    id: '8',
    author: {
      name: '서웹디자이너',
      username: '@seowebdesign',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20korean%20web%20designer%20with%20computer%20screens%20background%2C%20modern%20office%20setup%2C%20tech%20workspace&width=40&height=40&seq=author8&orientation=squarish'
    },
    content: '웹 디자인 트렌드 2024를 정리해봤습니다! 미니멀리즘, 다크모드, 마이크로 인터랙션, 그라데이션 활용 등이 주요 트렌드로 보입니다. 각 트렌드별 적용 사례와 장단점도 함께 분석했어요.',
    images: [
      'https://readdy.ai/api/search-image?query=modern%20web%20design%20trends%202024%2C%20minimalist%20website%20layouts%2C%20dark%20mode%20interfaces%2C%20gradient%20designs%2C%20clean%20and%20professional%20web%20examples&width=600&height=400&seq=webtrend1&orientation=landscape'
    ],
    timestamp: '2일 전',
    likes: 203,
    comments: 56,
    shares: 34,
    isLiked: true,
    tags: ['웹디자인', '트렌드', '미니멀리즘', '다크모드'],
    category: '정보'
  },
  {
    id: '9',
    author: {
      name: '강타이포그래퍼',
      username: '@kangtypo',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20korean%20typography%20designer%20with%20font%20samples%20background%2C%20creative%20workspace%2C%20design%20materials&width=40&height=40&seq=author9&orientation=squarish'
    },
    content: '한글 타이포그래피 디자인에서 가독성과 심미성을 동시에 만족시키는 것이 정말 어려워요. 특히 제목용 폰트를 만들 때 개성은 살리면서도 읽기 쉽게 하는 방법이 있을까요?',
    images: [],
    timestamp: '2일 전',
    likes: 58,
    comments: 22,
    shares: 6,
    isLiked: false,
    tags: ['타이포그래피', '한글폰트', '가독성', '폰트디자인'],
    category: '고민'
  },
  {
    id: '10',
    author: {
      name: '조컨셉아티스트',
      username: '@joconcept',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20korean%20concept%20artist%20with%20fantasy%20art%20background%2C%20creative%20studio%2C%20artistic%20workspace&width=40&height=40&seq=author10&orientation=squarish'
    },
    content: '게임 컨셉 아트 작업물입니다. 판타지 세계관의 마법사 캐릭터를 디자인했는데, 의상과 소품 디테일에 대한 피드백을 받고 싶어요. 특히 마법 지팡이 디자인이 캐릭터와 잘 어울리는지 궁금합니다.',
    images: [
      'https://readdy.ai/api/search-image?query=fantasy%20wizard%20character%20concept%20art%2C%20detailed%20magical%20staff%20design%2C%20fantasy%20costume%20and%20accessories%2C%20professional%20game%20art%20style&width=600&height=400&seq=concept1&orientation=landscape'
    ],
    timestamp: '3일 전',
    likes: 142,
    comments: 33,
    shares: 19,
    isLiked: false,
    tags: ['컨셉아트', '게임아트', '판타지', '캐릭터디자인'],
    category: '피드백',
    hasTimeLimit: true
  }
];