import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IPostsIsOpen {
    postId: string;
    isImageOpen: boolean;
}

export interface IPostsDataIsOpenState {
    postsDataIsOpen: IPostsIsOpen[];
}

export interface IImageAction {
    postId: string;
    isImageOpen: boolean;
}

const initialState: IPostsDataIsOpenState = {
    postsDataIsOpen: [],
}

const postIsOpen = createSlice({
    name: 'postsIsOpen',
    initialState,
    reducers: {
        setImageIsOpen(state, action: PayloadAction<IImageAction>) {
            const filteredPost = state.postsDataIsOpen.map(post => {
                return {
                    ...post,
                    isImageOpen: post.postId === action.payload.postId ? action.payload.isImageOpen : post.isImageOpen
                }
            })

            return {
                postsDataIsOpen: filteredPost
            }
        },
        setPostsIsOpen(state, action: PayloadAction<IPostsDataIsOpenState>) {
            return {
                postsDataIsOpen: state.postsDataIsOpen.concat(action.payload.postsDataIsOpen)
            }
        }
    }
});

export const { setImageIsOpen, setPostsIsOpen } = postIsOpen.actions;

export default postIsOpen.reducer;