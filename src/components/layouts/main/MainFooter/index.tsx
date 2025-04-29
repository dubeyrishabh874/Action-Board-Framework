import { WithChildrenProps } from "types/generalTypes";
import React from "react";
import * as S from "./styles";

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
