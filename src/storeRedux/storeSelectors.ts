import { rootStateType } from "./storeRedux";
import { ITextCommentState } from "./form/commentsFormReducer";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<rootStateType> = useSelector;

export const selectUserBlock = (state: rootStateType) => state.userBlock;

export const selectPostsBlock = (state: rootStateType) => state.postsBlock;

export const selectPostsData = (state: rootStateType) => state.postsBlock.postsData;

export const selectPostsLoading = (state:rootStateType) => state.postsBlock.loading;

export const selectCardModalData = (state: rootStateType) => state.cardModal.modalData;

export const selectComments = (state: rootStateType) => state.commentsList;

export const selectPostIsOpen = (id: string) => (state: rootStateType) => state.postIsOpen.postsDataIsOpen
    .filter(post => post.postId === id)[0]?.isImageOpen;

export const selectCommentFormValue = (commentId: string) => (state: rootStateType) => state.commentsForm
    ?.filter(item => item.commentId === commentId)[0]?.textComment;

export const selectFormIsOpen = (commentId: string) => (state: rootStateType) => state.commentsForm
    .filter((comment: ITextCommentState) => comment.commentId === commentId)[0]?.formIsOpen;

export const selectIsDarkMode = (state: rootStateType) => state.userBlock.darkMode;

