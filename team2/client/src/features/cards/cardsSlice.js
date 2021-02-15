import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// fake data
const initialState = {
    cards: [
    { id: '1', title: 'test1', memo: 'new', url: '111', stare_time: '17:00', owner: 'aaa', meetingId: '123', delete: false},
    { id: '2', title: 'test2', memo: 'new2', url: '222', stare_time: '18:00', owner: 'bbb', meetingId: '456', delete: false}
    ],
    status: 'idle',
    error: null

}
const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        // TODO 仮
        addCard(state, action) {
            state.posts.push(action.payload)
        }
    },
    extraReducers: {
        [addCardByapi.pending]: (state, action) => {
            state.status = 'pending'
        },
        [addCardByapi.fulfilled]: (state, action) => {
            state.status = 'success'
            //TODO cardsArrayに追加
            state.cards = state.posts.
        },
        [addCardByapi.rejected]: (state, action) => {
            state.status = 'failed',
            state.error = action.error.message
        }
    }
})

// TODO apiserverとのやりとり→dispatchするためのaction creator
// (dispatch(getCardInfo))でdispathできる
//状態がpending, fulfilled, rejectedの3段階に分かれる
export const getCardInfo = createAsyncThunk('cards/addCardByapi', async () => {
    const respone = await axios.get('url')
    return Response.data
    //TODO payload作成
})

//TODO selector記入
export const { addCard } = cardsSlice.actions
export default cardsSlice.reducer