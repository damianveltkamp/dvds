import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { theme } from "../../theme/theme";
import media from "../../utils/media";
import { BareLink } from "../Link/BareLink";

const projectCardBase = css`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: ${theme.borderRadius.primary};
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  text-decoration: none;

  & > figure > span {
    transition: 250ms ease-in-out;
  }

  &:hover,
  &:focus {
    & > figure > span {
      transform: scale(1.1);
    }
  }
`;

export const SC_ProjectCard = styled(BareLink)`
  ${projectCardBase}
`;

export const SC_ProjectImageContainer = styled("figure")`
  position: relative;
  width: 100%;
  height: 170px;
  margin: 0;
  overflow: hidden;

  ${media.min("tablet")} {
    height: 250px;
  }

  &:before {
    content: "";
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const SC_ProjectCardContentContainer = styled("div")`
  position: relative;
  z-index: 10;
  margin-top: -2px;
  padding: 20px;
  text-align: center;
  background-color: ${({ theme }) => `${theme.colors.DVOrange}`};
`;
