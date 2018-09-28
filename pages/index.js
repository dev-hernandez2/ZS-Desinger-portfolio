import Link from 'next/link'
import ClipboardJS from 'clipboard/dist/clipboard'





class Index extends React.Component  {
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
        return(
            <section className="section">
                <header className="m-b-150">
                <h1 className="is-main-title m-b-20"> 
                        Hi, I’m a <span className="highlight">Visual &#38; Brand Designer</span> focused on user interface and experience design.
                </h1>
                <h1 className="is-main-title">
                    Take a look around, drop me <span className={"is-black-link is-bold  clipboard " + (this.state.clipboard ? "is-tooltip-top  tooltip is-tooltip-active" : "")} data-tooltip="Email copyed to clipboard!"  onClick={this.activateLasers.bind(this)} data-clipboard-text="zoraida.salcedo@outlook.com"><u>a line</u></span>, check my Linked<a href="https://www.linkedin.com/in/zoraidasalcedo" className="is-black-link is-aileron-bold" target="_black"><u>in</u></a> or download my <a href="#" className="is-black-link is-bold"><u>CV</u></a>.
                </h1>
                </header> 
                
                <div className="columns is-multiline">
                
                    <div className="column is-half">
                        <div className="grid">
                            <figure className="effect-sadie">
                                <img src="/static/assets/img/Home-ThinkTelic-Image.jpg" alt="Home-ThinkTelic-Image"/>
                                <figcaption>
                                    <h2 className="highlight">Think Telic</h2>
                                    <p>Brand Identity &#38; UX/UI Design</p>
                                    <Link href="/project/think-telic">
                                        <a>View more about Think Telic</a> 
                                    </Link>
                                </figcaption>			
                            </figure>
                        </div>
                    </div>
                     <div className="column is-half">
                        <div className="grid">
                            <figure className="effect-sadie">
                                <img src="/static/assets/img/Home-Hernandez2-Image.jpg" alt="Home-ThinkTelic-Image"/>
                                <figcaption>
                                    <h2 className="highlight">Hernandez2</h2>
                                    <p>Personal Brand & UX/UI Design</p>
                                    <Link href="/project/hernandez2">
                                        <a>View more about Hernandez2 </a> 
                                    </Link>
                                </figcaption>			
                            </figure>
                        </div>
                    </div>
                    <div className="column is-half">
                        <div className="grid">
                            <figure className="effect-sadie">
                                <img src="/static/assets/img/Home-Skills-Image.jpg" alt="Home-ThinkTelic-Image"/>
                                <figcaption>
                                    <h2 className="highlight">Skills Creative Studios</h2>
                                    <p>UX/UI Design</p>
                                    <Link href="/project/skills-creative-studios">
                                        <a>View more about Skills Creative Studios </a> 
                                    </Link>
                                </figcaption>			
                            </figure>
                        </div>
                    </div>
                     <div className="column is-half">
                        <div className="grid">
                            <figure className="effect-sadie">
                                <img src="/static/assets/img/Home-collection.jpeg" alt="Home-ThinkTelic-Image"/>
                                <figcaption>
                                    <h2 className="highlight">Identities &#38; Designs</h2>
                                    <p>A collection of various design projects</p>
                                    <Link href="/project/collection-projects">
                                        <a>View more about Skills Creative Studios </a> 
                                    </Link>
                                </figcaption>			
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        )

    }

} 


export default Index
