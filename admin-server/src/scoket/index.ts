import * as socketIo from 'socket.io';
import logger from './Logger';

export const appSocket = (server: any) => {
  const io = socketIo(server);
  var friendsList:any = []
  io.on('connection', (socket: any) => {
    const socketId = socket.id;
    logger.log(`connection socketId: ${socketId} connection time：${new Date().toLocaleString()}`);
    console.log(`客服端${socket.id}链接`)
    socket.on('addUserName',(req:any)=>{
      friendsList.push(req)
      socket.name = req.name
      console.log(friendsList)
      io.emit('getUserFriends',friendsList)
    })

    socket.on('disconnect',()=>{
      console.log(`客服端${socket.id}断开链接`)
      let index = friendsList.findIndex((v:any)=>{v===socket.name})
      friendsList.splice(index,1)
      io.emit('getUserFriends',friendsList)
    })
  });
};