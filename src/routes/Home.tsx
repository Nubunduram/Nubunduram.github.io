import Quote from '../components/Home/Quote/Quote';
import Projects from '../components/Home/Projects/Projects';
import Contact from '../components/Home/Contact/Contact';
import * as quotes from '../utils/quotes';
import HomeHeader from '../components/Home/HomeHeader/HomeHeader';
import Presentation from '../components/Home/Presentation/Presentation';
import SkillsSection from '../components/Home/SkillsSection/SkillsSection';

const Home = () => {
  return (
    <main id="home" className="home">
      <HomeHeader />
      <Presentation />
      <SkillsSection />
      <Quote quote={quotes.randomQuote()} />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
