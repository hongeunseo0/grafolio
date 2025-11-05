
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
  hasTimeLimit?: boolean;
  category?: string;
}

interface FeedPostProps {
  post: Post;
  isBookmarked?: boolean;
  onBookmark?: () => void;
  onHashtagClick?: (hashtag: string) => void;
}

export default function FeedPost({ post, isBookmarked = false, onBookmark, onHashtagClick }: FeedPostProps) {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likes, setLikes] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleHashtagClick = (tag: string) => {
    if (onHashtagClick) {
      onHashtagClick(`#${tag}`);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 cursor-pointer hover:shadow-md transition-shadow duration-200">
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
            <div className="flex items-center space-x-2">
              <p className="text-sm text-gray-500">{post.author.username} • {post.timestamp}</p>
              {post.hasTimeLimit && (
                <div className="flex items-center space-x-1">
                  <i className="ri-time-line text-orange-500 text-sm w-4 h-4 flex items-center justify-center"></i>
                  <span className="text-xs text-orange-500 font-medium">시간제한</span>
                </div>
              )}
            </div>
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
              className="w-full max-h-96 object-top rounded-lg"
            />
          ) : (
            <div className={`grid gap-2 rounded-lg overflow-hidden ${
              post.images.length === 2 ? 'grid-cols-2' : 'grid-cols-2'
            }`}>
              {post.images.slice(0, 2).map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image}
                    alt={`게시물 이미지 ${index + 1}`}
                    className="w-full h-48 object-top"
                  />
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
                onClick={() => handleHashtagClick(tag)}
                className="text-[#00B67E] text-sm font-medium hover:text-[#00A06B] cursor-pointer transition-colors duration-200"
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
        <button 
          onClick={onBookmark}
          className={`transition-colors duration-200 cursor-pointer ${
            isBookmarked ? 'text-[#00B67E]' : 'text-gray-600 hover:text-[#00B67E]'
          }`}
        >
          <i className={`text-lg w-5 h-5 flex items-center justify-center ${
            isBookmarked ? 'ri-bookmark-fill' : 'ri-bookmark-line'
          }`}></i>
        </button>
      </div>
    </div>
  );
}
