import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ICommentsData {
    postId: string;
    commentId: string;
    authorName: string;
    karmaCounter: number;
    createdTime: number;
    commentText: string;
    commentHtml: string;
    commentReplies: ICommentReplies[];
    moreCommentsData: ICommentReplies[];
    children?: string[];
}

export interface ICommentReplies {
    kind: string,
    data: any
}

export interface ICommentsDataState {
    comments: ICommentsData[];
    loading: boolean;
    moreComments?: string;
    error?: Error;
}

const initialState: ICommentsDataState = {
    comments: [],
    loading: false
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        commentsDataPending: (state) => {
            return {
                comments: [],
                loading: true
            }
        },
        setCommentsData: (state, action: PayloadAction<ICommentsData[]>) => {
            const moreComments = action.payload
                ?.filter((item: ICommentsData) => item.children)[0]?.children
                ?.join(',')
                ?.substring(0, 799);

            return {
                comments: action.payload,
                loading: false,
                moreComments: moreComments
            }
        },
        commentsDataError: (state, action: PayloadAction<Error>) => {
            return {
                comments: [],
                loading: false,
                error: action.payload,
            }
        }
    }
});

export const { commentsDataPending, setCommentsData, commentsDataError } = commentsSlice.actions;

export default commentsSlice.reducer;