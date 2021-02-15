import { createSlice } from '@reduxjs/toolkit';

// fake data
const initialState = [
    { id: '1', title: 'test1', memo: 'new', url: '111', stare_time: '17:00', owner: 'aaa', meetingId: '123', delete: false},
    { id: '2', title: 'test2', memo: 'new2', url: '222', stare_time: '18:00', owner: 'bbb', meetingId: '456', delete: false}
]

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {}
})

export default cardsSlice.reducer;