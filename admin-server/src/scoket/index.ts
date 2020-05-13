import * as socketIo from 'socket.io';
import logger from './Logger';

export const appSocket = (server: any) => {
  const io = socketIo(server);
  io.on('connection', (socket: any) => {
    const socketId = socket.id;
    logger.log(`connection socketId: ${socketId} connection time：${new Date().toLocaleString()}`);
    console.log(`客服端${socket.id}链接`)

    socket.on('msg',(data:any,fn:any)=>{
      fn(data)
    })

    socket.on('disconnect',()=>{
      console.log(`客服端${socket.id}断开链接`)
    })
  });
};