import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ITokenState {
    token: string;
    createdAt: number;
}

const initialState: ITokenState = {
    token: '',
    createdAt: NaN,
}

const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setToken(state, action: PayloadAction<string>) {
            return {
                ...state,
                token: action.payload,
                createdAt: action.payload ? new Date().getTime() : NaN
            }
        }
    }
});

export const { setToken } = tokenSlice.actions;

export default tokenSlice.reducer;