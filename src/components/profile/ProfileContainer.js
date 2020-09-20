import React, {useEffect, useState} from 'react'
import {inject, observer} from "mobx-react";
import shapeTrue from "../menu/file/shapeTrue.svg";
import shapeFalse from "../menu/file/shapeFalse.svg";
import barBut from './file/barBut2.png'

import faceIcon from './file/face.png'
import twiIcon from './file/twi.png'
import instIcon from './file/inst.png'
import inIcon from './file/in.png'

let ProfileContainer=inject('store')(observer((props)=>{

    let [profile, setProfile] = useState(props.store.profile)

    useEffect(() => {
        setProfile(props.store.profile.name!==''
            ? props.store.profile
            : props.store.my)
    }, [props.store.profile.name])


    return (
        <div className={'profile_container'} key={profile.id}>
            <div>
                <img src={profile.avatar} width={'100%'} height={"100%"} alt={'Profile`s avatar '}/>
            </div>

            <div>
                <div>{profile.name}</div>
                <div><img src={profile.status ? shapeTrue : shapeFalse} alt={'true/false'}/></div>
            </div>

            <div>
                <div>Age:</div>
                <div>{profile.age}</div>
            </div>

            <div>
                <div data={profile.facebook}><img src={faceIcon} alt="face"/></div>
                <div data={profile.twitter}><img src={twiIcon} alt="twi"/></div>
                <div data={profile.instargam}><img src={instIcon} alt="inst"/></div>
                <div data={profile.inlink}><img src={inIcon} alt="in"/></div>
            </div>

            <div>
                <div>
                    <button>Message</button>
                </div>
                <div onClick={() => document.getElementsByClassName("listBarBut")[0].classList.toggle("disable")}>
                    <img src={barBut} width={'100%'} alt="Icon of menu"/>
                </div>
                <div className={'listBarBut disable'}>
                    <div>add</div>
                    <div>add room</div>
                    <div>deleted</div>
                </div>
            </div>
            <div>
                <div>
                    <div>UserEmail</div>
                    <div>{profile.email}</div>
                </div>
                <div>
                    <div>Skype</div>
                    <div>{profile.skype}</div>
                </div>
            </div>
        </div>
    )
}))
export default ProfileContainer;
