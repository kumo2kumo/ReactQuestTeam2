import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

// fake data
const initialState = {
    cards: [
        {
            id: '1', delete: false,
            data: {
                "title": "calu gonのZoomミーティング",
                "meetingId": 77847313094,
                "owner": "test.com",
                "url": "https://us04web.zoom.us/j/77847313094?pwd=cW12aWlZVE5zeFlyS05Eckl6V0NpUT09",
                "startTime": "2021-02-19T16:30:00Z"
                
            }
        }
    ],
    status: 'idle',
    error: null

}

/* (dispatch(getCardInfo))でdispathできる
状態がpending, fulfilled, rejectedの3段階に分かれる */
export const getCardInfo = createAsyncThunk(
    'cards/getCardInfo',
    async (meetingId) => {
        const response = await axios.get('/getMeeting?id=' + meetingId)
        let data = {
            title: response.data.topic,
            meetingId: response.data.id,
            owner: response.data.host_email,
            url: response.data.join_url,
            startTime: response.data.start_time,
        }
    return data
})
// export const getCardInfo = createAsyncThunk(
//     'cards/getCardInfo',
//     async (meetingId, thunkAPI) => {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/users/' + meetingId)
//     let data = {url: response.data.website, name: response.data.name}
//     return data
// })


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
                delete: false,
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