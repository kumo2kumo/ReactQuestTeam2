// reduxテスト用のコンポーネント
//addCardテスト用

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios';

import {addCard} from "./cardsSlice";

export const TestForm = () => {
    const [title, setTitle] = useState('')
    const [memo, setMemo] = useState('')
    const [meetingId, setMeetingId] = useState('')
    const [url, setUrl] = useState('')
    const [owner, setOwner] = useState('')

    const onTitleChange = (e) => {setTitle(e.target.value)}
    const onMemoChange = (e) => {setMemo(e.target.value)}
    const onMeetingIdChange = (e) => {setMeetingId(e.target.value)}

    const dispatch = useDispatch()

    const onSaveCardClicked = () => {
        try {
        //      axios.get('https://jsonplaceholder.typicode.com/users/1')
        //     .then(res => {
        //         setUrl(res.data.website)
        //         setOwner(res.data.name)
        //     })
        //     .then(() => dispatch(addCard(title, memo, meetingId, url, owner)))

            const fetchData = async() => {
                const result = await axios.get('https://jsonplaceholder.typicode.com/users/1')
                setUrl(result.data.website)
                setOwner(result.data.name)
            }    
            const sendData = () =>{
                dispatch(addCard(title, memo, meetingId, url, owner))
            }

            const all = async() => {
                await fetchData()
                sendData()
            }
            all()
            // sendData()
            // setTitle('')
            // setMemo('')
            // setMeetingId('')
            // setUrl('')
            // setOwner('')

            } catch (e) {
                console.log(e)
            }
        }

    return (
        <div>
            <form>
                <input value={title} onChange={onTitleChange}></input>
                <input value={meetingId} onChange={onMeetingIdChange}></input>
                <textarea  value={memo} onChange={onMemoChange}/>
                <button type="button"  onClick={onSaveCardClicked}>go</button>
            </form>
        </div>
    )
}
