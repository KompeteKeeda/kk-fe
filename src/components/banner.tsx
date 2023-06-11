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
    <div className="card">
      <img src={props.imageUrl} alt="" />
      <div className="banner-info">
        <h1 className="banner-title">{props.title}</h1>
        <p className="banner-desc">{props.description}</p>
        <PrimaryButton label="Register Now" />
      </div>
    </div>
  );
}

export default Banner;