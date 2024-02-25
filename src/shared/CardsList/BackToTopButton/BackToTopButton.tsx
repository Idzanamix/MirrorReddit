import React, { LegacyRef, forwardRef } from 'react';
import styles from './backToTopButton.css'

interface IBackToTopButton {
    onClick: () => void;
    className?: string;
}

export const BackToTopButton = forwardRef(
    ({ onClick, className }: IBackToTopButton, ref: LegacyRef<HTMLButtonElement>) => {
        return (
            <button
                onClick={onClick}
                className={`${styles.button}${className ? ' ' + className : ''}`}
                ref={ref}
            >
                Back to Top
            </button>
        )
    })
