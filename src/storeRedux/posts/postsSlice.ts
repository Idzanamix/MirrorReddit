import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IPostsData {
    postId: string;
    anchorName: string;
    postSubreddit: string;
    postTitle: string;
    postUrl: string;
    createdTime: number;
    numberComments: number;
    karmaNumber: number;
    isLast: boolean;
    postThumbnail?: string;
    postHint?: string;
    postHighQualityVideoUrl?: string;
    postVideoUrl?: string;
    postText?: string;
}

export interface IPostsDataState {
    postsData: IPostsData[];
    afterList: string;
    count: number;
    loading: boolean;
    type: string
    error?: Error;
}

export interface IPostsDataAction {
    postsData: IPostsData[];
    after: string;
    postType: string;
}

const initialState: IPostsDataState = {
    postsData: [],
    afterList: '',
    count: 0,
    loading: false,
    type: ''
}

const postsSlice = createSlice({
    name: 'postsBlock',
    initialState,
    reducers: {
        resetPostsData(state) {
            return initialState
        },
        getPostsDataPending(state) {
            return {
                ...state,
                loading: true,
            }
        },
        setPostsData(state, action: PayloadAction<IPostsDataAction>) {
            const addIsLast = state.postsData.map((post: IPostsData) => {
                return {
                    ...post,
                    isLast: false
                }
            });
            const scrolledPosts = addIsLast.concat(action.payload.postsData);

            return {
                ...state,
                postsData: scrolledPosts,
                afterList: action.payload.after,
                count: state.count === 2 ? 0 : state.count + 1,
                type: action.payload.postType || state.type,
                loading: false
            }
        },
        postsDataError(state, action: PayloadAction<Error>) {
            return {
                postsData: [],
                loading: false,
                afterList: '',
                count: 0,
                error: action.payload,
                type: ''
            }
        }
    }
});

export const { resetPostsData, getPostsDataPending, setPostsData, postsDataError } = postsSlice.actions;

export default postsSlice.reducer;