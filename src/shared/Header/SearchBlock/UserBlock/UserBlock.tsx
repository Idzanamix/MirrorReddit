import styles from './userblock.css';
import { createPortal } from 'react-dom';
import { UserAvatar } from './UserAvatar';
import { useDispatch } from 'react-redux';
import { useCoords } from '../../../../hooks/useCoords';
import { UserBlockDropdown } from './UserBlockDropdown';
import React, { useEffect, useRef, useState } from 'react';
import { useDarkMode } from '../../../../hooks/useDarkMode';
import { setStopScroll } from '../../../../hooks/useStopScroll';
import { useModalCloser } from '../../../../hooks/useModalCloser';
import { useResizeCloser } from '../../../../hooks/useResizeCloser';
import { useCustomMatchMedia } from '../../../../hooks/useCustomMatchMedia';
import { saveTokenAsyncThunk } from '../../../../storeRedux/token/saveTokenAsyncThunk';
import { userReguestAsyncThunk } from '../../../../storeRedux/user/userReguestAsyncThunk';
import { useAppSelector, selectIsDarkMode, selectToken, selectUserBlock } from '../../../../storeRedux/storeSelectors';

export function UserBlock() {
    const modalRoot = document.getElementById('modal_root');

    if (!modalRoot) return null;

    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const refButton = useRef<HTMLButtonElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const [coords] = useCoords(refButton, true);
    const { mobile411 } = useCustomMatchMedia();
    const redditToken = useAppSelector(selectToken);
    const darkMode = useAppSelector(selectIsDarkMode);
    const { iconImg, name, loading } = useAppSelector(selectUserBlock);

    mobile411 && setStopScroll(isOpen);

    function handleClose() {
        if (mobile411 && listRef.current) {
            listRef.current.style.top = '110%';
            listRef.current.style.visibility = 'hidden';
            setIsOpen(false);
            return;
        }

        setIsOpen(false);

        if (listRef.current) {
            listRef.current.style.visibility = 'hidden'
        }
    }

    function handleOpen() {
        const listHeigth = listRef.current?.offsetHeight;

        if (mobile411 && listRef.current) {
            listRef.current.style.top = `calc(100% - ${listHeigth + 'px'})`;
            listRef.current.style.visibility = 'visible';
            setIsOpen(true);
            return;
        }

        setIsOpen(!isOpen);

        if (listRef.current) {
            listRef.current.style.visibility = 'visible';
        }
    }

    useModalCloser({ onClose: handleClose, ref: listRef, ref2: refButton, noTouch: true });
    useResizeCloser(handleClose);

    useEffect(() => {
        dispatch(saveTokenAsyncThunk());
        dispatch(userReguestAsyncThunk());
    }, [redditToken]);

    useEffect(() => {
        useDarkMode(darkMode);
    }, [darkMode]);

    return (
        <>
            <button
                type='button'
                ref={refButton}
                className={styles.userBox}
                onClick={handleOpen}
            >
                <UserAvatar
                    loading={loading}
                    iconImg={iconImg}
                    userName={name}
                />
            </button>

            {mobile411 && coords &&
                createPortal(
                    <UserBlockDropdown
                        isMobileOpen={isOpen}
                        loading={loading}
                        iconImg={iconImg}
                        userName={name}
                        coords={coords}
                        ref={listRef}
                    />, modalRoot)}

            {!mobile411 && isOpen && coords &&
                createPortal(
                    <UserBlockDropdown
                        loading={loading}
                        iconImg={iconImg}
                        userName={name}
                        coords={coords}
                        ref={listRef}
                    />, modalRoot)}
        </>
    );
}
