import React from 'react';
import styles from './header.css';
import { SearchBlock } from './SearchBlock';
import { LogoLink } from './LogoLink/LogoLink';
import { HeaderNavigation } from './HeaderNavigation';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <LogoLink />
                <HeaderNavigation />
                <SearchBlock />
            </div>
        </header>
    );
}
