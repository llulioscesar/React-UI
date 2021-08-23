import {ButtonHTMLAttributes} from 'react';

export type IPropsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "error" | "alert" | "success" | "standar";
    color?: string;
    tint?: string;
    outline?: boolean;
    plain?: boolean;
}