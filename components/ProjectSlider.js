import { Carousel } from "react-responsive-carousel";

const ProjectSlider = ({ project }) => (
  <>
    <section className="section">
      <div class="columns">
        <div class="column">
          <h2>Client</h2>
          <span className="regular-font">{project.client}</span>
        </div>
        <div class="column">
          <h2>Roles</h2>
          <span className="regular-font">{project.roles.join(",  ")}</span>
        </div>
        <div class="column">
          <h2>Responsibilities</h2>
          <span className="regular-font">
            {project.responsibilities.join(",  ")}
          </span>
        </div>
      </div>
    </section>
    <section className="section">{project.firstP}</section>
    <section className="section">
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
