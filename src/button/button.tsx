import React, {FC, useEffect, useState} from 'react';
import {BaseButton} from './style';
import {IPropsButton} from './types';
import {IColorsText, useTheme} from '../theme'

export const Button: FC<IPropsButton> = (props) => {
    const {variant, color, tint, outline, plain, ...rest} = props;

    const theme = useTheme();

    const initialColors: IColorsText = {color: undefined, tint: undefined}
    const [colors, setColors] = useState<IColorsText>(initialColors);

    useEffect(() => {
        if (variant) {
            const {mode, colors} = theme;
            switch (variant) {
                case "primary":
                    setColors((mode === 'light' ? colors.light.primary : colors.dark.primary) || initialColors);
                    break;
                case "secondary":
                    setColors((mode === 'light' ? colors.light.secondary : colors.dark.secondary) || initialColors);
                    break;
                case "alert":
                    setColors((mode === 'light' ? colors.light.alert : colors.dark.alert) || initialColors);
                    break;
                case "success":
                    setColors((mode === 'light' ? colors.light.success : colors.dark.success) || initialColors);
                    break;
                case "error":
                    setColors((mode === 'light' ? colors.light.error : colors.dark.error) || initialColors);
                    break;
                default:
                    setColors(initialColors);
                    break;
            }
        } else {
            setColors(initialColors);
        }
    }, [variant, theme]);

    return (
        <BaseButton {...rest}
                    $background={color || colors.color}
                    $color={tint || colors.tint}
                    $outline={outline}
                    $plain={plain}/>
    )
}