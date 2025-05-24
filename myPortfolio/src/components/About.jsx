import React from 'react';

const skillLogos = {
  "C++": `${import.meta.env.BASE_URL}logos/CPP.svg`,
  "C": `${import.meta.env.BASE_URL}logos/C.svg`,
  "Java": `${import.meta.env.BASE_URL}logos/Java-Dark.svg`,
  "Python": `${import.meta.env.BASE_URL}logos/Python-Dark.svg`,
  "HTML": `${import.meta.env.BASE_URL}logos/HTML.svg`,
  "CSS": `${import.meta.env.BASE_URL}logos/CSS.svg`,
  "JavaScript": `${import.meta.env.BASE_URL}logos/JavaScript.svg`,
  "React": `${import.meta.env.BASE_URL}logos/React-Dark.svg`,
  "Node.js": `${import.meta.env.BASE_URL}logos/NodeJS-Dark.svg`,
  "Tailwind CSS": `${import.meta.env.BASE_URL}logos/TailwindCSS-Dark.svg`,
  "Git": `${import.meta.env.BASE_URL}logos/Git.svg`,
  "AWS": `${import.meta.env.BASE_URL}logos/AWS-Dark.svg`,
  "Azure": `${import.meta.env.BASE_URL}logos/Azure-Dark.svg`,
  "TensorFlow": `${import.meta.env.BASE_URL}logos/TensorFlow-Dark.svg`,
  "PyTorch": `${import.meta.env.BASE_URL}logos/PyTorch-Dark.svg`,
  "MySQL": `${import.meta.env.BASE_URL}logos/MySQL-Dark.svg`,
  "VS Code": `${import.meta.env.BASE_URL}logos/VSCode-Dark.svg`,
  "PyCharm": `${import.meta.env.BASE_URL}logos/PyCharm-Dark.svg`,
  "Ubuntu": `${import.meta.env.BASE_URL}logos/Ubuntu-Dark.svg`,
  "Linux": `${import.meta.env.BASE_URL}logos/Linux-Dark.svg`,
  "Maven": `${import.meta.env.BASE_URL}logos/Maven-Dark.svg`,
  "Gradle": `${import.meta.env.BASE_URL}logos/Gradle-Dark.svg`,
  "Jenkins": `${import.meta.env.BASE_URL}logos/Jenkins-Dark.svg`,
  "LaTeX": `${import.meta.env.BASE_URL}logos/LaTeX-Dark.svg`
};

const skills = Object.keys(skillLogos);

