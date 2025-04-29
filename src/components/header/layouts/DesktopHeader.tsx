import { MenuOutlined } from "@ant-design/icons";
import { Col, Image, Row } from "antd";
import { BASE_COLORS, FONT_SIZE_PX } from "../../../config/theme/constants";

import * as S from "../styles";

const LogoIcon = "/assets/images/Schindler150yrLogo.png";

interface DesktopHeaderProps {
  toggleSider: () => void;
  isSiderOpened: boolean;
  isTwoColumnsLayout: boolean;
  setSiderOpened: (isOpened: boolean) => void;
}

const IconStyle = {
  fontSize: FONT_SIZE_PX.FONT26,
  color: BASE_COLORS.red,
  margin: "0 10px",
  cursor: "pointer",
};

export const DesktopHeader: React.FC<DesktopHeaderProps> = ({
  toggleSider,
  isTwoColumnsLayout,
}) => {
  return (
    <Row
      justify="space-between"
      align="middle"
      style={{ width: "100%", padding: "0 5px" }}
    >
      <Col style={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
        <MenuOutlined style={{ ...IconStyle }} onClick={toggleSider} />
        <Image
          src={LogoIcon}
          preview={false}
          alt="logo"
          style={{
            height: 40,
            maxWidth: "100%",
            cursor: "pointer",
            margin: "5px 0px",
            paddingLeft: "10px",
          }}
        />
      </Col>

      <Col
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexGrow: 1,
          marginLeft: 200,
        }}
      >
        <div
          style={{
            textAlign: "center",
            color: BASE_COLORS.red,
            fontSize: FONT_SIZE_PX.FONT24,
            fontWeight: "bold",
          }}
        >
          {"Action Board"}
        </div>
      </Col>
    </Row>
  );
};
