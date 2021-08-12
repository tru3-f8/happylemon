import { createSlice } from '@reduxjs/toolkit'

export const contactFormSlice = createSlice({
    name: 'contact',
    initialState: {
        name: '',
        email: '',
        phone: '',
        message: '',
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPhone: (state, action) => {
            state.phone = action.payload;
        },
        setMessage: (state, action) => {
            state.message = action.payload;
        }
    }
})

export const { setName, setEmail, setPhone, setMessage } = contactFormSlice.actions; 

export const selectName = (state) => state.contact.name;

export const selectEmail = (state) => state.contact.email;

export const selectPhone = (state) => state.contact.phone;

export const selectMessage = (state) => state.contact.message;

export default contactFormSlice.reducer;