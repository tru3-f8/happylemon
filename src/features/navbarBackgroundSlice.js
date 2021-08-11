import { createSlice } from '@reduxjs/toolkit'

export const navbarBackgroundSlice = createSlice({
    name: 'navbarBackground',
    initialState: {
        navbarBackground: false,
    },
    reducers: {
        setNavbarBackground: (state, action) => {
            state.navbarBackground = action.payload;

        }
    }
})


export const { setNavbarBackground } = navbarBackgroundSlice.actions;

export const selectNavbarBackground = (state) => state.navbarBackground.navbarBackground; 

export default navbarBackgroundSlice.reducer;

