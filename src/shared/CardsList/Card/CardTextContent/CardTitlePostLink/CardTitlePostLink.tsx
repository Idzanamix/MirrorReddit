import React from "react";
const { convert } = require('html-to-text');
import styles from './cardtitlepostlink.css'

interface ICardTitlePostLinkProps {
    postTitle: string;
    postUrl: string;
}

export function CardTitlePostLink({ postTitle, postUrl }: ICardTitlePostLinkProps) {
    return (
        <h2 className={styles.title} >
            <a
                className={styles.link}
                target="_blank"
                href={postUrl}
            >
                {convert(postTitle)}
            </a>
        </h2>
    )
}