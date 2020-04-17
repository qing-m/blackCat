import * as socketIo from 'socket.io';
import * as request from 'request-promise';

import { ServicesContext } from './content/index'
import logger from './Logger';

export const appSocket = (server: any) => {
  const {
    userService,
    chatService,
  } = ServicesContext.getInstance();

  const io = socketIo(server);

  io.on('connection', (socket: any) => {
    const socketId = socket.id;
    logger.log(`connection socketId: ${socketId} connection time：${new Date().toLocaleString()}`);


    // 机器人聊天
    socket.on('robotChat', async (data:any, fn:any) => {
      try {
        const date = {
          key: '92febb91673740c2814911a6c16dbcc5',
          info: 'Hello world',
          userid: '1'
        };
        const options = {
          method: 'POST',
          uri: 'http://www.tuling123.com/openapi/api',
          body: date,
          json: true // Automatically stringifies the body to JSON
        };
        const response = await request(options);
        fn(response);
      } catch (error) {
        console.log('error', error.message);
        io.to(socketId).emit('error', { code: 500, message: error.message });
      }
    })
  });
};