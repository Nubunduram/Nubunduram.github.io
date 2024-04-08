const quotes : string[] = [
    "The only way to do great work is to love what you do.",
    "Believe you can and you're halfway there.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Everything you can think of is true.",
];

const randomQuote = () : string => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
};

export { quotes, randomQuote };