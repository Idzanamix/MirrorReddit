import { ActionCreator } from "@reduxjs/toolkit";

export interface IFormValueAction {
    type: string;
    commentId: string;
    textComment: string;
    replysName: string;
}

export interface IFormIsOpenAction {
    type: string;
    commentId: string;
    formIsOpen: boolean;
}

export const REPLY_ = 'REPLY_';
export const CHANGE_COMMENT = 'CHANGE_COMMENT';
export const SET_STATE_OPEN_COMMENT = 'SET_STATE_OPEN_COMMENT';
export const SET_STATE_CLOSE_COMMENT = 'SET_STATE_CLOSE_COMMENT';

export const changeFormValue: ActionCreator<IFormValueAction> =
    (commentId: string, textComment: string, replysName: string) => ({
        type: replysName ? REPLY_ + replysName : CHANGE_COMMENT,
        commentId: commentId,
        textComment: textComment,
        replysName: replysName,
    });

export const setIsOpenComment: ActionCreator<IFormIsOpenAction> =
    (commentId: string, formIsOpen: boolean) => ({
        type: formIsOpen ? SET_STATE_OPEN_COMMENT : SET_STATE_CLOSE_COMMENT,
        commentId: commentId,
        formIsOpen: formIsOpen
    });
