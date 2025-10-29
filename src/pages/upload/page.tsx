
import { useState, useRef, useEffect } from 'react';
import TopNavigation from '../../components/feature/TopNavigation';

interface ContentBlock {
  id: string;
  type: 'text' | 'image' | 'multiImage' | 'embed';
  content: any;
  textAlign?: 'left' | 'center' | 'right';
}

export default function Upload() {
  const [activeMenu, setActiveMenu] = useState('프로젝트');
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [contentBlocks, setContentBlocks] = useState<ContentBlock[]>([]);
  const [showEmbedModal, setShowEmbedModal] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [embedUrl, setEmbedUrl] = useState('');
  const [editingBlockId, setEditingBlockId] = useState<string | null>(null);
  const [showAddContentArea, setShowAddContentArea] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const [mainContent, setMainContent] = useState<{type: 'text' | 'image', content: string} | null>(null);
  const [showMainDottedBorder, setShowMainDottedBorder] = useState(true);
  const [showMockupPreview, setShowMockupPreview] = useState(false);
  const [mockupImages, setMockupImages] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const menuItems = ['프로젝트', '커뮤니티', '배경화면', '크리에이터'];

  // 외부 클릭 감지 - 개선된 버전
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      // 모달이 열려있면 외부 클릭 감지 비활성화
      if (showEmbedModal || showOrderModal) {
        return;
      }
      
      // 편집 중인 블록이 있을 때만 처리
      if (editingBlockId) {
        // 클릭된 요소가 편집 중인 블록 내부인지 확인
        const editingBlock = document.querySelector(`[data-block-id="${editingBlockId}"]`);
        if (editingBlock && editingBlock.contains(target)) {
          return;
        }
        
        // 텍스트 정렬 툴바 클릭인지 확인
        if (target.closest('.text-alignment-toolbar')) {
          return;
        }
        
        // 삭제 버튼 클릭인지 확인
        if (target.closest('.delete-button')) {
          return;
        }
        
        // 외부 클릭으로 판단되면 편집 모드 해제
        setEditingBlockId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [editingBlockId, showEmbedModal, showOrderModal]);

  const handleMenuClick = (item: string) => {
    setActiveMenu(item);
    if (item === '커뮤니티') {
      window.REACT_APP_NAVIGATE('/community');
    } else if (item === '프로젝트') {
      window.REACT_APP_NAVIGATE('/');
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const imageUrl = 'https://readdy.ai/api/search-image?query=beautiful%20korean%20digital%20artwork%2C%20modern%20illustration%2C%20vibrant%20colors%2C%20creative%20composition%2C%20professional%20quality&width=600&height=400&seq=uploaded-artwork&orientation=landscape';
    setUploadedFile(imageUrl);
    setMainContent({ type: 'image', content: imageUrl });
    setShowMainDottedBorder(false);
    setShowMockupPreview(true);
  };

  const handleFileClick = () => {
    // 이 함수는 더 이상 사용하지 않음 - 흰 공간 클릭 시 아무 동작 안함
  };

  // 메인박스 텍스트 클릭 핸들러 (메인박스에서만 작동)
  const handleMainTextClick = () => {
    const exampleText = "커피 한잔의 여유를 즐긴다.";
    setMainContent({ type: 'text', content: exampleText });
    setShowMainDottedBorder(false);
    setShowMockupPreview(true);
    setMockupImages([
      'https://readdy.ai/api/search-image?query=cozy%20coffee%20shop%20background%20with%20memo%20notepad%20containing%20handwritten%20text%20%EC%BB%A4%ED%94%BC%20%ED%95%9C%EC%9E%94%EC%9D%98%20%EC%97%AC%EC%9C%A0%EB%A5%BC%20%EC%A6%90%EA%B8%B4%EB%8B%A4%2C%20warm%20lighting%2C%20coffee%20beans%20scattered%20around%2C%20minimalist%20aesthetic%2C%20soft%20brown%20tones%2C%20peaceful%20atmosphere&width=600&height=400&seq=text-mockup-coffee&orientation=landscape'
    ]);
  };

  // 메인박스 이미지 클릭 핸들러 (메인박스에서만 작동)
  const handleMainImageClick = () => {
    const imageUrl = 'https://readdy.ai/api/search-image?query=beautiful%20korean%20digital%20artwork%2C%20modern%20illustration%2C%20vibrant%20colors%2C%20creative%20composition%2C%20professional%20quality&width=600&height=400&seq=uploaded-artwork&orientation=landscape';
    setUploadedFile(imageUrl);
    setMainContent({ type: 'image', content: imageUrl });
    setShowMainDottedBorder(false);
    setShowMockupPreview(true);
  };

  // 메인박스 콘텐츠 삭제
  const handleMainContentDelete = () => {
    setUploadedFile(null);
    setMainContent(null);
    setShowMainDottedBorder(true);
    setShowMockupPreview(false);
    setMockupImages([]);
  };

  // 하단 콘텐츠 추가 함수들
  const addTextBlock = () => {
    const newBlock: ContentBlock = {
      id: Date.now().toString(),
      type: 'text',
      content: '',
      textAlign: 'left'
    };
    setContentBlocks([...contentBlocks, newBlock]);
    setEditingBlockId(newBlock.id);
    setShowAddContentArea(false);
  };

  const addImageBlock = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const newBlock: ContentBlock = {
            id: Date.now().toString(),
            type: 'image',
            content: e.target?.result as string
          };
          setContentBlocks([...contentBlocks, newBlock]);
          setShowAddContentArea(false);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const addMultiImageBlock = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true;
    input.onchange = (e) => {
      const files = Array.from((e.target as HTMLInputElement).files || []);
      if (files.length >= 2) {
        const promises = files.map(file => {
          return new Promise<string>((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target?.result as string);
            reader.readAsDataURL(file);
          });
        });
        
        Promise.all(promises).then(images => {
          const newBlock: ContentBlock = {
            id: Date.now().toString(),
            type: 'multiImage',
            content: images
          };
          setContentBlocks([...contentBlocks, newBlock]);
          setShowAddContentArea(false);
        });
      } else {
        alert('멀티 이미지는 2개 이상의 이미지를 선택해야 합니다.');
      }
    };
    input.click();
  };

  const addEmbedBlock = (embedCode: string) => {
    const newBlock: ContentBlock = {
      id: Date.now().toString(),
      type: 'embed',
      content: embedCode
    };
    setContentBlocks([...contentBlocks, newBlock]);
    setShowEmbedModal(false);
    setShowAddContentArea(false);
  };

  const handleEmbedSubmit = () => {
    if (embedUrl.trim()) {
      addEmbedBlock(embedUrl);
      setEmbedUrl('');
    }
    setShowEmbedModal(false);
  };

  const updateTextBlock = (id: string, content: string) => {
    setContentBlocks(contentBlocks.map(block => 
      block.id === id ? { ...block, content } : block
    ));
  };

  const updateTextAlign = (id: string, textAlign: 'left' | 'center' | 'right') => {
    setContentBlocks(contentBlocks.map(block => 
      block.id === id ? { ...block, textAlign } : block
    ));
  };

  const deleteBlock = (id: string) => {
    setContentBlocks(contentBlocks.filter(block => block.id !== id));
    if (editingBlockId === id) {
      setEditingBlockId(null);
    }
  };

  const handleBlockClick = (id: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setEditingBlockId(editingBlockId === id ? null : id);
  };

  const moveBlock = (fromIndex: number, toIndex: number) => {
    const newBlocks = [...contentBlocks];
    const [movedBlock] = newBlocks.splice(fromIndex, 1);
    newBlocks.splice(toIndex, 0, movedBlock);
    setContentBlocks(newBlocks);
  };

  const handleDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData('text/plain', index.toString());
    setDraggedIndex(index);
  };

  const handleDragOverOrder = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  const handleDragLeaveOrder = () => {
    setDragOverIndex(null);
  };

  const handleDropOrder = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));
    if (dragIndex !== dropIndex) {
      moveBlock(dragIndex, dropIndex);
    }
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragEndOrder = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  return (
    <div className="min-h-screen bg-white" ref={containerRef}>
      <TopNavigation />
      
      {/* Main Header Menu */}
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

      
      <div className="pt-32 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button 
            onClick={() => window.REACT_APP_NAVIGATE('/')}
            className="mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 cursor-pointer mt-2"
          >
            <i className="ri-arrow-left-line text-xl w-6 h-6 flex items-center justify-center"></i>
          </button>
        </div>

        <div className="flex gap-8">
          {/* Main Content Area (70%) */}
          <div className="flex-1 max-w-[70%]">
            {/* Upload Zone */}
            <div
              className={`rounded-lg p-12 text-center transition-all duration-200 mb-6 relative ${
                isDragOver 
                  ? 'border-2 border-dashed border-[#00b57f] bg-[#00b57f]/5' 
                  : showMainDottedBorder && !mainContent
                    ? 'border-2 border-dashed border-gray-300 hover:border-[#00b57f] hover:bg-gray-50'
                    : 'border-transparent bg-transparent'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {mainContent ? (
                <div className="relative">
                  {mainContent.type === 'image' ? (
                    <img
                      src={mainContent.content}
                      alt="업로드된 작품"
                      className="w-full max-h-96 object-cover object-top rounded-lg"
                    />
                  ) : (
                    <div className="w-full min-h-[200px] flex items-center justify-center">
                      <p className="text-base text-gray-800">{mainContent.content}</p>
                    </div>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMainContentDelete();
                    }}
                    className="absolute top-2 right-2 w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-200 cursor-pointer"
                  >
                    <i className="ri-close-line text-xs w-3 h-3 flex items-center justify-center"></i>
                  </button>
                </div>
              ) : (
                <div className="flex justify-center">
                  <div className="bg-black rounded-lg p-3">
                    <div className="flex justify-center gap-6">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMainTextClick();
                        }}
                        className="text-white hover:text-[#00b57f] transition-colors duration-200 cursor-pointer"
                      >
                        <i className="ri-text text-xl w-6 h-6 flex items-center justify-center"></i>
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMainImageClick();
                        }}
                        className="text-white hover:text-[#00b57f] transition-colors duration-200 cursor-pointer"
                      >
                        <i className="ri-image-line text-xl w-6 h-6 flex items-center justify-center"></i>
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          addMultiImageBlock();
                        }}
                        className="text-white hover:text-[#00b57f] transition-colors duration-200 cursor-pointer"
                      >
                        <i className="ri-gallery-line text-xl w-6 h-6 flex items-center justify-center"></i>
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowEmbedModal(true);
                        }}
                        className="text-white hover:text-[#00b57f] transition-colors duration-200 cursor-pointer"
                      >
                        <i className="ri-code-line text-xl w-6 h-6 flex items-center justify-center"></i>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Content Blocks */}
            <div className="space-y-4">
              {contentBlocks.map((block) => (
                <div key={block.id} className="relative">
                  {/* Text Alignment Toolbar */}
                  {editingBlockId === block.id && block.type === 'text' && (
                    <div className="mb-2 flex justify-center text-alignment-toolbar">
                      <div className="bg-black rounded-lg p-2">
                        <div className="flex gap-4">
                          <button
                            onClick={() => updateTextAlign(block.id, 'left')}
                            className={`text-white hover:text-[#00b57f] transition-colors duration-200 cursor-pointer ${
                              block.textAlign === 'left' ? 'text-[#00b57f]' : ''
                            }`}
                          >
                            <i className="ri-align-left text-lg w-5 h-5 flex items-center justify-center"></i>
                          </button>
                          <button
                            onClick={() => updateTextAlign(block.id, 'center')}
                            className={`text-white hover:text-[#00b57f] transition-colors duration-200 cursor-pointer ${
                              block.textAlign === 'center' ? 'text-[#00b57f]' : ''
                            }`}
                          >
                            <i className="ri-align-center text-lg w-5 h-5 flex items-center justify-center"></i>
                          </button>
                          <button
                            onClick={() => updateTextAlign(block.id, 'right')}
                            className={`text-white hover:text-[#00b57f] transition-colors duration-2 00 cursor-pointer ${
                              block.textAlign === 'right' ? 'text-[#00b57f]' : ''
                            }`}
                          >
                            <i className="ri-align-right text-lg w-5 h-5 flex items-center justify-center"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  <div 
                    data-block-id={block.id}
                    className="relative cursor-pointer p-2"
                    onClick={(e) => handleBlockClick(block.id, e)}
                  >
                    {block.type === 'text' && (
                      <div className="min-h-[100px] flex items-center">
                        {editingBlockId === block.id ? (
                          <div className="w-full border-2 border-dashed border-[#00b57f] rounded-lg p-4">
                            <textarea
                              value={block.content as string}
                              onChange={(e) => updateTextBlock(block.id, e.target.value)}
                              placeholder="텍스트를 입력하세요..."
                              className={`w-full min-h-[80px] p-3 bg-transparent border-none outline-none resize-none text-gray-800 placeholder-gray-400 ${
                                block.textAlign === 'center' ? 'text-center' : 
                                block.textAlign === 'right' ? 'text-right' : 'text-left'
                              }`}
                              autoFocus
                              onClick={(e) => e.stopPropagation()}
                            />
                          </div>
                        ) : (
                          <div className={`w-full min-h-[80px] flex items-center ${
                            block.textAlign === 'center' ? 'justify-center text-center' : 
                            block.textAlign === 'right' ? 'justify-end text-right' : 'justify-start text-left'
                          }`}>
                            {block.content ? (
                              <p className="text-gray-800 whitespace-pre-wrap">{block.content as string}</p>
                            ) : (
                              <span className="text-gray-500">텍스트를 추가하려면 클릭하세요</span>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {block.type === 'image' && (
                      <div className="flex justify-center">
                        <img
                          src={block.content as string}
                          alt="업로드된 이미지"
                          className="max-w-full h-auto rounded-lg"
                        />
                      </div>
                    )}

                    {block.type === 'multiImage' && (
                      <div className="grid grid-cols-2 gap-2">
                        {(block.content as string[]).map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`멀티 이미지 ${index + 1}`}
                            className="w-full h-auto object-contain rounded-lg"
                          />
                        ))}
                      </div>
                    )}

                    {block.type === 'embed' && (
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2">임베드 콘텐츠:</p>
                        <code className="text-xs text-gray-800 break-all">{block.content as string}</code>
                      </div>
                    )}

                    {editingBlockId === block.id && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteBlock(block.id);
                        }}
                        className="absolute top-2 right-2 w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center hover-bg-gray-600 transition-colors duration-200 cursor-pointer delete-button"
                      >
                        <i className="ri-close-line text-xs w-3 h-3 flex items-center justify-center"></i>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Add Content Area */}
            <div 
              className="mt-8 min-h-[100px] flex items-center justify-center transition-all duration-200"
              onMouseEnter={() => setShowAddContentArea(true)}
              onMouseLeave={() => setShowAddContentArea(false)}
            >
              {showAddContentArea && (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 w-full flex justify-center">
                  <div className="bg-black rounded-lg p-3">
                    <div className="flex justify-center gap-6">
                      <button 
                        onClick={addTextBlock}
                        className="text-white hover:text-[#00b57f] transition-colors duration-200 cursor-pointer"
                      >
                        <i className="ri-text text-xl w-6 h-6 flex items-center justify-center"></i>
                      </button>
                      <button 
                        onClick={addImageBlock}
                        className="text-white hover:text-[#00b57f] transition-colors duration-200 cursor-pointer"
                      >
                        <i className="ri-image-line text-xl w-6 h-6 flex items-center justify-center"></i>
                      </button>
                      <button 
                        onClick={addMultiImageBlock}
                        className="text-white hover:text-[#00b57f] transition-colors duration-200 cursor-pointer"
                      >
                        <i className="ri-gallery-line text-xl w-6 h-6 flex items-center justify-center"></i>
                      </button>
                      <button 
                        onClick={() => setShowEmbedModal(true)}
                        className="text-white hover/text-[#00b57f] transition-colors duration-200 cursor-pointer"
                      >
                        <i className="ri-code-line text-xl w-6 h-6 flex items-center justify-center"></i>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar (30%) */}
          <div className="w-80 space-y-6">
            {/* Mockup AI Section */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center mb-4">
                <i className="ri-magic-line text-[#00b57f] mr-2 w-5 h-5 flex items-center justify-center"></i>
                <h3 className="text-lg font-bold text-gray-800">Mockup AI</h3>
              </div>
              <p className="text-sm mb-4">
                {showMockupPreview ? (
                  <span className="text-[#00b57f] font-medium">자동 생성 완료</span>
                ) : (
                  <span className="text-gray-600">업로드 후 목업 화면 미리보기</span>
                )}
              </p>
              
              {showMockupPreview ? (
                <div className="space-y-4">
                  {mainContent?.type === 'text' && mockupImages.length > 0 ? (
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 text-center">
                      <img
                        src={mockupImages[0]}
                        alt="텍스트 목업 미리보기"
                        className="w-full h-40 object-cover object-top rounded-lg"
                      />
                    </div>
                  ) : mainContent?.type === 'image' ? (
                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-6 text-center">
                      <div className="relative inline-block">
                        <div className="w-32 h-56 bg-black rounded-[20px] p-1 shadow-xl">
                          <div className="w-full h-full bg-white rounded-[16px] overflow-hidden relative">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-black rounded-b-lg"></div>
                            <img
                              src={mainContent.content}
                              alt="목업 미리보기"
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  <button 
                    onClick={() => window.REACT_APP_NAVIGATE('/mockup')}
                    className="w-full py-2 text-sm text-[#00b57f] border border-[#00b57f] rounded-lg hover:bg-[#00b57f] hover:text-white transition-colors duration-200 cursor-pointer whitespace-nowrap"
                  >
                    다른 목업 보기
                  </button>
                </div>
              ) : (
                <div className="bg-gray-100 rounded-lg p-8 text-center">
                  <i className="ri-image-line text-gray-400 text-2xl mb-2 w-8 h-8 flex items-center justify-center mx-auto"></i>
                  <p className="text-sm text-gray-500">이미지 업로드 대기 중</p>
                </div>
              )}
            </div>

            {/* Content Addition */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">콘텐츠 추가</h3>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={addTextBlock}
                  className="p-4 border border-gray-200 rounded-lg hover:border-[#00b57f] hover:bg-[#00b57f]/5 transition-all duration-200 cursor-pointer"
                >
                  <i className="ri-text text-[#00b57f] text-xl mb-2 w-6 h-6 flex items-center justify-center mx-auto"></i>
                  <span className="text-sm text-gray-700">텍스트</span>
                </button>
                <button 
                  onClick={addImageBlock}
                  className="p-4 border border-gray-200 rounded-lg hover:border-[#00b57f] hover:bg-[#00b57f]/5 transition-all duration-200 cursor-pointer"
                >
                  <i className="ri-image-line text-[#00b57f] text-xl mb-2 w-6 h-6 flex items-center justify-center mx-auto"></i>
                  <span className="text-sm text-gray-700">이미지</span>
                </button>
                <button 
                  onClick={addMultiImageBlock}
                  className="p-4 border border-gray-200 rounded-lg hover:border-[#00b57f] hover:bg-[#00b57f]/5 transition-all duration-200 cursor-pointer"
                >
                  <i className="ri-gallery-line text-[#00b57f] text-xl mb-2 w-6 h-6 flex items-center justify-center mx-auto"></i>
                  <span className="text-sm text-gray-700">멀티 이미지</span>
                </button>
                <button 
                  onClick={() => setShowEmbedModal(true)}
                  className="p-4 border border-gray-200 rounded-lg hover:border-[#00b57f] hover:bg-[#00b57f]/5 transition-all duration-200 cursor-pointer"
                >
                  <i className="ri-code-line text-[#00b57f] text-xl mb-2 w-6 h-6 flex items-center justify-center mx-auto"></i>
                  <span className="text-sm text-gray-700">임베드</span>
                </button>
              </div>
            </div>

            {/* Project Info */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="space-y-3">
                <button 
                  onClick={() => setShowOrderModal(true)}
                  className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200 cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">편집</span>
                    <span className="text-[#00b57f] text-sm">콘텐츠 순서 변경</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">첨부 파일 업로드</span>
                    <span className="text-[#00b57f] text-sm">파일 관리</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">배경화면으로 제공</span>
                    <span className="text-[#00b57f] text-sm">이미지 선택</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 px-4 py-3 text-gray-600 hover:text-gray-800 transition-colors duration-200 cursor-pointer whitespace-nowrap">
                임시 저장
              </button>
              <button className="flex-1 px-6 py-3 bg-[#00b57f] text-white rounded-lg hover:bg-[#00a06f] transition-colors duration-200 cursor-pointer whitespace-nowrap">
                다음
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Embed Modal */}
      {showEmbedModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-w-[90vw]">
            <h3 className="text-lg font-bold text-gray-800 mb-2">미디어 임베드</h3>
            <p className="text-sm text-gray-600 mb-4">
              Youtube, Soundcloud, Vimeo, Instagram, Facebook 등 임베드 콘텐츠를 공유해 보세요.
            </p>
            <input
              type="text"
              value={embedUrl}
              onChange={(e) => setEmbedUrl(e.target.value)}
              placeholder="임베드 코드 또는 URL 붙여넣기"
              className="w-full p-3 border border-gray-200 rounded-lg mb-4 focus-border-[#00b57f] focus:outline-none text-sm"
            />
            <div className="flex gap-3">
              <button 
                onClick={() => setShowEmbedModal(false)}
                className="flex-1 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                취소
              </button>
              <button 
                onClick={handleEmbedSubmit}
                className="flex-1 px-4 py-2 bg-[#00b57f] text-white rounded-lg hover:bg-[#00a06f] transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                추가
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Content Order Modal */}
      {showOrderModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-w-[90vw]">
            <h3 className="text-lg font-bold text-gray-800 mb-2">콘텐츠 순서 변경</h3>
            <p className="text-sm text-gray-600 mb-4">
              블록을 드래그해서 콘텐츠 순서를 변경할 수 있습니다.
            </p>
            <div className="space-y-3 mb-4">
              {mainContent && (
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <i className="ri-drag-move-2-line text-gray-400 cursor-move w-4 h-4 flex items-center justify-center"></i>
                  <i className={`${mainContent.type === 'text' ? 'ri-text' : 'ri-image-line'} text-[#00b57f] w-4 h-4 flex items-center justify-center`}></i>
                  <span className="text-sm text-gray-700">메인 {mainContent.type === 'text' ? '텍스트' : '이미지'}</span>
                </div>
              )}
              {contentBlocks.map((block, index) => (
                <div 
                  key={block.id} 
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-move transition-all duration-200 ${
                    draggedIndex === index 
                      ? 'bg-[#00b57f]/20 border-2 border-[#00b57f] shadow-lg transform scale-105' 
                      : dragOverIndex === index 
                        ? 'bg-[#00b57f]/10 border-2 border-dashed border-[#00b57f]'
                        : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  draggable
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragOver={(e) => handleDragOverOrder(e, index)}
                  onDragLeave={handleDragLeaveOrder}
                  onDrop={(e) => handleDropOrder(e, index)}
                  onDragEnd={handleDragEndOrder}
                >
                  <i className="ri-drag-move-2-line text-gray-400 cursor-move w-4 h-4 flex items-center justify-center"></i>
                  <i className={`${
                    block.type === 'text' ? 'ri-text' :
                    block.type === 'image' ? 'ri-image-line' :
                    block.type === 'multiImage' ? 'ri-gallery-line' :
                    'ri-code-line'
                  } text-[#00b57f] w-4 h-4 flex items-center justify-center`}></i>
                  <span className="text-sm text-gray-700">
                    {block.type === 'text' ? '텍스트 블록' :
                     block.type === 'image' ? '이미지 블록' :
                     block.type === 'multiImage' ? '멀티 이미지 블록' :
                     '임베드 블록'}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => setShowOrderModal(false)}
                className="flex-1 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                취소
              </button>
              <button 
                onClick={() => setShowOrderModal(false)}
                className="flex-1 px-4 py-2 bg-[#00b57f] text-white rounded-lg hover:bg-[#00a06f] transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                순서 저장
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
