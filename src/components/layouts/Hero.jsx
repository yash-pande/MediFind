import React from 'react';
import Logo from '../ui/Logo';
import Navbar from './Navbar';
import Search from '../ui/Search';
const Hero = ({backdrop}) => {
  const base = import.meta.env.VITE_IMAGE_BASE_URL
 
  return (
    <header className="max-w-6xl m-auto  bg-[var(--primary-bg-color)] ">
      <img  src={base+backdrop} ></img>
    </header>
  );
};

export default Hero;
