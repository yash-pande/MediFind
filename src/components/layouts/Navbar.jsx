import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../ui/Logo';
import SearchBox from '../ui/SearchBox';
import "@theme-toggles/react/css/Expand.css"
import { Expand } from "@theme-toggles/react"
import Button from '../ui/Button';



const Navbar = () => {
  return (
    <nav
      className={`sticky z-100 flex items-center m-auto p-2 justify-between `}
    >
      <Link to="/"> <Logo /> </Link>
      
      {/* <div className='flex-grow border-2 bg-amber-950'> </div> */}
      <div className='flex gap-4'>
        <SearchBox />
        <Expand  className='text-2xl ' duration={750} />
        <Button  />
      </div>
    </nav>
  );
};

export default Navbar;
