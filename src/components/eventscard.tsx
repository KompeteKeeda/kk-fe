import React from "react";
import Center from "../ui/Center";

interface CardProps {
  title: string;
  description: string,
  cover: string,
  venue: string,
  date: Date
  onClick?: () => void;
}

const EventsCard = ({
  title,
  description,
  cover,
  venue,
  date,
  onClick,
}: CardProps) => {

    const handleSubmit = () => {

    };

  return (
    <Center>
      <div style={{background: "yellow", color: "red", display: "flex", }}>
        <div>
            <img onClick={handleSubmit} src={cover} alt="event cover" />
        </div>
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <h2>Date : {String(date)}</h2>
            <h2>Venue : {venue}</h2>
        </div>
      </div>
    </Center>
  );
};

export default EventsCard;