import { Actor, HttpAgent, Identity } from "@dfinity/agent";
import { idlFactory as mainIDL } from "../dids/main.did";
import { Canister } from "../utils/secrets";

export class CommonService {
  identity: Identity | Promise<Identity> | undefined = undefined;

  getAgent(): any {
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

  createSubscriptionEmail = async (email : String) => {
    await this.getAgent().createSubEmail(email);
  };
}
