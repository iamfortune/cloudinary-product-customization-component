import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

function EntryPoint({ Component, pageProps }) {
  return <Component {...pageProps} />
};

export default EntryPoint;