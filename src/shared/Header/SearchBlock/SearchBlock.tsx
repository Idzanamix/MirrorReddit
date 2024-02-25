import React from 'react';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';
import { useUserData } from '../../../hooks/useUserData';

export function SearchBlock() {
    const { iconImg, name, loading } = useUserData();

    return (
        <div className={styles.searchBlock}>
            <UserBlock avatarSrc={iconImg} username={name} loading={loading} />
        </div>
    );
}
