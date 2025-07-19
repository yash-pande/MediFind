import React, { Suspense, useState } from 'react';
import Hero from '../components/layouts/Hero';
import Navbar from '../components/layouts/Navbar';
const Main = React.lazy(() => import('../components/layouts/Main'));



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