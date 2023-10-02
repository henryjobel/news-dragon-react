import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <img src={logo} alt="logo" />
            <p className='text-lg font-normal'>Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Header;