import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ThemeToggle from '../components/ThemeToggle';
import { MouseEvent, useState } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [page, setPage] = useState('Portofolio');

  const togglePage = (e: MouseEvent) => {
    setPage((page: string) => {
      e.preventDefault();
      if (page === 'Portofolio') {
        router.push('/resume');
        return 'Resume';
      } else {
        router.push('/portofolio');
        return 'Portofolio';
      }
    });
    //do redirect here
  };

  const FloatButton = () => (
    <button onClick={togglePage} className={'float-btn ' + page}>
      {page === 'Portofolio' ? 'Resume' : 'Portofolio'}
    </button>
  );

  return (
    <div className={`container`}>
      <Component {...pageProps} />
      <FloatButton />
    </div>
  );
}

export default MyApp;
