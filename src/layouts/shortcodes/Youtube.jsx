import { useState } from "react";

const Youtube = ({ id, title, ...rest }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  if (isPlaying) {
    return (
      <div className="yt-lite rounded-md relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-md"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div
      className="yt-lite rounded-md relative w-full cursor-pointer bg-gray-900"
      style={{ paddingBottom: '56.25%' }}
      onClick={handlePlay}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
          <svg
            className="w-8 h-8 text-white ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
      {title && (
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-3 rounded-b-md">
          <p className="text-sm">{title}</p>
        </div>
      )}
    </div>
  );
};

export default Youtube;
