import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function makeApiCall(){
    console.log(value)
}
const Search = () => {
    const [value,setValue] = useState('')
    
    return (
        <div className='flex my-10 w-full justify-center '>
            <input onChange={ (e) => setValue(e.target.value)} placeholder='Search for info' className=' flex-grow max-w-xl  p-4 border-4 border-r-0 ' ></input>
            <button onClick={() => {makeApiCall}} className='p-4 text-xl border-l-0 border-4 '><FaSearch /></button>
        </div>
    );
};

export default Search;