import styled from "styled-components";
import { Layout } from "antd";
import { media } from "../../../../config/theme/constants";

export const LayoutMaster = styled(Layout)`
  height: 100vh;
  overflow: hidden;
`;

export const LayoutMain = styled(Layout)`
  margin-top: 56px;
  @media only screen and ${media.md} {
    margin-left: unset;
  }

  @media only screen and ${media.xl} {
    margin-left: unset;
  }
`;
