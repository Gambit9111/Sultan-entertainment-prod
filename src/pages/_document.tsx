import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>   
      <body className='bg-myBlack scrollbar-none'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}