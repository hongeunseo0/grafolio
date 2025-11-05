
interface MissionRoomProps {
  onRoomClick: (roomName: string) => void;
}

export default function MissionRoom({ onRoomClick }: MissionRoomProps) {
  const missionRooms = [
    {
      id: 1,
      title: '스피드드로잉 배틀',
      description: '30분 안에 주제를 완성하는 스피드 드로잉 챌린지',
      participants: 24,
      timeLeft: '2시간 23분',
      image: 'https://readdy.ai/api/search-image?query=speed%20drawing%20battle%20with%20timer%2C%20digital%20art%20workspace%2C%20creative%20energy%2C%20vibrant%20colors%2C%20artistic%20competition%20atmosphere&width=300&height=200&seq=speed-drawing&orientation=landscape',
      emoji: '🔥'
    },
    {
      id: 2,
      title: '색감 마스터 챌린지',
      description: '주어진 팔레트로 아름다운 작품 만들기',
      participants: 18,
      timeLeft: '1일 5시간',
      image: 'https://readdy.ai/api/search-image?query=color%20palette%20challenge%2C%20beautiful%20color%20harmony%2C%20artistic%20color%20theory%2C%20creative%20painting%20workspace%2C%20vibrant%20palette&width=300&height=200&seq=color-master&orientation=landscape',
      emoji: '🎨'
    },
    {
      id: 3,
      title: '일러스트 스토리텔링',
      description: '한 장의 그림으로 완전한 이야기 전달하기',
      participants: 31,
      timeLeft: '3일 12시간',
      image: 'https://readdy.ai/api/search-image?query=illustration%20storytelling%2C%20narrative%20art%2C%20creative%20story%20through%20images%2C%20artistic%20storytelling%2C%20visual%20narrative&width=300&height=200&seq=storytelling&orientation=landscape',
      emoji: '📚'
    },
    {
      id: 4,
      title: '캐릭터 디자인 마스터',
      description: '독창적인 캐릭터 디자인 및 설정 만들기',
      participants: 27,
      timeLeft: '2일 8시간',
      image: 'https://readdy.ai/api/search-image?query=character%20design%20workshop%2C%20creative%20character%20concepts%2C%20original%20character%20art%2C%20design%20process%2C%20artistic%20character%20development&width=300&height=200&seq=character-design&orientation=landscape',
      emoji: '🌟'
    },
    {
      id: 5,
      title: '환경 컨셉 아트',
      description: '상상의 세계와 환경을 시각화하기',
      participants: 22,
      timeLeft: '4일 15시간',
      image: 'https://readdy.ai/api/search-image?query=environment%20concept%20art%2C%20fantasy%20landscape%20design%2C%20world%20building%20art%2C%20creative%20environment%20design%2C%20atmospheric%20concept%20art&width=300&height=200&seq=environment-art&orientation=landscape',
      emoji: '🏞️'
    },
    {
      id: 6,
      title: '디지털 페인팅 기법',
      description: '고급 디지털 페인팅 테크닉 마스터하기',
      participants: 35,
      timeLeft: '1일 20시간',
      image: 'https://readdy.ai/api/search-image?query=digital%20painting%20techniques%2C%20advanced%20digital%20art%20methods%2C%20professional%20digital%20painting%2C%20artistic%20digital%20workflow&width=300&height=200&seq=digital-painting&orientation=landscape',
      emoji: '✨'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">미션 방</h2>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        {missionRooms.map((room) => (
          <div
            key={room.id}
            onClick={() => onRoomClick(room.title)}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <div className="relative">
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-2">
                <span className="text-lg">{room.emoji}</span>
                <span className="text-sm font-medium text-gray-700">{room.participants}명 참여</span>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-2">
                {room.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                {room.description}
              </p>
              <p className="text-sm text-gray-500">
                남은 시간: {room.timeLeft}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
