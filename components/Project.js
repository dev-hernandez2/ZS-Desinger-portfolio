import Link from 'next/link'

const Project = ({project}) => (

    <section className="section">
        <header>
            <figure>
                <img src={ project.heroImage } alt="Home-ThinkTelic-Image"/>           		
            </figure>
        </header>
        <section className="section">
            <div class="columns">
                <div class="column">
                <h2>Client</h2>
                <p>{project.client}</p>
                </div>
                <div class="column">
                <h2>Roles</h2>
                {project.roles.join(',  ')}
                </div>
                <div class="column">
                <h2>Responsibilities</h2>
                {project.responsibilities.join(',  ')}
                </div>
            </div>
        </section>
        <section className="section">
            {project.firstP}
        </section>
        <section>
            {project.media.isVideo ? 

            <>
            <iframe src={project.media.src} width="100%" height="800px" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            { project.media.hasCredict && <small>{project.media.credict}</small> }  
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
        <section>
            {project.whatIdDo.company.isMedia ?  <img src={ project.whatIdDo.company.logo } alt="Home-ThinkTelic-Image"/>  : <h2>{  project.whatIdDo.company.name }</h2> }
            <h2>{ project.whatIdDo.role }</h2>
            <p>{ project.whatIdDo.description }</p>
        </section>
            
        <section className="section">
            <figure>
                <img src={ project.imagesPresentation.src[0] } alt="Home-ThinkTelic-Image"/>  		
            </figure>
            {!project.imagesPresentation.hasOnlyOneImage &&
                  <div class="columns">
                  <div class="column is-paddingless">
                    <figure>
                        <img src={ project.imagesPresentation.src[1] } alt="Home-ThinkTelic-Image"/>  		
                    </figure>
                  </div>
                  <div class="column is-paddingless">
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
            <figure >
                <img src={ project.imagesPresentation.src[3] || project.imagesPresentation.src[2] } alt="Home-ThinkTelic-Image"/> 	
            </figure>
            { (project.imagesPresentation.src[4] || project.imagesPresentation.src[3]) &&
            <figure>
                 <img src={ project.imagesPresentation.src[4] || project.imagesPresentation.src[3] } alt="Home-ThinkTelic-Image"/>  		
             </figure>
            }
             
        </section>

    </section>
)

export default Project;