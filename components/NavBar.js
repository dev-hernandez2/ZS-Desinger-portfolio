import Link from 'next/link'


const NavBar = () => (
    <nav className="navbar is-transparent">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        logo
      </a>
      <div className="navbar-burger burger" data-target="navbarToggle">
      <span></span>
      <span></span>
      <span></span>
    </div>
    </div>
  
    <div id="navbarToggle" className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item">
        <Link href="/">
            <a className="navbar-item">
            About
            </a>
        </Link>
        </div>
      </div>
    </div>
  </nav>
)


export default NavBar
