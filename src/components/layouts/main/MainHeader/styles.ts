import { LAYOUT, media } from "../../../../config/theme/constants";
import { Layout } from "antd";
import styled, { css } from "styled-components";

interface HeaderProps {
  $isTwoColumnsLayoutHeader: boolean;
}

export const FixedHeader = styled.div<HeaderProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; // Ensure it is above other elements
  background: rgb(247, 247, 247); // Match your header background
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); // Optional shadow for better visibility
  height: ${LAYOUT.desktop.headerHeight}; // Set the height of the header
  // display: flex;
  align-items: center; // Center the content vertically
  padding: 0 ${LAYOUT.desktop.paddingHorizontal}; // Add horizontal padding
  justify-content: space-between; // Distribute space between items

  @media only screen and ${media.md} {
    padding: ${LAYOUT.desktop.paddingVertical}
      ${LAYOUT.desktop.paddingHorizontal};
  }

  @media only screen and ${media.xs} {
    padding: 0 5px;
  }

  @media only screen and ${media.md} {
    ${(props) =>
      props?.$isTwoColumnsLayoutHeader &&
      css`
        padding: 0;
      `}
  }
`;
// Existing Header styled component (if needed)
export const Header = styled(Layout.Header)<HeaderProps>`
  line-height: 1.5;
  background: rgb(247, 247, 247);
  height: ${LAYOUT.desktop
    .headerHeight}; // Ensure this matches the FixedHeader height

  @media only screen and ${media.md} {
    padding: ${LAYOUT.desktop.paddingVertical}
      ${LAYOUT.desktop.paddingHorizontal};
  }

  @media only screen and ${media.xs} {
    padding: 0 5px;
    position: sticky;
    top: 0;
  }

  @media only screen and ${media.md} {
    ${(props) =>
      props?.$isTwoColumnsLayoutHeader &&
      css`
        padding: 0;
      `}
  }
`;
