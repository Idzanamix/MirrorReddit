import { selectPostsBlock, useAppSelector } from '../../storeRedux/storeSelectors';
import { setStopScroll } from '../../hooks/useStopScroll';
import { RedditLoader } from '../../Loader/RedditLoader';
import React, { ReactNode, useEffect } from 'react';
import { Error } from '../../errorBanners/Error';
import { useLocation } from 'react-router-dom';
import styles from './postsSection.css';

interface IPostsSection {
    children?: ReactNode;
}

export function PostsSection({ children }: IPostsSection) {
    const { loading, afterList, error } = useAppSelector(selectPostsBlock);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('comments')) {
            setStopScroll(true)
        } else {
            setStopScroll(false)
        }
    }, [location]);

    return (
        <section className={styles.posts}>
            {loading && !afterList
                ? <RedditLoader className={styles.loader} />
                : error && <Error massage={error.message} />}

            {children}
        </section>
    )
}