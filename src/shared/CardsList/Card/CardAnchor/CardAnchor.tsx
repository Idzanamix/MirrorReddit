import React from 'react';
import styles from './сardAnchor.css'
import { CreatedAd } from '../CardTextContent/CreatedAd';
import { UserLink } from '../CardTextContent/UserLink';

interface ICardAnchor {
    anchorName: string;
    createdTime: number | string;
}

export function CardAnchor({ anchorName, createdTime }: ICardAnchor) {
    return (
        <div className={styles.metaData}>
            <UserLink anchorName={anchorName} />

            <CreatedAd createdTime={createdTime} />
        </div>
    )
}
