import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import "../styles/footer.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Footer = () => {
  return (
    <footer className='site-footer'>
      <div className="footer-container">
        <div className="about-us">
          <h4>About Us</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus euismod, faucibus metus ut, semper nibh. Aenean euismod justo eu enim dapibus suscipit.</p>
        </div>

        {/* <div className="column">

          <h4>Quick Links</h4>

          <ul>

            <li><a href="#"><i className="fa fa-angle-right"></i> Subscription</a></li>

            <li><a href="#"><i className="fa fa-angle-right"></i> Contact us</a></li>

            <li><a href="#"><i className="fa fa-angle-right"></i> Bug report</a></li>

          </ul>

        </div> */}

        <div className="socials">
          <h4>Connect with Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100093211183839" target="_blank"><FacebookIcon></FacebookIcon></a>
            <a href="https://www.instagram.com/kompetekeeda/" target="_blank"><InstagramIcon></InstagramIcon></a>
            <a href="https://twitter.com/kompete_keeda" target="_blank"><TwitterIcon></TwitterIcon></a>
          </div>
        </div>
      </div>
      <p className="copyright">© 2023 All Rights & Wrongs Reserved
      </p>
    </footer>
  )
}