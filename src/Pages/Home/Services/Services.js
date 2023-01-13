import React from 'react';

const Services = () => {
    return (

        <div className="text-white">
            <div>
                <h1 className='text-2xl font-bold text-center'>Our Services</h1>
                <p className='mt-2 text-center'>Codestack is a platform that allows you to build, run, and share code in three different programming languages HTMl, CSS and JAVASCRIPT.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 md:grid-cols-2 mt-10'>
                <div className=' border border-lime-500 rounded-md mt-10'>
                    <div className="card-body">
                        <img className="h-16 w-16 bg-emerald-100 rounded-md -mt-16" src="https://i.ibb.co/jHqX7ZS/app-development.png" alt="" />
                        <h2 className="text-center font-bold text-xl lg:-mt-6">Build & Test</h2>
                        <p className="text-center mt-10">The only way to learn to program is by writing code. That's why we provides HTML, CSS and Javascript compiler section that you can edit and run your code by yourself.</p>
                    </div>
                    <div className=' flex justify-end'>
                        <button className="btn glass mr-2 mb-2">Learn More</button>
                    </div>
                </div>
                <div className=" border border-lime-500 rounded-md mt-10">
                    <div className="card-body">
                        <img className="h-16 w-16 bg-emerald-100 rounded-md -mt-16" src="https://i.ibb.co/YjT1n8q/exploring.png" alt="" />
                        <h2 className="text-center font-bold text-xl lg:-mt-6">Learn and Discover</h2>
                        <p className="text-center  mt-10">It's a wonderful idea to browse, fork, and experiment with codestack to learn how they were created and how code functions. This tool will help you write, test, and debug your code with ease. </p>
                    </div>
                    <div className=' flex justify-end'>
                        <button className="btn glass mr-2 mb-2">Learn More</button>
                    </div>
                </div>
                <div className=" border border-lime-500 rounded-md mt-10">
                    <div className="card-body">
                        <img className="h-16 w-16 bg-emerald-100 rounded-md -mt-16" src="https://i.ibb.co/c8S3575/share-1.png" alt="" />
                        <h2 className="text-center font-bold text-xl lg:-mt-6">Share Your Work</h2>
                        <p className="text-center mt-10">Codestack is an online code editor that allows users to collaborate and share their code in real-time. The platform is built using the latest web technologies and is designed to be user-friendly and intuitive.</p>
                    </div>
                    <div className=' flex justify-end'>
                        <button className="btn glass mr-2 mb-2">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;