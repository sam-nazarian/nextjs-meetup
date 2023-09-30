import Layout from '../components/layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      {/* pageProps is for the props that the pages will get */}
      {/* Component is the content of the actual pages */}
    </Layout>
  );
}

export default MyApp;
