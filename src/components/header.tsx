import logo from "../assets/Group 3logo.png"
import "../styles/header.scss"
import "../styles/kk.scss"
import { Identity } from "@dfinity/agent";
import { getAuthClient } from "../utils/auth";
import { nfidLogin, clientLogout } from "../utils/auth";
import { useState } from "react";

export const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let identity: Identity | Promise<Identity> | undefined = undefined;
  const login = async () => {
    if (identity === undefined) {
      setIsLoggedIn(true);
      var authClient = await getAuthClient();
      identity = await nfidLogin(authClient);
      localStorage.setItem("identity", identity.toString());
    } else {
      alert("Already LoggedIn!");
    }
  };

  const logout = async () => {
    setIsLoggedIn(false);
    identity = undefined;
    await clientLogout(await getAuthClient());
    localStorage.removeItem("identity");
  }

  return (
    <div className="header">
      <img src={logo}></img>
      <div className="action">
        <a className="offset secondary-btn on-dark">About Us</a><br />
        {/* {!isLoggedIn &&
          <h2>
            <a className="offset primary-btn on-dark" onClick={login}>Login</a><br />
          </h2>
        }
        {isLoggedIn &&
          <h2>
            <a className="offset primary-btn on-dark" onClick={logout}>Logout</a><br />
          </h2>
        } */}
      </div>
    </div>
  )
}