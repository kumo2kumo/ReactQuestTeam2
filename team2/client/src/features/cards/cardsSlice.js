import { createSlice } from '@reduxjs/toolkit';

// fake data
const initialState = []

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {}
})

export default cardsSlice.reducer;