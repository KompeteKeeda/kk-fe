import logo from "../assets/Group 3logo.png"
import "../styles/header.scss"

export const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="img-pos" src={logo}></img>
        {/* <div className="buttons"> */}
        <button className="action_btn_reg" > Register </button>
        <button className="action_btn_login" > Login </button>
      {/* </div>                       */}
      </div>
      {/* <div className="buttons">
        <button className="action_btn" > Login </button>
        <button className="action_btn" > Register </button>
      </div> */}
    </div>
  )
}