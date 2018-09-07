import Document, { Head, Main, NextScript } from 'next/document'
import NavBar from '../components/NavBar'
import "../resources/sass/styles.scss"


export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
        <link rel="stylesheet" href="https://use.typekit.net/fxj8vfn.css" />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <NavBar />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}