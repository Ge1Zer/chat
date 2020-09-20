import React, {useEffect} from 'react'
import {Route,withRouter} from "react-router-dom";
import RoomViewContainer from "./view/RoomViewContainer";

let RoomContainer=(props)=>{

    useEffect(()=>{
        props.location.pathname === '/'
        | props.location.pathname === '/room'
        && props.history.push('/rooms/home')
    },[])

    return (
        <Route path={'/rooms/:id'}
               component={RoomViewContainer}/>
        )
}
export default withRouter(RoomContainer);

