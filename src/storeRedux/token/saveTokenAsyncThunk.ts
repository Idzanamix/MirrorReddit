
import { setUserData } from "../user/userSlise";
import { ThunkActionType } from "../storeRedux";
import { setToken } from "./tokenSlice";
import axios from "axios";

interface IQueryCode extends URLSearchParams {
    code?: string;
}

export const saveTokenAsyncThunk: any = (): ThunkActionType => async (dispatch, getState) => {
    const timeNow = new Date().getTime();
    const { createdAt } = getState().redditToken;

    if (createdAt) {
        setTimeout(() => {
            dispatch(setToken(''));

            dispatch(setUserData({ name: '', iconImg: '' }));

        }, 7200000 - (timeNow - createdAt));

        return;
    }

    const params: IQueryCode = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop: any) => searchParams.get(prop),
    });

    if (!params.code || !process.env.CLIENT_ID) return;

    try {
        const { data } = await axios.post('https://www.reddit.com/api/v1/access_token',
            `grant_type=authorization_code&code=${params.code}&redirect_uri=http://localhost:3000/auth`,
            {
                auth: {
                    username: process.env.CLIENT_ID,
                    password: 'VEAVqqPu7VVpRhOmQpqJmaQjl3Zrig'
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




