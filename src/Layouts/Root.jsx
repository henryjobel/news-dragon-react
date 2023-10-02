
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto'>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Root;