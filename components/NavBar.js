
import Link from "next/link";

class NavBar extends  React.Component {
  state = {
    isActive: false
  };

  menuToggle = () => {
    console.log("works");
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    const classActive = this.state.isActive ? "is-active" : "";
    return (
      <div className="container">
        <nav class="navbar " role="navigation" aria-label="main navigation">
          <div class="navbar-brand nav">
            <Link href="/">
              <a className="logo">
                <img src="/static/assets/img/svg/ZS-Designer-Logo.svg" />
              </a>
            </Link>
          </div>

          <div id="navbarBasicExample" class="navbar-menu is-active">
            <div class="navbar-start" />

            <div class="navbar-end">
              <Link href="/project">
                <a className="navbar-item nav-links">Projects</a>
              </Link>
              <Link href="/about">
                <a className="navbar-item nav-links">About</a>
              </Link>
              <Link href="https://s3.us-east-2.amazonaws.com/porfolio-bucket/zory-porfolio/documents/ZoraidaSalcedo-CV-.pdf">
                <a className="navbar-item nav-links"  target="_blank">Resume</a>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
