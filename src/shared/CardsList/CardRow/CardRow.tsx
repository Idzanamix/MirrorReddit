import { useAppSelector, selectPostsData } from '../../../storeRedux/storeSelectors';
import { CardListContext } from '../../../context/CardListContext';
import React, { HTMLAttributes, useContext, useRef } from 'react';
import { IPostsData } from '../../../storeRedux/posts/postsSlice';
import { Card } from '../Card/Card';

interface ICardList extends HTMLAttributes<HTMLElement> {
    index: number;
    data: IPostsData[];
}

export function CardRow({ index, style }: ICardList) {
    const { rowHeights, refCardList }: any = useContext(CardListContext);
    const refCardItem = useRef<HTMLDivElement>(null);
    const postsData = useAppSelector(selectPostsData);

    function getHeightAfterOnLoading() {
        if (refCardItem.current) {
            refCardList.current.resetAfterIndex(0);

            rowHeights.current = {
                ...rowHeights.current,
                [index]: refCardItem.current.clientHeight
            };
        }
    }

    return (
        <Card
            onLoading={getHeightAfterOnLoading}
            cardItemData={postsData[index]}
            ref={refCardItem}
            style={style}
        />
    )
}