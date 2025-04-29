import styled, { css } from "styled-components";
import { Layout } from "antd";
import { BASE_COLORS, LAYOUT, media } from "../../../../config/theme/constants";

const { Content } = Layout;

interface HeaderProps {
  $isTwoColumnsLayout: boolean;
}

export default styled(Content)<HeaderProps>`
  padding: ${LAYOUT.mobile.paddingVertical} ${LAYOUT.mobile.paddingHorizontal};
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${BASE_COLORS.white};
  // border-top: 2px solid ${BASE_COLORS.altolight};
  // border-left: 2px solid ${BASE_COLORS.altolight};
  // border-right: 2px solid ${BASE_COLORS.altolight};
  // border-top-left-radius: 5px;
  box-shadow: 0px 0px 0px ${BASE_COLORS.cornflowerBlue};
  opacity: 1;

  @media only screen and ${media.xl} {
    ${(props) =>
      props?.$isTwoColumnsLayout &&
      css`
        padding: 0.5rem 2.25rem;
      `}
  }
`;
