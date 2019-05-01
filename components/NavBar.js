import Link from "next/link";

const NavBar = () => (
    <nav className="nav">
        <div className="container">
        <Link href="/">
            <a className="logo">
            <img src="/static/assets/img/svg/ZS-Designer-Logo.svg" />
            </a>
        </Link>
        <ul className="main-nav">
            <li>
            <Link href="/about">
                <a className="nav-links">About</a>
            </Link>
            </li>
        </ul>
        </div>
    </nav>
);

export default NavBar;
