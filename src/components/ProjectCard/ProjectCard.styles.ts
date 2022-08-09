import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { theme } from "../../theme/theme";
import { BareExternalLink } from "../Link/BareExternalLink";
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

export const SC_ProjectCardExternal = styled(BareExternalLink)`
  ${projectCardBase}
`;

export const SC_ProjectImageContainer = styled("figure")`
  position: relative;
  width: 100%;
  height: 250px;
  margin: 0;
  overflow: hidden;

  &:before {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    background: rgba(0, 0, 0, 0.5);
    content: "";
  }
`;

export const SC_ProjectCardContentContainer = styled("div")`
  padding: 20px;
  text-align: center;
  background: ${({ theme }) => `${theme.colors.DVOrange}`};
`;
