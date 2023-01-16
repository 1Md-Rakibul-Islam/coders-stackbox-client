import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='grid gap-6 md:grid-cols-1 lg:grid-cols-2 my-11'>
            <div>
                <img className='rounded-2xl' src="https://i.ibb.co/y0x4bqb/107385-login.gif" alt="" />
            </div>            
            <div>
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
                <form>
                <div>
                <input type="email" name='email' placeholder="Email Address" className="input input-bordered w-full max-w-xs required:" />
                </div>
                <div className='my-5'>
                <input type="password" name='password' placeholder="Password" className="input input-bordered w-full max-w-xs required:" />
                </div>
                <div>
                    <button className='bg-black px-32 py-3 text-white rounded-md' type='submit'>Login</button>
                </div>
                <div className="divider w-52 mx-auto">OR</div>
                <div className='mx-auto p-3 rounded-md' style={{border: "2px solid", width: '317px'}}>
                    <button >Login with Google</button>
                </div>
                <div className='mx-auto p-3 rounded-md mt-4' style={{border: "2px solid", width: '317px'}}>
                    <button>Login with GitHub</button>
                </div>
                </form>
            </div>
            </div>
            </div>            
        </div>
    );
};

export default Login;