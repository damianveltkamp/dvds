import { SVGProps } from "react";
import { css } from "@emotion/react";
import { theme } from "../../theme/theme";
const iconWrapperStyles = css({
  display: "flex",
});
type Colors = typeof theme.colors;
type IconProps = {
  size?: number,
  color?: Colors,
};

const LogoIconSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 146 69"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M59.6 59.2c0 2.613-.98 4.9-2.94 6.86S52.412 69 49.8 69H.8V20l9.8-9.8H.8V.4h49c2.613 0 4.9.98 6.86 2.94s2.94 4.247 2.94 6.86v49zm-11.2 0v-49H12v57.4l8.4-8.4h28zM145.66.4L119.481 69h-18.2L75.661.4h12.6l21 59.08h2.8l21-59.08h12.6z"
      fill="currentColor"
    />
  </svg>
);

const LogoIcon = ({ color, size }: IconProps) => {
  const width = size ? size.toString() + "px" : "25px";
  const height = size ? size.toString() + "px" : "25px";
  const customIconStyles = css({
    width: width,
    height: height,
  });
  return (
    <div css={[iconWrapperStyles, customIconStyles]}>
      <LogoIconSvg />
    </div>
  );
};

LogoIcon.displayName = "LogoIcon";
export default LogoIcon;