import { useLoaderData } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import LefNavbar from '../Shared/LeftNavbar/LefNavbar';
import Navbar from '../Shared/Navbar/Navbar';
import RightSideNav from '../Shared/RightsideNav/RightSideNav';
import BreakingNews from './BreakingNews';
import NewsCrad from './NewsCrad';

const Home = () => {
    const news = useLoaderData();
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div>
                    <LefNavbar></LefNavbar>
                </div>
                <div className='col-span-2'>
                    {
                        news.map(aNews => <NewsCrad key={aNews._id} news={aNews}></NewsCrad>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;