import React from 'react';
import Logo from '../ui/Logo';
import Navbar from './Navbar';
import Search from '../ui/Search';
const HeaderNav = () => {

 
  return (
    <header className=" my-12 bg-[var(--primary-bg-color)] ">

      <div className=' flex flex-col items-center m-auto max-w-7xl '>
        <h1 className=' font-semibold  '> Find Meds & Conditions</h1>
        <Search />
      </div>

    </header>
  );
};

export default HeaderNav;
