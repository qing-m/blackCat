import * as http from 'http';
import * as Koa from 'koa';
import { createServer } from 'http';
import { appSocket } from './scoket'

export class Server {
	static app: Koa;
	static server: http.Server;

	static init(cb: (app: Koa) => any) {
		if(!Server.app) {
			Server.app = new Koa();

			if(cb) { cb(Server.app); }
		}
		return Server
	}

	static createServer() {
    Server.server = createServer(Server.app.callback());
    return Server;
	}
	
	static run(port: string) {
		appSocket(Server.server)

		let listenPort = this.normalizePort(port)
		let callback = Server.server.listen(listenPort)
		callback.on('listening',() => this.onListenIng(Server.server))
		callback.on('error', (error) => this.onError(Server.server, error))
    return Server;
	}
	
	static async createConnection() {
    return Server;
  }

	private static onListenIng (server: http.Server):void {
		console.log(`Listening on ${this.bind(server.address())}`)
	}

	private static onError (server: http.Server, error: any): void {
		if (error['syscall'] !== 'listen') {
      throw error;
		}
		switch (error['code']) {
      case 'EACCES':
        console.warn(`requires elevated privileges`);
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.warn(`port is already in use`);
        process.exit(1);
        break;
      default:
        throw error;
    }
	}

  private static normalizePort(port: string): number | string | boolean {
		const parsedPort = parseInt(port, 10);
    if (isNaN(parsedPort)) {
      return port;
    }
    if (parsedPort >= 0) {
      return parsedPort;
    }
    return false;
	}
	
	private static bind(addr: string | any): string {
		return typeof addr === 'string'
			? `pipe ${addr}`
      : `port http://localhost:${addr.port}`;
  }
}






























// import * as Koa from 'koa';
// import * as cors from 'koa-cors';
// import * as bodyParser from 'koa-bodyparser';
// import router from './router/router'
// import './scoket/index'

// const Port:number = 3300
// const app = new Koa();

// app.use(cors())
// app.use(bodyParser())
// app.use(router.routes());

// app.listen(Port, ()=>{
// 	console.log(`Server running on port ${Port}`)
// })