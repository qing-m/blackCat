import * as jwt from 'jsonwebtoken'

const secret: string = 'WHY_BLOG'

export default async function checkToken(ctx:any,next:object) {
    const XToken = ctx.get('X-Token')
    let tokenContent
    try {
        tokenContent = await jwt.verify(XToken,secret)
    } catch (err){
        if(err.message === 'jwt expired') {
            ctx.body = {
                message: 'token已经过期'
            }
        } else {
            console.log(err)
            ctx.throw(500)
        }
    }
}