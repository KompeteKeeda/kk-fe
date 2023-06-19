import { News } from "../model/news";
import { CommonService } from "./commonService";

export class NewsService {
    private commonService = new CommonService();

  // method to get all news
  getAllNews = async () => {
    let newsList: News[] = [];
    newsList = await this.commonService.getAgent().readAllNews(0, 10);
    return newsList;
  };

  // method to get news on the basis of id
  getNews = async (id: String) => {
    var news = await this.commonService.getAgent().readNews(id);
    return news;
  };
}