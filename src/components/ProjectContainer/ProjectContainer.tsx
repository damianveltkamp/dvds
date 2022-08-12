import { ReactNode } from "react";
import { SC_ProjectContainer } from "./ProjectContainer.styles";

export type ProjectContainerProps = {
  children: ReactNode;
};

export const ProjectContainer = ({ children }: ProjectContainerProps) => {
  return <SC_ProjectContainer>{children}</SC_ProjectContainer>;
};
