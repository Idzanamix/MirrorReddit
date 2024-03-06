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
            const scrolledPosts = state.postsData.concat(action.payload.postsData);

            const removeDuplicates = scrolledPosts.reduce((uniq: any, item) => {
                return !uniq.some((uniqItem: IPostsData) => item.postId === uniqItem.postId)
                    ? [...uniq, item]
                    : uniq;
            }, []);

            const switchedIsLastPostsData =
                removeDuplicates.map((post: IPostsData, i: number, arr: any) => {
                    if (arr.length - 1 === i) {
                        return {
                            ...post,
                            isLast: true
                        }
                    } else {
                        return {
                            ...post,
                            isLast: false
                        }
                    }
                });

            return {
                ...state,
                postsData: switchedIsLastPostsData,
                afterList: action.payload.after,
                count: state.count > 1
                    ? (scrolledPosts.length - removeDuplicates.length > 2)
                        ? state.count + 1
                        : 0
                    : state.count + 1,
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