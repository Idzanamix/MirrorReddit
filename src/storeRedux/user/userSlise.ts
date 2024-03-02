import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IUserState {
    loading: boolean;
    darkMode: boolean;
    name: string;
    iconImg: string;
    error?: Error;
}

const initialState: IUserState = {
    loading: false,
    darkMode: false,
    name: '',
    iconImg: '',
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
        setDarkMode(state, action: PayloadAction<boolean>) {
            return {
                ...state,
                darkMode: action.payload
            }
        },
        resetUserData(state) {
            return {
                ...initialState,
                darkMode: state.darkMode
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
                darkMode: state.darkMode,
                loading: false,
                name: '',
                iconImg: '',
            }
        }
    },
})

export default userSlise.reducer

export const { setDarkMode, resetUserData, userDataPending, setUserData, userDataError } = userSlise.actions