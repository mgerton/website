import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return <Html>
      <Head>
        <link
          rel="stylesheet"
          href="//fonts.googleapis.com/css?family=Open+Sans:300,600,700,800|Lora:400,400italic"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>;
  }
}

export default MyDocument;
