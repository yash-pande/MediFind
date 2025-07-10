import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';
import Themetoggle from '../ui/Themetoggle';
const Navbar = () => {
    return (
        <nav className="max-w-7xl gap-2 w-full  m-auto flex justify-between items-center p-4" >
           <Link to="/"><Logo /></Link>
           <div className=' bg-amber-950 flex-grow-1 border-2 ' > </div>
           <div>
                <Themetoggle />
           </div>
        </nav>
    );
};

export default Navbar;