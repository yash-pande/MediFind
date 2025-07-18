import React, { useState } from 'react';
import Hero from '../components/layouts/Hero';
import Navbar from '../components/layouts/Navbar';
import Main from '../components/layouts/Main';

const Home = () => {
    const [backdrop,setBackdrop] = useState("");
    return (
        
        
        <div className='main-container'>
            <Navbar />
            <Hero backdrop={backdrop} />
            <Main setBackdrop= {setBackdrop}/>
        </div>  
        
    );
};

export default Home;