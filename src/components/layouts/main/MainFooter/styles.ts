import { BASE_COLORS, LAYOUT, media } from "@/config/theme/constants";
import { Layout } from "antd";
import styled, { css } from "styled-components";

interface Footer {
  $isTwoColumnsLayoutHeader: boolean;
}

export const Footer = styled(Layout.Footer)<Footer>`
  line-height: 1.5;
  background: #f6f9fe;
  border-top: 1px solid ${BASE_COLORS.altolight};

  @media only screen and ${media.md} {
    padding: ${LAYOUT.desktop.paddingVertical}
      ${LAYOUT.desktop.paddingHorizontal};
    height: ${LAYOUT.desktop.headerHeight};
  }

  @media only screen and ${media.md} {
    ${(props) =>
      props?.$isTwoColumnsLayoutHeader &&
      css`
        padding: 0;
      `}
  }
`;
