import { ArticleService } from '../../service/index'
class Article {
	static async getArticleList() {
		return ArticleService.name
	}
}

export default Article