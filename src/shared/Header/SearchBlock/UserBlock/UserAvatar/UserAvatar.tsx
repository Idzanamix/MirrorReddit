import React from 'react';
import styles from './userAvatar.css'
import { IconRedditDefault } from '../../../../Icons';
import { EColor, Text } from '../../../../../utils/react/Text'
import { useCustomMatchMedia } from '../../../../../hooks/useCustomMatchMedia';

interface IUserAvatar {
    loading: boolean
    iconImg?: string;
    userName?: string;
    noText?: boolean;
}

export function UserAvatar({ iconImg, loading, userName, noText }: IUserAvatar) {
    const { desktop } = useCustomMatchMedia();

    return (
        <>
            <div className={styles.avatarBox}>
                {iconImg
                    ? <img src={iconImg} alt="User avatar" className={styles.avatarImage} />
                    : <IconRedditDefault className={styles.avatar} />
                }
            </div>

            {desktop && !noText &&
                <div className={styles.username}>
                    <Text size={16} color={userName ? EColor.white : EColor.gray99}>
                        {loading
                            ? 'loading...'
                            : userName || 'Log in'}
                    </Text>
                </div>}
        </>
    )
}
