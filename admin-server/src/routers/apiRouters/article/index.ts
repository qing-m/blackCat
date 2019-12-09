import * as Router from 'koa-router';
import Article from '../../../contraoller/article'
import checkToken from '../../../utils/Token/checkToken'

const articleApi = new Router()

articleApi.get('/getArticleList' ,checkToken, Article.getArticleList)

export default userApi