export type IPropsThemeProvider = {
    theme: ITheme;
}

export type ITheme = {
    mode: 'light' | 'dark';
    colors: {
        light: IColors;
        dark: IColors;
    }
    buttons: {
        padding: string;
        radius: string | number;
        fontSize: string | number;
    }
}

export type IColors = {
    body?: string;
    tint?: string;
    primary?: IColorsText;
    secondary?: IColorsText;
    error?: IColorsText;
    success?: IColorsText;
    alert?: IColorsText;
    control?: IColorsText;
    pallette?: IPallette;
}

export type IColorsText = {
    color?: string;
    tint?: string;
}

export type IPallette = {
    blue?: string;
    brown?: string;
    cyan?: string;
    green?: string;
    indigo?: string;
    mint?: string;
    orange?: string;
    pink?: string;
    purple?: string;
    red?: string;
    teal?: string;
    yellow?: string;
    gray?: string;
    gray2?: string;
    gray3?: string;
    gray4?: string;
    gray5?: string;
    gray6?: string;
}

declare module 'styled-components' {
    export interface DefaultTheme extends ITheme {

    }
}