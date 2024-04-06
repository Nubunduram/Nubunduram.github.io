// Quote.tsx
import React from "react";
import "./_Quote.scss";

interface QuoteProps {
  quote: string;
}

const Quote: React.FC<QuoteProps> = ({ quote }) => {
  return (
    <section className="quote-section">
      <p>
        <q><i className="fa fa-quote-left"></i>{quote}</q>
        <a>learn more</a>
      </p>
    </section>
  );
};

export default Quote;
