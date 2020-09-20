import React, {useEffect} from "react";
import ListRoomContainer from "./ListRoom/ListRoomContainer";
import ListFriendContainer from "./ListFriend/ListFriendContainer";
import ListSetting from "./ListSetting/ListSettingContainer";
import {inject, observer} from "mobx-react";

let MenuContainer=inject('store')(observer((props)=>{

    useEffect(()=>{
        let LocalUser=localStorage.getItem('user')

        if(!LocalUser){
            localStorage.setItem('user', '1')
            LocalUser=localStorage.getItem('user')
        }
        props.store.my.getMyProfile(LocalUser)
    },[])

    return(
        <div className={'menu_container'}>
           <ListSetting />
           <ListRoomContainer />
           <ListFriendContainer />
        </div>
    )
}))
export default MenuContainer