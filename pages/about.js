import ClipboardJS from "clipboard/dist/clipboard";
import Layout from "../components/Layout";

class About extends React.Component {
  state = {
    clipboard: false
  };
  activateLasers = () => {
    new ClipboardJS(".clipboard");
    this.setState({ clipboard: true });
    setTimeout(() => {
      this.setState({ clipboard: false });
    }, 1000);
  };

  render() {
    return (
      <section className="section">
        <header className="bottom-highlight m-b-50">
          <div className="columns">
            <div className="column">
              <h1 className="is-main-title highlight">
                Nice to meet you, I’m Zoraida.{" "}
              </h1>
            </div>
          </div>
          <div className="columns">
            <div className="column ">
              <div className="columns is-multiline section">
                <div className="column is-full">
                  <h2 className="highlight is-sub-title is-bold">
                    My focus is to…{" "}
                  </h2>
                  <p>
                    Design stories that empathize with your customers,
                    transforming the way they see you, and hopefully changing
                    the way you see them too.
                  </p>
                </div>
                <div className="column is-full">
                  <h2 className="highlight is-sub-title is-bold">What I do</h2>
                  <p>
                    I've done many things in my life, design just happens to be
                    my vocation.{" "}
                    <span className="highlight">
                      I want to keep challenging my self with awesome work that
                      provides me the opportunity to positively affect people.
                    </span>
                  </p>
                </div>
                <div className="column is-full">
                  <h2 className="highlight is-sub-title is-bold">
                    Little details
                  </h2>
                  <p>
                    I am very enthusiastic about learning new things. I'm a
                    history buff, a video game geek, an aspiring peripatetic who
                    has had the privilege to live in: Puerto Rico, Mexico, and
                    currently: <span className="highlight"> Dayton, Ohio</span>.
                  </p>
                </div>
              </div>
            </div>
            <div className="column is-hidden-movil section">
              <img
                src="https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/images/About-Photos.png"
                alt=""
              />
            </div>
          </div>
        </header>
        <section>
          <div className="columns">
            <div className="column">
              <div className="columns">
                <div className="column">
                  <h2 className="is-sub-title highlight is-bold has-text-centered">
                    A little more about me:{" "}
                  </h2>
                </div>
              </div>
              <div className="columns section">
                <div className="column ">
                  <div className="columns is-multiline">
                  <div className="column is-full">
                      <h2 className="is-sub-title highlight is-bold">
                      Education:
                      </h2>
                      <p className="is-bold">
                      BFA - Digital Art and Design
                      </p>
                      <p><span className="is-bold">| Motion Minor </span> <span className="regular-font">(EAPD)</span></p>
                    </div>
                    <div className="column is-full">
                      <h2 className="is-sub-title highlight is-bold">
                        Certifications:
                      </h2>
                      <p>
                        <span className="is-bold">Growth-Driven Design Agency Certified</span>{" "}
                        <span className="regular-font">(Hubspot)</span>
                      </p>
                      <p>
                      <span className="is-bold">Certified Ecommerce Marketing Specialist</span>{" "}
                        <span className="regular-font">(DigitalMarketer)</span>
                      </p>
                      <p>
                      <span className="is-bold">Social Media Marketing</span>{" "}
                        <span className="regular-font">(CDP)</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="column ">
                  <h2 className="is-sub-title highlight is-bold">Skills:</h2>
                  <p className="is-bold">Research & Strategy</p>
                  <p className="is-bold">User Experience Design</p>
                  <p className="is-bold">User Interface Design</p>
                  <p className="is-bold">Digital Product Design</p>
                  <p className="is-bold">Visual Identity Systems</p>
                  <p className="is-bold">Brand Development</p>
                  <p className="is-bold">Graphic Design</p>
                  <p className="is-bold">Copywriting</p>
                </div>
                <div className="column ">
                  <h2 className="is-sub-title highlight is-bold">Talks:</h2>
                  <p>
                  <span className="is-bold">How to design product pages that get you more sales </span>{" "}
                    <span className="regular-font">
                      (Shopify Meetup PR 2017)
                    </span>
                  </p>
                  <p>
                  <span className="is-bold">Starting at the End</span>{" "}
                    <span className="regular-font">
                      (Google Developers Group PR - Women Techmakers 2017)
                    </span>
                  </p>
                  <p>
                  <span className="is-bold"> Accessibility for Web Designers and Developers</span>{" "}
                    <span className="regular-font">
                      (Google Developers Group PR - DevFest 2016)
                    </span>
                  </p>

                  <div className="columns p-t-35">
                    <div className="column ">
                      <h2 className="is-sub-title highlight is-bold">
                        Contact:
                      </h2>
                      <p
                        className={
                          "clipboard is-size-5-mobile " +
                          (this.state.clipboard
                            ? "is-tooltip-top  tooltip is-tooltip-active"
                            : "")
                        }
                        data-tooltip="Email copyed to clipboard!"
                        onClick={this.activateLasers.bind(this)}
                        data-clipboard-text="zoraida.salcedo@outlook.com"
                      >
                        zoraida.salcedo@outlook.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default About;
