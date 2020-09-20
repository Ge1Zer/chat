import React from 'react';
import './App.scss';
import MenuContainer from "./components/menu/MenuContainer";
import RoomContainer from "./components/room/RoomContainer";
import ProfileContainer from "./components/profile/ProfileContainer";

let App=()=> {

  return (
    <div className="App">
        <MenuContainer />
        <RoomContainer />
        <ProfileContainer />
    </div>
  );
}

export default App;
