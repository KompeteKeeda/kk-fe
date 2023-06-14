import { Identity } from "@dfinity/agent";
import { getAuthClient } from "../utils/auth";
import { nfidLogin } from "../utils/auth";

const AuthService = (function () {

  let identity: Identity | Promise<Identity> | undefined = undefined;

  const login = async () => {
    if (identity === undefined) {
      var authClient = await getAuthClient();
      identity = await nfidLogin(authClient);
      return identity;
    } else {
      alert("Already LoggedIn!");
    }
  };

})();

export default AuthService;
