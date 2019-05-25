import { Carousel } from "react-responsive-carousel";

const ProjectSlider = ({ project }) => (
  <>
    <section className="m-b-35">
      <div class="columns">
        <div class="column">
          <h2 className="aileron-bold">Client</h2>
          <span className="regular-font">{project.client}</span>
        </div>
        <div class="column">
          <h2 className="aileron-bold">Roles</h2>
          <span className="regular-font">{project.roles.join(",  ")}</span>
        </div>
        <div class="column">
          <h2 className="aileron-bold">Responsibilities</h2>
          <span className="regular-font">
            {project.responsibilities.join(",  ")}
          </span>
        </div>
      </div>
    </section>
    <section className="m-b-35">{project.firstP}</section>
    <section className="m-b-35">
      <div>
        <Carousel showThumbs={false} dynamicHeight>
          {project.carousel.map(image => (
            <div>
              <img src={image.src} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  </>
);

export default ProjectSlider;
