const template = ({ componentName, imports, exports, props, jsx }, { tpl }) => {
  return tpl`
    ${imports};
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

    function SVG(${props}) {
      return ${jsx};
    }

    function ${componentName}({color, size}: IconProps) {
      const width = size ? size.toString() + 'px' : '25px'
      const height = size ? size.toString() + 'px' : '25px'

      const customIconStyles = css({
        width: width,
        height: height,
        color: color ? theme.colors[color] : theme.colors.white
      })

      return (
        ${`
          <div css={[iconWrapperStyles, customIconStyles]}>
            ${`<SVG />`}
          </div>
        `}
      )
    }

    ${exports};
`;
};

module.exports = template;
