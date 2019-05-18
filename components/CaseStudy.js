import Link from "next/link";

const CaseStudy = ({ project }) => (
  <section className="section">
    <header>{project.title}</header>
    <div className="columns is-multiline section bottom-highlight m-b-50">
      <div className="column is-half">{project.about}</div>
      <div className="column is-half">
        <h5 className="is-size-6">TEAM</h5>
        <p className="is-size-6 regular-font">{project.details.team}</p>
        <h5 className="is-size-6">DURATION</h5>
        <p className="is-size-6 regular-font">{project.details.duration}</p>
        <h5 className="is-size-6">RESPONSIBILITIES</h5>
        <p className="is-size-6 regular-font">
          {project.details.responsibilities}
        </p>
        <h5 className="is-size-6">CONTRIBUTION</h5>
        <p className="is-size-6 regular-font">{project.details.contribution}</p>
        <h5 className="is-size-6">CHALLENGE</h5>
        <p className="is-size-6 regular-font">{project.details.challenge}</p>
        <h5 className="is-size-6">TOOLS</h5>
        <p className="is-size-6 regular-font">{project.details.tools}</p>
      </div>
    </div>

    <div className="columns is-multiline section bottom-highlight m-b-50">
      <div className="column is-half">
        <h3 className="is-size-4 aileron-bold ">Background</h3>
        {project.background}
      </div>
      <div className="column is-half">
        <h3 className="is-size-4 aileron-bold ">The Problem</h3>
        {project.theProblem}
      </div>
      {!project.personas ? (
        " "
      ) : (
        <>
          <div className="column is-full">
            <h3 className="is-size-4 aileron-bold ">Defining Personas</h3>
            <p>{project.personas.definingPersonas}</p>
          </div>
          <div className="columns is-multiline">
            <div className="column is-one-third">test</div>
            <div className="column">
                <img
                src={project.personas.imgSrc}
                alt=""
                />
            </div>
          </div>
        </>
      )}
    </div>
  </section>
);

export default CaseStudy;
