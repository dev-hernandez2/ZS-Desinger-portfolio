import Link from 'next/link'

const ProjectFooter = ({ project }) => (
    <section className="section" >
        <section className="columns">
            <section className="column">
                <nav className="project-footer">
                    <li>
                        <Link href="/">
                            <a className={(project == 'ThinkTelic') && "active"}>Think Telic <span className="regular-font">/2016-Present</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a className={(project == 'SkillsCreativeStudios') && "active"}>Skills Creative Studios <span className="regular-font">/2017</span></a>
                        </Link>
                    </li>
                    <li>
                         <Link href="/">
                            <a className={(project == 'Hernandez2') && "active"}> Hernandez2 <span className="regular-font">/2017</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a className={(project == 'Identities&Designs') && "active"}>Identities & Designs <span className="regular-font">/2015-Present</span></a>
                        </Link>
                    </li>
                </nav>
            </section>
        </section>
         <section className="columns">
            <section className="column is-4 is-offset-8">
                <div className=""><p>Questions? Send me <a href="#" className="is-bold highlight" ><u>an email</u></a>, check my Linked <a href="#" className="is-bold highlight" ><u>in</u></a> or download my <a href="#" className="is-bold highlight" ><u>CV</u></a>.</p></div>
            </section>
        </section>

    </section>
)


export default ProjectFooter
