import { ReactNode } from "react";

import { SC_MainContainer } from "./MainContainer.styles";

export type MainContainerProps = {
  children: ReactNode;
};

export const MainContainer = ({ children }: MainContainerProps) => {
  return <SC_MainContainer>{children}</SC_MainContainer>;
};
