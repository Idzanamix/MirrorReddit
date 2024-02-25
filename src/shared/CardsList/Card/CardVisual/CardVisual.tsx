import { RedditMessageImage } from './RedditMessageImage';
import { RedditLinkImage } from './RedditLinkImage';
import React, { useEffect, useState } from 'react';
import { HTMLAttributes } from 'enzyme';
import ReactPlayer from 'react-player';
import styles from './cardVisual.css';

interface ICardVisualProps extends HTMLAttributes {
    props: {
        postThumbnail?: string;
        postVideoUrl?: string;
        postUrl?: string;
        postHighQualityVideoUrl?: string;
        postHint?: string;
    }
    light?: boolean;
    onLoading?: () => void;
    videoDisabled?: boolean;
    videoHeight?: string;
}

export function CardVisual(
    { className, light, props, onClick, onLoading, videoDisabled, videoHeight }: ICardVisualProps) {
    const { postThumbnail,
        postVideoUrl,
        postUrl,
        postHighQualityVideoUrl,
        postHint } = props;
    const [error, setError] = useState(false);

    const noop = () => { };

    const onError = () => setError(true);

    useEffect(() => {
        onLoading?.();
    }, []);

    return (
        <>
            <div
                className={className}
                onClick={error ? noop : onClick}
            >
                {!postVideoUrl
                    ?

                    (error
                        ?
                        postHint === 'image' ||
                            postHint === undefined
                            ? <RedditMessageImage className={styles.preview} postUrl={postUrl} />
                            : <RedditLinkImage className={styles.preview} postUrl={postUrl} />
                        :
                        <img
                            className={styles.preview}
                            src={postHint === 'image'
                                ?
                                postUrl
                                :
                                postThumbnail}
                            onError={onError}
                        />)

                    :
                    <ReactPlayer
                        style={videoDisabled ? { pointerEvents: 'none' } : { cursor: 'pointer' }}
                        controls
                        width=''
                        height={videoHeight || '100%'}
                        url={postHighQualityVideoUrl}
                        light={light &&
                            <video
                                preload='metadata'
                                className={styles.preview}
                                src={postVideoUrl} >
                            </video>}
                    />
                }
            </div>
        </>
    );
}