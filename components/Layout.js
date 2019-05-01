// import Footer from './Footer'
import Head from "next/head";
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import "../resources/sass/styles.scss";

class Layout extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <html lang="en">
                <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link rel="stylesheet" href="/_next/static/style.css" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                </Head>
                <body>
                    <NavBar />
                    <div className="container">
                        { children } 
                    </div>
                    <Footer />
                    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
                </body>
            </html>
        );
    }
}

export default Layout;
