import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carou.css';

const CardCarousel = () => {

  const visa = <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M27.565 15.31C26.7902 15.0277 25.9713 14.886 25.1467 14.8917C22.48 14.8917 20.5967 16.235 20.5834 18.1633C20.5667 19.58 21.9217 20.3783 22.9467 20.8517C23.9983 21.3383 24.35 21.645 24.3467 22.08C24.34 22.7417 23.5067 23.0417 22.7317 23.0417C21.6667 23.0417 21.085 22.8933 20.19 22.5217L19.8583 22.3667L19.48 24.5867C20.1283 24.8567 21.2967 25.0883 22.5033 25.1083C25.3384 25.1083 27.1917 23.7733 27.2133 21.7217C27.2367 20.59 26.5033 19.735 24.96 19.0283C24.0217 18.57 23.44 18.2633 23.44 17.7983C23.44 17.3867 23.9383 16.9467 24.98 16.9467C25.6733 16.9299 26.3623 17.06 27.0017 17.3283L27.2517 17.44L27.63 15.295L27.565 15.31ZM34.485 15.0717H32.4017C31.7534 15.0717 31.265 15.25 30.9817 15.8933L26.975 24.97H29.81L30.3767 23.4817L33.8367 23.485C33.9184 23.8333 34.1684 24.97 34.1684 24.97H36.6684L34.485 15.0717ZM16.7483 14.9883H19.45L17.76 24.8917H15.0617L16.7483 14.985V14.9883ZM9.89002 20.4467L10.17 21.8217L12.81 15.0717H15.6717L11.42 24.9567H8.56502L6.23168 16.5867C6.19389 16.4487 6.10514 16.3301 5.98335 16.255C5.14235 15.8206 4.25126 15.4909 3.33002 15.2733L3.36668 15.065H7.71502C8.30502 15.0883 8.78002 15.2733 8.93835 15.9033L9.88835 20.4517L9.89002 20.4467ZM31.1517 21.4567L32.2284 18.6867C32.215 18.7167 32.45 18.115 32.5867 17.7433L32.7717 18.5983L33.3967 21.455H31.15L31.1517 21.4567Z" fill="white"/>
  </svg>;
  


  const initialCardData = [
    { id: 1, number: '0875', name: 'Charlize Theron', expiry: '07/25', cvv: '***', logo: visa },
    { id: 2, number: '0586', name: 'Robert Pattinson', expiry: '12/25', cvv: '***', logo: visa },
    { id: 3, number: '0792', name: 'Cara Delevingne', expiry: '11/26', cvv: '***', logo: visa },
  ];

  const [cardData, setCardData] = useState(initialCardData);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  const generateRandomName = () => {
    const firstNames = ['Alice', 'Bob', 'Charlie', 'David', 'Emma', 'Frank', 'Grace', 'Henry'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson'];
  
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  
    return `${randomFirstName} ${randomLastName}`;
  };

  const generateExpiryDate = () => {
    // Generate a random month between 1 and 12
    const randomMonth = Math.floor(Math.random() * 12) + 1;
  
    // Generate a random year between the current year and the next 10 years
    const currentYear = new Date().getFullYear();
    const randomYear = currentYear + Math.floor(Math.random() * 10);
  
    // Format the expiry date as MM/YY
    const formattedMonth = randomMonth < 10 ? `0${randomMonth}` : `${randomMonth}`;
    const formattedYear = randomYear.toString().slice(-2);
  
    return `${formattedMonth}/${formattedYear}`;
  };

  const addCard = () => {
    const newCard = {
      id: cardData.length + 1,
      number: Math.floor(1000 + Math.random() * 9000),
      name: generateRandomName(),
      expiry: generateExpiryDate(),
      cvv: '***',
      logo: visa,
      };
    // Update the card data state
    setCardData((prevCardData) => [...prevCardData, newCard]);
  };

  return (
    <div className='mt-4'>
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={card.id}
            className={`custom-gradient${(index % 3) + 1} h-32 text-start text-white p-4 rounded-10`}>
            <p className='text-xs'>{card.name}</p>
            <div className='flex flex-row mt-8'>
              <span className='font-normal text-2xl h-5'>**** **** **** </span>
              <span className='pl-1.5 pt-0.5 font-medium text-xs'>{card.number}</span>
            </div>  
            <div className='flex justify-between'>
              <div className='flex'>
                <div className='flex items-center flex-col'>
                  <span className='text-xs font-thin'>Valid</span>
                  <span className='text-3xs -mt-0.5 font-medium'>{card.expiry}</span>
                </div>
                <div className='flex pl-4 items-center flex-col'>
                  <div className='font-thin text-xs'>cvv</div>
                  <span className='text-xl -mt-1 font-normal'>{card.cvv}</span>
                </div>
              </div>              
                {card.logo}
              </div>
          </div>
        ))}
      </Slider>
      <button 
      onClick={addCard}
      className='flex w-max ml-10 hover:opacity-50 pt-2 text-xs font-normal underline'>
        Add card
      </button>
    </div>
  );
};

export default CardCarousel;

