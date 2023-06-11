import React from "react";
import Banner from "../components/banner";
import { idlFactory as mainIDL } from "../dids/main.did";
import { Canister } from "../utils/secrets";
import { Actor, HttpAgent, Identity } from "@dfinity/agent";
import { getAuthClient } from "../utils/auth";
import { nfidLogin } from "../utils/auth";
import NewsCard from "../components/newscard";
import EventsCard from "../components/eventscard";


const Home = () => {

  //TODO:Frontend
  let identity: Identity | Promise<Identity> | undefined = undefined;
  const login = async () => {
    if (identity == undefined) {
      var authClient = await getAuthClient();
      identity = await nfidLogin(authClient);
      console.log((identity.getPrincipal()).toString())
    } else {
      alert("Already LoggedIn!");
    }
  };

  const getNews = async () => {
    if (identity == undefined) {
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
      />
      <EventsCard
        title="Pubg Event"
        description="The highly anticipated matchup brought together these talented players known for their exceptional skills and charismatic personalities...The highly anticipated matchup brought together these talented players known for their exceptional skills and charismatic personalities."
        cover="/pubg.jpeg"
        venue="Noida"
        date={date}
      />
    </div>
  );
};

export default Home;