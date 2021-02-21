// reduxテスト用のコンポーネント
//addCardテスト用

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { getCardInfo } from "../cardsSlice";

export const TestForm = () => {
    const [meetingId, setmeetingId] = useState('')

    const onmeetingIdChange = (e) => {setmeetingId(e.target.value)}

    const dispatch = useDispatch()

    const onSaveCardClicked = () => {
        const reMeetingId = meetingId.replace(/\s+/g, '') //空白があったら削除
        dispatch(getCardInfo(reMeetingId))
    }

    return (
        <div>
            <form>
                <input value={meetingId} onChange={onmeetingIdChange}></input>
                <button type="button"  onClick={onSaveCardClicked}>go</button>
            </form>
        </div>
    )
}
