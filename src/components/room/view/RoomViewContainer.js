import React, {useEffect} from 'react'
import {inject, observer} from "mobx-react";

import RoomViewTitle from "./RoomViewTitle";
import RoomViewListMessage from "./messages/RoomViewListMessage";
import RoomViewFieldMessage from "./RoomViewFieldMessage";



let RoomViewContainer=inject('store')(observer((props)=>{

    useEffect(()=>{
        if(props.match.params.id!=='home') {
            props.store.room.getRoom(props.match.params.id)
            props.store.room.getMessages(props.match.params.id, 1)
        }else{
            props.store.room.getMessages(null, null,'del')
        }
    },[props.match.params.id])


    return(
        <div className="room_container">
            <RoomViewTitle />
            <RoomViewListMessage pageId={props.match.params.id} />
            <RoomViewFieldMessage />
        </div>
    )
}))
export default RoomViewContainer;

