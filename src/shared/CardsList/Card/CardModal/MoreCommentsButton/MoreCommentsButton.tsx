import React, { useState } from 'react';
import styles from './moreCommentsButton.css'
import { ModalCommentsList } from '../ModalCommentsList';
import { useMoreComments } from '../../../../../hooks/useMoreComments';

interface IMoreCommentsButtonProps {
    postId: string;
    moreCommentsData: any;
}

export function MoreCommentsButton({ postId, moreCommentsData }: IMoreCommentsButtonProps) {
    const [isRepliesOpen, setIsRepliesOpen] = useState(false);
    const [moreComments] = useMoreComments({
        commentsData: moreCommentsData,
        postId: postId,
    });

    return (
        <>
            {!isRepliesOpen &&
                moreComments &&
                moreComments.length > 0 &&
                <button
                    className={styles.button}
                    onClick={() => setTimeout(() => {
                        setIsRepliesOpen(true);
                    }, 20)}
                >
                    {moreComments?.length}
                    {moreComments?.length !== 1
                        ? ' more replies'
                        : ' more reply'}
                </button>}

            {isRepliesOpen &&
                <ModalCommentsList commentsData={moreComments} />}
        </>
    )
}
