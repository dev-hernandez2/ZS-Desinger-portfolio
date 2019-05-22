import Link from "next/link";
import ClipboardJS from "clipboard/dist/clipboard";
import Layout from "../components/Layout";
import ProjectCard from "../components/projectCard";

class Index extends React.Component {
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
        <header className="m-b-150">
          <h1 className="is-main-title m-b-20">
            Hi, I’m a <span className="highlight">Product Designer</span>{" "}
            focused on user interface and experience design.
          </h1>
          <h1 className="is-main-title">
            Take a look around, drop me{" "}
            <span
              className={
                "is-black-link is-bold  clipboard " +
                (this.state.clipboard
                  ? "is-tooltip-top  tooltip is-tooltip-active"
                  : "")
              }
              data-tooltip="Email copyed to clipboard!"
              onClick={this.activateLasers}
              data-clipboard-text="zoraida.salcedo@outlook.com"
            >
              <u>a line</u>
            </span>
            , check my Linked
            <a
              href="https://www.linkedin.com/in/zoraidasalcedo"
              className="is-black-link is-aileron-bold"
              target="_black"
            >
              <u>in</u>
            </a>{" "}
            or download my{" "}
            <Link href="https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/documents/ZoraidaSalcedo-CV-.pdf">
              <a target="_blank" className="is-black-link is-bold">
                <u>CV</u>
              </a>
            </Link>
            .
          </h1>
        </header>
        <div className="columns">
          <div className="column ">
            <div className="columns is-multiline">
              <div className="column is-full">
                <h2 className="is-size-1 m-b-20">How I can help.</h2>
                <p>
                  I’ve worked with startups and small teams helping define users
                  goals, developing user experiences, and crafting suitable user
                  interfaces so that brands can grow.{" "}
                  <span className="highlight">
                    I’m currently looking for new opportunities and am available
                    for hire.
                  </span>{" "}
                  You can find a selection of projects below.
                </p>
              </div>
            </div>
            <div className="columns is-multiline section">
              <div className="column">
                <i>
                  <img src="https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/images/UX-Design-Icon.svg" />
                </i>
                <h3>UX Design</h3>
                <p className="is-size-7">
                  My focus is to understand your business goals and validate the
                  problem with your users' needs in mind.
                </p>
              </div>
              <div className="column">
                <i>
                  <img src="https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/images/UI-Design-Icon.svg" />
                </i>
                <h3>UI Design</h3>
                <p className="is-size-7">
                  I structure the design of your product by developing
                  wireframes and prototypes, and defining visual aesthetics.
                </p>
              </div>
              <div className="column">
                <i>
                  <img src="https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/images/UX-Copy-Icon.svg" />
                </i>
                <h3>UX Writing</h3>
                <p className="is-size-7">
                  I create site maps, content analysis, and write persuasive
                  copy conveying the message you want to send.
                </p>
              </div>
            </div>
          </div>
          <div className="column is-hidden-movil section">
            <img
              src="https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/images/Image-Home.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="columns is-multiline section">
          <ProjectCard imgSrc="https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/images/st/ST-Home.jpg">
            <span className="is-size-3 highlight">StayTuned</span>
            <h3 className="is-size-3 title-font">Online Management Software</h3>
            <p>
              I led the design of this dual dashboard that provides managers
              with the tools they need to manage employees and provides a better
              customer experience that provides easier collaboration.
            </p>
            <div className="columns is-multiline section p-100 ">
              <div className="column">
                {" "}
                <Link href="/project/stay-tuned">
                  <a className="button button-shadow is-danger">
                    read full case study
                  </a>
                </Link>
              </div>
              <div className="column">
                {" "}
                <p className="is-size-7">UX | UI | Product Design </p>
              </div>
            </div>
          </ProjectCard>
          <ProjectCard imgSrc="https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/images/scs/SCS-Home.jpg">
            <span className="is-size-3 highlight">Skills Creative Studios</span>
            <h3 className="is-size-3 title-font">Responsive Website Design</h3>
            <p>
              I designed this digital space that aimed to break from the typical
              fine-arts gallery format. The result is daring on aesthetics and
              effortless to use.
            </p>
            <div className="columns is-multiline section p-100 ">
              <div className="column">
                {" "}
                <Link href="/project/skills-creative-studios">
                  <a className="button button-shadow is-danger">
                    read full case study
                  </a>
                </Link>
              </div>
              <div className="column">
                {" "}
                <p className="is-size-7">UX | UI </p>
              </div>
            </div>
          </ProjectCard>
          <ProjectCard imgSrc="https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/images/h2/H2-Home.jpg">
            <span className="is-size-3 highlight">Hernandez²</span>
            <h3 className="is-size-3 title-font">
              Responsive Portfolio Design
            </h3>
            <p>
              I helped Hernandez² with the design for his portfolio and brand.
              The goal: to get a job offer as a software developer.
            </p>
            <div className="columns is-multiline section p-100 ">
              <div className="column">
                {" "}
                <Link href="/project/hernandez2">
                  <a className="button button-shadow is-danger">
                    read full case study
                  </a>
                </Link>
              </div>
              <div className="column">
                {" "}
                <p className="is-size-7">UX | UI | Visual Design </p>
              </div>
            </div>
          </ProjectCard>
        </div>
      </section>
    );
  }
}

export default Index;
