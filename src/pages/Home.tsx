import Banner from "../components/banner";
import NewsCard from "../components/newscard";
import EventsCard from "../components/eventscard";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  var date = new Date("2016-01-04");

  return (
    <div>
      <Banner
        title="Join the Desi PUBG revolution"
        description="Conquer the battleground with 'Desi Power'!"
        imageUrl="https://ik.imagekit.io/kompeteKeeda/1186797.jpg?updatedAt=1686496354756"
        redirectUrl="djksbffkb"
        buttonText="Register Now" />
      <NewsCard
        title="Epic Showdown: Desi Gaming Sensations Battle for Esports Supremacy"
        description="The highly anticipated matchup brought together these talented players known for their exceptional skills and charismatic personalities..."
        cover="/pubg.jpeg"
        onClick={() => { navigate(`/news`) }}
      />
      <EventsCard
        title="Pubg Event"
        description="The highly anticipated matchup brought together these talented players known for their exceptional skills and charismatic personalities...The highly anticipated matchup brought together these talented players known for their exceptional skills and charismatic personalities."
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