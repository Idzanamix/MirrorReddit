import styles from './card.css';
import { CardLoader } from './CardLoader';
import { useDispatch } from 'react-redux';
import { MenuButton } from './MenuButton';
import { CardControls } from './CardControls';
import { CardTextContent } from './CardTextContent';
import { CardVisual } from './CardVisual/CardVisual';
import { cardContext } from '../../../context/CardContext';
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
    ({ cardItemData, style, onLoading }: ICardProps, ref: LegacyRef<HTMLElement>) => {
        const dispatch = useDispatch();
        const isImageOpen = useAppSelector(selectPostIsOpen(cardItemData.postId));
        const { loading, count } = useAppSelector(selectPostsBlock);
        const { desktop } = useCustomMatchMedia();
        const [refEndingOfList] = useScrollPostsData();

        function handleClick() {
            dispatch(setImageIsOpen({ isImageOpen: !isImageOpen, postId: cardItemData.postId }));
        }

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
                        <CardLoader
                            ref={refEndingOfList}
                            loading={loading}
                            count={count}
                        />

                        :
                        <article className={styles.body}
                            ref={ref}
                            onLoad={onLoading}
                        >
                            <div className={styles.wrapper}>
                                <div className={styles.content}>
                                    <CardVisual
                                        className={styles.preview}
                                        props={cardItemData}
                                        light
                                        videoDisabled
                                        onClick={handleClick}
                                    />
                                    <CardTextContent />
                                    <MenuButton />
                                </div>

                                {isImageOpen &&
                                    <CardVisual
                                        className={styles.previewIsOpen}
                                        props={cardItemData}
                                        onLoading={onLoading}
                                        videoHeight={desktop ? '550px' : '70vh'}
                                    />}
                            </div>
                            <CardControls />
                        </article>}
                </li>
            </cardContext.Provider >
        );
    }));
