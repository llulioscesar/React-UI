import {ITheme} from './types';

export const theme: ITheme = {
    mode: 'light',
    colors: {
        light: {
            body: "#fff",
            tint: "rgb(50, 49, 48)",
            primary: {
                color: 'rgb(0,122,255)',
                tint: 'rgb(255,255,255)',
            },
            secondary: {
                color: 'rgb(108, 117, 125)',
                tint: 'rgb(255,255,255)',
            },
            error: {
                color: 'rgb(255,59,48)',
                tint: 'rgb(255,255,255)',
            },
            success: {
                color: 'rgb(52,199,89)',
                tint: 'rgb(255,255,255)',
            },
            alert: {
                color: 'rgb(255,149,0)',
                tint: 'rgb(255,255,255)',
            },
            control: {
                color: 'rgb(248,249,250)',
                tint: 'rgb(50,49,48)',
            },
            pallette: {
                blue: 'rgb(0,122,255)',
                brown: 'rgb(162,132,94)',
                cyan: 'rgb(50,173,230)',
                green: 'rgb(52,199,89)',
                indigo: 'rgb(88,86,214)',
                mint: 'rgb(0,199,190)',
                orange: 'rgb(255,149,0)',
                pink: 'rgb(255,45,85)',
                purple: 'rgb(175,82,222)',
                red: 'rgb(255,59,48)',
                teal: 'rgb(48,176,199)',
                yellow: 'rgb(255,204,0)',
                gray: 'rgb(108,108,112)',
                gray2: 'rgb(142,142,147)',
                gray3: 'rgb(174,174,178)',
                gray4: 'rgb(188,188,192)',
                gray5: 'rgb(216,216,220)',
                gray6: 'rgb(235,235,240)',
            }
        },
        dark: {
            body: "#262d31",
            tint: "rgb(241, 241, 242)",
            primary: {
                color: 'rgb(10,132,255)',
                tint: 'rgb(255,255,255)',
            },
            secondary: {
                color: 'rgb(108, 117, 125)',
                tint: 'rgb(255,255,255)',
            },
            error: {
                color: 'rgb(255,5595)',
                tint: 'rgb(255,255,255)',
            },
            success: {
                color: 'rgb(48,209,88)',
                tint: 'rgb(255,255,255)',
            },
            alert: {
                color: 'rgb(255,159,0)',
                tint: 'rgb(255,255,255)',
            },
            control: {
                color: 'rgb(239, 239, 239)',
                tint: 'rgb(50,49,48)',
            },
            pallette: {
                blue: 'rgb(10,132,255)',
                brown: 'rgb(172,142,104)',
                cyan: 'rgb(100,210,255)',
                green: 'rgb(48,209,88)',
                indigo: 'rgb(94,92,230)',
                mint: 'rgb(102,212,207)',
                orange: 'rgb(255,159,10)',
                pink: 'rgb(255,55,95)',
                purple: 'rgb(191,90,242)',
                red: 'rgb(255,69,58)',
                teal: 'rgb(64,200,224)',
                yellow: 'rgb(255,214,10)',
                gray: 'rgb(142,142,147)',
                gray2: 'rgb(99,99,102)',
                gray3: 'rgb(72,72,74)',
                gray4: 'rgb(58,58,60)',
                gray5: 'rgb(44,44,46)',
                gray6: 'rgb(28,28,30)',
            }
        }
    },
    buttons: {
        padding: "6px 12px",
        radius: "5px",
        fontSize: "0.875rem",
    }
};

export const applyDefaultTheme = (props: any): any => {
    const {theme: tema = {}} = props;
    return {
        ...props,
        theme: Object.keys(tema).length === 0 ? theme : tema,
    }
}