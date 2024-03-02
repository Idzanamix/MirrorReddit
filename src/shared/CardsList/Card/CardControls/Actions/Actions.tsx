import React from 'react';
import styles from './actions.css';
import { IconShareMobile } from '../../../../Icons';

export function Actions() {
    return (
        <div className={styles.actions}>
            <button className={styles.sharebutton}>
                <IconShareMobile />
            </button>
        </div>
    );
}
