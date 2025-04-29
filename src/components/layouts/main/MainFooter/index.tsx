import React from "react";
import * as S from "./styles";
import { WithChildrenProps } from "@/types/generalTypes";

interface MainFooterProps extends WithChildrenProps {
  isTwoColumnsLayout: boolean;
}

export const MainFooter: React.FC<MainFooterProps> = ({
  isTwoColumnsLayout,
  children,
}) => {
  return (
    <S.Footer $isTwoColumnsLayoutHeader={isTwoColumnsLayout}>
      {children}
    </S.Footer>
  );
};
