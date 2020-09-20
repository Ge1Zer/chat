import React, {useState} from 'react'
import {inject, observer} from "mobx-react";
import RoomViewItemMessage from "./RoomViewItemMessage";



let RoomViewListMessage=inject('store')(observer((props)=>{

   let [page,setPage] = useState(1)
    let getFriendId=(event)=>{
        props.store.profile.getProfile(event.currentTarget.attributes.data.value)
    }

    let getMoreMessage=(num)=>{
        props.store.room.getMessages(props.pageId,num, 'push')
        setPage(num)
    }

    return(
        <div className="room_view_list_message">
            {props.pageId !== 'home' && <div onClick={() => getMoreMessage(page + 1)}><p>more message</p></div>}
            {props.pageId === 'home' && <div className={'glu'}>Wait <span>.</span><span>.</span></div>}
            {props.store.room.messages.reverse().map((i,num, arr) => <RoomViewItemMessage i={i} getFriendId={getFriendId}/>)}
        </div>
    )
}))
export default RoomViewListMessage;
