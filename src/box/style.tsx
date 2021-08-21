import styled, {css} from "styled-components";

type Props = {
    $textDecoration?: "underline" | "overline" | "none" | "inherit" | "initial" | "revert" | "unset" | string;
    $visibility?: "visible" | "hidden" | "collapse" | "inherit" | "initial" | "revert" | "unset";
    $animation?: string;
    $color?: string;
    $cursor?: "alias" | "all-scroll" | "auto" | "cell" | "context-menu" | "col-resize" | "copy" | "crosshair" | "default" | "e-resize" | "ew-resize" | "grab" | "grabbing" | "help" | "move" | "n-resize" | "ne-resize" | "nesw-resize" | "ns-resize" | "nw-resize" | "nwse-resize" | "no-drop" | "none" | "not-allowed" | "pointer" | "progress" | "row-resize" | "s-resize" | "se-resize" | "sw-resize" | "text" | "w-resize" | "wait" | "zoom-in" | "zoom-out";
    $display?: "inline" | "block" | "contents" | "flex" | "grid" | "inline-block" | "inline-flex" | "inline-grid" | "inline-table" | "list-item" | "run-in" | "table" | "table-caption" | "table-column-group" | "table-header-group" | "table-footer-group" | "table-row-group" | "table-cell" | "table-column" | "table-row" | "none" | "initial" | "inherit";
    $marginLeft?: number | string;
    $marginRight?: number | string;
    $fontWeight?: string | "normal" | "bold" | "ligthter" | "bolder" | "initial" | "inherit" | "revert" | "unset";
    $marginTop?: number | string;
    $marginBottom?: number | string;
    $margin?: number | string;
    $padding?: number | string;
    $paddingTop?: number | string;
    $paddingBottom?: number | string;
    $paddingLeft?: number | string;
    $paddingRight?: number | string;
    $elevation?: boolean;
    $width?: number | string;
    $height?: number | string;
    $overflow?: string;
    $position?: "fixed" | "relative" | "static" | "absolute" | "sticky";
    $background?: string;
    $top?: number | string;
    $left?: number | string;
    $right?: number | string;
    $bottom?: number | string;
    $zIndex?: number;
    $transform?: string;
    $transition?: string;
    $border?: string;
    $borderTop?: string;
    $borderLeft?: string;
    $borderRight?: string;
    $borderBottom?: string;
    $borderRadius?: number | string;
    $minWidth?: number | string;
    $minHeight?: number | string;
    $maxWidth?: number | string;
    $maxHeight?: number | string;
    $textAlign?: "left" | "right" | "center" | "justify" | "initial" | "inherit";
    $fontSize?: string | number;
    $fontFamily?: string;
    $css?: string;
    as?: React.ElementType | keyof JSX.IntrinsicElements;
    $outline?: string;
    $boxShadow?: string;
    $whiteSpace?: "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap" | "initial" | "inherit";
    $textOverFlow?: "clip" | "ellipsis" | "inherit" | "initial" | "revert" | "unset" | string;
    $justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'initial' | 'inherit';
    $align?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit';
    $alignContent?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'initial' | 'inherit';
    $alignSelf?: 'auto' | 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit';
    $direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'initial' | 'inherit';
    $basis?: number | 'string' | 'auto' | 'initial' | 'inherit';
    $grow?: number | 'initial' | 'inherit';
    $shrink?: number | 'initial' | 'inherit';
    $wrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial' | 'inherit';
    $float?: 'none' | 'left' | 'right' | 'initial' | 'inherit';
}
export const BoxStyle = styled.div<Props>`
  ${(props) =>
          props.$textDecoration &&
          css`
            text-decoration: ${props.$textDecoration};
          `}
  ${(props) =>
          props.$textOverFlow &&
          css`
            text-overflow: ${props.$textOverFlow};
          `}
  ${(props) =>
          props.$whiteSpace &&
          css`
            white-space: ${props.$whiteSpace};
          `}
  ${(props) =>
          props.$visibility &&
          css`
            visibility: ${props.$visibility};
          `}
  ${(props) =>
          props.$animation &&
          css`
            animation: ${props.$animation};
          `}
  ${(props) =>
          props.$fontWeight &&
          css`
            font-weight: ${props.$fontWeight};
          `}
  ${(props) =>
          props.$color &&
          css`
            color: ${props.$color};
          `}
  ${(props) =>
          props.$display &&
          css`
            display: ${props.$display};
          `}
  ${(props) =>
          props.$cursor &&
          css`
            cursor: ${props.$cursor};
          `}
  ${(props) =>
          props.$width &&
          css`
            width: ${isNaN(props.$width as number)
                    ? props.$width
                    : `${props.$width}px`};
          `}
  ${(props) =>
          props.$height &&
          css`
            height: ${isNaN(props.$height as number)
                    ? props.$height
                    : `${props.$height}px`};
          `}
  ${(props) =>
          props.$margin !== undefined &&
          css`
            margin: ${isNaN(props.$margin as number)
                    ? props.$margin
                    : `${props.$margin}px`};
          `}
  ${(props) =>
          props.$padding !== undefined &&
          css`
            padding: ${isNaN(props.$padding as number)
                    ? props.$padding
                    : `${props.$padding}px`};
          `}
  ${(props) =>
          props.$marginLeft !== undefined &&
          css`
            margin-left: ${isNaN(props.$marginLeft as number)
                    ? props.$marginLeft
                    : `${props.$marginLeft}px`};
          `}
  ${(props) =>
          props.$marginRight !== undefined &&
          css`
            margin-right: ${isNaN(props.$marginRight as number)
                    ? props.$marginRight
                    : `${props.$marginRight}px`};
          `}
  ${(props) =>
          props.$marginTop !== undefined &&
          css`
            margin-top: ${isNaN(props.$marginTop as number)
                    ? props.$marginTop
                    : `${props.$marginTop}px`};
          `}
  ${(props) =>
          props.$marginBottom !== undefined &&
          css`
            margin-bottom: ${isNaN(props.$marginBottom as number)
                    ? props.$marginBottom
                    : `${props.$marginBottom}px`};
          `}
  ${(props) =>
          props.$paddingLeft !== undefined &&
          css`
            padding-left: ${isNaN(props.$paddingLeft as number)
                    ? props.$paddingLeft
                    : `${props.$paddingLeft}px`};
          `}
  ${(props) =>
          props.$paddingRight !== undefined &&
          css`
            padding-right: ${isNaN(props.$paddingRight as number)
                    ? props.$paddingRight
                    : `${props.$paddingRight}px`};
          `}
  ${(props) =>
          props.$paddingTop !== undefined &&
          css`
            padding-top: ${isNaN(props.$paddingTop as number)
                    ? props.$paddingTop
                    : `${props.$paddingTop}px`};
          `}
  ${(props) =>
          props.$paddingBottom !== undefined &&
          css`
            padding-bottom: ${isNaN(props.$paddingBottom as number)
                    ? props.$paddingBottom
                    : `${props.$paddingBottom}px`};
          `}
  ${(props) =>
          props.$overflow &&
          css`
            overflow: ${props.$overflow};
          `}
  ${(props) =>
          props.$elevation &&
          css`
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          `}
  ${(props) =>
          props.$position &&
          css`
            position: ${props.$position};
          `}
  ${(props) =>
          props.$background &&
          css`
            background: ${props.$background};
          `}
  ${(props) =>
          props.$top &&
          css`
            top: ${isNaN(props.$top as number) ? props.$top : `${props.$top}px`};
          `}
  ${(props) =>
          props.$left &&
          css`
            left: ${isNaN(props.$left as number) ? props.$left : `${props.$left}px`};
          `}
  ${(props) =>
          props.$right &&
          css`
            right: ${isNaN(props.$right as number)
                    ? props.$right
                    : `${props.$right}px`};
          `}
  ${(props) =>
          props.$bottom &&
          css`
            bottom: ${isNaN(props.$bottom as number)
                    ? props.$bottom
                    : `${props.$bottom}px`};
          `}
  ${(props) =>
          props.$zIndex &&
          css`
            z-index: ${props.$zIndex};
          `}
  ${(props) =>
          props.$transform &&
          css`
            transform: ${props.$transform};
          `}
  ${(props) =>
          props.$transition &&
          css`
            transition: ${props.$transition};
          `}
  ${(props) =>
          props.$border &&
          css`
            border: ${props.$border};
          `}
  ${(props) =>
          props.$borderRadius &&
          css`
            border-radius: ${isNaN(props.$borderRadius as number)
                    ? props.$borderRadius
                    : `${props.$borderRadius}px`};
          `}
  ${(props) =>
          props.$minWidth &&
          css`
            min-width: ${isNaN(props.$minWidth as number)
                    ? props.$minWidth
                    : `${props.$minWidth}px`};
          `}
  ${(props) =>
          props.$maxWidth &&
          css`
            max-width: ${isNaN(props.$maxWidth as number)
                    ? props.$maxWidth
                    : `${props.$maxWidth}px`};
          `}
  ${(props) =>
          props.$minHeight &&
          css`
            min-height: ${isNaN(props.$minHeight as number)
                    ? props.$minHeight
                    : `${props.$minHeight}px`};
          `}
  ${(props) =>
          props.$maxHeight &&
          css`
            max-height: ${isNaN(props.$maxHeight as number)
                    ? props.$maxHeight
                    : `${props.$maxHeight}px`};
          `}
  ${(props) =>
          props.$textAlign &&
          css`
            text-align: ${props.$textAlign};
          `}
  ${(props) =>
          props.$fontFamily &&
          css`
            font-family: ${props.$fontFamily};
          `}
  ${(props) =>
          props.$fontSize &&
          css`
            font-size: ${isNaN(props.$fontSize as number)
                    ? props.$fontSize
                    : `${props.$fontSize}px`};
          `}
  ${(props) =>
          props.$css &&
          css`
            ${props.$css}
          `}
  ${(props) =>
          props.$outline &&
          css`
            outline: ${props.$outline};
          `}
  ${(props) =>
          props.$boxShadow &&
          css`
            box-shadow: ${props.$boxShadow};
          `}
  ${(props) =>
          props.$borderTop &&
          css`
            border-top: ${props.$borderTop};
          `}
  ${(props) =>
          props.$borderBottom &&
          css`
            border-bottom: ${props.$borderBottom};
          `}
  ${(props) =>
          props.$borderLeft &&
          css`
            border-left: ${props.$borderLeft};
          `}
  ${(props) =>
          props.$borderRight &&
          css`
            border-right: ${props.$borderRight};
          `}
  ${(props) =>
          props.$justify &&
          css`
            justify-content: ${props.$justify};
          `}
  ${(props) =>
          props.$align &&
          css`
            align-items: ${props.$align};
          `}
  ${(props) =>
          props.$alignSelf &&
          css`
            align-self: ${props.$alignSelf};
          `}
  ${(props) =>
          props.$alignContent &&
          css`
            align-content: ${props.$alignContent};
          `}
  ${(props) =>
          props.$float &&
          css`
            float: ${props.$float};
          `}
  ${(props) =>
          props.$direction &&
          css`
            flex-direction: ${props.$direction};
          `}
  ${(props) =>
          props.$basis &&
          css`
            flex-basis: ${props.$basis};
          `}
  ${(props) =>
          props.$grow &&
          css`
            flex-grow: ${props.$grow};
          `}
  ${(props) =>
          props.$shrink &&
          css`
            flex-shrink: ${props.$shrink};
          `}
  ${(props) =>
          props.$wrap &&
          css`
            flex-wrap: ${props.$wrap};
          `}
`;