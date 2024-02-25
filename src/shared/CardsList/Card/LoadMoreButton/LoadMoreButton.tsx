import React from 'react';
import styles from './loadMoreButton.css'
import { useDispatch } from 'react-redux';
import { getPostsAsyncThunk } from '../../../../storeRedux/posts/getPostsAsyncThunk';

export function LoadMoreButton() {
    const dispatch = useDispatch();

    return (
        <button
            className={styles.button}
            onClick={() => dispatch(getPostsAsyncThunk())}
        >
            Load more
        </button>
    )
}
