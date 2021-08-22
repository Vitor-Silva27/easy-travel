import type { AppProps } from 'next/app';

import { AuthProvider } from '../contexts/AuthContext';
import GlobalStyle from '../styles/Global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </AuthProvider>
  );
}
export default MyApp;
