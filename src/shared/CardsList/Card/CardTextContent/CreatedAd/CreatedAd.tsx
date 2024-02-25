import React from "react";
import styles from './createdad.css'
import { useCustomMatchMedia } from "../../../../../hooks/useCustomMatchMedia";
import { getRelativeTimeString } from "../../../../../utils/ts/getRelativeTimeString";

interface ICreatedAd {
    createdTime: number | string;
    className?: string;
    noLabel?: boolean;
}

export function CreatedAd({ createdTime, className, noLabel }: ICreatedAd) {
    const { desktop } = useCustomMatchMedia();

    return (
        <span className={`${styles.createdAd}${className ? ' ' + className : ''}`}>
            {desktop &&
                <span
                    className={styles.publishedLabel}>
                    {noLabel ? '· ' : 'Posted · '}
                </span>
            }

            {typeof createdTime === 'number'
                ? getRelativeTimeString(createdTime)
                : createdTime}
        </span>
    )
}