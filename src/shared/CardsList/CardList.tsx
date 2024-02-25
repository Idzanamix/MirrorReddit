import { selectPostsData, useAppSelector } from '../../storeRedux/storeSelectors';
import { getPostsAsyncThunk } from '../../storeRedux/posts/getPostsAsyncThunk';
import { useCustomMatchMedia } from '../../hooks/useCustomMatchMedia';
import { CardListContext } from '../../context/CardListContext';
import { VariableSizeList as List } from 'react-window';
import React, { useContext, useEffect } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Outlet, useParams } from 'react-router-dom';
import { BackToTopButton } from './BackToTopButton';
import { useDispatch } from 'react-redux';
import { CardRow } from './CardRow';

export const CardList = () => {
    const { rowHeights, refCardList } = useContext(CardListContext);
    const postsData = useAppSelector(selectPostsData);
    const { desktop } = useCustomMatchMedia();
    const dispatch = useDispatch();
    const { post } = useParams();

    useEffect(() => {
        dispatch(getPostsAsyncThunk(post));
    }, [post]);

    const scrollToTop = () => refCardList?.current && refCardList.current.scrollToItem(0);

    function getRowHeight(index: number) {
        return rowHeights?.current[index] + (desktop ? index === 0 ? 35 : 15 : 0) || 155;
    }

    return (<>
        <Outlet />
        <AutoSizer>
            {({ height, width }) => (
                <>
                    <List
                        itemCount={postsData.length}
                        itemSize={getRowHeight}
                        innerElementType="ul"
                        ref={refCardList}
                        height={height}
                        width={width}
                    >
                        {CardRow}
                    </List>

                    {desktop && <BackToTopButton onClick={scrollToTop} />}
                </>
            )}
        </AutoSizer >
    </>)
}