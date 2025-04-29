"use client";

import React, { useRef, useState, useEffect } from "react";
import { ImageContainers, VideosCardContainer } from "./styles";
import CustomMediaPlayer from "./CustomMediaPlayer";

const VideoPlayerMainScreen = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isVideoCompleted, setIsVideoCompleted] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Ensure component only renders on client side after mounting
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    // Avoid rendering before mount to prevent style flickers
    return null;
  }

  return (
    <ImageContainers style={{ display: "inherit", padding: "0px" }}>
      <div
        style={{
          height: "calc(100vh - 232px)",
          minHeight: 356,
          transition: "all 0.3s ease-in-out",
        }}
      >
        <VideosCardContainer>
          <CustomMediaPlayer
            videoRef={videoRef}
            isVideoCompleted={isVideoCompleted}
            setIsVideoCompleted={setIsVideoCompleted}
            currentVideo={currentVideo}
            setCurrentVideo={setCurrentVideo}
          />
        </VideosCardContainer>
      </div>
    </ImageContainers>
  );
};

export default React.memo(VideoPlayerMainScreen);
