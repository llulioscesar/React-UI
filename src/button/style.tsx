import {ButtonHTMLAttributes} from 'react';
import styled, {css} from "styled-components";
import {darken, lighten} from 'polished';
import {applyDefaultTheme, ITheme} from '../theme';

type PropsBaseButton = {
    $background?: string;
    $color?: string;
    theme?: ITheme;
    $outline?: boolean;
    $plain?: boolean;
}
export const BaseButton = styled.button<PropsBaseButton & ButtonHTMLAttributes<HTMLButtonElement>>`
  outline: none;
  border: ${props => props.$outline ? `1px solid ${props.$background ? lighten(0.3, props.$background) : applyDefaultTheme(props).theme.mode === 'light' ? applyDefaultTheme(props).theme.colors.light.control.color : darken(0.3, applyDefaultTheme(props).theme.colors.dark.control.color)}` : '1px solid transparent'};
  min-width: 80px;
  padding: ${props => applyDefaultTheme(props).theme.buttons.padding};
  font-size: ${props => applyDefaultTheme(props).theme.buttons.fontSize};
  transition: all 0.25s ease;
  cursor: pointer !important;
  border-radius: ${props => isNaN(applyDefaultTheme(props).theme.buttons.radius as number) ? applyDefaultTheme(props).theme.buttons.radius : `${applyDefaultTheme(props).theme.buttons.radius}px`};
  background: ${props => props.$outline ? 'transparent' : props.$plain ? 'transparent' : props.$background ? props.$background : applyDefaultTheme(props).theme.mode === 'light' ? applyDefaultTheme(props).theme.colors.light.control.color : applyDefaultTheme(props).theme.colors.dark.control.color};
  color: ${props => props.$color ? props.$outline || props.$plain ? props.$background : props.$color : applyDefaultTheme(props).theme.mode === 'light' ? applyDefaultTheme(props).theme.colors.light.control.tint : applyDefaultTheme(props).theme.colors.dark.control.tint};

  svg, & > svg {
    color: ${props => props.$color ? props.$color : applyDefaultTheme(props).theme.mode === 'light' ? applyDefaultTheme(props).theme.colors.light.control.tint : applyDefaultTheme(props).theme.colors.dark.control.tint};
  }

  :hover:not([disabled]) {
    ${props => {
      if (!props.$outline && !props.$plain) {
        return css`
          transform: translateY(-1px);
          box-shadow: 0 14px 26px -12px ${props.$background ? applyDefaultTheme(props).theme.mode === 'light' ? lighten(0.42, props.$background) : darken(0, props.$background) : applyDefaultTheme(props).theme.mode === 'light' ? lighten(0.42, applyDefaultTheme(props).theme.colors.light.pallette.gray) : darken(0.42, applyDefaultTheme(props).theme.colors.dark.pallette.gray)}, 0 4px 23px 0 rgb(0 0 0 / 12%), 0 8px 10px -5px ${props.$background ? lighten(0.2, props.$background) : applyDefaultTheme(props).theme.mode === 'light' ? lighten(0.2, applyDefaultTheme(props).theme.colors.light.pallette.gray) : darken(0.2, applyDefaultTheme(props).theme.colors.dark.pallette.gray)};
        `;
      } else if (props.$outline) {
        return css`
          background: ${props.$background ? lighten(0.45, props.$background) : applyDefaultTheme(props).theme.mode === 'light' ? lighten(0.45, applyDefaultTheme(props).theme.colors.light.control.color) : lighten(0.45, applyDefaultTheme(props).theme.colors.dark.control.color)};
          border: 1px solid ${props.$background ? props.$background : applyDefaultTheme(props).theme.mode === 'light' ? applyDefaultTheme(props).theme.colors.light.control.color : applyDefaultTheme(props).theme.colors.dark.control.color};
        `;
      } else {
        return css`
          background: ${props.$background ? lighten(0.45, props.$background) : applyDefaultTheme(props).theme.mode === 'light' ? lighten(0.45, applyDefaultTheme(props).theme.colors.light.control.color) : lighten(0.45, applyDefaultTheme(props).theme.colors.dark.control.color)};
        `;
      }
    }}

  }

  :active:not([disabled]) {
    ${props => {
      if (!props.$outline && !props.$plain) {
        return css`
          background: ${darken(0.05, props.$background ? props.$background : applyDefaultTheme(props).theme.mode === 'light' ? applyDefaultTheme(props).theme.colors.light.control.color : applyDefaultTheme(props).theme.colors.dark.control.color)};
        `;
      } else {
        return css`
          background: ${props.$background ? props.$background : applyDefaultTheme(props).theme.mode === 'light' ? applyDefaultTheme(props).theme.colors.light.control.color : applyDefaultTheme(props).theme.colors.dark.control.color};
        `;
      }
    }}
    color: ${props => props.$color ? props.$outline || props.$plain ? props.$color : props.$color : applyDefaultTheme(props).theme.mode === 'light' ? applyDefaultTheme(props).theme.colors.light.control.tint : applyDefaultTheme(props).theme.colors.dark.control.tint};
  }

  :disabled {
    opacity: 75%;
  }
`;