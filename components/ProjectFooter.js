import Link from 'next/link'
import ClipboardJS from 'clipboard/dist/clipboard'


class ProjectFooter extends React.Component {

    state = {
        clipboard: false
    }
    activateLasers = () => {
        new ClipboardJS('.clipboard');
        this.setState({clipboard: true });
        setTimeout(() => {
            this.setState({clipboard: false });
        }, 1000)
    }

    render(){
     let {project} = this.props
        return (
            <section className="section" >
                <section className="columns">
                    <section className="column">
                        <nav className="project-footer">
                            <li>
                                <Link href="/project/think-telic">
                                    <a className={(project == 'ThinkTelic') ? "active" : undefined}>Think Telic <span className="regular-font">/2016-Present</span></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/project/skills-creative-studios">
                                    <a className={(project == 'SkillsCreativeStudios') ? "active" : undefined}>Skills Creative Studios <span className="regular-font">/2017</span></a>
                                </Link>
                            </li>
                            <li>
                                 <Link href="/project/hernandez2">
                                    <a className={(project == 'Hernandez2') ? "active" : undefined}> Hernandez2 <span className="regular-font">/2017</span></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/project/collection-projects">
                                    <a className={(project == 'Identities&Designs') ? "active" : undefined}>Identities & Designs <span className="regular-font">/2015-Present</span></a>
                                </Link>
                            </li>
                        </nav>
                    </section>
                </section>
                 <section className="columns">
                    <section className="column is-4 is-offset-8">
                        <div className=""><p>Questions? Send me <span className={"is-bold highlight  clipboard" + (this.state.clipboard ? "is-tooltip-top  tooltip is-tooltip-active" : "")} data-tooltip="Email copyed to clipboard!"  onClick={this.activateLasers.bind(this)} data-clipboard-text="zoraida.salcedo@outlook.com"><u>an email</u></span>, check my Linked <a href="https://www.linkedin.com/in/zoraidasalcedo/" target="_blank" className="is-bold highlight" ><u>in</u></a> or download my <a href="/static/ZoraidaSalcedo-CV.pdf" target="_blank" className="is-bold highlight" ><u>CV</u></a>.</p></div>
                    </section>
                </section>
        
            </section>
        )

    }
} 


export default ProjectFooter
