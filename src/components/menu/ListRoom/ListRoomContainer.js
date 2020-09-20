import React from "react";
import {inject, observer} from "mobx-react";
import Link from "react-router-dom/Link";

let ListRoomContainer=inject('store')(observer((props)=>{

    return (
        <div className={'menu_list_rooms_container'}>
            <div className="menu_title_rooms">
                <div>channels</div>
                <div>{props.store.my.rooms.length}</div>
            </div>
            <div className="menu_list_rooms">
                {
                    props.store.my.rooms.map(i =>
                        <div>
                            <Link to={`/rooms/${i.id}`}># {i.name}</Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
}))
export default ListRoomContainer