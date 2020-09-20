import React from 'react'
import {inject, observer} from "mobx-react";

import star from '../file/star.png'
import search from '../file/search.png'
import kolo from '../file/kolo.png'
import user from '../file/user.png'
import threeDots from '../file/threeDots.png'


let RoomViewTitle=inject('store')(observer((props)=>{

    return(
        <div className="room_tittle" key={props.store.room.id}>
           <div>
               <div># {props.store.room.name}</div>
               <div><img src={star} alt="star"/></div>
           </div>
           <div>
               <div><img src={user} alt="man"/></div>
               <div>{props.store.room.users}</div>
           </div>
           <div>
               <div><input type="text" placeholder={"Search..."}/></div>
               <div><img src={search} alt="search"/></div>
           </div>
            <div>
                <div><img src={kolo} alt="kolokol"/></div>
                <div><img src={threeDots} alt="3dot"/></div>
            </div>
        </div>
    )
}))
export default RoomViewTitle;

