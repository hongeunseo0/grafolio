
import { useState } from 'react';

interface NewPostModalProps {
  onClose: () => void;
  onPost: (content: string, images?: string[], tags?: string[]) => void;
}

export default function NewPostModal({ onClose, onPost }: NewPostModalProps) {
  const [content, setContent] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [savedDraft, setSavedDraft] = useState('');

  const recommendedTags = [
    '#디지털아트', '#일러스트', '#사진작품', '#3D모델링', 
    '#애니메이션', '#UI디자인', '#웹디자인', '#브랜딩',
    '#타이포그래피', '#포트폴리오', '#창작', '#영감'
  ];

  const handleTagSelect = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
      setTagInput(selectedTags.concat(tag).join(' ') + ' ');
    }
  };

  const handleTagInputChange = (value: string) => {
    setTagInput(value);
    const tags = value.split(' ').filter(tag => tag.trim().startsWith('#'));
    setSelectedTags(tags);
  };

  const handleImageUpload = () => {
    const dummyImages = [
      'https://readdy.ai/api/search-image?query=beautiful%20korean%20artwork%2C%20digital%20illustration%2C%20vibrant%20colors%2C%20modern%20aesthetic%2C%20creative%20composition&width=400&height=300&seq=upload1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=stunning%20photography%2C%20korean%20landscape%2C%20artistic%20composition%2C%20professional%20quality%2C%20beautiful%20lighting&width=400&height=300&seq=upload2&orientation=landscape'
    ];
    const randomImage = dummyImages[Math.floor(Math.random() * dummyImages.length)];
    setSelectedImages([...selectedImages, randomImage]);
  };

  const removeImage = (index: number) => {
    setSelectedImages(selectedImages.filter((_, i) => i !== index));
  };

  const handleSaveDraft = () => {
    setSavedDraft(content);
    alert('임시저장되었습니다.');
  };

  const handleSubmit = () => {
    if (content.trim() || selectedImages.length > 0) {
      onPost(content, selectedImages, selectedTags);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">새 게시물 작성</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors duration-200 cursor-pointer"
          >
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Text Area */}
          <div>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="무슨 생각을 하고 계신가요?"
              className="w-full p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#00B67E]/50 focus:border-[#00B67E] transition-all duration-200"
              rows={6}
            />
          </div>

          {/* Tag Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">태그 추가</label>
            <input
              type="text"
              value={tagInput}
              onChange={(e) => handleTagInputChange(e.target.value)}
              placeholder="#태그를 입력하세요"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B67E]/50 focus:border-[#00B67E] transition-all duration-200"
            />
          </div>

          {/* Recommended Tags */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-3">추천 태그</h4>
            <div className="flex flex-wrap gap-2">
              {recommendedTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagSelect(tag)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                    selectedTags.includes(tag)
                      ? 'bg-[#00B67E] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Image Preview */}
          {selectedImages.length > 0 && (
            <div className="grid grid-cols-2 gap-3">
              {selectedImages.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image}
                    alt={`업로드된 이미지 ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200 cursor-pointer"
                  >
                    <i className="ri-close-line text-sm"></i>
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Media Options */}
          <div className="flex items-center space-x-6">
            <button
              onClick={handleImageUpload}
              className="flex items-center space-x-2 text-gray-600 hover:text-[#00B67E] transition-colors duration-200 cursor-pointer"
            >
              <i className="ri-image-line text-xl w-6 h-6 flex items-center justify-center"></i>
              <span>이미지 추가</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-[#00B67E] transition-colors duration-200 cursor-pointer">
              <i className="ri-video-line text-xl w-6 h-6 flex items-center justify-center"></i>
              <span>비디오 추가</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-[#00B67E] transition-colors duration-200 cursor-pointer">
              <i className="ri-link text-xl w-6 h-6 flex items-center justify-center"></i>
              <span>링크 추가</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200">
          <button
            onClick={handleSaveDraft}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200 cursor-pointer whitespace-nowrap"
          >
            임시저장
          </button>
          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              취소
            </button>
            <button
              onClick={handleSubmit}
              disabled={!content.trim() && selectedImages.length === 0}
              className="px-6 py-2 bg-[#00B67E] text-white rounded-full hover:bg-[#00a06f] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              게시
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
