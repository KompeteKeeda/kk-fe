import { User } from "../model/user";
import { CommonService } from "./commonService";

export class UserService {
  private commonService = new CommonService();

  createUser = async (principal: String) => {
    console.log(
      await this.commonService
        .getAgent()
        .createUser(new User(principal, "", "", "", false, "", []))
    );
  };
}
