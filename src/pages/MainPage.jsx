import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-black  border-gray-800 border-10 m-0 p-0 w-screen h-screen flex items-center justify-center">
      {showVideo ? (
        <Arise onVideoEnd={() => navigate("/home")} onSkip={() => navigate("/home")} />
      ) : (
        <button
          className="VideoArise text-red-900 font-bold cursor-pointer text-2xl"
          onClick={() => setShowVideo(true)}
        >
          <span>A</span>
          <span>R</span>
          <span>I</span>
          <span>S</span>
          <span>E</span>
        </button>
      )}
    </div>
  );
};

const Arise = ({ onVideoEnd, onSkip }) => {
  const VideoRef = useRef(null);

  return (
    <div className="flex flex-col items-center justify-center  bg-black relative">
      <video ref={VideoRef} className="h-auto" autoPlay onEnded={onVideoEnd}>
        <source src="/youtube_Uz9P1yT_qT0_1920x1080_h264.mp4" type="video/mp4" />
        Your Browser does not support the video tag.
      </video>
      <button
        className="cursor-pointer hover:scale-110 delay-150 transform-ease hover:opacity-50 positon fixed bottom-6 right-6 bg-white text-2xl black font-bold p-4 w-25 h-10 flex justify-center items-center rounded-2xl"
        onClick={onSkip}
      >
        Skip
      </button>
    </div>
  );
};

export default MainPage;
