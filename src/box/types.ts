import {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    HTMLAttributes,
    ImgHTMLAttributes,
    InputHTMLAttributes,
    LegacyRef
} from 'react';

type Props = {
    textDecoration?: "underline" | "overline" | "none" | "inherit" | "initial" | "revert" | "unset" | string;
    ref?: LegacyRef<null | HTMLInputElement | HTMLAnchorElement | HTMLDivElement | HTMLImageElement | HTMLButtonElement | HTMLSpanElement | HTMLParagraphElement | HTMLHeadingElement | HTMLElement | IPropsBoxAsAnchor | IPropsBoxAsButton | IPropsBoxAsElement | IPropsBoxAsHeading | IPropsBoxAsHeading | IPropsBoxAsImage | IPropsBoxAsInput | IPropsBoxAsParagraph | IPropsBoxAsSpan>;
    visibility?: "visible" | "hidden" | "collapse" | "inherit" | "initial" | "revert" | "unset";
    animation?: string;
    color?: string;
    cursor?: "alias" | "all-scroll" | "auto" | "cell" | "context-menu" | "col-resize" | "copy" | "crosshair" | "default" | "e-resize" | "ew-resize" | "grab" | "grabbing" | "help" | "move" | "n-resize" | "ne-resize" | "nesw-resize" | "ns-resize" | "nw-resize" | "nwse-resize" | "no-drop" | "none" | "not-allowed" | "pointer" | "progress" | "row-resize" | "s-resize" | "se-resize" | "sw-resize" | "text" | "w-resize" | "wait" | "zoom-in" | "zoom-out";
    display?: "inline" | "block" | "contents" | "flex" | "grid" | "inline-block" | "inline-flex" | "inline-grid" | "inline-table" | "list-item" | "run-in" | "table" | "table-caption" | "table-column-group" | "table-header-group" | "table-footer-group" | "table-row-group" | "table-cell" | "table-column" | "table-row" | "none" | "initial" | "inherit";
    marginLeft?: number | string;
    marginRight?: number | string;
    fontWeight?: "normal" | "bold" | "ligthter" | "bolder" | "initial" | "inherit" | "revert" | "unset" | string;
    marginTop?: number | string;
    marginBottom?: number | string;
    margin?: number | string;
    padding?: number | string;
    paddingTop?: number | string;
    paddingBottom?: number | string;
    paddingLeft?: number | string;
    paddingRight?: number | string;
    elevation?: boolean;
    width?: number | string;
    height?: number | string;
    overflow?: string;
    position?: "fixed" | "relative" | "static" | "absolute" | "sticky";
    background?: string;
    top?: number | string;
    left?: number | string;
    right?: number | string;
    bottom?: number | string;
    zIndex?: number;
    transform?: string;
    transition?: string;
    border?: string;
    borderTop?: string;
    borderLeft?: string;
    borderRight?: string;
    borderBottom?: string;
    borderRadius?: number | string;
    minWidth?: number | string;
    minHeight?: number | string;
    maxWidth?: number | string;
    maxHeight?: number | string;
    textAlign?: "left" | "right" | "center" | "justify" | "initial" | "inherit";
    fontSize?: string | number;
    fontFamily?: string;
    css?: string;
    as?: React.ElementType | keyof JSX.IntrinsicElements;
    outline?: string;
    boxShadow?: string;
    whiteSpace?: "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap" | "initial" | "inherit";
    textOverFlow?: "clip" | "ellipsis" | "inherit" | "initial" | "revert" | "unset" | string;
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'initial' | 'inherit';
    align?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit';
    alignContent?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'initial' | 'inherit';
    alignSelf?: 'auto' | 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit';
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'initial' | 'inherit';
    basis?: number | 'string' | 'auto' | 'initial' | 'inherit';
    grow?: number | 'initial' | 'inherit';
    shrink?: number | 'initial' | 'inherit';
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial' | 'inherit';
    float?: 'none' | 'left' | 'right' | 'initial' | 'inherit';
}

export interface IPropsBox extends Props, HTMLAttributes<HTMLDivElement> {
}

export interface IPropsBoxAsImage extends Props, ImgHTMLAttributes<HTMLImageElement> {
}

export interface IPropsBoxAsAnchor extends Props, AnchorHTMLAttributes<HTMLAnchorElement> {
}

export interface IPropsBoxAsButton extends Props, ButtonHTMLAttributes<HTMLButtonElement> {
}

export interface IPropsBoxAsInput extends Props, InputHTMLAttributes<HTMLInputElement> {
}

export interface IPropsBoxAsSpan extends Props, HTMLAttributes<HTMLSpanElement> {
}

export interface IPropsBoxAsParagraph extends Props, HTMLAttributes<HTMLParagraphElement> {
}

export interface IPropsBoxAsHeading extends Props, HTMLAttributes<HTMLHeadingElement> {
}

export interface IPropsBoxAsElement extends Props, HTMLAttributes<HTMLElement> {
}