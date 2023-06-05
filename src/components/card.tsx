import React from "react";
import Center from "../ui/Center";

interface CardProps {
  title: string;
  description: string,
  cover: string,
  onClick?: () => void;
}

const Card = ({
  title,
  description,
  cover,
  onClick,
}: CardProps) => {

    const handleSubmit = () => {

    };

  return (
    <Center>
      <div style={{background: "white", color:"black"}}>
        <h1>{title}</h1>
        <img src={cover} alt="news cover"></img>
        <p>{description}</p>
        <button style={{width:100, height:20}} onClick={handleSubmit}>Read More</button>
      </div>
    </Center>
  );
};

export default Card;