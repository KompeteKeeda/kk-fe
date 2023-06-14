import Center from "../ui/Center";

import { News } from "../pages/news";
import { Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom'
import "../styles/news-card.scss"

interface CardProps {
  title: string;
  description: string,
  cover: string,
  onClick?: () => void;
}

const NewsCard = ({
  title,
  description,
  cover,
  onClick,
}: CardProps) => {

  const handleSubmit = () => {

  };

  return (
    <Center>
        <div className="news-card" style={{ background: "white", color: "black" }}>
          <img src={cover} alt="news cover"></img>
          <div className="news-content">
            <div className="news-info">
              <p className="news-title">{title}</p>
              <p className="news-desc">{description}</p>
            </div>
            <button onClick={onClick}>Read More</button>
          </div>
       
      </div>
    </Center>
  );
};

export default NewsCard;