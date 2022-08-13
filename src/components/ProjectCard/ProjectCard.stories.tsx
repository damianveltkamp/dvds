import { Story } from "@storybook/react";

import { MainContainer } from "../MainContainer/MainContainer";
import { ProjectCard, ProjectCardProps } from "./ProjectCard";

const storyConfig = {
  title: "Components/ProjectCard",
  component: ProjectCard,
  argTypes: {},
};

export const projectCard: Story<ProjectCardProps> = () => {
  return (
    <MainContainer>
      <ProjectCard
        title="Maandag"
        href={{ url: "https://www.maandag.nl/", isExternal: true }}
        image={{
          src: "/images/maandag.png",
          alt: "Maandag homepage screenshot",
        }}
      />
    </MainContainer>
  );
};

export default storyConfig;
