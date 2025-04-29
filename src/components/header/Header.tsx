import React from "react";
import { DesktopHeader } from "./layouts/DesktopHeader";

interface HeaderProps {
  toggleSider: () => void;
  isSiderOpened: boolean;
  isTwoColumnsLayout: boolean;
  setSiderOpened: (isOpened: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  toggleSider,
  isSiderOpened,
  isTwoColumnsLayout,
  setSiderOpened,
}) => {
  return (
    <DesktopHeader
      toggleSider={toggleSider}
      isSiderOpened={isSiderOpened}
      isTwoColumnsLayout={isTwoColumnsLayout}
      setSiderOpened={setSiderOpened}
    />
  );
};
