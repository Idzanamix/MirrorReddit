import React from 'react';
import redditMessageImage from '../../../../../img/redditMessageImage.png'

interface IRedditMessageImage {
    postUrl?: string;
    className?: string;
}

export function RedditMessageImage({ postUrl, className }: IRedditMessageImage) {
    return (
        <a href={postUrl} target='_blank'>
            <img
                className={className}
                src={redditMessageImage}
                alt="Massage image"
            />
        </a>
    )
}
