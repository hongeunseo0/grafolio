
interface PostComposerProps {
  onOpenModal: () => void;
}

export default function PostComposer({ onOpenModal }: PostComposerProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <div className="flex items-start space-x-4">
        <img
          src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20korean%20artist%20with%20creative%20background%2C%20studio%20lighting%2C%20modern%20aesthetic%2C%20clean%20background&width=48&height=48&seq=current-user-composer&orientation=squarish"
          alt="프로필"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <button
            onClick={onOpenModal}
            className="w-full text-left p-4 bg-gray-50 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
          >
            무슨 생각을 하고 계신가요?
          </button>
          
          {/* Media Options */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-[#00B67E] transition-colors duration-200 cursor-pointer">
                <i className="ri-image-line text-xl w-6 h-6 flex items-center justify-center"></i>
                <span className="text-sm">사진</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-[#00B67E] transition-colors duration-200 cursor-pointer">
                <i className="ri-video-line text-xl w-6 h-6 flex items-center justify-center"></i>
                <span className="text-sm">비디오</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
