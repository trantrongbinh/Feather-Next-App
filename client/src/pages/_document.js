import Document, { Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  render() {
    return (
      <html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default CustomDocument;
