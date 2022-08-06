import Router from '@/router';
import Header from '@/components/Header';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  )
}

export default App;
