import React from "react";
import styles from './logoLink.css'
import { Link } from "react-router-dom";
import { RedditLogo } from "../../Icons/RedditLogo";

export function LogoLink() {
    return (
        <Link aria-label="Home" to="/" className={styles.link}>
            <RedditLogo />
        </Link>
    )
}