import React from 'react';
import { GiMedicines } from "react-icons/gi";
import { Link } from 'react-router-dom';


const Logo = () => {
    return (
        <div>
            <Link to="/about" href="google.com" className="flex items-center " >
                <GiMedicines className="text-[var(--accent-1)] mr-2 text-3xl"  />
                <p className="text-[var(--accent-1)] font-bold"> MediFind.</p>
            </Link>
        </div>
    );
};

export default Logo;