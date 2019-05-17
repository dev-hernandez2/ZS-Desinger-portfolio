const ProjectCard = ({ imgSrc, imgAlt, children }) => (
  <>
    <div className="column is-full section">
      <div className="card highlight-border">
        <div className="columns">
          <div className="column">
            <div className="card-image">
              <figure className="p-40">
                <img src={imgSrc} alt={imgAlt && ""} />
              </figure>
            </div>
          </div>
          <div className="column ">
            <div className="columns is-multiline">
              <div className="column">
                <div className="card-content">
                  <div className="content">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default ProjectCard;
