import React, {FC} from "react";
import {ThemeProvider} from 'styled-components';
import {ThemeGlobal} from './themeGlobal';
import {IPropsThemeProvider} from './types';

export const Theme: FC<IPropsThemeProvider> = (props) => {
    const {children, theme} = props;
    return (
        <ThemeProvider theme={theme}>
            <ThemeGlobal/>
            {children}
        </ThemeProvider>
    )
}