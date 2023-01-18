import React from 'react';
import { FaGit, FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import CountUp from 'react-countup/build';

const AboutUs = () => {

    return (
        <div className='text-white text-justify'>
            <div className='flex justify-between items-center'>
                <h2 className='text-3xl mt-10 font-bold text-secondary'>About Us</h2>
                <div className='flex gap-2 items-center text-xl my-10'>
                    <p>Follow us on </p>
                    <FaGithub></FaGithub>
                    <FaLinkedinIn></FaLinkedinIn>
                    <FaTwitter></FaTwitter>
                </div>                
            </div>

            <p>
            Let's build from here, The team behind the code editor is comprised of experienced web developers who are dedicated to creating high-quality tools for the developer community. Our online code editor is a powerful and easy-to-use tool for writing and testing code. Built using React and other modern web technologies, it offers a wide range of features for developers of all levels, including syntax highlighting, code completion, and real-time error checking. <br /> <br />

            "Our development team is comprised of highly skilled and experienced software engineers who are dedicated to creating innovative and user-friendly technology solutions. We specialize in a variety of programming languages and frameworks, including React.js, and our team is always up-to-date with the latest industry trends and advancements. <br /> <br />

            We take pride in our ability to understand our clients' needs and deliver customized solutions that exceed their expectations. Our goal is to build robust, scalable, and visually appealing products that provide an exceptional user experience. We are a team of passionate individuals who are constantly pushing the boundaries of what is possible with technology. We value collaboration, communication, and continuous learning, and we are committed to delivering the highest quality products and services to our clients. Thank you for choosing our application!"
            </p>

            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center my-10 mx-5'>
                <div className=' p-3 rounded-md border-2 border-blue-500 shadow-2xl shadow-blue-400'>
                    <CountUp className='text-5xl' start={0} end={58} duration={2.75} separator=" " suffix=" +"></CountUp>
                    <p className='text-2xl font-semibold text-secondary'>Total Developers</p>
                </div>
                <div className=' p-3 rounded-md border-2 border-blue-500 shadow-2xl shadow-blue-400'>
                    <CountUp className='text-5xl' start={0} end={100} duration={2.75} separator=" " suffix=" +"></CountUp>
                    <p className='text-2xl font-semibold text-secondary'>Complete Projects</p>
                </div>
                <div className=' p-3 rounded-md border-2 border-blue-500 shadow-2xl shadow-blue-400'>
                    <CountUp className='text-5xl' start={0} end={99} duration={2.75} separator=" " suffix=" %"></CountUp>
                    <p className='text-2xl font-semibold text-secondary'>User-Friendly</p>
                </div>
            </div>

            <h2 className='mb-5 text-2xl'>Histery of Coders StackBox:</h2>

            <p>The development of our online code editor began in early 2020, when our team identified a need for a versatile and user-friendly tool that could be used by developers of all skill levels. Our goal was to create a platform that would make it easy for developers to write, test, and share their code, no matter where they were located.</p>
            The first version of our editor was a basic web-based text editor that allowed users to write and save their code. However, we quickly realized that this was not enough to meet the needs of our users, so we began adding new features to improve the functionality of the editor.

            <p>One of the first major changes we made was to add syntax highlighting and code completion, which made it easier for users to write and understand their code. We also added a built-in code execution feature, which allowed users to test their code without having to leave the editor. As we continued to develop the editor, we added more advanced features such as version control, debugging tools, and collaboration capabilities. We also made a number of improvements to the user interface to make it more intuitive and user-friendly. Over time, our online code editor has grown to become a powerful and versatile tool that is used by thousands of developers around the world. We are constantly working to improve the editor and add new features to meet the evolving needs of our users.</p>

                <h2 className='mt-2'>We use the following technologies to build our code editor:</h2>
                <ul className='ml-5 my-2'>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                </ul>
            <p>
                If you have any questions or feedback, please don't hesitate to contact us at coders.stackbox@gmail.com
                <br />
                We believe in open-source and the power of community,contineue that's why our code editor is open-sourced and available on GitHub. You can find the source code and contributing guidelines here and the license used here.
            </p>
        </div>
    );
};

export default AboutUs;