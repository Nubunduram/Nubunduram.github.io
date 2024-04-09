import { useState, useEffect } from 'react';
import "./_Presentation.scss";

const Presentation = () => {
  const [paragraphIndex, setParagraphIndex] = useState(0);
  const paragraphs = [
    "👋 A passionate and self-taught web developer. Over the past years, I discovered the world of web development, learning from various classes, professionals, and my own project experiences. Before joining a class to get a diploma.",
    "🚀 My journey involves working closely with a talented web designer friend, where I take his creative concepts and transform them into functional websites. This collaborative challenge is incredibly fun and enriching, offering me the opportunity to continuously learn and refine my skills.",
    "💡 I focus on front-end technologies, HTML, CSS, JS, React, TypeScript, Scss, and more. But I want to learn more from the tech i already know and also learn new tech like Vue, Angular, Docker, Back-end Technologies...",
    "🌍 Originally from France, I am fluent in both English and French, allowing me to comfortably communicate and work in either language. I also have basis in German and am wheeling to learn more.",
    "🔍 While my professional journey has seen me in diverse roles from restaurant management to brewing, I've found my true passion in web development. Guided by the principle of delivering the best possible results, I approach each project with a commitment to excellence.",
    "🤝 Currently benefiting from the mentorship of a web designer and a software engineer, each with over five years of industry experience, I'm continually learning. Together, we're building a collaborative space where knowledge flows freely, and each challenge becomes an opportunity for growth.",
    "✨ If you're looking for a dedicated web developer who values quality and creativity, let's connect! I'm excited about the possibilities that lie ahead and i am excited to contribute my skills to meaningful projects."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setParagraphIndex(prevIndex => (prevIndex + 1) % paragraphs.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setParagraphIndex(prevIndex => (prevIndex + 1) % paragraphs.length);
  };

  const handlePrevious = () => {
    setParagraphIndex(prevIndex =>
      !prevIndex ? paragraphs.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="presentation" id="presentation">
      <p>{paragraphs[paragraphIndex]}</p>
      <div className='buttons'>
        <button onClick={handlePrevious}><i className="fa-solid fa-2x fa-arrow-left"></i></button>
        <button onClick={handleNext}><i className="fa-solid fa-2x fa-arrow-right"></i></button>
      </div>
    </section>
  );
};

export default Presentation;
