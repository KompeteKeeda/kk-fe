import logo from "../assets/Group 3logo.png"
import "../styles/header.scss"
import "../styles/kk.scss"
import { Actor, HttpAgent, Identity } from "@dfinity/agent";
import { getAuthClient } from "../utils/auth";
import { nfidLogin } from "../utils/auth";
import { idlFactory as mainIDL } from "../dids/main.did";
import { Canister } from "../utils/secrets";


export const Header = () => {

  let identity: Identity | Promise<Identity> | undefined = undefined;
  const login = async () => {
    if (identity === undefined) {
      var authClient = await getAuthClient();
      identity = await nfidLogin(authClient);
      console.log((identity.getPrincipal()).toString())
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
  return (
    <div className="header">
      <img src={logo}></img>
      <div className="action">
        {/* <button className="secondary-btn">
          <span>Register</span>
        </button> */}
        <a className="offset secondary-btn on-dark" href="#">Register Now</a><br />

        
        <a className="offset primary-btn on-dark" href="#">Login</a><br />

      </div>
    </div>
  )
}