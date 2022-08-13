import Image from "next/image";

import { Heading } from "../Heading/Heading";
import {
  SC_ProjectCard,
  SC_ProjectCardContentContainer,
  SC_ProjectCardExternal,
  SC_ProjectImageContainer,
} from "./ProjectCard.styles";

export type ProjectCardProps = {
  title: string;
  href: {
    url: string;
    isExternal: boolean;
  };
  image: {
    src: string;
    alt: string;
  };
};

export const ProjectCard = ({ title, href, image }: ProjectCardProps) => {
  switch (href.isExternal) {
    case true:
      return (
        <SC_ProjectCardExternal href={href.url}>
          <SC_ProjectImageContainer>
            <Image layout="fill" src={image.src} alt={image.alt} />
          </SC_ProjectImageContainer>
          <SC_ProjectCardContentContainer>
            <Heading lvl="h3" variant="black">
              {title}
            </Heading>
          </SC_ProjectCardContentContainer>
        </SC_ProjectCardExternal>
      );
    case false:
      return (
        <SC_ProjectCard href={href.url}>
          <SC_ProjectImageContainer>
            <Image layout="fill" src={image.src} alt={image.alt} />
          </SC_ProjectImageContainer>
          <SC_ProjectCardContentContainer>
            <Heading lvl="h3" variant="black">
              {title}
            </Heading>
          </SC_ProjectCardContentContainer>
        </SC_ProjectCard>
      );
  }
};
