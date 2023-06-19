import { useEffect, useState } from "react";
import coverImage from "../assets/pubg.jpeg"
import { NewsLetter } from "../components/newsLetter"
import { CommonService } from "../services/commonService";
// import { News } from "../model/news"
import "../styles/news.scss"
import { News } from "../model/news";
import { title } from "process";
import Banner from "../components/banner";

export const NewsPage = () => {

  const commonService = new CommonService();

  const [news, setNews] = useState<News>();

  useEffect(() => {
    const url_path = window.location.href;
    const news_id = url_path.substring(url_path.lastIndexOf('/') + 1);
    // Function to make the API call
    const fetchNews = async () => {
      try {
        const response = await commonService.getNews(news_id);
        if (response.Err == undefined) {
          setNews(response.ok);
        }
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchNews();
  }, []);

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
            {news.content}
          </h5>
          <NewsLetter></NewsLetter>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}