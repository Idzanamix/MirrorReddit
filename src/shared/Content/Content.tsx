import React, { ReactNode } from 'react';
import styles from './content.css';

interface IContent {
    children?: ReactNode;
}

export function Content({ children }: IContent) {
    return (
        <main className={styles.content}>
            {children}
        </main>
    );
}
