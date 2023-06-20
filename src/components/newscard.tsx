import Center from "../ui/Center";
import "../styles/news-card.scss"
import { useState } from "react";
import { News } from "../model/news";
import parse from 'html-react-parser'

interface CardProps {
  id: String;
  title: String;
  description: String,
  cover: String,
  onClick?: () => void;
}

const NewsCard = ({
  id,
  title,
  description,
  cover,
  onClick,
}: CardProps) => { 

  return (
    <Center>
      <div className="news-card" style={{ background: "white", color: "black" }}>
        <img src={cover.toString()} alt="news cover"></img>
        <div className="news-content">
          <div className="news-info">
            <p className="news-title">{title}</p>
            <p className="news-desc">{parse(description.slice(0, 170))}...</p>
          </div>
          <button onClick={onClick}>Read More</button>
        </div>
      </div>
    </Center>
  );
};

export default NewsCard;