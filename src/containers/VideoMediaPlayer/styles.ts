/* eslint-disable max-len */
import styled from "styled-components";
import { Card, Checkbox } from "antd";

export const VideosCardContainer = styled.div`
  flex-direction: column;
  align-items: center;

  .video-container {
    position: relative;
  }

  .video-player {
    width: 100%;
    border-radius: 7px;
    position: inherit;
    top: 0;
    left: 0;
    min-height: 260px;
    max-height: 260px;
  }

  .video-title {
    position: absolute;
    top: 10px;
    left: 10px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
    border-radius: 5px;
  }

  .ant-card
    ant-card-bordered
    ant-card-hoverable
    css-dev-only-do-not-override-j9bb5n {
    width: -webkit-fill-available;
  }

  && {
    .ant-card-bordered .ant-card-cover {
      margin-top: 0px;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }
  }

  .ant-card .ant-card-body {
    padding: 6px;
  }

  .next-button {
    color: silver;
    font-size: 32px;
    margin-left: 20px;
    margin-top: 7px;
  }

  .video-thumbnails-wrapper {
   overflow-x: auto;
   white-space: nowrap;
   padding-bottom: 4px;
  }

  .video-thumbnails {
   display: flex;
   flex-wrap: nowrap;
  }

   .video-thumbnails-wrapper::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: #f0f0f0;
    border-radius: 10px;
  }

  .video-thumbnails-wrapper::-webkit-scrollbar-thumb {
    background-color: silver;
    border-radius: 10px;
  }

  .video-thumbnails-wrapper::-webkit-scrollbar-track {
    background-color: #f0f0f0;
    margin: 3px 0px;
  }
}
`;

export const CustomCard = styled(Card)`
  &.ant-card {
    box-shadow: none;
    border: 1px solid grey;
  }
  .video-container {
    position: relative; /* Allow positioning of child elements */
  }
  .language-icon {
    position: absolute;
    top: 10px;
    right: 18px;
    cursor: pointer;
    z-index: 10;
    color: #ffffff;
    background-color: rgb(0 0 0 / 33%);
    border-radius: 5px;
    padding: 0px 4px;
  }
  .dropdown {
    position: absolute;
    top: 48px;
    right: 18px;
    background-color: rgba(255, 255, 255, 0.9);
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    z-index: 20;
    font-size: 13px;
  }
  .dropdown-item {
    padding: 8px 12px;
    cursor: pointer;
  }
  .dropdown-item:hover {
    border-radius: 5px;
    background-color: #0000001f;
  }
  .disabled {
    pointer-events: none;
    opacity: 0.8;
    color: black;
  }
  video::-webkit-media-controls-volume-slider {
    display: none;
  }
  video::-webkit-media-controls-mute-button {
    display: none;
  }
`;

export const VideoCard = styled(Card)`
  .cover-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
  .ant-card-meta-detail {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
  && {
    .ant-card-bordered .ant-card-cover {
      margin-top: 0px !important;
      margin-inline-start: 0px !important;
      margin-inline-end: 0px !important;
    }
  }
  &.ant-card {
    border: 1px solid grey;
  }
  cursor: pointer;
  &:hover {
    border: 1px solid red;
    box-shadow: inset 0 0 2px red;
  }
`;

export const ImageContainers = styled.div`
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 8px;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
`;

export const StyledCheckbox = styled(Checkbox)`
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #dc0100 !important;
    border-color: #dc0100 !important;
    width: 15px;
    height: 15px;
  }

  .ant-checkbox-checked .ant-checkbox-inner::after {
    border-color: gainsboro !important;
  }
`;
