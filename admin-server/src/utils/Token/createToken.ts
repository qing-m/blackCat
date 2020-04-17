import * as jwt from 'jsonwebtoken'

const secret: string = 'WHY_BLOG'
export default function createToken (user_id:number) {
    const token = jwt.sign({
        user_id: user_id
    },secret,{
        expiresIn: '24h'
    })
    return token
}