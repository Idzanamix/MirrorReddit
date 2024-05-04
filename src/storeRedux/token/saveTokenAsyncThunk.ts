
import axios from "axios";
import { resetToken, setToken } from "./tokenSlice";
import { resetUserData } from "../user/userSlise";
import { ThunkActionType } from "../storeRedux";


interface IQueryCode extends URLSearchParams {
    code?: string;
}

export const saveTokenAsyncThunk: any = (): ThunkActionType => async (dispatch, getState) => {
    const timeNow = new Date().getTime();
    const { createdAt } = getState().redditToken;

    if (createdAt) {
        setTimeout(() => {
            dispatch(resetToken());

            dispatch(resetUserData());

        }, 7200000 - (timeNow - createdAt));

        return;
    }

    const params: IQueryCode = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop: any) => searchParams.get(prop),
    });

    if (!params.code || !process.env.CLIENT_ID || !process.env.SECRET) return;

    try {
        const { data } = await axios.post('https://www.reddit.com/api/v1/access_token',
            `grant_type=authorization_code&code=${params.code}&redirect_uri=${process.env.SITE_URL}${process.env.PORT ? ':' + process.env.PORT : ''}/auth`,
            {
                auth: {
                    username: process.env.CLIENT_ID,
                    password: process.env.SECRET
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

        dispatch(setToken(data['access_token']));
        window.history.replaceState({}, 'Reddit for me', '/auth');

    } catch (error: any) {
        console.log(error);
        alert(`Token error: ${error.message}`);
    }
}




