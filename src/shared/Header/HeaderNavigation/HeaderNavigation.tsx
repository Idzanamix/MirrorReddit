import { MenuNav } from './MenuNav';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './headerNavigation.css';
import React, { MouseEvent, useContext, useRef } from 'react';
import { useAdaptiveForm } from '../../../hooks/useAdaptiveForm';
import { CardListContext } from '../../../context/CardListContext';
import { resetPostsData } from '../../../storeRedux/posts/postsSlice';
import { IconFire, IconGrowth, IconNew, IconRocket, IconTop } from '../../Icons';
import { selectPostsLoading, useAppSelector } from '../../../storeRedux/storeSelectors';

export function HeaderNavigation() {
    const refNav = useRef(null);
    const dispatch = useDispatch();
    const [isWidth] = useAdaptiveForm(refNav);
    const loading = useAppSelector(selectPostsLoading);
    const { refCardList } = useContext(CardListContext);

    const styledLink: any = ({ isActive }: any) => ({
        cursor: loading ? 'wait' : 'pointer',
        pointerEvents: !isActive && loading ? 'none' : 'unset'
    })

    const scrollToTop = () => refCardList?.current && refCardList.current.scrollToItem(0);

    function reset(e: MouseEvent) {
        if (e.currentTarget.classList.value.includes('active')) {
            scrollToTop();
        } else {
            dispatch(resetPostsData());
        }
    }

    return (
        <nav
            className={styles.nav}
            ref={refNav}
        >
            {isWidth.maxWidth200 &&
                <NavLink className={styles.link} style={styledLink} onClick={reset} to='best'>
                    <IconRocket />
                    Best
                </NavLink>}

            {isWidth.maxWidth295 &&
                <NavLink className={styles.link} style={styledLink} onClick={reset} to='hot'>
                    <IconFire />
                    Hot
                </NavLink>}

            {isWidth.maxWidth330 &&
                <NavLink className={styles.link} style={styledLink} onClick={reset} to='new'>
                    <IconNew />
                    New
                </NavLink>}

            {isWidth.maxWidth424 &&
                <NavLink className={styles.link} style={styledLink} onClick={reset} to='top'>
                    <IconTop />
                    Top
                </NavLink>}

            {isWidth.maxWidth471 &&
                <NavLink className={styles.link} style={styledLink} onClick={reset} to='rising'>
                    <IconGrowth />
                    Rising
                </NavLink>}

            {!isWidth.maxWidth471 &&
                <MenuNav
                    className={styles.link}
                    styledLink={styledLink}
                    isWidth={isWidth}
                    reset={reset}
                />}
        </nav>
    )
}


