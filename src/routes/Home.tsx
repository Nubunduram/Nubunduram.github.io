import Header from '../components/Home/Header/Header';
import Quote from '../components/Home/Quote/Quote';
import Projects from '../components/Home/Projects/Projects';
import Contact from '../components/Home/Contact/Contact';
import * as quotes from '../utils/quotes';

const Home = () => {
  return (
    <main id="home" className="home">
      <Header />
      <Quote quote={quotes.randomQuote()} />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
