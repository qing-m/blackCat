import * as Router from 'koa-router';

const router = new Router();
const base_API:string = '/v1/api'

router.prefix(`${base_API}`)
router.get('/', async (ctx) => {
	ctx.body = 'welcome to home';
});

export default router