import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootStateType } from "../storeRedux/storeRedux";
import { saveTokenAsyncThunk } from "../storeRedux/token/saveTokenAsyncThunk";
import { userReguestAsyncThunk } from "../storeRedux/user/userReguestAsyncThunk";


export function useUserData() {
    const dispatch = useDispatch();
    const { userBlock, redditToken } = useSelector((state: rootStateType) => state);

    useEffect(() => {
        dispatch(saveTokenAsyncThunk());
        dispatch(userReguestAsyncThunk());
    }, [redditToken]);

    return userBlock
}
