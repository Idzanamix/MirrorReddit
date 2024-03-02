import React, { useRef } from 'react';
import styles from './cardListFooter.css'
import { EColor, Text } from '../../../utils/react/Text';
import { LogoLink } from '../../Header/LogoLink/LogoLink';
import { useAdaptiveForm } from '../../../hooks/useAdaptiveForm';
import { IconEmail, IconGitLab, IconGithub, IconTelegram, IconVk } from '../../Icons';

export function CardListFooter() {
    const refFooter = useRef(null);
    const [isWidth] = useAdaptiveForm(refFooter);

    return (
        <footer className={styles.footer} ref={refFooter}>
            <div className={styles.left}>
                <LogoLink />
                <Text color={EColor.gray99} size={12} className={styles.text}>
                    © 2024 created by Idzanamix, inspired by reddit.com
                </Text>
            </div>
            <div className={styles.middle}>
                <a
                    className={styles.link}
                    href="https://github.com/Idzanamix"
                    target='_blank'
                >
                    <IconGithub className={styles.github} />
                    {isWidth.maxWidth565 &&
                        <Text color={EColor.whiteGray} size={12}>
                            GitHub
                        </Text>}
                </a>

                <a
                    className={styles.link}
                    href="https://gitlab.skillbox.ru/igor_ponomarenko"
                    target='_blank'
                >
                    <IconGitLab className={styles.gitlab} />
                    {isWidth.maxWidth565 &&
                        <Text color={EColor.whiteGray} size={12}>
                            GitLab
                        </Text>}
                </a>
            </div>
            <div className={styles.right}>
                <a
                    href='https://t.me/idzanamix'
                    className={styles.link}
                    target='_blank'
                >
                    <IconTelegram className={styles.telegram} />
                    {isWidth.maxWidth565 &&
                        <Text color={EColor.whiteGray} size={12}>
                            Telegram
                        </Text>}
                </a>

                <a
                    className={styles.link}
                    href="mailto:shmellis@yandex.ru"
                >
                    <IconEmail className={styles.email} />
                    {isWidth.maxWidth565 &&
                        <Text color={EColor.whiteGray} size={12}>
                            Email
                        </Text>}
                </a>

                <a
                    className={styles.link}
                    href="https://vk.com/idzanamix"
                    target='_blank'
                >
                    <IconVk className={styles.vk} />
                    {isWidth.maxWidth565 &&
                        <Text color={EColor.whiteGray} size={12}>
                            Vk
                        </Text>}
                </a>
            </div>
        </footer>
    )
}
