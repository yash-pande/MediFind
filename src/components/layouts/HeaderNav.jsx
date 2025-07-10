import React from 'react';
import Logo from '../ui/Logo';
import Navbar from './Navbar';
import SearchBox from './SearchBox';
const HeaderNav = () => {

 
  return (
    <header className="border-2 flex flex-col ">
      <Navbar />
      <SearchBox />
    </header>
  );
};

export default HeaderNav;
