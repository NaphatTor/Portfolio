'use client'
import { useState, useEffect } from 'react';

function NavLink({ to, children }) {
  return <a href={to} className={`mx-4 my-5`}>
    {children}
  </a>;
}

function MobileNav({ open, setOpen }) {
  return (
    <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
      <div className="flex flex-col ml-14 mt-20 text-black text-xl font-mono" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
        <NavLink to='#about'>About</NavLink>
        <NavLink to='#exp'>Experience</NavLink>
        <NavLink to='#skills'>Skills</NavLink>
        <NavLink to='https://stseakanomnutt.blob.core.windows.net/portfolio/ThanachaiT-Resume.pdf' target='_blank'>Resume</NavLink>
        {/* <a className="text-xl font-mono my-4 text-black" href="#about" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
          About
        </a>
        <a className="text-xl font-mono my-4 text-black" href="#exp" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
          Experience
        </a>
        <a className="text-xl font-mono my-4 text-black" href="#skill" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
          Skill
        </a>
        <a target='_blank' className="text-xl font-mono my-4 text-black" href="https://az-blob.kanomnutt.site/portfolio/ThanachaiT-Resume.pdf" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
          Resume
        </a> */}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`flex w-full filter drop-shadow-md bg-white px-5 py-4 h-20 items-center ${sticky ? 'fixed top-0' : ''} z-50`}>
      <div className="w-full flex justify-center items-center text-xl">
        <div className="hidden md:flex text-black font-mono">
          <NavLink to="#about">ABOUT</NavLink>
          <NavLink to="#exp">WORK EXPERIENCE</NavLink>
          <NavLink to="#skills">SKILLS</NavLink>
          <NavLink target="_blank" to="https://az-blob.kanomnutt.site/portfolio/ThanachaiT-Resume.pdf">RESUME</NavLink>
        </div>
        <MobileNav open={open} setOpen={setOpen} />
      </div>
      <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
        setOpen(!open);
      }}>
        {/* hamburger button */}
        <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
        <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
        <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
      </div>
    </nav>
  );
}
