import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { commentsFormReducer } from './form/commentsFormReducer';
import commentsSlice from './comments/commentsSlice';
import { BrowserRouter } from 'react-router-dom';
import { useUnmount } from '../hooks/useUnmount';
import postsSlice from './posts/postsSlice';
import tokenSlice from './token/tokenSlice';
import modalSlice from './modal/modalSlice';
import postIsOpen from './posts/postIsOpen';
import React, { ReactNode } from 'react';
import userSlise from './user/userSlise';
import { Provider } from 'react-redux';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const createNoopStorage = () => {
    return {
        getItem(_key: string) {
            return Promise.resolve(null);
        },
        setItem(_key: string, value: string) {
            return Promise.resolve(value);
        },
        removeItem(_key: string) {
            return Promise.resolve();
        },
    };
};

const storage = typeof window === 'undefined' ? createNoopStorage() : createWebStorage('local');

const persistConfig = {
    key: 'noop',
    storage,
    whitelist: [
        'redditToken',
    ]
};

const rootReducer = combineReducers({
    userBlock: userSlise,
    redditToken: tokenSlice,
    commentsForm: commentsFormReducer,
    commentsList: commentsSlice,
    postsBlock: postsSlice,
    postIsOpen: postIsOpen,
    cardModal: modalSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const storeRedux = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware: any) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(storeRedux);

export type rootStateType = ReturnType<typeof storeRedux.getState>;

export type appDispatchType = typeof storeRedux.dispatch;

export type ThunkActionType = ThunkAction<void, rootStateType, unknown, Action<string>>

interface IReduxProvirer {
    children: ReactNode
}

export function ReduxProvider({ children }: IReduxProvirer) {
    return (
        <Provider store={storeRedux}>
            {children}
        </Provider>
    )
}

export function MountedBrowserRouter({ children }: IReduxProvirer) {
    const [mounted] = useUnmount();

    return (
        mounted && <BrowserRouter>
            {children}
        </BrowserRouter>
    )
}