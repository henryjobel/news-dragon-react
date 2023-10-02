import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import {FaFacebook,FaInstagram,FaTwitter} from 'react-icons/fa'
import qzon1 from '../../../assets/qZone1.png'
import qzon2 from '../../../assets/qZone2.png'
import qzon3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4  mb-6'>
                <h1 className='text-3xl mb-4'>Login with</h1>
                <button className="btn btn-outline w-full">
                    <FcGoogle></FcGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <BsGithub></BsGithub>
                    Login Github
                </button>
            </div>
            <div className='p-4 mb-6'>
                <h1 className='text-3xl mb-5'>Find Us On</h1>
                <a className='flex p-4 text-lg items-center border rounded-t-lg' href=""> <FaFacebook className='mr-3'></FaFacebook> Facebook</a>
                <a className='flex p-4 text-lg items-center border rounded' href=""> <FaTwitter className='mr-3'></FaTwitter> Twiter</a>
                <a className='flex p-4 text-lg items-center border rounded' href=""> <FaInstagram className='mr-3'></FaInstagram> Instagram</a>
 
            </div>
            <div className='p-4 mb-6'>
                <h1 className='text-3xl mb-5'>Q Zone</h1>
                <img src={qzon1} alt="" />
                <img src={qzon2} alt="" />
                <img src={qzon3} alt="" />
                
 
            </div>
        </div>
    );
};

export default RightSideNav;