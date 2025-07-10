import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { IoMoon } from 'react-icons/io5';
import { PiSunDimLight } from "react-icons/pi";
import { PiMoonFill } from "react-icons/pi";
const Themetoggle = () => {
    const [theme , setTheme] = useState('light')
    return (
        <div onClick={() => setTheme( theme === 'light' ? "dark" : "light")} className=' '>
            
            {
                theme === "light" ?  <FaSun className='text-3xl rounded-xl '/> :   <FaMoon  className='text-3xl rounded-xl '/>
            }
                  
        </div>
        
    );
};                               

export default Themetoggle; 