import React from 'react';
import classNames from 'classnames';
import styles from '../css/text.css';
import { EColor, TSizes } from './Text';

interface IItem {
    id: string;
    item?: React.ReactNode;
    href?: string;
    text?: string;
    disabled?: boolean;
    onClose?: (id: string) => void;
}

interface IGenericListProps {
    As?: 'a' | 'li' | 'button' | 'div';
    className?: string;
    list: IItem[];
    size?: TSizes;
    mobileSize?: TSizes;
    tabletSize?: TSizes;
    desktopSize?: TSizes;
    color?: EColor;
}

const noop = () => { }

export function GenericList(
    { list,
        As = 'li',
        className,
        size,
        mobileSize,
        tabletSize,
        desktopSize,
        color = EColor.black }: IGenericListProps
) {
    const classes = classNames(
        styles[`s${size}`],
        styles[color],
        { [styles[`m${mobileSize}`]]: mobileSize },
        { [styles[`t${tabletSize}`]]: tabletSize },
        { [styles[`d${desktopSize}`]]: desktopSize },
    );

    return (
        <>
            {list.map(({
                id,
                item,
                href,
                text,
                disabled,
                onClose = noop
            }) => (
                <As
                    disabled={disabled}
                    type={As === 'button' ? 'button' : undefined}
                    className={`${classes}${className ? ' ' + className : ''}`}
                    onClick={() => onClose(id)}
                    key={id}
                    href={href}
                >
                    {item}
                    {text}
                </As>
            ))}
        </>
    );
}
