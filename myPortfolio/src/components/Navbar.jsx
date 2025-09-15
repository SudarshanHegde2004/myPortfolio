import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about-myself" },
    { name: "Projects", id: "projects" },
    { name: "Certificates", id: "certificates_section" },
  ];

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out">
      <nav className={`
        ${scrolled 
          ? 'bg-black/20 backdrop-blur-xl border border-white/20 shadow-2xl scale-95' 
          : 'bg-white/10 backdrop-blur-lg border border-white/10 shadow-lg scale-100'
        }
        px-6 py-3 rounded-full flex justify-between items-center 
        transition-all duration-500 ease-in-out
        w-auto min-w-[1400px] max-w-4xl
        hover:bg-white/15 hover:border-white/30
      `}>
        <div className={`
          ${scrolled ? 'text-xl' : 'text-2xl'} 
          text-white font-bold drop-shadow-lg transition-all duration-30
        `}>
          Sudarshan Hegde
        </div>

      {/* Desktop Menu */}
      <ul className="md:flex hidden font-semibold space-x-6">
        {navLinks.map(({ name, id }) => (
          <a
            key={id}
            href={`#${id}`}
            className="text-white/90 font-semibold text-sm hover:text-white hover:scale-110 flex items-center transition-all duration-200 px-3 py-1 rounded-full hover:bg-white/10"
          >
            {name}
          </a>
        ))}
      </ul>

      {/* Social Icons - Desktop */}
      <ul className="md:flex hidden space-x-3">
        {[
          { platform: "linkedin", url: "https://www.linkedin.com/in/sudarshan-hegde-474856226/" },
          { platform: "reddit", url: "https://www.reddit.com/user/Sudarshan_Hegde_2004/" },
          { platform: "instagram", url: "https://www.instagram.com/sudarshan.hegde.2004/" },
          { platform: "github", url: "https://github.com/SudarshanHegde2004" },
        ].map(({ platform, url }, index) => (
          <a key={index} href={url} target="_blank" rel="noopener noreferrer">
            <img
              className={`
                ${scrolled ? 'h-7 w-7' : 'h-8 w-8'} 
                rounded-full cursor-pointer hover:scale-125 transition-all duration-300 
                border border-white/20 hover:border-white/50
              `}
              src={`${import.meta.env.BASE_URL}${platform}.png`}
              alt={platform}
              onError={(e) => (e.target.src = `${import.meta.env.BASE_URL}${platform}.jpg`)}
            />
          </a>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-2 rounded-full hover:bg-white/20 transition-all duration-200"
        >
          <span className="text-2xl">{isOpen ? "✖" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-black/30 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl py-6 px-6 md:hidden z-40 animate-in slide-in-from-top-2 duration-300">
          <ul className="flex flex-col space-y-4">
            {navLinks.map(({ name, id }) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-white/90 font-semibold text-lg hover:text-white hover:scale-105 transition-all duration-200 px-4 py-2 rounded-xl hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                {name}
              </a>
            ))}
          </ul>

          {/* Social Icons - Mobile */}
          <div className="flex justify-center space-x-4 mt-6 pt-4 border-t border-white/20">
            {[
              { platform: "linkedin", url: "https://www.linkedin.com/in/sudarshan-hegde-474856226/" },
              { platform: "reddit", url: "https://www.reddit.com/user/Sudarshan_Hegde_2004/" },
              { platform: "instagram", url: "https://www.instagram.com/sudarshan.hegde.2004/" },
              { platform: "github", url: "https://github.com/SudarshanHegde2004" },
            ].map(({ platform, url }, index) => (
              <a key={index} href={url} target="_blank" rel="noopener noreferrer">
                <img
                  className="h-8 w-8 rounded-full cursor-pointer hover:scale-110 transition-all duration-300 border border-white/20 hover:border-white/50"
                  src={`${import.meta.env.BASE_URL}${platform}.png`}
                  alt={platform}
                  onError={(e) => (e.target.src = `${import.meta.env.BASE_URL}${platform}.jpg`)}
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
    </div>
  );
};

export default Navbar;
