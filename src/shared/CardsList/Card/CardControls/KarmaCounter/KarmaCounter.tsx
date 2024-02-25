import React from 'react';
import styles from './karmacounter.css';
import { IconTriangle } from '../../../../Icons';
import { shortFormatNumber } from '../../../../../utils/ts/shortFormatNumber';

interface IKarmaCounter {
    carmaNumber: string | number;
    authorName?: string;
    className?: string;
}

export function KarmaCounter({ className, carmaNumber, authorName }: IKarmaCounter) {
    return (
        <div className={`${className ? className + ' ' : ''}${styles.karmaCounter}`}>
            <button className={styles.up}>
                <IconTriangle />
            </button>

            <span className={styles.karmaValue}>
                {typeof carmaNumber === 'number'
                    ? authorName === 'AutoModerator'
                        ? 'Vote'
                        : shortFormatNumber(carmaNumber)
                    : carmaNumber.includes('=')
                        ? 0
                        : carmaNumber
                }
            </span>

            <button className={styles.down}>
                <IconTriangle />
            </button>
        </div>
    );
}
