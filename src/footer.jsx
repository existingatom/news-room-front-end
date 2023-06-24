import { Icon } from '@iconify/react'
import './footer.css'

function Footer() {
  return (
    <footer>
      <div className="main-content">
        <div className="left box">
          <h2 className="lineneed">NEWSROOM</h2>
          <div className="content">
            <div className="content2">For more information, please contact us through our contact form. We are trying to get better with each step. Help us improve!</div>
            <div className="social">
              <div className="fb"><a href="https://facebook.com/newsroom"><Icon icon="ic:baseline-facebook" className="fbicon" /></a></div>
              <div className="fb"><a href="https://instagram.com/newsroom"><Icon icon="mdi:instagram" className="fbicon" /></a></div>
              <div className="fb"><a href="https://youtube.com/c/newsroom"><Icon icon="mdi:youtube" className="fbicon" /></a></div>
            </div>
          </div>
        </div>

        <div className="center box">
          <h2 className="lineneed">Address</h2>
          <div className="content">
            <div className="place">
              <Icon icon="ic:outline-home" />
              <span className="text">NIT, Silchar</span>
            </div>
            <div className="phone">
              <Icon icon="ph:phone" />
              <span className="text">+089-765432100</span>
            </div>
            <div className="email">
              <Icon icon="ic:outline-email" />
              <span className="text">abc@example.com</span>
            </div>
          </div>
        </div>

        <div className="right box">
          <h2 className="lineneed">Contact us</h2>
          <div className="content">
            <div className="last">
              <form action="#">
                <div className="email">
                  <div className="text">Email *</div>
                  <input type="email" required className="inputs" />
                </div>
                <div className="msg">
                  <div className="text">Message *</div>
                  <input type="text" required className="inputs" />
                </div>
                <div className="btn">
                  <button type="submit" className="send">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <center>
          <span className="credit">Created By <a href="/">NEWSROOM</a> | </span>
          <span className="far fa-copyright"></span><span> 2023 All rights reserved.</span>
        </center>
      </div>
    </footer>
  );
}

export default Footer;