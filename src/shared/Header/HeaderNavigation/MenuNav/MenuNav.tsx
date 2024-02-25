import { IconFire, IconGrowth, IconMenu, IconNew, IconRocket, IconTop } from '../../../Icons';
import { resetPostsData } from '../../../../storeRedux/posts/postsSlice';
import { useResizeCloser } from '../../../../hooks/useResizeCloser';
import { useModalCloser } from '../../../../hooks/useModalCloser';
import { useCoords } from '../../../../hooks/useCoords';
import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import styles from './menuNav.css';

interface IMenuNav {
    className: string;
    isWidth: any;
}

export function MenuNav({ className, isWidth }: IMenuNav) {
    const modalRoot = document.getElementById('modal_root');

    if (!modalRoot) return null;

    const dispatch = useDispatch();
    const reset = () => dispatch(resetPostsData());
    const refMenu = useRef<HTMLButtonElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [coords] = useCoords(refMenu, isMenuOpen);

    useModalCloser({ ref: refMenu, onClose: () => setIsMenuOpen(false) });
    useResizeCloser(() => setIsMenuOpen(false));

    return (<>
        <button
            className={styles.menu}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            ref={refMenu}
        >
            <IconMenu />
        </button>

        {isMenuOpen && coords && createPortal(
            <nav
                className={styles.nav}
                style={{
                    left: coords?.left + 'px',
                    top: `calc(${coords?.top + 'px'} + 2px)`,
                }}
            >
                {!isWidth.maxWidth200 && <NavLink className={className} to='best' onClick={reset}>
                    <IconRocket />
                    Best
                </NavLink>}

                {!isWidth.maxWidth295 && <NavLink className={className} to='hot' onClick={reset}>
                    <IconFire />
                    Hot
                </NavLink>}

                {!isWidth.maxWidth330 && <NavLink className={className} to='new' onClick={reset}>
                    <IconNew />
                    New
                </NavLink>}

                {!isWidth.maxWidth424 && <NavLink className={className} to='top' onClick={reset}>
                    <IconTop />
                    Top
                </NavLink>}

                {!isWidth.maxWidth471 && <NavLink className={className} to='rising' onClick={reset}>
                    <IconGrowth />
                    Rising
                </NavLink>}
            </nav>, modalRoot)}
    </>
    )
}
