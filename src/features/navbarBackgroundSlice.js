import { createSlice } from '@reduxjs/toolkit'

export const navbarBackgroundSlice = createSlice({
    name: 'navbarBackground',
    initialState: {
        navbarBackground: false,
        navbarMainPageBackground: false,
    },
    reducers: {
        setNavbarBackground: (state, action) => {
            state.navbarBackground = action.payload;
        },
        setNavbarMainPageBackground: (state, action) => {
            state.navbarMainPageBackground = action.payload;

        }
    }
})


export const { setNavbarBackground, setNavbarMainPageBackground } = navbarBackgroundSlice.actions;

export const selectNavbarBackground = (state) => state.navbarBackground.navbarBackground; 

export const selectNavbarMainPageBackground = (state) => state.navbarBackground.navbarMainPageBackground;


export default navbarBackgroundSlice.reducer;

