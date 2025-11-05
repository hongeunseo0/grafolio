
import { useState } from 'react';
import TopNavigation from '../../components/feature/TopNavigation';

export default function Mockup() {
  const [activeTab, setActiveTab] = useState('template');

  const mockups = [
    {
      id: 1,
      imageUrl: 'https://readdy.ai/api/search-image?query=professional%20coffee%20cup%20branding%20mockup%20design%2C%20clean%20white%20background%2C%20modern%20coffee%20cup%20display%2C%20minimalist%20aesthetic%2C%20high%20quality%20rendering%2C%20simple%20background%20highlighting%20the%20theme&width=400&height=300&seq=mockup1&orientation=landscape',
      prompt: '프롬프트:',
      title: '커피 컵 브랜딩 목업을 만들어주세요',
      type: '템플릿',
      status: 'completed'
    },
    {
      id: 2,
      imageUrl: 'https://readdy.ai/api/search-image?query=elegant%20mobile%20app%20screen%20mockup%20design%2C%20smartphone%20display%20interface%2C%20professional%20layout%2C%20clean%20background%2C%20modern%20app%20presentation%2C%20simple%20background%20highlighting%20the%20theme&width=400&height=300&seq=mockup2&orientation=landscape',
      prompt: '프롬프트:',
      title: '모바일 앱 화면 목업을 생성해주세요',
      type: '자유로운 목업',
      status: 'completed'
    },
    {
      id: 3,
      imageUrl: 'https://readdy.ai/api/search-image?query=professional%20business%20card%20design%20mockup%2C%20corporate%20identity%20presentation%2C%20realistic%20rendering%2C%20studio%20lighting%2C%20clean%20presentation%2C%20simple%20background%20highlighting%20the%20theme&width=400&height=300&seq=mockup3&orientation=landscape',
      prompt: '프롬프트:',
      title: '명함 디자인 목업을 만들어주세요',
      type: '템플릿',
      status: 'completed'
    },
    {
      id: 4,
      imageUrl: 'https://readdy.ai/api/search-image?query=modern%20product%20packaging%20mockup%2C%20box%20design%20presentation%2C%20professional%20rendering%2C%20clean%20aesthetic%2C%20branding%20showcase%2C%20simple%20background%20highlighting%20the%20theme&width=400&height=300&seq=mockup4&orientation=landscape',
      prompt: '프롬프트:',
      title: '제품 패키징 목업을 생성해주세요',
      type: '자유로운 목업',
      status: 'completed'
    }
  ];

  const templates = [
    {
      title: '제품 목업 템플릿',
      description: '깔끔한 제품 목업을 만들어주세요',
      icon: 'ri-smartphone-line',
      imageUrl: 'https://readdy.ai/api/search-image?query=modern%20smartphone%20product%20mockup%20template%20design%2C%20clean%20white%20background%2C%20professional%20product%20display%2C%20minimalist%20aesthetic%2C%20high%20quality%20rendering%2C%20simple%20background%20highlighting%20the%20theme&width=200&height=150&seq=template1&orientation=landscape'
    },
    {
      title: '브랜딩 목업 템플릿',
      description: '브랜드 아이덴티티 목업을 생성해주세요',
      icon: 'ri-palette-line',
      imageUrl: 'https://readdy.ai/api/search-image?query=professional%20branding%20identity%20mockup%20template%2C%20business%20card%20and%20logo%20design%2C%20corporate%20branding%20showcase%2C%20clean%20presentation%2C%20modern%20aesthetic%2C%20simple%20background%20highlighting%20the%20theme&width=200&height=150&seq=template2&orientation=landscape'
    },
    {
      title: '패키징 목업 템플릿',
      description: '제품 패키징 디자인 목업을 만들어주세요',
      icon: 'ri-box-3-line',
      imageUrl: 'https://readdy.ai/api/search-image?query=elegant%20product%20packaging%20mockup%20template%2C%20box%20design%20presentation%2C%20professional%20rendering%2C%20clean%20aesthetic%2C%20branding%20showcase%2C%20simple%20background%20highlighting%20the%20theme&width=200&height=150&seq=template3&orientation=landscape'
    },
    {
      title: '디지털 목업 템플릿',
      description: '디지털 디바이스 목업을 생성해주세요',
      icon: 'ri-computer-line',
      imageUrl: 'https://readdy.ai/api/search-image?query=modern%20digital%20device%20mockup%20template%2C%20laptop%20and%20tablet%20display%2C%20professional%20tech%20presentation%2C%20clean%20background%2C%20minimalist%20design%2C%20simple%20background%20highlighting%20the%20theme&width=200&height=150&seq=template4&orientation=landscape'
    },
    {
      title: '의류 목업 템플릿',
      description: '의류 제품 목업을 만들어주세요',
      icon: 'ri-shirt-line',
      imageUrl: 'https://readdy.ai/api/search-image?query=professional%20clothing%20apparel%20mockup%20template%2C%20t-shirt%20and%20fashion%20design%2C%20clean%20presentation%2C%20modern%20aesthetic%2C%20product%20showcase%2C%20simple%20background%20highlighting%20the%20theme&width=200&height=150&seq=template5&orientation=landscape'
    },
    {
      title: '인쇄물 목업 템플릿',
      description: '인쇄물 디자인 목업을 생성해주세요',
      icon: 'ri-file-paper-line',
      imageUrl: 'https://readdy.ai/api/search-image?query=elegant%20print%20material%20mockup%20template%2C%20brochure%20and%20flyer%20design%2C%20professional%20layout%20presentation%2C%20clean%20aesthetic%2C%20modern%20design%2C%20simple%20background%20highlighting%20the%20theme&width=200&height=150&seq=template6&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TopNavigation />
      
      <div className="flex pt-16">
        {/* Main Content */}
        <div className="flex-1 mr-96">
          <div className="p-6">
            {/* Header Actions */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <button 
                  onClick={() => window.REACT_APP_NAVIGATE('/upload')}
                  className="mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 cursor-pointer"
                >
                  <i className="ri-arrow-left-line text-xl w-6 h-6 flex items-center justify-center"></i>
                </button>
                <h1 className="text-2xl font-bold text-gray-800">AI 목업 생성기</h1>
              </div>
              <div className="flex items-center space-x-3">
                <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 cursor-pointer whitespace-nowrap">
                  완성
                </button>
                <button className="px-6 py-2 bg-[#00B67F] text-white rounded-lg hover:bg-[#00a06f] transition-colors duration-200 cursor-pointer whitespace-nowrap">
                  공유
                </button>
              </div>
            </div>

            {/* Mockup Results Grid */}
            <div className="grid grid-cols-2 gap-8 w-full px-8">
              {mockups.map((mockup) => (
                <div key={mockup.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={mockup.imageUrl}
                      alt={mockup.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Prompt and Category */}
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm text-gray-600">{mockup.prompt}</p>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        mockup.type === '템플릿' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {mockup.type}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">{mockup.title}</h3>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between">
                      <button className="flex items-center justify-center space-x-2 px-16 py-2 bg-[#00B67F] text-white rounded-lg hover:bg-[#00a06f] transition-colors duration-200 cursor-pointer whitespace-nowrap">
                        <i className="ri-download-line w-4 h-4 flex items-center justify-center"></i>
                        <span>다운로드</span>
                      </button>
                      <button className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer whitespace-nowrap">
                        <i className="ri-edit-line w-4 h-4 flex items-center justify-center"></i>
                        <span>편집</span>
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Right Sidebar - Fixed */}
        <div className="fixed right-0 top-16 h-[calc(100vh-4rem)] bg-white border-l border-gray-200 w-96 flex flex-col overflow-y-auto scrollbar-hide">
          <div className="p-6 flex flex-col">
            {/* Image Upload Section - Fixed */}
            <div className="mb-6 flex-shrink-0">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">이미지 첨부</h3>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover-border-[#00B67F] transition-colors duration-200 cursor-pointer">
                <div className="w-12 h-12 mx-auto mb-3 text-[#00B67F] flex items-center justify-center">
                  <i className="ri-image-add-line text-2xl"></i>
                </div>
                <button className="px-6 py-2 bg-[#00B67F] text-white rounded-lg hover:bg-[#00a06f] transition-colors duration-200 cursor-pointer whitespace-nowrap mb-2">
                  업로드
                </button>
                <p className="text-sm text-gray-400">클릭하거나 파일을 드래그하여 업로드하세요</p>
              </div>
            </div>

            {/* Free Mockup Section */}
            <div className="mb-6 flex-shrink-0">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">자유로운 목업</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    목업 설명을 입력하세요
                  </label>
                  <textarea
                    placeholder="원하는 목업의 스타일과 특징을 자세히 설명해주세요..."
                    className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#00B67F]/50 focus:border-[#00B67F] transition-all duration-200"
                    rows={6}
                  />
                </div>
                <button className="w-full py-3 bg-[#00B67F] text-white rounded-lg hover:bg-[#00a06f] transition-colors duration-200 cursor-pointer whitespace-nowrap">
                  목업 생성하기
                </button>
              </div>
            </div>

            {/* Template Section */}
            <div className="flex-1">
              <div className="space-y-6">
                {/* Template Grid */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">템플릿</h3>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {templates.map((template, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-lg hover:border-[#00B67F] transition-colors duration-200 cursor-pointer overflow-hidden"
                      >
                        {/* Template Image */}
                        <div className="h-24 overflow-hidden">
                          <img
                            src={template.imageUrl}
                            alt={template.title}
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                        
                        {/* Template Content */}
                        <div className="p-3">
                          <h4 className="font-medium text-gray-800 mb-1 text-sm">{template.title}</h4>
                          <p className="text-xs text-gray-5

0">{template.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Template More Button */}
                  <div className="flex justify-center">
                    <button className="text-sm text-[#00B67F] hover:text-[#00a06f] transition-colors duration-200 cursor-pointer whitespace-nowrap">
                      더보기
                    </button>
                  </div>
                </div>

                {/* AI Mockup Template */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-6 h-6 text-[#00B67F] mr-2 flex items-center justify-center">
                      <i className="ri-magic-line text-lg"></i>
                    </div>
                    <h4 className="font-semibold text-gray-800">AI 목업 템플릿</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">프

롬프트 작성으로 원하는 스타일의 목업을 생성하세요</p>
                  <button className="w-full py-2 bg-[#00B67F] text-white rounded-lg hover:bg-[#00a06f] transition-colors duration-200 cursor-pointer whitespace-nowrap">
                    시작하기
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
