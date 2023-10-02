import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LefNavbar = () => {
    const [categoris,setCategoris] = useState([])

    useEffect(()=>{
        fetch('categories.json')
         .then(res => res.json())
         .then(data => setCategoris(data))
    },[])
    return (
        <div className='space-y-6 border'>
            <h1 className='text-3xl text-center'>All Categories</h1>
            {
                categoris.map(category => <Link className='block ml-4 text-xl font-semiboldbold' key={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

export default LefNavbar;