import React from 'react';
import redditLinkImage from '../../../../../img/redditLinkImage.png';

interface IRedditLinkImage {
    postUrl?: string;
    className?: string;
}

export function RedditLinkImage({ postUrl, className }: IRedditLinkImage) {
    return (
        <a href={postUrl} target='_blank'>
            <img
                className={className}
                src={redditLinkImage}
                alt="Massage image"
            />
        </a>
    )
}
