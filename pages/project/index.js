import Layout from "../../components/Layout";
import ProjectCard from "../../components/projectCard";

export default class index extends React.Component {
  render() {
    return (
      <section className="section">
        <header>
          <h1 className="is-main-title m-b-20">
            Selected projects.{" "}
            <span className="highlight">That show what I can do.</span>{" "}
          </h1>
        </header>
        <div className="columns is-multiline section">
          <ProjectCard imgSrc="https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/images/st/ST-Work.jpg">
            <h3 className="is-size-4 p-t-35">
              Management software solution for StayTuned
            </h3>
            <div className="column is-full">
              <div className="columns">
                <div className="column is-one-fifth">
                  <span className="is-size-7">CLIENT</span>
                </div>
                <div className="column">
                  <span className="has-text-left is-size-7">StayTuned</span>
                </div>
              </div>
              <div className="columns">
                <div className="column is-one-fifth">
                  <span className="is-size-7">PROCESS</span>
                </div>
                <div className="column">
                  <span className="has-text-left is-size-7">
                    Research, structure, UX/UI design, user testing and
                    iterations
                  </span>
                </div>
              </div>
              <div className="columns">
                <div className="column is-one-fifth">
                  <span className="is-size-7">SOLUTION </span>
                </div>
                <div className="column">
                  <span className="has-text-left is-size-7">
                    Two dashboard where build to provide management and clients
                    the resources they needed to work productively together
                  </span>
                </div>
              </div>
              <div className="columns">
                <div className="column is-one-fifth">
                  <span className="is-size-7">OUTCOME </span>
                </div>
                <div className="column">
                  <span className="has-text-left is-size-7">
                    Significant engagement and data entry, positive end-user
                    involvement, 55% time saving per enrollment
                  </span>
                </div>
              </div>
            </div>
            <div className="columns is-multiline section p-100 ">
              <div className="column">
                {" "}
                <a className="button button-shadow is-danger">
                  read full case study
                </a>
              </div>
              <div className="column">
                {" "}
                <p className="is-size-7">(00 minute read)</p>
              </div>
            </div>
          </ProjectCard>
          <ProjectCard imgSrc="https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/images/scs/SCS-Work.jpg">
            <h3 className="is-size-4 p-t-35">
              Skills Creative Studios Website
            </h3>
            <div className="column is-full">
              <div className="columns">
                <div className="column is-one-fifth">
                  <span className="is-size-7">CLIENT</span>
                </div>
                <div className="column">
                  <span className="has-text-left is-size-7">
                    Skills Creative Studios
                  </span>
                </div>
              </div>
              <div className="columns">
                <div className="column is-one-fifth">
                  <span className="is-size-7">PROCESS</span>
                </div>
                <div className="column">
                  <span className="has-text-left is-size-7">
                    Research, structure, UX and UI design
                  </span>
                </div>
              </div>
              <div className="columns">
                <div className="column is-one-fifth">
                  <span className="is-size-7">SOLUTION </span>
                </div>
                <div className="column">
                  <span className="has-text-left is-size-7">
                    This website encompasses diverse art forms and structures
                    them in such a way they become an extention of their
                    physical location
                  </span>
                </div>
              </div>
              <div className="columns">
                <div className="column is-one-fifth">
                  <span className="is-size-7">OUTCOME </span>
                </div>
                <div className="column">
                  <span className="has-text-left is-size-7">
                    Achived brand recognition in the local art landscape, and
                    open international opportunities for artists
                  </span>
                </div>
              </div>
            </div>
            <div className="columns is-multiline section p-100 ">
              <div className="column">
                {" "}
                <a className="button button-shadow is-danger">
                  read full case study
                </a>
              </div>
              <div className="column">
                {" "}
                <p className="is-size-7">(00 minute read) </p>
              </div>
            </div>
          </ProjectCard>
          <ProjectCard imgSrc="https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/images/h2/H2-Work.jpg">
            <h3 className="is-size-4 p-t-35">Hernandez2 Website</h3>
            <div className="column is-full">
              <div className="columns">
                <div className="column is-one-fifth">
                  <span className="is-size-7">CLIENT</span>
                </div>
                <div className="column">
                  <span className="has-text-left is-size-7">W. Hernandez</span>
                </div>
              </div>
              <div className="columns">
                <div className="column is-one-fifth">
                  <span className="is-size-7">PROCESS</span>
                </div>
                <div className="column">
                  <span className="has-text-left is-size-7">
                    Research, structure, brand development, UX and UI design
                    SOLUTION This website serves as the portfolio for W.
                    Hernandez, a software developer looking for new
                    opportunities
                  </span>
                </div>
              </div>
              <div className="columns">
                <div className="column is-one-fifth">
                  <span className="is-size-7">OUTCOME </span>
                </div>
                <div className="column">
                  <span className="has-text-left is-size-7">
                    Gained recognition in his industry, landed a job within
                    three months of launching
                  </span>
                </div>
              </div>
            </div>
            <div className="columns is-multiline section p-100 ">
              <div className="column">
                {" "}
                <a className="button button-shadow is-danger">
                  read full case study
                </a>
              </div>
              <div className="column">
                {" "}
                <p className="is-size-7">(00 minute read)</p>
              </div>
            </div>
          </ProjectCard>
          <ProjectCard imgSrc="https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/images/Collection-Work.jpg">
            <h3 className="is-size-4 p-t-35">
              Identity <span className="highlight">&</span>Designs Selected Work
            </h3>
            <div className="column is-half p-b-t-50">
              <h4 className="is-size-3">
                A collection of various design projects.
              </h4>
            </div>
            <div className="columns is-multiline section p-100 ">
              <div className="column">
                {" "}
                <a className="button button-shadow border-highlight">
                  view collection
                </a>
              </div>
              <div className="column">
                {" "}
                <p className="is-size-7" />
              </div>
            </div>
          </ProjectCard>
        </div>
      </section>
    );
  }
}
