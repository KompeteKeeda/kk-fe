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
      <h1 className="title">{props.title}</h1>
      <h3 className="description">{props.description}</h3>
      <PrimaryButton label="Register Now" />
    </div>
  );
}

export default Banner;