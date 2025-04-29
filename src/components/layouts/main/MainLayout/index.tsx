import React, { useState, useEffect } from "react";
import { useResponsive } from "../../../hooks/useResponsive";
import { Header } from "../../../header/Header";
import { useRouter } from "next/router";
import MainContent from "../MainContent";
import { MainHeader } from "../MainHeader";
import * as S from "./styles";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isTwoColumnsLayout, setIsTwoColumnsLayout] = useState(true);
  const [siderCollapsed, setSiderCollapsed] = useState(true);
  const { isDesktop } = useResponsive();
  const router = useRouter();

  const toggleSider = () => setSiderCollapsed(!siderCollapsed);

  useEffect(() => {
    setIsTwoColumnsLayout(
      ["/dashboard"].includes(router.pathname) && isDesktop
    );
  }, [isDesktop, router.pathname]);

  return (
    <S.LayoutMaster>
      <S.LayoutMain>
        <MainHeader isTwoColumnsLayout={isTwoColumnsLayout}>
          <Header
            toggleSider={toggleSider}
            isSiderOpened={!siderCollapsed}
            isTwoColumnsLayout={isTwoColumnsLayout}
            setSiderOpened={setSiderCollapsed}
          />
        </MainHeader>

        <MainContent
          id="main-content"
          $isTwoColumnsLayout={isTwoColumnsLayout}
          style={{ background: "#f9f9f9" }}
        >
          {children}
        </MainContent>
      </S.LayoutMain>
    </S.LayoutMaster>
  );
};

export default MainLayout;
