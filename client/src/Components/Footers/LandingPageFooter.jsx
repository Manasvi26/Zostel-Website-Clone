import "./LandingPageFooter.css";
const LandingPageFooter = () => {
  const handleClick = (e) => {};

  return (
    <>
      <div>
        <div className="main">
          <div className="submain">
            <div>
              <p className="socialhead">USEFUL LINKS</p>
              <div className="start">
                <div>
                  <a style={{ textDecoration: "none" }} href="/">
                    Zostel Homes
                  </a>
                  <br />
                  <a href="/">#ITravel Green</a>
                  <br />
                  <a href="/">Guest Policies</a>
                  <br />
                  <a href="/">Privacy Policy</a>
                  <br />
                  <a href="/">Careers</a>
                  <br />
                </div>
                <div>
                  <a href="/">Destinations</a>
                  <br />
                  <a href="/">Franchise</a>
                  <br />
                  <a href="/">Contact Us</a>
                  <br />
                  <a href="/">Cookie Policy</a>
                  <br />
                  <a href="/">Passport</a>
                  <br />
                </div>
                <div>
                  <a href="/">Community Manager</a>
                  <br />
                  <a href="/">About Us</a>
                  <br />
                  <a href="/">Support</a>
                  <br />
                  <a href="/">T & C</a>
                  <br />
                  <a href="/">COVID-19 FAQs</a>
                  <br />
                </div>
              </div>
            </div>
            <div className="mid">
              <p className="socialhead">SUBSCRIBE</p>
              <div className="subscribe">
                <div className="intro">
                  <input
                    id="first"
                    className="first"
                    type="text"
                    placeholder="First Name"
                  />
                  <input
                    id="last"
                    className="first"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>

                <input
                  id="email"
                  className="inp"
                  type="email"
                  placeholder="Please leave your Email"
                />

                <div>
                  <button
                    onClick={(e) => {
                      handleClick(e);
                    }}
                    className="btn"
                    type="button"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
            <div className="end">
              <p className="socialhead">SOCIAL</p>
              <div className="social">
                <a
                  className="face"
                  href="https://www.facebook.com/Zostel/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
                <a
                  className="insta"
                  href="https://www.facebook.com/Zostel/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                <a
                  className="twi"
                  href="https://www.facebook.com/Zostel/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
                <a
                  className="you"
                  href="https://www.facebook.com/Zostel/"
                  target="_blank"
                  rel="noreferrer"
                >
                  YouTube
                </a>
              </div>
              <div className="rights">Zostel © 2022. All Rights Reserved</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LandingPageFooter;
