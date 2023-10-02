
import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo} alt="logo" />
            <p className='text-lg font-normal'>Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format('LLLL')}</p>
        </div>
    );
};

export default Header;