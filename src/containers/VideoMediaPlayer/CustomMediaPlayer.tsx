"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaHeadphones } from "react-icons/fa6";
import { CustomCard, StyledCheckbox, VideosCardContainer } from "./styles";
import { Col, Row, Space, Tag } from "antd";
import { IoPauseCircleOutline, IoPlayCircleOutline } from "react-icons/io5";
import { videoListDT } from "./const";
import { IoMdCheckmark } from "react-icons/io";
import "@ant-design/v5-patch-for-react-19";

const CustomMediaPlayer = ({
  videoRef,
  isVideoCompleted,
  setIsVideoCompleted,
  currentVideo,
  setCurrentVideo,
}: any) => {
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(
    null
  );
  const subtitleTracksList = videoListDT[currentVideo]?.subtitleTracks;
  const [selectedAudio, setSelectedAudio] = useState<string>(
    videoListDT[0]?.audioTracks[0]?.url
  );
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !(containerRef.current as any).contains(event.target)
      ) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    // Update selectedAudio when currentVideo changes
    const initialAudio = videoListDT[currentVideo]?.audioTracks[0]?.url;
    setSelectedAudio(initialAudio);
  }, [currentVideo]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return; // Ensure the video element exists

    const audio = new Audio(selectedAudio);
    setAudioElement(audio);

    const handlePlay = () => {
      if (audio) {
        audio.currentTime = video.currentTime; // Sync audio with video
        audio.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      }
    };

    const handlePause = () => {
      audio.pause();
    };

    const handleTimeUpdate = () => {
      if (audio && Math.abs(audio.currentTime - video.currentTime) > 0.3) {
        audio.currentTime = video.currentTime;
      }
    };

    // Add event listeners to the video element
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("timeupdate", handleTimeUpdate);

    // Play the new audio immediately and sync with the video when language is switched
    if (!video.paused && audio) {
      audio.currentTime = video.currentTime;
      audio.play().catch((error) => {
        console.error("Error playing new audio on language switch:", error);
      });
    }

    return () => {
      // Cleanup on component unmount or audio change
      audio.pause();
      if (video) {
        video.removeEventListener("play", handlePlay);
        video.removeEventListener("pause", handlePause);
        video.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAudio]);

  const handleAudioChange = (URL: any) => {
    // const url = event.target.value;
    setDropdownVisible(false);

    // Stop and reset the current audio if it exists
    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
    }

    // Set the new audio source and synchronize it with the current video time
    setSelectedAudio(URL);
  };

  const languageMenu = (
    <div className="dropdown">
      {videoListDT[currentVideo]?.audioTracks?.map((track, index) => {
        const isSelected = selectedAudio === track.url; // Check if this track is selected
        return (
          <div
            key={index}
            className={`dropdown-item ${isSelected ? "disabled" : ""}`}
            onClick={() => !isSelected && handleAudioChange(track.url)}
            style={{
              cursor: selectedAudio === track.url ? "not-allowed" : "pointer",
              color: isSelected ? "black" : "black",
              opacity: isSelected ? 0.8 : 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            {track.language}{" "}
            {selectedAudio === track.url && (
              <IoMdCheckmark style={{ color: "#1677ff", marginLeft: 5 }} />
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <VideosCardContainer>
      <CustomCard
        cover={
          <div className="video-container" ref={containerRef}>
            <video
              ref={videoRef}
              src={videoListDT[currentVideo].src}
              controls
              autoPlay
              poster={videoListDT[currentVideo].thumbnail}
              className="video-player"
              controlsList="nodownload"
              onContextMenu={(e) => e.preventDefault()}
              preload="metadata"
              draggable={false}
              style={{
                minHeight: "calc(100vh - 280px)",
                maxHeight: "calc(100vh - 280px)",
                minWidth: 543,
              }}
              onEnded={() => setIsVideoCompleted(true)}
            >
              <div className="video-title">
                {videoListDT[currentVideo].title}
              </div>
              {subtitleTracksList.map((track, trackIndex) => (
                <track
                  key={trackIndex}
                  src={track.url}
                  kind="subtitles"
                  label={track.language}
                  srcLang={track.srclang}
                  default={track.language === "English"} // Mark English as default
                />
              ))}
              Your browser does not support the video tag.
            </video>

            <div
              className="language-icon"
              onClick={() => setDropdownVisible(!dropdownVisible)}
            >
              <FaHeadphones style={{ marginTop: 4, fontSize: 24 }} />
            </div>
            {dropdownVisible && languageMenu}
          </div>
        }
      >
        <Row gutter={16}>
          {videoListDT.map((video: any, index: number) => (
            <Col key={index}>
              <Space size={[0, 8]} wrap>
                <Tag
                  icon={
                    videoListDT[currentVideo].description ===
                    video?.description ? (
                      <IoPauseCircleOutline />
                    ) : (
                      <IoPlayCircleOutline />
                    )
                  }
                  color={
                    videoListDT[currentVideo].description === video?.description
                      ? "#DC0100"
                      : "gainsboro"
                  }
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 10,
                    cursor: "pointer",
                    borderRadius: 5,
                    color:
                      videoListDT[currentVideo].description ===
                      video?.description
                        ? "#fff"
                        : "#000",
                    fontStyle: "italic",
                  }}
                  onClick={() => {
                    setCurrentVideo(index), setIsVideoCompleted(false);
                  }}
                >
                  {video.description}
                </Tag>
              </Space>
            </Col>
          ))}
          <StyledCheckbox
            style={{ marginBottom: 7 }}
            checked={isVideoCompleted}
            disabled
          />
        </Row>
      </CustomCard>
    </VideosCardContainer>
  );
};

export default React.memo(CustomMediaPlayer);
