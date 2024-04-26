import "./_Quote.scss";

interface QuoteProps {
  quote: string;
}

const Quote: React.FC<QuoteProps> = ({ quote }) => {
  return (
    <section className="quote-section">
      <p>
        <q><i className="fa fa-quote-left"></i>{quote}</q>
      </p>
    </section>
  );
};

export default Quote;
