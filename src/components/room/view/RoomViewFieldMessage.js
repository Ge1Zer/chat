import React, {useState} from 'react'
import {inject, observer} from "mobx-react";

import skre from '../file/skre.png'
import mic from '../file/mic.png'
import smile from '../file/smile.png'


let RoomViewFieldMessage=inject('store')(observer((props)=> {

    let [field,setField] = useState('')

    let sendForm=(event)=>{

        let date = new Date()
        let mess ={
            roomId:props.store.room.id,
            profileId:props.store.my.id,
            name:props.store.my.name,
            avatar: props.store.my.avatar,
            number:props.store.room.total+1,
            text:field,
            listPhoto:[],
            date:{
                day:date.getDate(), month:date.getMonth(), year:date.getFullYear(),
                hours:date.getHours(), minute:date.getMinutes(), second:date.getSeconds()
            }
        }
        let roomData ={
            name:props.store.room.name,
            totalMessage:props.store.room.total+1,
            totalUsers:props.store.room.users,
        }
        if (event.key === 'Enter') {
            props.store.room.sendMessagesItem(mess)
            props.store.room.sendMessagesTotal(props.store.room.id, roomData)
            setField('')
        }
    }
    return (
        <div className={'room_view_field'}>
            <div>
                <img src={skre} alt="scr"/>
            </div>
            <div>
                <img src={mic} alt="mic"/>
            </div>
            <div>
                <input type="text" placeholder={'Press Enter for Send...'} value={field} onChange={(e) => setField(e.target.value)} onKeyDown={sendForm}/>
            </div>
            <div>
                <img src={smile} alt="smile"/>
            </div>
        </div>
    )
}))
export default RoomViewFieldMessage;

