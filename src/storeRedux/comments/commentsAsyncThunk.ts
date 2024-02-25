import axios from "axios";
import { ThunkActionType } from "../storeRedux";
import { setModalData } from "../modal/modalSlice";
import { postConverter } from "../../utils/ts/postConverter";
import { commentsArrConverter } from "../../utils/ts/commentsArrConverter";
import { commentsDataPending, setCommentsData, commentsDataError } from "./commentsSlice";


export const commentsAsyncThunk: any = (postSubreddit: string, postId: string): ThunkActionType =>
    async (dispatch, getState) => {
        dispatch(commentsDataPending());

        const { postsData } = getState().postsBlock;
        const post = postsData.filter(post => post.postId === postId)[0];

        post && dispatch(setModalData(post));

        try {
            const { data } =
                await axios.get(`https://api.reddit.com/r/${postSubreddit}/comments/${postId}`);

            !post && dispatch(setModalData(postConverter(data[0].data.children[0].data)));

            dispatch(setCommentsData(commentsArrConverter(data[1].data.children, postId)));

        } catch (error: any) {
            console.log(error);
            dispatch(commentsDataError(error));
        }
    }

