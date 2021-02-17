import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

// fake data
const initialState = {
    cards: [
    { id: '1', title: 'test1', memo: 'new', url: '111', stare_time: '17:00', owner: 'aaa', meetingId: '123', delete: false},
    { id: '2', title: 'test2', memo: 'new2', url: '222', stare_time: '18:00', owner: 'bbb', meetingId: '456', delete: false}
    ],
    status: 'idle',
    error: null

}

/* (dispatch(getCardInfo))でdispathできる
状態がpending, fulfilled, rejectedの3段階に分かれる */
export const getCardInfo = createAsyncThunk(
    'cards/getCardInfo',
    async (meetingId, thunkAPI) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/' + meetingId)
    let data = {url: response.data.website, name: response.data.name}
    return data
})


const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCard: (state, action) => {
            state.cards.push(action.payload)
        }
        // TODO 仮
        // addCard: {
        //     reducer(state, action) {
        //         state.cards.push(action.payload)
        //     },
        // prepare(title, memo, meetingId, url, owner){
        //     return {
        //         payload: {
        //             id: nanoid(),
        //             title,
        //             memo, 
        //             meetingId,
        //             url,
        //             owner
        //         }
        //     }
        // },
        // }
    },
    extraReducers: {
        [getCardInfo.pending]: (state, action) => {
            state.status = 'pending'
        },
        [getCardInfo.fulfilled]: (state, action) => {
            state.status = 'success'
            state.cards = state.cards.concat({
                id: nanoid(),
                data: action.payload
            })
        },
        [getCardInfo.rejected]: (state, action) => {
            state.status = 'failed'
            // state.error = action.error.message
        }
    }
})


export const { addCard } = cardsSlice.actions
export default cardsSlice.reducer