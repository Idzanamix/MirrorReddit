import { IconFire, IconGrowth, IconMenu, IconNew, IconRocket, IconTop } from '../../../Icons';
import { useAppSelector, selectIsDarkMode } from '../../../../storeRedux/storeSelectors';
import { useResizeCloser } from '../../../../hooks/useResizeCloser';
import { useModalCloser } from '../../../../hooks/useModalCloser';
import { useCoords } from '../../../../hooks/useCoords';
import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { createPortal } from 'react-dom';
import styles from './menuNav.css';

interface IMenuNav {
    className: string;
    isWidth: any;
    loading?: boolean;
    styledLink?: any;
    reset?: any;
}

export function MenuNav({ className, isWidth, styledLink, reset }: IMenuNav) {
    const modalRoot = document.getElementById('modal_root');

    if (!modalRoot) return null;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const darkMode = useAppSelector(selectIsDarkMode);
    const refButton = useRef<HTMLButtonElement>(null);
    const refMenu = useRef<HTMLButtonElement>(null);
    const [coords] = useCoords(refButton, isMenuOpen);

    useModalCloser({ ref: refMenu, ref2: refButton, onClose: () => setIsMenuOpen(false) });
    useResizeCloser(() => setIsMenuOpen(false));

    return (<>
        <button
            className={styles.menu}
            ref={refButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
            <IconMenu />
        </button>

        {isMenuOpen && coords && createPortal(
            <nav
                ref={refMenu}
                className={styles.nav}
                style={{
                    filter: darkMode
                        ? 'drop-shadow(0px 0px 3px rgba(255, 255, 255, 0.15))'
                        : 'drop-shadow(0px 0px 6px rgba(2, 2, 2, 0.3))'
                    ,
                    left: coords?.left + 'px',
                    top: `calc(${coords?.top + 'px'} + 6px)`
                }}
            >
                {!isWidth.maxWidth200 &&
                    <NavLink className={className} to='best' onClick={reset} style={styledLink}>
                        <IconRocket />
                        Best
                    </NavLink>}

                {!isWidth.maxWidth295 &&
                    <NavLink className={className} to='hot' onClick={reset} style={styledLink}>
                        <IconFire />
                        Hot
                    </NavLink>}

                {!isWidth.maxWidth330 &&
                    <NavLink className={className} to='new' onClick={reset} style={styledLink}>
                        <IconNew />
                        New
                    </NavLink>}

                {!isWidth.maxWidth424 &&
                    <NavLink className={className} to='top' onClick={reset} style={styledLink}>
                        <IconTop />
                        Top
                    </NavLink>}

                {!isWidth.maxWidth471 &&
                    <NavLink className={className} to='rising' onClick={reset} style={styledLink}>
                        <IconGrowth />
                        Rising
                    </NavLink>}
            </nav >, modalRoot)
        }
    </>
    )
}
