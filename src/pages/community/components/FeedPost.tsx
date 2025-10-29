
import { useState } from 'react';

interface Author {
  name: string;
  username: string;
  avatar: string;
}

interface Post {
  id: string;
  author: Author;
  content: string;
  images: string[];
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
  tags?: string[];
}

interface FeedPostProps {
  post: Post;
}

export default function FeedPost({ post }: FeedPostProps) {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likes, setLikes] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      {/* Post Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-gray-800">{post.author.name}</h4>
            <p className="text-sm text-gray-500">{post.author.username} • {post.timestamp}</p>
          </div>
        </div>
        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors duration-200 cursor-pointer">
          <i className="ri-more-line w-5 h-5 flex items-center justify-center"></i>
        </button>
      </div>

      {/* Post Content */}
      <div className="mb-4">
        <p className="text-gray-800 leading-relaxed">{post.content}</p>
      </div>

      {/* Post Images */}
      {post.images.length > 0 && (
        <div className="mb-4">
          {post.images.length === 1 ? (
            <img
              src={post.images[0]}
              alt="게시물 이미지"
              className="w-full max-h-96 object-cover rounded-lg"
            />
          ) : (
            <div className={`grid gap-2 rounded-lg overflow-hidden ${
              post.images.length === 2 ? 'grid-cols-2' : 
              post.images.length === 3 ? 'grid-cols-2' : 'grid-cols-2'
            }`}>
              {post.images.slice(0, 4).map((image, index) => (
                <div key={index} className={`relative ${
                  post.images.length === 3 && index === 0 ? 'row-span-2' : ''
                }`}>
                  <img
                    src={image}
                    alt={`게시물 이미지 ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                  {post.images.length > 4 && index === 3 && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white text-xl font-semibold">
                        +{post.images.length - 4}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Hashtags */}
      {post.tags && post.tags.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="text-[#00B67E] text-sm font-medium hover:text-[#00A06B] cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Post Actions */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div className="flex items-center space-x-6">
          <button
            onClick={handleLike}
            className={`flex items-center space-x-2 transition-colors duration-200 cursor-pointer ${
              isLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
            }`}
          >
            <i className={`${isLiked ? 'ri-heart-fill' : 'ri-heart-line'} text-lg w-5 h-5 flex items-center justify-center`}></i>
            <span className="text-sm font-medium">{likes}</span>
          </button>
          <button
            onClick={() => setShowComments(!showComments)}
            className="flex items-center space-x-2 text-gray-600 hover:text-[#00B67E] transition-colors duration-200 cursor-pointer"
          >
            <i className="ri-chat-3-line text-lg w-5 h-5 flex items-center justify-center"></i>
            <span className="text-sm font-medium">{post.comments}</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-[#00B67E] transition-colors duration-200 cursor-pointer">
            <i className="ri-share-line text-lg w-5 h-5 flex items-center justify-center"></i>
            <span className="text-sm font-medium">{post.shares}</span>
          </button>
        </div>
        <button className="text-gray-600 hover:text-[#00B67E] transition-colors duration-200 cursor-pointer">
          <i className="ri-bookmark-line text-lg w-5 h-5 flex items-center justify-center"></i>
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <img
                src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20korean%20designer%20with%20modern%20workspace%20background%2C%20natural%20lighting%2C%20contemporary%20style&width=32&height=32&seq=commenter1&orientation=squarish"
                alt="댓글 작성자"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="bg-gray-100 rounded-lg px-3 py-2">
                  <p className="font-medium text-sm text-gray-800">김댓글러</p>
                  <p className="text-sm text-gray-700">정말 멋진 작품이네요! 어떤 도구로 작업하셨나요?</p>
                </div>
                <div className="flex items-center space-x-4 mt-1">
                  <span className="text-xs text-gray-500">2시간 전</span>
                  <button className="text-xs text-gray-500 hover:text-[#00B67E] cursor-pointer">좋아요</button>
                  <button className="text-xs text-gray-500 hover:text-[#00B67E] cursor-pointer">답글</button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Comment Input */}
          <div className="flex items-center space-x-3 mt-4">
            <img
              src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20korean%20artist%20with%20creative%20background%2C%20studio%20lighting%2C%20modern%20aesthetic%2C%20clean%20background&width=32&height=32&seq=current-user-small&orientation=squarish"
              alt="내 프로필"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="flex-1 flex items-center space-x-2">
              <input
                type="text"
                placeholder="댓글을 입력하세요..."
                className="flex-1 px-3 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00B67E]/50 text-sm"
              />
              <button className="p-2 text-[#00B67E] hover:bg-[#00B67E]/10 rounded-full transition-colors duration-200 cursor-pointer">
                <i className="ri-send-plane-line w-4 h-4 flex items-center justify-center"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
