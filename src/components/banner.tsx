import "../styles/banner.scss";
import PrimaryButton from "./primary-buttton";

interface BannerProps {
  title: string;
  description: string;
  imageUrl: string;
  redirectUrl: string;
  buttonText: string;
}

const Banner: React.FC<BannerProps> = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.imageUrl} alt="" />
        <div className="banner-info">
          <h1 className="banner-title">{props.title}</h1>
          <p className="banner-desc">{props.description}</p>
          {/* <PrimaryButton label="Register Now" /> */}
          <a className="offset primary-btn" href="#">Register Now</a><br />
          {/* <a className="offset secondary-btn" href="#">Register Now</a><br /> */}

          <p>
            {/* <a href="#" className="black-offset-button">Offset Button</a> */}

          </p>
        </div>
      </div>


      <div className="card small-card">
        <img src={props.imageUrl} alt="" />
        <div className="banner-info">
          <div>
            <h1 className="banner-title">{props.title}</h1>
            <p className="banner-desc">{props.description}</p>
          </div>
          <a className="offset primary-btn" href="#">Register Now</a>
        </div>
      </div>
    </div>


  );
}

export default Banner;