import React from "react";
import { Link } from "react-router-dom";
import "./_Quote.scss";

interface QuoteProps {
  quote: string;
}

const Quote: React.FC<QuoteProps> = ({ quote }) => {
  return (
    <section className="quote-section">
      <p>
        <q><i className="fa fa-quote-left"></i>{quote}</q>
        <Link to="/about">Learn More</Link>
      </p>
    </section>
  );
};

export default Quote;
