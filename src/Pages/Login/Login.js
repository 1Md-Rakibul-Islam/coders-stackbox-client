import React, { useContext, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';
import { layout } from '../../style';

const Login = () => {
    const [error, setError] = useState('');
    const { signIn, loader } = useContext(AuthContext);
    const { providerLogin, githubProviderLogin } = useContext(AuthContext);
    const { loginUserEmail, setLoginUserEmail } = useState('');
    const googleAuthProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        providerLogin(googleAuthProvider)
            .then(result => {
                const user = result.user;
                toast('User Login Successfully')
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleGithubSignin = () => {
        githubProviderLogin(githubProvider)
            .then(result => {
                const user = result.user;
                toast('User Login Successfully');
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                setError('');
                setLoginUserEmail(email);
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    return (
        <div className='grid gap-4 md:grid-cols-1 lg:grid-cols-2'>
            <div  className={`${layout.sectionCol}`}>
                <img className='extra-img w-4/5' src="https://i.ibb.co/y0x4bqb/107385-login.gif" alt="" />
            </div>
            <div className='extra p-2'>
                <div className='text-white text-center xl:mt-20'>
                    <div className='flex justify-around w-56 mx-auto'>
                        <div>
                            <h3 className='uppercase mb-3 -ml-10 authentication-title'>login</h3>
                        </div>
                        <div>
                            <Link to='/register'>
                                <button className="btn btn-xs ml-10">Create An Account</button>
                            </Link>
                        </div>

                    </div>
                    <div className='mt-6'>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input type="email" name='email' placeholder="Email Address" className="input input-bordered w-full max-w-xs text-black" required />
                            </div>
                            <div className='my-5'>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered w-full max-w-xs text-black" required />
                            </div>
                            <div>
                                <button className='bg-black px-32 py-3 text-white rounded-md' type='submit'>Login</button>
                            </div>
                            <div className="divider w-52 mx-auto">OR</div>
                            <div className='mx-auto p-3 rounded-md bg-gradient-to-r from-accent to-secondary' style={{width: '317px' }}>
                                <button onClick={handleGoogleSignIn}>Login with Google</button>
                            </div>
                            <div className='mx-auto p-3 rounded-md mt-4 bg-gradient-to-r from-accent to-secondary' style={{width: '317px' }}>
                                <button onClick={handleGithubSignin}>Login with GitHub</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;