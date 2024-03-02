import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPostsData } from "../posts/postsSlice";

interface IModalState {
    modalData: IPostsData;
}

const initialState: IModalState = {
    modalData: {
        postId: '',
        anchorName: '',
        postSubreddit: '',
        postTitle: '',
        postUrl: '',
        createdTime: NaN,
        numberComments: NaN,
        karmaNumber: NaN,
        isLast: false, 
    },
}


const modalSlice = createSlice({
    name: 'cardModal',
    initialState,
    reducers: {
        resetModalData() {
            return initialState
        },
        setModalData(state, action: PayloadAction<IPostsData>) {
            return {
                ...state,
                modalData: action.payload,
            }
        }
    }
});

export const { resetModalData, setModalData } = modalSlice.actions;

export default modalSlice.reducer;