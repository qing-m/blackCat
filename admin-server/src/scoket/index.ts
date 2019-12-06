import * as socketIo from 'socket.io';
import logger from './Logger'

export const appSocket = (server: any) => {

  const io = socketIo(server);

  io.on('connection', (socket: any) => {
    const socketId = socket.id;
    logger.log(`connection socketId: ${socketId} connection time：${new Date().toLocaleString()}`)
    console.log(`connection socketId: ${socketId} connection time：${new Date().toLocaleString()}`)
  });
};