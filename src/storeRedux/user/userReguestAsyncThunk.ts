import { setUserData, userDataError, userDataPending } from "./userSlise";
import { ThunkActionType } from "../storeRedux";
import axios from "axios";


export const userReguestAsyncThunk: any = (): ThunkActionType => async (dispatch, getState) => {
    const { token } = getState().redditToken;

    if (!token) return;

    dispatch(userDataPending());

    try {
        const { data } = await axios.get('https://oauth.reddit.com/api/v1/me',
            {
                headers: {
                    Authorization: `bearer ${token}`
                }
            });

        dispatch(setUserData({
            name: data.name,
            iconImg: data.snoovatar_img
        }));

    } catch (error: any) {
        console.log(error);
        alert(`USER DATA ERROR: ${error.message}`);
        dispatch(userDataError(error));
    }
}


