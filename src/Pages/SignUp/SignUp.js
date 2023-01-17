import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SingUp = () => {
  const [error, setError] = useState("");
  const { providerLogin, githubProviderLogin } = useContext(AuthContext);
  const { createUser, updateUser } = useContext(AuthContext);
  const googleAuthProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    providerLogin(googleAuthProvider)
      .then((result) => {
        const user = result.user;
        toast("User Registered Successfully");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const hangleGithubSingIn = () => {
    githubProviderLogin(githubProvider)
      .then(result => {
        const user = result.user;
        toast("User Registerd Successfully");
      })
      .catch(error => {
        setError(error.message);
      })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    const userInfo = {
      displayName: name,
    };

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User Created Successfully");

        updateUser(userInfo)
          .then(() => {
          })
          .catch((error) => console.log(error));
        form.reset();
        setError("");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  return (
    <div className='grid gap-9 md:grid-cols-1 lg:grid-cols-2 my-11'>
      <div>
        <img className='extra-img' src="https://i.ibb.co/S3ScgR8/118046-lf20-oahmox5rjson.gif" alt="" />
      </div>
      <div className='extra'>
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
                <form onSubmit={handleSubmit}>
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
                <div className='mx-auto p-3 rounded-md bg-gradient-to-r from-accent to-secondary' style={{width: '317px'}}>
                    <button onClick={handleGoogleSignIn}>Register with Google</button>
                </div>
                <div className='mx-auto p-3 rounded-md mt-4 bg-gradient-to-r from-accent to-secondary' style={{width: '317px'}}>
                    <button onClick={hangleGithubSingIn}>Register with GitHub</button>
                </div>
                </form>
            </div>
            </div>
            </div>            
        </div>
    );
};

export default SingUp;