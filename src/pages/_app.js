import '../app/globals.css';
import Head from 'next/head'; // Adjust the path if necessary

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/vercel.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;