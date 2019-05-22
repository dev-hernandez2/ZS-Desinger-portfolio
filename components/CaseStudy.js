import Link from "next/link";
import ProjectCard from "./projectCard";

const getProjestBackGroundColor = color => {
  let bgColor = "";

  switch (color) {
    case "ThinkTelic":
      bgColor = "think-telic";
      break;
    case "SkillsCreativeStudios":
      bgColor = "skills";
      break;
    case "Hernandez2":
      bgColor = "h2";
      break;
    default:
      bgColor = undefined;
  }

  return bgColor;
};

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

    <div className="columns is-multiline section ">
      <div className="column is-half">
        <h3 className="is-size-4 aileron-bold ">Background</h3>
        {project.background}
      </div>
      <div className="column is-half">
        <h3 className="is-size-4 aileron-bold ">The Problem</h3>
        {project.theProblem}
      </div>
      {!project.personas ? (
        <div className="column is-full">
          <h3 className="is-size-4 aileron-bold ">Discovery</h3>
          <p>{project.discovery}</p>
        </div>
      ) : (
        <>
          <div className="column is-full">
            <h3 className="is-size-4 aileron-bold ">Defining Personas</h3>
            <p>{project.personas.definingPersonas}</p>
          </div>
          <div className="columns is-multiline">
            <div className="column is-one-third">
              <h3 className="is-size-4 aileron-bold ">User Personas</h3>
              {project.personas.userPersonas}
            </div>
            <div className="column">
              <img src={project.personas.imgSrc} alt="" />
            </div>
          </div>
        </>
      )}
    </div>
    <div className="columns section bottom-highlight m-b-50">
      <div className="column ">
        <h3 className="is-size-4 aileron-bold ">Step 1: Defining goals</h3>
        <p>{project.steps.one}</p>
      </div>
      <div className="column ">
        <h3 className="is-size-4 aileron-bold ">
          Step 2: Uncovering Pain Points
        </h3>
        <p>{project.steps.two}</p>
      </div>
      <div className="column ">
        <h3 className="is-size-4 aileron-bold ">Step 3: Determining Value</h3>
        <p>{project.steps.three}</p>
      </div>
    </div>
    <div className="columns is-multiline section bottom-highlight m-b-50">
      <div className="column is-full">
        <h3 className="is-size-4 aileron-bold ">UX Design</h3>
        {project.uxDesign}
      </div>
      <div className="column is-full">{project.map}</div>
      <div className="column is-three-fifths is-offset-one-fifth">
        <img src={project.mapImg.src} alt="" />
      </div>
      {!project.wireframes ? (
        " "
      ) : (
        <>
          <div className="column is-full">
            <h3 className="is-size-4 aileron-bold ">Wireframes</h3>
            <p>{project.wireframes.body}</p>
          </div>
          <div className="column is-full">
            <div className="columns">
              {project.wireframes.imgs.map(img => (
                <div className="column">
                  <img src={img} alt="" />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
    <div className="columns is-multiline section m-b-50">
      {!project.visualDesign ? (
        " "
      ) : (
        <>
          <div className="column is-full ">
            <h3 className="is-size-4 aileron-bold ">Visual Design</h3>
            <p>{project.visualDesign.body}</p>
          </div>

          {project.notShow ? (
            <div className="column is-full">
              <img src={project.visuals.src} alt="" />
            </div>
          ) : (
            <>
              {project.whatIdDo.showSection && (
                <section
                  className={
                    "project-details " +
                    getProjestBackGroundColor(project.whatIdDo.company.color)
                  }
                >
                  {project.whatIdDo.company.isMedia ? (
                    <figure className="company-logo">
                      <img
                        src={project.whatIdDo.company.logo}
                        alt="Home-ThinkTelic-Image"
                      />
                    </figure>
                  ) : (
                    <h2 className="company-name">
                      {project.whatIdDo.company.name}
                    </h2>
                  )}
                  <p className="m-b-50">{project.whatIdDo.role}</p>
                  {project.whatIdDo.description}

                  {project.whatIdDo.hasBtn && (
                    <div class="buttons has-addons is-centered">
                      <a
                        href={project.whatIdDo.btnLink}
                        target="_blank"
                        className="hvr-shadow download-btn"
                      >
                        Brand Guidelines
                        <span className="icon-t">
                          <i class="far fa-arrow-alt-circle-down" />
                        </span>
                      </a>
                    </div>
                  )}
                </section>
              )}
              <section className="is-paddingless">
                <div className="columns">
                  <figure>
                    <div className="column is-paddingless">
                      <img
                        src={project.imagesPresentation.src[0]}
                        alt="Home-ThinkTelic-Image"
                      />
                    </div>
                  </figure>
                </div>

                {!project.imagesPresentation.hasOnlyOneImage && (
                  <div className="columns last-image">
                    <div className="column is-paddingless last-image">
                      <figure>
                        <img
                          src={project.imagesPresentation.src[1]}
                          alt="Home-ThinkTelic-Image"
                        />
                      </figure>
                    </div>
                    <div className="column is-paddingless last-image">
                      <figure>
                        <img
                          src={project.imagesPresentation.src[2]}
                          alt="Home-ThinkTelic-Image"
                        />
                      </figure>
                    </div>
                  </div>
                )}
              </section>
            </>
          )}
        </>
      )}
      <div className="column is-full section">
        <h3 className="is-size-4 aileron-bold ">Outcomes</h3>
        {project.outcomes}
      </div>
      <ProjectCard imgSrc={project.linkCard.img}>
        <div className="column is-8 p-b-t-50 ">
          <h4 className="is-size-3 p-t-35">{project.linkCard.body}</h4>
        </div>
        <div className="columns is-multiline section p-100 ">
          <div className="column">
          <Link href={project.linkCard.linkHref}>
            <a className="button button-shadow border-highlight" target="_blank">
              {project.linkCard.linkTxt}{" "}
              {/* <i class="far fa-arrow-alt-circle-down"> </i> */}
            </a>
            </Link>
          </div>
          <div className="column">
            <p className="is-size-7" />
          </div>
        </div>
      </ProjectCard>
    </div>
  </section>
);

export default CaseStudy;
