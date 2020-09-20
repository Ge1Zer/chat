import shapeTrue from "../file/shapeTrue.svg";
import shapeFalse from "../file/shapeFalse.svg";
import React from "react";

let ListFriendItem=({i, getFriendId})=>{
    return(
        <div onClick={getFriendId} data={i.profileId} className={'menu_item_friends'}>
            <div>
                <img src={i.status?shapeTrue:shapeFalse} alt={'true/false'}/></div>
            <div>
                <img src={i.avatar} alt="" width={'100%'} height={'100%'}/></div>
            <div>{i.name}</div>
        </div>
    )
}
export default ListFriendItem;