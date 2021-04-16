import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang="ko">
        <Head/>
        <body className="bg-gradient-to-r from-green-400 to-blue-500">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument