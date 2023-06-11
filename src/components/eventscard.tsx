import React from "react";
import Center from "../ui/Center";
import "../styles/event-card.scss"

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
      <div className="event-card-container">
        <div className="event-card">
          <div>
            <img onClick={handleSubmit} src={cover} alt="event cover" />
          </div>
          <div className="event-content">
            <h1 className="event-title">{title}</h1>
            <p className="event-desc">{description}</p>
            <span className="key">Date : <span className="value">{String(date)}</span></span>
            <span className="key">Venue : <span className="value">{venue}</span></span>
            <button>More details</button>
          </div>
        </div>
      </div>
    </Center>
  );
};

export default EventsCard;