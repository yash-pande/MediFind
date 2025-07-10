import React from 'react';
import { GiMedicines } from "react-icons/gi";
import { Link } from 'react-router-dom';


const Logo = () => {
    return (
        <div>
            <Link to="/about" href="google.com" className="flex items-center " >
                <GiMedicines className="mr-2 text-6xl"  />
                <h3 className=' font-bold '> MediFind.</h3>
            </Link>
        </div>
    );
};

export default Logo;