import React from "react";
import Banner from "../components/banner";
import { idlFactory as mainIDL } from "../dids/main.did";
import { Canister } from "../utils/secrets";
import { Actor, HttpAgent, Identity } from "@dfinity/agent";
import { getAuthClient } from "../utils/auth";
import { nfidLogin } from "../utils/auth";



const Home = () => {

    //TODO:Frontend
    let identity : Identity | Promise<Identity> | undefined = undefined;
    const login = async ()=> {
        if(identity == undefined) {
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

    return (
        <div>
            <button style={{width: 100, height: 20}} onClick={login}>Login</button>
            <button style={{width: 100, height: 20}} onClick={getNews}>callEndpoint</button>
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