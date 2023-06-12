import Center from "../ui/Center";
import { News } from "../pages/news";
import { Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom'

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

  const navigate = useNavigate();

  const navigateToNews = () => {
    // 👇️ navigate to /contacts
    navigate('/news');
  };
  // const [showNewsComponent, setShowNewsComponent] = useState(false);
  // const handleSubmit = () => {
  //   setShowNewsComponent(true);
  // };

  return (
    <Center>
      <div style={{ background: "white", color: "black" }}>
        <h1>{title}</h1>
        <img src={cover} alt="news cover"></img>
        <p>{description}</p>
        <button style={{ width: 100, height: 20 }} onClick={onClick}>Read More</button>
      </div>
    </Center>
  );
};

export default NewsCard;