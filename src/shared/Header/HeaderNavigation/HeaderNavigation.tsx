import { IconFire, IconGrowth, IconNew, IconRocket, IconTop } from '../../Icons';
import { resetPostsData } from '../../../storeRedux/posts/postsSlice';
import { useAdaptiveForm } from '../../../hooks/useAdaptiveForm';
import styles from './headerNavigation.css';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useRef } from 'react';
import { MenuNav } from './MenuNav';


export function HeaderNavigation() {
    const dispatch = useDispatch();
    const refNav = useRef(null);
    const reset = () => dispatch(resetPostsData());
    const [isWidth] = useAdaptiveForm(refNav);

    return (
        <nav className={styles.nav} ref={refNav}>
            {isWidth.maxWidth200 && <NavLink className={styles.link} to='best' onClick={reset}>
                <IconRocket />
                Best
            </NavLink>}

            {isWidth.maxWidth295 && <NavLink className={styles.link} to='hot' onClick={reset}>
                <IconFire />
                Hot
            </NavLink>}

            {isWidth.maxWidth330 && <NavLink className={styles.link} to='new' onClick={reset}>
                <IconNew />
                New
            </NavLink>}

            {isWidth.maxWidth424 && <NavLink className={styles.link} to='top' onClick={reset}>
                <IconTop />
                Top
            </NavLink>}

            {isWidth.maxWidth471 && <NavLink className={styles.link} to='rising' onClick={reset}>
                <IconGrowth />
                Rising
            </NavLink>}

            {!isWidth.maxWidth471 && <MenuNav className={styles.link} isWidth={isWidth} />}
        </nav>
    )
}


