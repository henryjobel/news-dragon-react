import Header from '../Shared/Header/Header';
import LefNavbar from '../Shared/LeftNavbar/LefNavbar';
import Navbar from '../Shared/Navbar/Navbar';
import RightSideNav from '../Shared/RightsideNav/RightSideNav';
import BreakingNews from './BreakingNews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h1>This is home</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div>
                    <LefNavbar></LefNavbar>
                </div>
                <div className='col-span-2'>
                    <h1 className='text-4xl'>News Comming Soon</h1>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;