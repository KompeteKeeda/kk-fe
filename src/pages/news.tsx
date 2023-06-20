import { useEffect, useState } from "react";
import { NewsLetter } from "../components/newsLetter"
import "../styles/news.scss"
import { News } from "../model/news";
import { NewsService } from "../services/newsService";
import parse from 'html-react-parser';
import Banner from "../components/banner";

export const NewsPage = () => {

  const newsService = new NewsService();

  const [news, setNews] = useState<News>();

  useEffect(() => {
    const url_path = window.location.href;
    const news_id = url_path.substring(url_path.lastIndexOf('/') + 1);
    // Function to make the API call
    const fetchNews = async () => {
      try {
        const response = await newsService.getNews(news_id);
        if (response.Err === undefined) {
          setNews(response.ok);
        }
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchNews();
  });

  return (
    <div>
      <Banner
      title="Join the Desi PUBG revolution"
      description="Conquer the battleground with 'Desi Power'!"
      imageUrl="https://ik.imagekit.io/kompeteKeeda/1186797.jpg?updatedAt=1686496354756"
      redirectUrl="djksbffkb"
      buttonText="Register Now"
      bannerSize="sm" />
      {(news !== undefined) ? (
        <>
          <h1>
            {news.title}
          </h1>
          <img style={{ background: "white", color: "black" }} src={news.coverUrl.toString()} alt="news_cover"></img>
          <h5 >
            {parse((news.content).toString())}
          </h5>
          <NewsLetter></NewsLetter>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}