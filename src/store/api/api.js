import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000/',
});

export const ApiSideMobx={
    getMyProfile(id){
       return instance.get(`/profiles/${id}`).then(i=> i.data)
    },
    getProfile(id){
        return instance.get(`/profiles/${id}`).then(i => i.data)
    },
    getRoom(id){
        return instance.get(`/rooms/${id}`).then(i=> i.data)
    },
    getMessages(id,page){
        return instance.get(`/rooms/${id}/messages?_sort=id&_order=DESC&_limit=4&_page=${page}/`).then(i=> i.data)
    },
    sendMessagesTotal(roomId,dataRoom){
        return instance.patch(`/rooms/${roomId}`,{...dataRoom}).then(i=> i.data)
    },
    sendMessagesItem(mess){
        return instance.post(`/messages`,{...mess}).then(i=> i.data)
    }
}