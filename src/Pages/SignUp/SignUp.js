import React from 'react';
import { Link } from 'react-router-dom';

const SingUp = () => {
    return (
        <div className='grid gap-6 md:grid-cols-1 lg:grid-cols-2 my-11'>
            <div>
                <img className='rounded-2xl' src="https://i.ibb.co/S3ScgR8/118046-lf20-oahmox5rjson.gif" alt="" />
            </div>            
            <div>
            <div className='text-white text-center xl:mt-16'>
            <div className='flex justify-around w-56 mx-auto'>
                <div>
                <h3 className='uppercase mb-3 -ml-10 authentication-title'>Register</h3>
                </div>
                <div>
                <Link to='/login'>
                <button className="btn btn-xs ml-10">Login</button>
                </Link>
                </div>

            </div>
            <div className='mt-6'>
                <form>
                <div className='mb-5'>
                <input type="name" name='name' placeholder="Full Name" className="input input-bordered w-full max-w-xs required:" />
                </div>
                <div>
                <input type="email" name='email' placeholder="Email Address" className="input input-bordered w-full max-w-xs required:" />
                </div>
                <div className='my-5'>
                <input type="password" name='password' placeholder="Password" className="input input-bordered w-full max-w-xs required:" />
                </div>
                <div>
                    <button className='bg-black px-32 py-3 text-white rounded-md' type='submit'>Register</button>
                </div>
                <div className="divider w-52 mx-auto">OR</div>
                <div className='mx-auto p-3 rounded-md' style={{border: "2px solid", width: '317px'}}>
                    <button >Register with Google</button>
                </div>
                <div className='mx-auto p-3 rounded-md mt-4' style={{border: "2px solid", width: '317px'}}>
                    <button>Register with GitHub</button>
                </div>
                </form>
            </div>
            </div>
            </div>            
        </div>
    );
};

export default SingUp;