import styles from './toggleSwitch.css';
import { useDispatch } from 'react-redux';
import React, { useEffect, useRef } from 'react';
import { setDarkMode } from '../../../../../../storeRedux/user/userSlise';
import { selectIsDarkMode, useAppSelector } from '../../../../../../storeRedux/storeSelectors';
import { useDarkMode } from '../../../../../../hooks/useDarkMode';

export function ToggleSwitch() {
    const dispatch = useDispatch();
    const refInput = useRef<HTMLInputElement>(null);
    const darkMode = useAppSelector(selectIsDarkMode);

    const handleClick = () =>
        refInput.current && dispatch(setDarkMode(refInput.current?.checked));

    useEffect(() => {
        if (refInput.current) {
            refInput.current.checked = darkMode;
        }
    }, [darkMode]);

    return (
        <>
            <input
                onClick={handleClick}
                className={styles.input}
                ref={refInput}
                type="checkbox"
                id="switch"
            />
            <label
                className={styles.label}
                htmlFor="switch"
            >
                Toggle
            </label>
        </>
    )
}
