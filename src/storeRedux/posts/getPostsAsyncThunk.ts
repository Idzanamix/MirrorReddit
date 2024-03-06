import { getPostsDataPending, postsDataError, setPostsData } from "./postsSlice";
import { postConverter } from "../../utils/ts/postConverter";
import { ThunkActionType } from "../storeRedux";
import { setPostsIsOpen } from "./postIsOpen";
import axios from "axios";

export const getPostsAsyncThunk: any = (postType: string): ThunkActionType => async (dispatch, getState) => {
    const { afterList } = getState().postsBlock;
    const { type } = getState().postsBlock
    dispatch(getPostsDataPending());

    try {
        const { data: { data: { after, children } } } =
            await axios.get(`https://www.reddit.com/${postType || type}.json?sr_detail=true`, {
                params: {
                    limit: 6,
                    after: afterList
                }
            });

        dispatch(
            setPostsData({
                postType: postType,
                after: after,
                postsData: children.map(({ data }: any) => {
                    return postConverter(data);
                })
            })
        );

        dispatch(setPostsIsOpen({
            postsDataIsOpen: children.map((({ data }: any) => {
                return {
                    postId: data.id,
                    isImageOpen: false
                }
            }))
        }))

    } catch (error: any) {
        console.log(error);
        dispatch(postsDataError(error));
    };
}


