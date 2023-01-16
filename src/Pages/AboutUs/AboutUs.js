import React from 'react';
import { FaGit, FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <div className='text-white'>
            <h2 className='text-3xl my-10 font-bold'>About Us</h2>

            <h2 className='text-2xl my-10'>Let's build from here,</h2>

            <p>
                The team behind the code editor is comprised of experienced web developers who are dedicated to creating high-quality tools for the developer community.
            </p>
            <p>
                Our online code editor is a powerful and easy-to-use tool for writing and testing code. Built using React and other modern web technologies, it offers a wide range of features for developers of all levels, including syntax highlighting, code completion, and real-time error checking.
            </p>

            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center my-10 mx-5'>
                <div className='border-2 p-3 rounded-md '>
                    <h2 className='text-5xl'>58+</h2>
                    <p className='text-2xl'>Developers</p>
                </div>
                <div className='border-2 p-3 rounded-md '>
                    <h2 className='text-5xl'>100+</h2>
                    <p className='text-2xl'>Projects</p>
                </div>
                <div className='border-2 p-3 rounded-md '>
                    <h2 className='text-5xl'>99%</h2>
                    <p className='text-2xl'>Userfrendly</p>
                </div>
            </div>
            <div className='flex gap-2 items-center text-xl my-5'>
                <p>Follow us on </p>
                <FaGithub></FaGithub>
                <FaLinkedinIn></FaLinkedinIn>
                <FaTwitter></FaTwitter>
            </div>


            <p>
                We use the following technologies to build our code editor:
                <ul className='ml-5 my-2'>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                </ul>
            </p>
            <p>
                If you have any questions or feedback, please don't hesitate to contact us at coders.stackbox@gmail.com
                <br />
                We believe in open-source and the power of community,contineue that's why our code editor is open-sourced and available on GitHub. You can find the source code and contributing guidelines <a href="">here</a> and the license used <a href="">here</a>
            </p>
        </div>
    );
};

export default AboutUs;