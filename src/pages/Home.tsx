import Banner from "../components/banner";
import NewsCard from "../components/newscard";
import EventsCard from "../components/eventscard";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  var date = new Date("2016-01-04");

  return (
    <div>
      <NewsCard
        title="hitesh"
        description="Here is a card for you guys, yuse ti phatephully"
        cover="/pubg.jpeg"
        onClick={() => { navigate(`/news`) }}
      />
      <EventsCard
        title="Pubg Event"
        description="Here is a Event Card for you guys, use it faithfully!"
        cover="/pubg.jpeg"
        venue="Noida"
        date={date}
      />
      <Banner
        title="Join the Desi PUBG revolution"
        description="Conquer the battleground with 'Desi Power'!"
        imageUrl="dhjbf"
        redirectUrl="djksbffkb"
        buttonText="Register Now" />
    </div>
  );
};

export default Home;