function About() {
  return (
    <div>
      <div id="about-myself" className="mt-8 px-4 md:px-10">
        <p className="font-bold text-sky-600 text-2xl md:text-left text-center">
          About Myself
        </p>
        <p className="p-2 text-grey-400 font-semibold text-left mt-4">
          Currently, I am studying at Sambhram Institute of Technology, which is affiliated with Visvesvaraya Technological University. My fascination with technology began early on, and it has only grown as I have delved deeper into the world of computer science. I have a strong foundation in several programming languages, including C++, C, Python, and Java, which have helped me develop a logical and analytical approach to problem-solving. My interest in full-stack development has led me to explore web technologies like HTML, CSS, JavaScript, React, and Tailwind CSS, allowing me to create visually appealing and highly functional web applications. I thrive on the challenge of learning new languages and frameworks, constantly pushing myself to expand my technical expertise.
        </p>
        <p className="p-2 text-grey-400 font-semibold text-left mt-4">
          In addition to my coursework, I actively seek out projects and opportunities that allow me to apply my knowledge in real-world scenarios. I believe that practical experience is crucial to mastering any discipline, and I am always eager to collaborate on innovative projects that make a tangible difference. My time at Sambhram Institute of Technology has equipped me with not just technical skills, but also the ability to work effectively in a team, communicate complex ideas clearly, and manage projects efficiently. I am deeply committed to my growth as a computer scientist and am enthusiastic about contributing to the tech community. Whether it's through developing cutting-edge software or building intuitive and user-friendly web interfaces, I am driven to make a meaningful impact in the field of technology.
        </p>
      </div>
      
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div className="max-w-2xl mx-auto text-center mb-16">
    <h2 className="text-3xl font-bold text-sky-700 mb-4">My Education Journey</h2>
    <div className="w-[200px] h-1 border-b-4 border-yellow-500 mx-auto rounded-3xl"></div>
  </div>
  <div className="grid gap-10 lg:grid-cols-3 sm:grid-cols-1">
    {/* High School */}
    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:bg-white/10">
      <div className="flex items-center justify-between mb-6">
        <p className="text-2xl font-bold text-blue-400">High School</p>
        <svg className="w-6 text-gray-400 transform rotate-90 sm:rotate-0" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <line fill="none" strokeMiterlimit="10" x1="2" y1="12" x2="22" y2="12"></line>
          <polyline fill="none" strokeMiterlimit="10" points="15,5 22,12 15,19 "></polyline>
        </svg>
      </div>
      <p className="text-gray-300 mb-2 font-medium">Shri Kalika Bhavani English Medium High School</p>
      <p className="text-gray-400 text-sm mb-3">Kansur, Karnataka | 2018-2020</p>
      <p className="text-gray-300">
        Completed 8th to 10th grade with distinction in Science and Mathematics. Scored 94% in SSLC examinations.
      </p>
      <div className="mt-4 flex items-center gap-3">
            <span className="px-2 py-1 text-xs bg-blue-900/50 text-blue-300 rounded-full">SSLC</span>
            <span className="px-2 py-1 text-xs bg-green-900/50 text-purple-300 rounded-full">94%</span>
          </div>
    </div>

    {/* PUC */}
    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-purple-400 hover:bg-white/10">
      <div className="flex items-center justify-between mb-6">
        <p className="text-2xl font-bold text-purple-400">Pre-University</p>
        <svg className="w-6 text-gray-400 transform rotate-90 sm:rotate-0" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <line fill="none" strokeMiterlimit="10" x1="2" y1="12" x2="22" y2="12"></line>
          <polyline fill="none" strokeMiterlimit="10" points="15,5 22,12 15,19 "></polyline>
        </svg>
      </div>
      <p className="text-gray-300 mb-2 font-medium">MES PU College</p>
      <p className="text-gray-400 text-sm mb-3">Sirsi, Karnataka | 2020-2022</p>
      <p className="text-gray-300">
        Completed 1st and 2nd PUC in Science stream (PCMCS) with 88% aggregate. Developed strong foundation in Physics, Chemistry, and Mathematics.
      </p>
      <div className="mt-4 flex items-center gap-3">
            <span className="px-2 py-1 text-xs bg-blue-900/50 text-blue-300 rounded-full">PUC</span>
            <span className="px-2 py-1 text-xs bg-purple-900/50 text-purple-300 rounded-full">88%</span>
          </div>
    </div>

    {/* Engineering */}
    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-green-400 hover:bg-white/10">
      <div className="flex items-center justify-between mb-6">
        <p className="text-2xl font-bold text-green-700">Engineering</p>
        <svg className="w-8 text-green-400" stroke="currentColor" viewBox="0 0 24 24">
          <polyline fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              strokeMiterlimit="10" points="6,12 10,16 18,8"></polyline>
        </svg>
      </div>
      <p className="text-gray-300 mb-2 font-medium">Sambhram Institute Of Technology</p>
      <p className="text-gray-400 text-sm mb-3">Bangalore, Karnataka | 2022-2026</p>
      <p className="text-gray-300">
        Pursuing Bachelor of Engineering in Computer Science with current CGPA of 8.9. Specializing in Object oriened Programming, cloud computing, and AI technologies.
      </p>
      <div className="mt-4 flex items-center gap-3">
            <span className="px-2 py-1 text-xs bg-blue-900/50 text-blue-300 rounded-full">VTU</span>
            <span className="px-2 py-1 text-xs bg-purple-900/50 text-purple-300 rounded-full">8.9 CGPA</span>
            <span className="px-2 py-1 text-xs bg-green-900/50 text-green-300 rounded-full">Ongoing</span>
      </div>
    </div>
  </div>

</div>
      
      <TechStackSection />
    </div>
  );
}

