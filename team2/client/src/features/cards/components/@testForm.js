// reduxテスト用のコンポーネント
//addCardテスト用

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { getCardInfo } from "../cardsSlice";

export const TestForm = () => {
    const [meetingID, setMeetingID] = useState('')

    const onMeetingIDChange = (e) => {setMeetingID(e.target.value)}

    const dispatch = useDispatch()

    const onSaveCardClicked = () => {
        dispatch(getCardInfo(meetingID))
        }

    return (
        <div>
            <form>
                <input value={meetingID} onChange={onMeetingIDChange}></input>
                <button type="button"  onClick={onSaveCardClicked}>go</button>
            </form>
        </div>
    )
}
