import GlobalStyle from '../theme/GlobalStyle';
import CustomCursor from '../components/CustomCursor';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <CustomCursor />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
