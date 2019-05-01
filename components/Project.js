import Link from 'next/link'






const getProjestBackGroundColor = (color) => { 

    let bgColor = ""

        switch(color) {
        case "ThinkTelic":
            bgColor = "think-telic"
            break
        case "SkillsCreativeStudios":
            bgColor = "skills"
            break
        case "Hernandez2":
            bgColor = "h2"
            break
        default:
            bgColor = undefined
    }

    return bgColor
}


const Project = ({project}) => (

    <section className="section">
        <header>
            <figure>
                <img src={ project.heroImage }/>           		
            </figure>
        </header>
        <section className="section">
            <div class="columns">
                <div class="column">
                <h2>Client</h2>
                <span className="regular-font">{project.client}</span>
                </div>
                <div class="column">
                <h2>Roles</h2>
                <span className="regular-font">{project.roles.join(',  ')}</span>
                </div>
                <div class="column">
                <h2>Responsibilities</h2>
                <span className="regular-font">{project.responsibilities.join(',  ')}</span>
                </div>
            </div>
        </section>
        <section className="section">
            {project.firstP}
        </section>
        <section className="has-text-centered">
            {project.media.isVideo ? 

            <>
            <iframe src={project.media.src} className="video-iframe" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            { project.media.hasCredict && <small >{project.media.credict}</small> }  
            </>
            : 
            <figure>
                <img src={ project.media.src } alt="Home-ThinkTelic-Image"/> 
                { project.media.hasCredict && <small>{project.media.credict}</small> }          		
            </figure>
            }
        </section>
        <section className="section">
            {project.secondP}
        </section>
        {project.whatIdDo.showSection && 
            <section className={"project-details " + (getProjestBackGroundColor(project.whatIdDo.company.color))}>
                {project.whatIdDo.company.isMedia ? 
                    <figure className="company-logo"> 
                        <img src={ project.whatIdDo.company.logo } alt="Home-ThinkTelic-Image"/> 
                    </figure> : 
                    <h2 className="company-name">{  project.whatIdDo.company.name }</h2>
                }
                <p className="m-b-50">{ project.whatIdDo.role }</p>
                <p>{ project.whatIdDo.description }</p>

                {project.whatIdDo.hasBtn &&  
                <div class="buttons has-addons is-centered">
                    <a href={project.whatIdDo.btnLink} target="_blank" className="hvr-shadow download-btn">
                        Brand Guidelines
                        <span className="icon-t"> 
                            <i class="far fa-arrow-alt-circle-down"></i>
                        </span>
                    </a>
                </div>
                }
            </section>
        }
        
        <section className="section">
            <div className="columns">
                <figure>
                    <div className="column is-paddingless">
                        <img src={ project.imagesPresentation.src[0] } alt="Home-ThinkTelic-Image"/>  
                    </div>		
                </figure>
            </div>
            
            {!project.imagesPresentation.hasOnlyOneImage &&
                  <div className="columns last-image">
                  <div className="column is-paddingless last-image">
                    <figure>
                        <img src={ project.imagesPresentation.src[1] } alt="Home-ThinkTelic-Image"/>  		
                    </figure>
                  </div>
                  <div className="column is-paddingless last-image">
                    <figure>
                        <img src={ project.imagesPresentation.src[2] } alt="Home-ThinkTelic-Image"/>  		
                    </figure>
                  </div>
                  </div>
             }

        </section>
        
        <section className="section">
            {project.lastP}
        </section>

         <section className="section" >
         {!project.imagesPresentation.hasOnlyOneImage ?
            <figure>
                <img src={ project.imagesPresentation.src[3] ||  project.imagesPresentation.src[2] } alt="Home-ThinkTelic-Image"/> 	
            </figure> :
            <figure >
                <img src={ project.imagesPresentation.src[1] } alt="Home-ThinkTelic-Image"/> 	
            </figure>

         }
            { (project.imagesPresentation.src[4] ) &&
             <figure className="last-image">
                 <img src={ project.imagesPresentation.src[4] || project.imagesPresentation.src[3] } alt="Home-ThinkTelic-Image"/>  		
             </figure>
            }
             
        </section>

    </section>
)

export default Project;