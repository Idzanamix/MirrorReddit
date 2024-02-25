import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { commentsAsyncThunk } from "../storeRedux/comments/commentsAsyncThunk";
import { selectCardModalData, selectComments, useAppSelector } from "../storeRedux/storeSelectors";

export function useModalCommentsData(postSubreddit: string, postId: string) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(commentsAsyncThunk(postSubreddit, postId));
    }, [])

    const commentsList = useAppSelector(selectComments);
    const modalData = useAppSelector(selectCardModalData);

    return { commentsList, modalData }
}