import { WithChildrenProps } from "../../../../types/generalTypes";
import React from "react";
import * as S from "./styles";

interface MainHeaderProps extends WithChildrenProps {
  isTwoColumnsLayout: boolean;
}

export const MainHeader: React.FC<MainHeaderProps> = ({
  isTwoColumnsLayout,
  children,
}) => {
  return (
    <S.FixedHeader $isTwoColumnsLayoutHeader={isTwoColumnsLayout}>
      {children}
    </S.FixedHeader>
  );
};
