import { rootStateType } from "./storeRedux";
import { ITextCommentState } from "./form/commentsFormReducer";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<rootStateType> = useSelector;

export const selectUserBlock = ({ userBlock }: rootStateType) => userBlock;

export const selectPostsBlock = ({ postsBlock }: rootStateType) => postsBlock;

export const selectPostsData = ({ postsBlock }: rootStateType) => postsBlock.postsData;

export const selectPostsLoading = ({ postsBlock }: rootStateType) => postsBlock.loading;

export const selectCardModalData = ({ cardModal }: rootStateType) => cardModal.modalData;

export const selectComments = ({ commentsList }: rootStateType) => commentsList;

export const selectPostIsOpen = (id: string) => ({ postIsOpen }: rootStateType) => postIsOpen.postsDataIsOpen
    .filter(post => post.postId === id)[0]?.isImageOpen;

export const selectCommentFormValue = (commentId: string) => ({ commentsForm }: rootStateType) => commentsForm
    ?.filter(item => item.commentId === commentId)[0]?.textComment;

export const selectFormIsOpen = (commentId: string) => ({ commentsForm }: rootStateType) => commentsForm
    .filter((comment: ITextCommentState) => comment.commentId === commentId)[0]?.formIsOpen;

export const selectIsDarkMode = ({ userBlock }: rootStateType) => userBlock.darkMode;

export const selectToken = ({ redditToken }: rootStateType) => redditToken;


