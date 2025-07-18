import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';
import Themetoggle from '../ui/Themetoggle';
import Search from '../ui/Search';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  // Listen to scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full   flex justify-between items-center  transition-all duration-300 ${
        isSticky ? 'sticky top-0 q-full bg-black/80 backdrop-blur z-50 shadow-md' : ''
      }`}
    >
      <Link to="/"> <Logo /> </Link>
      <Search />
      {/* <div className='flex-grow border-2 bg-amber-950'> </div> */}
      <div>
        <Themetoggle />
      </div>
    </nav>
  );
};

export default Navbar;
