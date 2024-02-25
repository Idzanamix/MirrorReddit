import { CHANGE_COMMENT, REPLY_, SET_STATE_CLOSE_COMMENT, SET_STATE_OPEN_COMMENT } from './actions';
import type { Reducer, UnknownAction } from '@reduxjs/toolkit'

export interface ITextCommentState {
    commentId: string;
    textComment: string;
    replysName?: string;
    formIsOpen?: boolean;
}

const initialState: ITextCommentState[] = [
    {
        commentId: 'modalFormComment',
        textComment: '',
    },
]

interface formActionType extends UnknownAction {
    textComment: string;
    replysName: string;
    commentId: string;
    formIsOpen: true;
}


export const commentsFormReducer: Reducer<ITextCommentState[], formActionType> =
    (state = initialState, action) => {
        const { type, textComment, replysName, commentId, formIsOpen } = action;

        function setFilterPrevState(commentId: string, notEqual?: boolean) {
            return state.filter((comment: ITextCommentState) =>
                notEqual ? comment.commentId !== commentId : comment.commentId === commentId)
        }

        switch (type) {
            case CHANGE_COMMENT:
                return [
                    ...setFilterPrevState('modalFormComment', true),
                    {
                        ...setFilterPrevState('modalFormComment')[0],
                        commentId: commentId,
                        textComment: textComment,
                    },
                ]

            case REPLY_ + replysName:
                return [
                    ...setFilterPrevState(commentId, true),
                    {
                        ...setFilterPrevState(commentId)[0],
                        commentId: commentId,
                        replysName: replysName,
                        textComment: textComment,
                    }
                ]

            case SET_STATE_OPEN_COMMENT:
                return [
                    ...setFilterPrevState(commentId, true),
                    {
                        ...setFilterPrevState(commentId)[0],
                        commentId: commentId,
                        formIsOpen: formIsOpen
                    }
                ]

            case SET_STATE_CLOSE_COMMENT:
                return [
                    ...setFilterPrevState(commentId, true)
                        .filter(comment => comment.textComment !== '' && comment.textComment!),
                    {
                        ...setFilterPrevState(commentId)[0],
                        commentId: commentId,
                        formIsOpen: formIsOpen
                    }
                ]

            default:
                return state
        }
    }












