import { createSlice } from '@reduxjs/toolkit'

export const navbarBackgroundSlice = createSlice({
    name: 'navbarBackground',
    initialState: {
        navbarBackground: false,
        test: false,
    },
    reducers: {
        setNavbarBackground: (state, action) => {
            state.navbarBackground = action.payload;
        },
        setTest: (state, action) => {
            state.test = action.payload;

        }
    }
})


export const { setNavbarBackground, setTest } = navbarBackgroundSlice.actions;

export const selectNavbarBackground = (state) => state.navbarBackground.navbarBackground; 

export const selectTest = (state) => state.navbarBackground.test;


export default navbarBackgroundSlice.reducer;

