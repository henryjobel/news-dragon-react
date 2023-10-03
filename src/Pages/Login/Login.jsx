
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Header from '../Shared/Header/Header';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div>
                <h1 className='text-3xl my-10 text-center'>Login your account</h1>
                <form onSubmit={handleLogin} className="w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' required className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <h1 className='text-center my-4'>You don&rsquo;t have an account <Link className='text-blue-700 font-bold' to='/register'>Register</Link></h1>
            </div>
        </div>
    );
};

export default Login;