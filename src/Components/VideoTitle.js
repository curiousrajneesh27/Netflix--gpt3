const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-24 absolute text-white z-10">
      {/* Gradient background for text section */}
      <div className="absolute inset-0 "></div>

      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">{title}</h1>

      {/* Overview (description) */}
      <p className="py-4 text-lg md:text-xl max-w-2xl drop-shadow-lg">{overview}</p>

      {/* Buttons */}
      <div className="flex items-center gap-6 mt-8">
        {/* Play Button */}
        <button className="flex items-center bg-white text-black py-3 px-8 text-xl font-semibold rounded-lg shadow-md hover:bg-red-700 transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6 mr-2"
          >
            <path d="M4 3v18l17-9L4 3z" />
          </svg>
          Play
        </button>

        {/* More Info Button */}
        <button className="flex items-center bg-gray-600 text-white py-3 px-8 text-xl font-semibold rounded-lg hover:bg-gray-700 transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6 mr-2"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
