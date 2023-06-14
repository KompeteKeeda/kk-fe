import Center from "../ui/Center";
import { Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom'
import "../styles/news-card.scss"
import { Actor, HttpAgent, Identity } from "@dfinity/agent";
import { idlFactory as mainIDL } from "../dids/main.did";
import { Canister } from "../utils/secrets";
import { getAuthClient } from "../utils/auth";
import { nfidLogin } from "../utils/auth";
import AuthService from "../services/authService";

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

  // const service = AuthService();

  const navigate = useNavigate();
  let identity: Identity | Promise<Identity> | undefined = undefined;
  const login = async () => {
    if (identity === undefined) {
      var authClient = await getAuthClient();
      identity = await nfidLogin(authClient);
    } else {
      alert("Already LoggedIn!");
    }
  };

  const getNews = async () => {
    if (identity === undefined) {
      alert("Login NFID!");
    }
    const agent = new HttpAgent({
      identity: identity,
      host: "https://ic0.app/",
    });
    const actor = Actor.createActor(mainIDL, {
      agent,
      canisterId: Canister.main_canister_id,
    });

    var news = await actor.readNews("test_news");
    console.log(news);
  }
  // const [showNewsComponent, setShowNewsComponent] = useState(false);
  // const handleSubmit = () => {
  //   setShowNewsComponent(true);
  // };

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