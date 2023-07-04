import "../styles/banner.scss";

interface BannerProps {
  title: string;
  description: string;
  imageUrl: string;
  redirectUrl: string;
  // buttonText: string;
  bannerSize: string
}

const Banner: React.FC<BannerProps> = (props) => {
  return (
    <div>
      {props.bannerSize == "lg" &&
        <div className="card">
          <img src={props.imageUrl} alt="" />
          <div className="banner-info">
            <h1 className="banner-title">{props.title}</h1>
            <p className="banner-desc">{props.description}</p>
            <a className="offset primary-btn" href="">Coming Soon...</a><br />
          </div>
        </div>
      } {props.bannerSize == "sm" &&
        <div className="card small-card">
          <img src={props.imageUrl} alt="" />
          <div className="banner-info">
            <div>
              <h1 className="banner-title">{props.title}</h1>
              <p className="banner-desc">{props.description}</p>
            </div>
            <a className="offset primary-btn" href="">Coming Soon...</a>
          </div>
        </div>
      }
    </div>
  )
}

export default Banner;