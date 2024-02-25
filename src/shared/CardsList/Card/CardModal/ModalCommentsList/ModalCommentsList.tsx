import { ICommentsData } from '../../../../../storeRedux/comments/commentsSlice';
import { RedditLoader } from '../../../../../Loader/RedditLoader';
import styles from './modalcommentsList.css';
import React, { forwardRef } from 'react';
import { Comment } from './Comment';

interface IModalCommentsListProps {
    loading?: boolean;
    commentsData?: ICommentsData[];
}

export const ModalCommentsList = forwardRef(
    ({ loading, commentsData }: IModalCommentsListProps, ref: any) => {
        if (!commentsData) return null;

        return (
            <ul className={styles.list} ref={ref}>
                {loading
                    ? <RedditLoader className={styles.loader} />

                    : commentsData
                        .filter((cardItemData: ICommentsData) => cardItemData.authorName)
                        .map((cardItemData: ICommentsData) => (
                            <Comment
                                commentItemData={cardItemData}
                                key={cardItemData.commentId}
                            />
                        ))}
            </ul>
        )
    })
