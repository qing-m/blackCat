import * as cors from 'koa-cors';
import * as bodyParser from 'koa-bodyparser';
import router from './routers'
import config from './config/config.dev'

import { Server } from './server'

const App = Server

App.init((app)=>{
	app.use(cors());
	app.use(bodyParser());
	app.use(router.routes());
})
App.createServer()
App.createConnection()

App.run(config.port)