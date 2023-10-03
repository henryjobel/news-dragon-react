import React from 'react';
import img from '../assets/user.png'
import mg from "../assets/editorsInsight2.png"
const Card = () => {
    return (
        <div>
            <div className='flex gap-3 bg-gray-200'>
                <img className='w-[40px]' src={img} alt="" />
                <div>
                <h1 className='text-base font-semibold'>Alwad Hossian</h1>
                <p>2022-08-21</p>
                </div>
            </div>
            <div>
                <h1 className='text-xl font-bold w-[514px] pt-4'>Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h1>
                <img className='pt-5' src={mg} alt="" />

                <p className='w-[518px] pt-6'>Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a... Read More</p>
            </div>
        </div>
    );
};

export default Card;