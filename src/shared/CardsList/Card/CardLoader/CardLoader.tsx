import { RedditLoader } from '../../../../Loader/RedditLoader';
import React, { LegacyRef, forwardRef } from 'react';
import { LoadMoreButton } from '../LoadMoreButton';
import styles from './cardLoader.css';

interface ICardLoader {
    loading: boolean;
    count: number;
}

export const CardLoader = forwardRef(
    ({ loading, count }: ICardLoader, ref: LegacyRef<HTMLDivElement>) => {
        return (
            loading
                ? <RedditLoader className={styles.loader} />
                : count === 2
                    ? <LoadMoreButton />
                    : <div
                        className={styles.observer}
                        ref={ref}
                        datatype='observer'
                    />
        )
    })
