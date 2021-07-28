import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <link
            rel="stylesheet"
            href={require('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap')}
          /> */}

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="../assets/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={require('../assets/favicon/favicon-32x32.png')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={require('../assets/favicon/favicon-16x16.png')}
          />
          <link
            rel="manifest"
            href={require('../assets/favicon/site.webmanifest')}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
