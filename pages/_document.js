import Document, { Head, Main, NextScript } from 'next/document'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import "../resources/sass/styles.scss"


export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <NavBar />
          <div className="container">
            <Main />
          </div>
          <Footer />
          <NextScript />
          <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
        </body>
      </html>
    )
  }
}