import * as Router from 'koa-router';

import { userRoute } from './apiRouters'

const router = new Router();

const base_API:string = '/v1/api'
router.prefix(`${base_API}`)

router.get('/',(ctx)=>{
	ctx.body = 'Hello, welcome to Home'
})

router.use(userRoute.routes(),userRoute.allowedMethods())

export default router