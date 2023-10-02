import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const BreakingNews = () => {
    return (
        <div className='flex'>
            <button className='btn btn-outline btn-primary'>Breaking News</button>
            <Marquee className='border font-bold' pauseOnHover={true}>
                <Link className='mr-12'>I can be a React component, multiple React components....</Link>
                <Link className='mr-12'>I can be a React component, multiple React components....</Link>
                <Link className='mr-12'>I can be a React component, multiple React components,....</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;