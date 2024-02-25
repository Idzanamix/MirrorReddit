import styles from './menuButton.css';
import React, { useState } from 'react';
import { IconMenu } from '../../../Icons';
import { MenuDropdown } from '../MenuDropdown';

export function MenuButton() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <>
            <button
                className={styles.button}
                onClick={() => setIsDropdownOpen(true)}
            >
                <IconMenu />
            </button>
            {isDropdownOpen &&
                <MenuDropdown onClose={() => setIsDropdownOpen(false)} />}
        </>
    )
}
