import React from 'react';
import styles from './actions.css';
import { IconSaveMobile, IconShareMobile } from '../../../../Icons';

export function Actions() {
    return (
        <div className={styles.actions}>
            <button className={styles.sharebutton}>
                <IconShareMobile />
            </button>
            
            <button className={styles.saveButton}>
                <IconSaveMobile />
            </button>
        </div>
    );
}
