import {observable, action, decorate} from 'mobx'
import {ApiSideMobx} from "./api/api";

class Profile {
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

    getProfile=(id)=>{
        ApiSideMobx.getProfile(id).then(r => {
            this.id = r.id
            this.name = r.name
            this.friends = r.friends
            this.age = r.age
            this.avatar = r.avatar
            this.rooms = r.rooms
            this.status = r.status
            this.email=r.email
            this.facebook=r.facebook
            this.inlink=r.inlink
            this.instargam=r.instargam
            this.skype=r.skype
            this.twitter=r.twitter
        })
    }
}
decorate(Profile, {
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

    getProfile: action,
})
const profile = new Profile();

export default profile;
export { Profile };