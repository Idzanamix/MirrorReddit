import React from "react";
import logoGmail from '../../img/logo-gmail.png'

interface IIconEmail {
    className?: string;
}

export function IconEmail({ className }: IIconEmail) {
    return (
        <img className={className} src={logoGmail} alt="logoGmail" />
    )
}