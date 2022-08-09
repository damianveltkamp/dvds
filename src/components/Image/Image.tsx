import NextImage from "next/image";

import { SC_ImageContainer } from "./Image.styles";

export type LinkProps = {
  src: string;
  alt: string;
  layout?: "fill" | "intrinsic" | "fixed" | "responsive";
  width?: number;
  height?: number;
};

export const Image = ({ src, alt, layout, width, height }: LinkProps) => {
  return (
    <SC_ImageContainer>
      <NextImage
        src={src}
        alt={alt}
        layout={layout}
        width={width}
        height={height}
      />
    </SC_ImageContainer>
  );
};
