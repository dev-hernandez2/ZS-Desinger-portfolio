import Document, { Head, Main, NextScript } from 'next/document'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'



export default class MyDocument extends Document {
  render() {
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