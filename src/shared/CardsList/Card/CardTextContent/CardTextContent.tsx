import { UserLink } from './UserLink';
import { CreatedAd } from './CreatedAd';
import React, { useContext } from 'react';
import styles from './cardtextcontent.css';
import { CardTitlePostLink } from './CardTitlePostLink';
import { cardContext } from '../../../../context/CardContext';
import { CommentsButton } from '../CardControls/CommentsButton';
import { useCustomMatchMedia } from '../../../../hooks/useCustomMatchMedia';

export function CardTextContent() {
    const { postTitle,
        postUrl,
        createdTime,
        anchorName,
    } = useContext(cardContext);
    const { desktop } = useCustomMatchMedia();

    return (
        <div className={styles.textContent}>
            <div className={styles.metaData}>
                <UserLink
                    anchorName={anchorName}
                />

                <CreatedAd createdTime={createdTime} />
            </div>
            <CardTitlePostLink
                postTitle={postTitle}
                postUrl={postUrl}
            />

            {desktop && <CommentsButton className={styles.commentsButton} />}
        </div>
    );
}
