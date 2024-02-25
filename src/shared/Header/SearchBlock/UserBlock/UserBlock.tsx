import React from 'react';
import styles from './userblock.css';
import { IconRedditDefault } from '../../../Icons';
import { EColor, Text } from '../../../../utils/react/Text'

interface IUserBlockProps {
    loading: boolean;
    avatarSrc?: string;
    username?: string;
}

export function UserBlock({ loading, avatarSrc, username }: IUserBlockProps) {
    return (
        <a
            href="https://www.reddit.com/api/v1/authorize?client_id=_27swn7Uy4Ctovp3-0sQUw&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
            className={styles.userBox}>
            <div className={styles.avatarBox}>
                {avatarSrc
                    ? <img src={avatarSrc} alt="User avatar" className={styles.avatarImage} />
                    : <IconRedditDefault className={styles.avatar} />
                }
            </div>

            <div className={styles.username}>
                <Text size={16} color={username ? EColor.white : EColor.gray99}>
                    {loading
                        ? 'loading...'
                        : username || 'Log in'}
                </Text>
            </div>
        </a>
    );
}
