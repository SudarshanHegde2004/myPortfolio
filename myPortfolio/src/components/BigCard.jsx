import React, { useState, useEffect } from 'react';

const BigCard = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "I am Sudarshan Hegde, a Computer Science and Engineering student at Sambhram Institute of Technology, affiliated with Visvesvaraya Technological University. Passionate about technology and problem-solving, I have built a strong foundation in programming languages such as C++, C, Python, and Java. My primary focus lies in Machine Learning, Deep Learning, Artificial Intelligence, and Cybersecurity, fields where I aim to innovate and create impactful solutions. Additionally, I possess skills in web development using HTML, CSS, JavaScript, React, and Tailwind CSS, demonstrated through a portfolio project that strengthened my understanding of design and development. I am eager to take on challenging projects, collaborate with others, and contribute innovative solutions in the tech industry, striving to make a meaningful impact while continuously evolving as a computer scientist.";

  useEffect(() => {
    setDisplayText('');
    let i = 0;
    
    const typingInterval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div id="home" className="w-full p-6 bg-transparent">
      <div className="max-w-screen-xl mx-auto p-6 flex flex-wrap bg-transparent">
        
        {/* Left Side - Image and Text */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
          <img
            src={`${import.meta.env.BASE_URL}profile_pic.jpg`}
            alt="Profile"
            className="w-full h-full object-cover rounded-lg mb-4"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-white drop-shadow-md">Sudarshan R. Hegde</h2>
            <p className="text-lg font-semibold text-white/80">Computer Science and Engineering Student</p>
          </div>
          <div className="flex justify-center p-6 pt-2 gap-7">
            <a href="mailto:sudohegde@gmail.com">
              <button className="min-w-32 rounded-md bg-white/10 py-2 px-4 text-center text-sm text-white transition-all hover:bg-white/20 hover:scale-105 focus:bg-white/20 active:bg-white/20 backdrop-blur-sm shadow-lg" type="button">
                Contact
              </button>
            </a>
          </div>
        </div>

        {/* Right Side - Heading and Subheading Text */}
        <div className="w-full md:w-2/3 mt-6 md:mt-0 md:pl-10">
          <h3 className="text-4xl font-bold text-white/90 drop-shadow-md">A little About myself</h3>
          <p className="text-xl text-white/80 mt-4 leading-relaxed">
            {displayText}
          </p>
          <div className="flex pt-6">
            <a href="#about-myself" className="text-white/80 font-semibold text-sm hover:text-white hover:underline flex items-center transition-all">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCard;