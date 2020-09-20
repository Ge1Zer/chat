import {observable, action, decorate, computed} from 'mobx'
import {ApiSideMobx} from './api/api'

class My {

    id = null
    name = ''
    friends = []
    age = null
    avatar = ''
    rooms = []
    status=false
    email=''
    facebook=''
    inlink=''
    instargam=''
    skype=''
    twitter=''


    getMyProfile=(id)=>{
       ApiSideMobx.getMyProfile(id).then(i=>{
           this.id = i.id
           this.name = i.name
           this.friends = i.friends
           this.age = i.age
           this.avatar = i.avatar
           this.rooms = i.rooms
           this.status = true
           this.email=i.email
           this.facebook=i.facebook
           this.inlink=i.inlink
           this.instargam=i.instargam
           this.skype=i.skype
           this.twitter=i.twitter
       })
    }


}
decorate(My, {
    id:observable,
    name:observable,
    friends:observable,
    age:observable,
    avatar:observable,
    rooms:observable,
    status:observable,
    email:observable,
    facebook:observable,
    inlink:observable,
    instargam:observable,
    skype:observable,
    twitter:observable,


    getMyProfile: action,
    getMyFriend: action,
})
const my = new My();

export default my;
export { My };