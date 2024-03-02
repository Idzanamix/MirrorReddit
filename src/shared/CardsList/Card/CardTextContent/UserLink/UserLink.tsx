import styles from './userlink.css';
import React, { useState } from 'react';
import { IconRedditDefault } from '../../../../Icons';
import { useUserAvatar } from '../../../../../hooks/useUserAvatar';

interface IUserLinkProps {
    anchorName: string;
    className?: string;
    styleAvatar?: string;
}

export function UserLink({ anchorName, className, styleAvatar }: IUserLinkProps) {
    const [snoovatar] = useUserAvatar(anchorName);
    const [error, setError] = useState(false);
    const onError = () => setError(true);

    return (
        <div className={`${styles.userLink}${className ? ' ' + className : ''}`}>
            {snoovatar && !error
                ? <img
                    className={styles.snoovatar}
                    src={snoovatar}
                    onError={onError}
                    alt="avatar"
                />
                : <IconRedditDefault
                    className={`${styles.avatar}${styleAvatar ? ' ' + styleAvatar : ''}`}
                />}

            <a
                target='_blank'
                href={`https://www.reddit.com/user/${anchorName}/`}
                className={styles.username}>
                {anchorName !== '[deleted]' &&
                    anchorName !== ';div class=' &&
                    anchorName}
            </a>

            {(anchorName === '[deleted]' || anchorName === ';div class=') &&
                <span className={styles.removed}>
                    Comment removed by moderator
                </span>}
        </div >
    );
}
