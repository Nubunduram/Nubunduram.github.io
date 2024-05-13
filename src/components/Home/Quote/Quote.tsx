import "./_Quote.scss";
import { faQuoteRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface QuoteProps {
  quote: string;
}

const Quote: React.FC<QuoteProps> = ({ quote }) => {
  return (
    <section className="quote-section">
      <p>
        <q><FontAwesomeIcon icon={faQuoteLeft} />{quote}<FontAwesomeIcon icon={faQuoteRight} /></q>
      </p>
    </section>
  );
};

export default Quote;
