
import ClipboardJS from 'clipboard/dist/clipboard'
import Layout from '../components/Layout'

class About extends React.Component {

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
    
        return (
            <section className="section">
                <header className="bottom-highlight m-b-50">
                <div class="columns">
                    <div class="column is-three-quarters-widescreen">
                    <div className="columns">
                        <div className="column"><h1  className="is-main-title highlight">Nice to meet you, I’m Zoraida. </h1></div>
                    </div>
                    <div className="columns is-multiline section">
                    <div className="column is-half">
                        <h2 className="highlight is-sub-title is-bold">What I do</h2>
                        <p>I define users goals, and develop identities to craft suitable user interfaces so that brands can grow.</p>
                    </div>
                    <div className="column is-half">
                        <h2 className="highlight is-sub-title is-bold">My focus is to… </h2>
                        <p>Design stories that empathize with your customers, transforming the way they see you, and hopefully changing the way you see them too.</p>
                    </div>
                    <div className="column is-half">
                        <h2 className="highlight is-sub-title is-bold">Why I do it</h2>
                        <p>I've done many things in my life, design just happens to be my vocation.  <span className="highlight">I want to keep challenging my self with awesome work that provides me the opportunity to positively affect people.</span></p>
                    </div>
                    <div className="column is-half">
                        <h2 className="highlight is-sub-title is-bold">Little details</h2>
                        <p>I am very enthusiastic about learning new things.  I'm a history buff, a video game geek, an aspiring peripatetic who has had the privilege to live in: Puerto Rico, Mexico, and currently: <span className="highlight">Dayton, Ohio</span>.</p>
                    </div>
                    </div>
                    </div>
                    <div class="column is-one-quarter-desktop is-hidden-movil zory-back">
                    </div>
                </div>
                </header>
                <section>
                <div class="columns">
                    <div class="column">
                        <div className="columns">
                            <div className="column"><h2  className="is-sub-title highlight is-bold has-text-centered">A little more about me: </h2></div>
                        </div>
                        <div className="columns section">
                            <div className="column">
                                <h2 className="is-sub-title highlight is-bold">Certifications:</h2>
                                <p>Growth-Driven Design Agency Certified <span className="regular-font">(Hubspot)</span></p>
                                <p>Certified Ecommerce Marketing Specialist <span className="regular-font">(DigitalMarketer)</span></p>
                                <p>Social Media Marketing <span className="regular-font">(CDP)</span></p>
                                <p>Social Media Marketing & Online Reputation Management <span className="regular-font">(CDP)</span></p>
                            </div>
                            <div className="column ">
                                <h2 className="is-sub-title highlight is-bold">Skills:</h2>
                                <p>Research  & Strategy</p>
                                <p>Visual Identity Systems</p>
                                <p>User  Experience Design</p>
                                <p>User Interface Design</p>
                                <p>Digital Product Design</p>
                                <p>Brand Development</p>
                                <p>Graphic Design</p>
                                <p>Copywriting</p>
                            </div>
                            <div className="column ">
                                <h2 className="is-sub-title highlight is-bold">Talks:</h2>
                                <p>How to design product pages that get you more sales  <span className="regular-font">(Shopify Meetup PR 2017)</span></p>
                                <p>Starting at the End  <span className="regular-font">(Google Developers Group PR - Women Techmakers 2017)</span></p>
                                <p>Accessibility for Web Designers and Developers <span className="regular-font">(Google Developers Group PR - DevFest 2016)</span></p>

                                <div className="columns p-t-35">
                                    <div className="column ">
                                        <h2 className="is-sub-title highlight is-bold">Contact:</h2>
                                        <p className={"clipboard is-size-5-mobile " + (this.state.clipboard ? "is-tooltip-top  tooltip is-tooltip-active" : "")} data-tooltip="Email copyed to clipboard!"  onClick={this.activateLasers.bind(this)} data-clipboard-text="zoraida.salcedo@outlook.com">zoraida.salcedo@outlook.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>

            </section>
        ) 

     }
}


export default About
