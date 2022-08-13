function template({ template }, _opts, { componentName, jsx }) {
  const typescriptTemplate = template.smart({ plugins: ["typescript", "jsx"] });

  componentName.name = componentName.name.slice(3) + "Icon";
  componentName.svg = componentName.name + "Svg";

  return typescriptTemplate.ast`
    import { SVGProps } from "react";
    import { css } from '@emotion/react';
    import { theme } from '../../theme/theme';

    const iconWrapperStyles = css({
      display: 'flex'
    })

   type Colors = typeof theme.colors;

    type IconProps = {
      size?: number;
      color?: Colors;
    }

    const ${
      componentName.svg
    } = (props: React.SVGProps<SVGSVGElement>) => ${jsx};

    const ${componentName.name} = ({color, size}: IconProps) => {
      const width = size ? size.toString() + 'px' : '25px'
      const height = size ? size.toString() + 'px' : '25px'

      const customIconStyles = css({
        width: width,
        height: height
      })

      return (
        ${`
          <div css={[iconWrapperStyles, customIconStyles]}>
            ${`<${componentName.svg} />`}
          </div>
        `}
      )
    }

    ${componentName.name}.displayName = '${componentName.name}';
    export default ${componentName.name};
  `;

  // return typescriptTemplate.ast`
  //   import * as React from 'react';
  //
  //   import { Box, BoxProps } from '../../Box';
  //
  //   export type IconProps = Omit<BoxProps, 'width' | 'height'> & CustomIconProps;
  //
  //   interface CustomIconProps {
  //     rotate?: number;
  //     color?: string;
  //     size?: number | any[];
  //     width?: number | any[];
  //     height?: number | any[];
  //     active?: boolean;
  //   }
  //
  //   const getWrapperStyling = ({ rotate }: IconProps) => ({
  //     transition: 'transform 0.2s ease-in-out',
  //     display: 'flex',
  //     'flex-shrink': 0,
  //     'justify-content': 'center',
  //     'align-items': 'center',
  //     ...(rotate && {
  //       transform: \`rotate(\${rotate}\deg)\`,
  //     })
  //   })
  //
  //   const getIconStyling = ({ color }: IconProps) => ({
  //     color,
  //     role: 'presentation',
  //     'aria-hidden': true,
  //     focusable: false,
  //     width: '100%',
  //     style: {
  //       fill: 'currentColor',
  //     },
  //   });
  //
  //   const ${
  //     componentName.svg
  //   } = (props: React.SVGProps<SVGSVGElement>) => ${jsx};
  //
  //   const ${
  //     componentName.name
  //   } = ({ size, width, height, active, ...props }: IconProps) => {
  //     const w = size ? size : width ? width : 24;
  //     const h = size ? size : height ? height : 24;
  //
  //     return (
  //       ${`
  //         ${`<Box
  //           {...getWrapperStyling(props)}
  //           {...props}
  //           width={w}
  //           height={h}
  //           sx={{
  //             '.active': {
  //               display: !active ? 'none' : 'inherit'
  //             }
  //           }}
  //         >`}
  //           ${`<${componentName.svg} {...getIconStyling(props)} />`}
  //         ${`</Box>`}
  //       `}
  //     );
  //   }
  //
  // ${componentName.name}.displayName = '${componentName.name}';
  //
  // export default ${componentName.name};
  // `;
}

module.exports = template;
