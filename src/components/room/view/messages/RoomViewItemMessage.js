import React from 'react'

let RoomViewItemMessage=({i,getFriendId})=>{

    let {profileId,avatar, name, text, listPhoto,number} = i

    return(
        <div className={"room_view_item_message"} key={number}>

            <div onClick={getFriendId} data={profileId} className={'avaUser'}>
                <img src={avatar} alt="avatar" width={"100px"} height={"100px"}/>
            </div>
            <div className={'textMess'}>
                <div><div>{name}</div><div>{i.date.hours}:{i.date.minute}</div></div>
                <div>{text}</div>
                <div>
                    {
                     listPhoto.length !== 0 &&
                     listPhoto.map(i => <div key={i.id}><img src={i.src} alt="" width={"100%"}/></div>)
                    }
                </div>
            </div>
        </div>
    )
}
export default RoomViewItemMessage;

