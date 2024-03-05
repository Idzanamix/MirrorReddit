import { useDispatch } from 'react-redux';
import { UserAvatar } from '../UserAvatar';
import styles from './userBlockDropdown.css';
import { ToggleSwitch } from './ToggleSwitch';
import React, { LegacyRef, forwardRef } from 'react';
import { IconNight } from '../../../../Icons/IconNight';
import { Iconlogin } from '../../../../Icons/IconLogIn';
import { Coords } from '../../../../../hooks/useCoords';
import { EColor, Text } from '../../../../../utils/react/Text';
import { resetToken } from '../../../../../storeRedux/token/tokenSlice';
import { resetUserData } from '../../../../../storeRedux/user/userSlise';
import { useCustomMatchMedia } from '../../../../../hooks/useCustomMatchMedia';
import { useAppSelector, selectIsDarkMode } from '../../../../../storeRedux/storeSelectors';

interface IUserBlockDropdown {
    loading: boolean
    iconImg?: string;
    userName?: string;
    coords?: Coords;
    isMobileOpen?: boolean;
}

export const UserBlockDropdown = forwardRef((
    { loading, iconImg, userName, coords, isMobileOpen }: IUserBlockDropdown,
    ref: LegacyRef<HTMLUListElement>) => {

    const dispatch = useDispatch();
    const darkMode = useAppSelector(selectIsDarkMode);
    const { mobile411, desktop } = useCustomMatchMedia();

    function HandleResetToken() {
        dispatch(resetToken());
        dispatch(resetUserData());
    }

    return (<>
        {mobile411 &&
            <div
                className={styles.backdrop}
                style={{
                    top: isMobileOpen ? 0 : '110%',
                    visibility: isMobileOpen ? 'visible' : 'hidden',
                    background: isMobileOpen ? 'var(--colorScrim)' : 'none'
                }}
            />}
        <ul
            className={styles.list}
            ref={ref}
            style={{
                filter: darkMode
                    ? 'drop-shadow(0px 0px 3px rgba(255, 255, 255, 0.15))'
                    : 'drop-shadow(0px 0px 6px rgba(2, 2, 2, 0.3))',
                top: mobile411
                    ? '110%'
                    : `calc(${coords?.top + 'px'} + ${desktop ? '20px' : '26px'})`,
                right: mobile411
                    ? ''
                    : `calc(${coords?.left + 'px'} + ${desktop ? '65px' : '2px'})`,
            }}
        >
            {userName &&
                <li className={styles.item}>
                    <a
                        href={`https://www.reddit.com/user/${userName}/`}
                        className={styles.button}
                    >
                        <UserAvatar
                            userName={userName}
                            loading={loading}
                            iconImg={iconImg}
                            noText
                        />
                        <span className={styles.descr}>
                            <Text
                                size={12}
                                color={EColor.white}
                                className={styles.username}
                            >
                                View Profile
                            </Text>
                            <Text
                                size={10}
                                color={EColor.gray99}
                                className={styles.username}
                            >
                                u/{userName}
                            </Text>
                        </span>
                    </a>
                </li>}

            <li className={styles.item}>
                {userName ?
                    <button
                        className={styles.button}
                        onClick={HandleResetToken}
                    >
                        <Iconlogin />
                        <Text
                            className={styles.text}
                            color={EColor.white}
                            size={12}
                        >
                            Log Out
                        </Text>
                    </button>

                    :
                    <a
                        href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=${process.env.SITE_URL}/auth&duration=permanent&scope=read submit identity`}
                        className={styles.button}
                        type='button'
                    >
                        <Iconlogin />
                        <Text
                            className={styles.text}
                            color={EColor.white}
                            size={12}
                        >
                            Log In / Sign Up
                        </Text>
                    </a>}
            </li>

            <li
                className={styles.item}
                style={{ padding: '15px 20px' }}
            >
                <IconNight />
                <Text
                    className={styles.text}
                    color={EColor.white}
                    size={12}
                >
                    Dark Mode
                </Text>
                <ToggleSwitch />
            </li>
        </ul>
    </>
    )
})
