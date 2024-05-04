import styles from './card.css';
import { Link } from 'react-router-dom';
import { CardAnchor } from './CardAnchor';
import { CardLoader } from './CardLoader';
import { useDispatch } from 'react-redux';
import { MenuButton } from './MenuButton';
import { CardControls } from './CardControls';
import { CardListFooter } from '../CardListFooter';
import { CardTextContent } from './CardTextContent';
import { CardVisual } from './CardVisual/CardVisual';
import { cardContext } from '../../../context/CardContext';
import { useResizeCloser } from '../../../hooks/useResizeCloser';
import { useScrollPostsData } from '../../../hooks/usePostsData';
import { IPostsData } from '../../../storeRedux/posts/postsSlice';
import { setImageIsOpen } from '../../../storeRedux/posts/postIsOpen';
import { useCustomMatchMedia } from '../../../hooks/useCustomMatchMedia';
import React, { HTMLAttributes, LegacyRef, forwardRef, memo, useEffect } from 'react';
import { selectPostIsOpen, selectPostsBlock, useAppSelector } from '../../../storeRedux/storeSelectors';

interface ICardProps extends HTMLAttributes<HTMLDListElement> {
    cardItemData: IPostsData;
    onLoading: () => void;
}

export const Card = memo(forwardRef(
    ({ cardItemData, style, onLoading }: ICardProps, ref: LegacyRef<HTMLDivElement>) => {
        const dispatch = useDispatch();
        const { anchorName, createdTime, postSubreddit, postId } = cardItemData;
        const isImageOpen = useAppSelector(selectPostIsOpen(cardItemData.postId));
        const { loading, count } = useAppSelector(selectPostsBlock);
        const [refEndingOfList] = useScrollPostsData();
        const { mobile } = useCustomMatchMedia();

        useResizeCloser(() => dispatch(setImageIsOpen({ isImageOpen: false, postId: cardItemData.postId })));

        const handleClick = () =>
            dispatch(setImageIsOpen({ isImageOpen: !isImageOpen, postId: cardItemData.postId }));

        useEffect(() => {
            if (!isImageOpen) {
                onLoading();
            }
        }, [isImageOpen]);

        return (
            <cardContext.Provider value={cardItemData}>
                <li
                    className={styles.card}
                    style={style}
                >
                    {cardItemData.isLast
                        ?
                        <>
                            <CardLoader
                                ref={refEndingOfList}
                                loading={loading}
                                count={count}
                            />
                            <CardListFooter />
                        </>

                        :
                        <article
                            className={styles.body}
                            onLoad={onLoading}
                            ref={ref}
                        >
                            <Link to={`${postSubreddit}/comments/${postId}`} className={styles.link} />

                            <div className={styles.wrapper}>
                                {mobile &&
                                    <CardAnchor {...{ anchorName, createdTime }} />}

                                <div className={styles.content}>
                                    <CardVisual
                                        className={styles.preview}
                                        onClick={handleClick}
                                        props={cardItemData}
                                        videoDisabled
                                        light
                                    />
                                    <CardTextContent />
                                    <MenuButton />
                                </div>

                                {isImageOpen &&
                                    <CardVisual
                                        className={styles.previewIsOpen}
                                        props={cardItemData}
                                        onLoading={onLoading}
                                        videoHeight={'70vh'}
                                    />}
                            </div>
                            <CardControls />
                        </article>}
                </li>
            </cardContext.Provider >
        );
    }));