function TechStackSection() {
  // Group skills by category for better organization
  const skillCategories = {
    "Languages": ["C++", "C", "Java", "Python", "JavaScript"],
    "Frontend": ["HTML", "CSS", "React", "Tailwind CSS"],
    "Backend": ["Node.js"],
    "Cloud & DevOps": ["AWS", "Azure", "Jenkins"],
    "Data Science": ["TensorFlow", "PyTorch"],
    "Databases": ["MySQL"],
    "Tools": ["VS Code", "PyCharm", "Git", "LaTeX"],
    "Systems": ["Ubuntu", "Linux", "Maven", "Gradle"]
  };

  // State for active category filter
  const [activeFilter, setActiveFilter] = React.useState("All");
  
  // Get filtered skills based on active filter
  const filteredSkills = activeFilter === "All" 
    ? skills 
    : skills.filter(skill => skillCategories[activeFilter]?.includes(skill));

  return (
    <section className="min-h-screen w-full md:px-8 xl:px-20 text-white bg-primary flex items-center">
      <div className="flex container flex-col md:flex-row items-center md:items-start gap-16 w-full">
        {/* Left Side Content */}
        <div className="w-full md:w-1/2 relative p-6 sm:px-28 md:p-0">
          <div className="text-white p-6 pl-10 pr-20 sm:pl-10 lg:pr-20">
            {/* Vertical Label */}
            <div className="absolute -left-4 top-16 sm:left-16 top-20 sm:top-24 md:-left-12 xl:-left-16 md:top-16 xl:top-24 rotate-[-90deg] text-sm tracking-widest flex flex-row justify-start gap-2">
              <div className="xl:w-16 md:w-10 sm:w-8 w-8 h-[2px] bg-white mt-2 mx-auto"></div>
              <p>All Skills</p>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl xl:text-6xl font-bold leading-tight">
              Explore My Expertise & Tech Stack
            </h2>
          </div>

          <p className="p-3 text-gray-400 text-sm leading-relaxed">
            These are the tools and technologies that I use daily to develop applications across various domains. 
            With expertise spanning from frontend to backend development, cloud computing, and data science, 
            I focus on delivering robust, scalable solutions with clean, maintainable code.
          </p>

          <span className="py-4 px-2 space-x-2 rounded-lg bg-secondary shadow-lg">
            <button 
              onClick={() => setActiveFilter("All")}
              className={`rounded-lg px-4 py-2 transition-all duration-300 ${
                activeFilter === "All" 
                  ? "bg-blue-500 text-white" 
                  : "bg-transparent text-gray-300 hover:bg-gray-700"
              }`}
            >
              All Skills
            </button>
          </span>
        </div>

        {/* Right Side: Enhanced Tech Grid */}
        <div className="w-full md:w-1/2">
          {/* Category Filters */}
          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            {Object.keys(skillCategories).map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-blue-500 text-white"
                    : "bg-secondary text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Dynamic Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8  gap-4">
            {filteredSkills.map((skill, index) => (
              <div 
                key={index} 
                className="text-center transition-all duration-300 hover:scale-105"
              >
                <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center h-full">
                  <img
                    src={skillLogos[skill]}
                    alt={`${skill} logo`}
                    className="w-10 h-10 object-contain"
                    loading="lazy"
                  />
                  <p className="text-xs mt-2 font-semibold">{skill}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredSkills.length === 0 && (
            <div className="text-center py-8 text-gray-400">
              No skills found in this category
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default About;