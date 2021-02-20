// reduxテスト用のコンポーネント
//addCardテスト用

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { getCardInfo } from "../cardsSlice";

export const TestForm = () => {
    const [title, setTitle] = useState('')

    const onTitleChange = (e) => {setTitle(e.target.value)}

    const dispatch = useDispatch()

    const onSaveCardClicked = () => {
        // dispatch(cardInfo())
        dispatch(getCardInfo())
        }

    return (
        <div>
            <form>
                <input value={title} onChange={onTitleChange}></input>
                <button type="button"  onClick={onSaveCardClicked}>go</button>
            </form>
        </div>
    )
}
