import React from "react";
import Center from "../ui/Center";
import "../styles/event-card.scss"


interface EventProps {
  id: String;
  title: String;
  description: String,
  cover: String,
  venue: String,
  date: Date
  onClick?: () => void;
}

const EventsCard = ({
  id,
  title,
  description,
  cover,
  venue,
  date,
  onClick,
}: EventProps) => {

  const handleSubmit = () => {
  };

  return (
    <Center>
        <div className="event-card">
          <div>
            <img onClick={handleSubmit} src={cover.toString()} alt="event cover" />
          </div>
          <div className="event-content">
            <h1 className="event-title">{title}</h1>
            <p className="event-desc">{description}</p>
            <span className="key">Date : <span className="value">{String(date)}</span></span>
            <span className="key">Venue : <span className="value">{venue}</span></span>
            <a className="offset secondary-btn on-dark">More details</a><br />
          </div>
      </div>
    </Center>
  );
};

export default EventsCard;