import {observable, action, decorate} from 'mobx'
import {ApiSideMobx} from "./api/api";

class Room {
     id = null
     name = ''
     total = null
     users = null
     messages = []


     getRoom=(id)=>{
         ApiSideMobx.getRoom(id).then(r => {
             this.id = r.id
             this.name = r.name
             this.total = r.totalMessage
             this.users = r.totalUsers
         })
    }

    getMessages=(roomId,page, del)=>{
      switch (del){
          case 'push':
              return ApiSideMobx.getMessages(roomId, page).then(r => { this.messages = [...this.messages, ...r] })
          case 'del':
              return this.messages=[]
          default :
              return ApiSideMobx.getMessages(roomId, page).then(r => { this.messages = [...r] })
      }
    }


    sendMessagesItem=(roomId,dataRoom)=>{
        ApiSideMobx.sendMessagesItem(roomId,dataRoom).then(r => {
            this.messages.unshift(r)
        })
    }
    sendMessagesTotal=(roomId,dataRoom)=>{
        ApiSideMobx.sendMessagesTotal(roomId,dataRoom).then(r => {
            this.total = r.totalMessage
        })
    }
}
decorate(Room, {
    id:observable,
    name:observable,
    total:observable,
    users:observable,
    messages:observable,

    getRoom: action,
    sendMessages: action,
    getMessages: action,
})
const room = new Room();

export default room;
export { Room };