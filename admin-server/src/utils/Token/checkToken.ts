import * as jwt from 'jsonwebtoken'

const secret: string = 'WHY_BLOG'

export default async function checkToken(ctx:any,next:any) {
    const token = ctx.get('token')
    let tokenContent
    try {
        tokenContent = await jwt.verify(token,secret)
        return next();
    } catch (err){
        console.log(err)
        ctx.throw(500)
    }
}