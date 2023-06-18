import { Actor, HttpAgent, Identity } from "@dfinity/agent";
import { idlFactory as mainIDL } from "../dids/main.did";
import { Canister } from "../utils/secrets";
import { News } from "../model/news";

export class CommonService {
  identity: Identity | Promise<Identity> | undefined = undefined;
  constructor() {}

  private getAgent(): any {
    const agent = new HttpAgent({
      identity: this.identity,
      host: "https://ic0.app/",
    });
    const actor = Actor.createActor(mainIDL, {
      agent,
      canisterId: Canister.main_canister_id,
    });
    return actor;
  }

  // method to get all news
  getAllNews = async () => {
    let newsList: News[] = [];
    newsList = await this.getAgent().readAllNews(0, 10);
    return newsList;
  };

  // method to get news on the basis of id
  getNews = async (id: String) => {
    var news = await this.getAgent().readNews(id);
    return news;
  };
}
