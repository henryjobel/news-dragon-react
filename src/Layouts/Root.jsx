
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;