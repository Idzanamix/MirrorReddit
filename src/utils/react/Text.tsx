import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from '../css/text.css';

export enum EColor {
    black = 'black',
    orangeFF = 'orangeFF',
    green = 'green',
    white = 'white',
    whiteGray = 'whiteGray',
    grayF4 = 'grayF4',
    grayF3 = 'grayF3',
    grayD9 = 'grayD9',
    grayC4 = 'grayC4',
    gray66 = 'gray66',
    gray99 = 'gray99',
    blew = 'blew'
}

export type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

interface ITextProps extends HTMLAttributes<HTMLElement> {
    As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
    children?: React.ReactNode;
    size?: TSizes;
    mobileSize?: TSizes;
    tabletSize?: TSizes;
    desktopSize?: TSizes;
    color?: EColor;
}

export function Text(props: ITextProps) {
    const {
        As = 'span',
        color = EColor.black,
        children,
        size,
        mobileSize,
        tabletSize,
        desktopSize
    } = props;

    const classes = classNames(
        styles[`s${size}`],
        styles[color],
        { [styles[`m${mobileSize}`]]: mobileSize },
        { [styles[`t${tabletSize}`]]: tabletSize },
        { [styles[`d${desktopSize}`]]: desktopSize },
    );

    return (
        <As
            className={`${classes}${props.className ? ' ' + props.className : ''}`}
            dangerouslySetInnerHTML={props.dangerouslySetInnerHTML}
        >
            {children}
        </As>
    );
}