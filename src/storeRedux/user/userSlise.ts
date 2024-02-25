import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IUserState {
    loading: boolean;
    name: string;
    iconImg: string;
    error?: Error;
}

const initialState: IUserState = {
    loading: false,
    name: '',
    iconImg: ''
}

interface ISetUserAction {
    name: string;
    iconImg: string;
}

const userSlise = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        userDataPending: (state) => {
            return {
                ...state,
                loading: true
            }
        },
        setUserData: (state, action: PayloadAction<ISetUserAction>) => {
            return {
                ...state,
                name: action.payload.name,
                iconImg: action.payload.iconImg,
                loading: false
            }
        },
        userDataError: (state, action: PayloadAction<Error>) => {
            return {
                error: action.payload,
                loading: false,
                name: '',
                iconImg: ''
            }
        }
    },
})

export default userSlise.reducer

export const { userDataPending, setUserData, userDataError } = userSlise.actions