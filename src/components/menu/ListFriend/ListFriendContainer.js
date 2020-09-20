import React from "react";
import {inject, observer} from "mobx-react";
import shapeFalse from './../file/shapeFalse.svg'
import shapeTrue from '../file/shapeTrue.svg'
import ListFriendItem from "./ListFriendItem";

let ListFriendContainer=inject('store')(observer((props)=>{


    let getFriendId=(event)=>{
        props.store.profile.getProfile(event.currentTarget.attributes.data.value)
    }

    return(
        <div className={'menu_list_friends_container'}>
            <div className="menu_title_friends">
                <div>FRIENDS</div>
                <div>{props.store.my.friends.length}</div>
            </div>

            <div className="menu_list_friends">
                {props.store.my.friends.map(i =>
                    <ListFriendItem i={i} getFriendId={getFriendId} />
                )}
            </div>

        </div>
    )
}))
export default ListFriendContainer