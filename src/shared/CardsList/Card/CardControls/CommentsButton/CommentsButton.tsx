import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import styles from './commentsbutton.css';
import { IconComments } from '../../../../Icons';
import { cardContext } from '../../../../../context/CardContext';
import { shortFormatNumber } from '../../../../../utils/ts/shortFormatNumber';
import { useCustomMatchMedia } from '../../../../../hooks/useCustomMatchMedia';

interface ICommentsButtonProps {
    className?: string;
}

export function CommentsButton({ className }: ICommentsButtonProps) {
    const { desktop } = useCustomMatchMedia();
    const { postId, postSubreddit } = useContext(cardContext);

    function numberComments() {
        const { numberComments } = useContext(cardContext);
        return shortFormatNumber(numberComments)
    }

    return (
        <Link
            to={`${postSubreddit}/comments/${postId}`}
            className={`${className ? className + ' ' : ''}${styles.commentsButton}`}
        >
            <IconComments />
            
            <span className={styles.commentsNumber}>
                {numberComments()}
            </span>

            {desktop &&
                <span className={styles.commentsDescr}>
                    Comments
                </span>}
        </Link>
    );
}
