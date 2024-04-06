import Header from "../components/Home/Header/Header";
import Quote from "../components/Home/Quote/Quote";
import Projects from "../components/Home/Projects/Projects";
import Contact from "../components/Home/Contact/Contact";

const quotes: string[] = ["The only way to do great work is to love what you do.", "Believe you can and you're halfway there.", "Success is not final, failure is not fatal: It is the courage to continue that counts.", "The future belongs to those who believe in the beauty of their dreams."];

const Home = () => {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomNumber];

  return (
    <main id="home" className="home">
      <Header />
      <Quote quote={randomQuote} />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
