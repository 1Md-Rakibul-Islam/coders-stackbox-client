import React from 'react';
import OurTeams from './OurTeams/OurTeams';

const teamData = [
    {
        image: "https://i.ibb.co/SBw4PJn/img1.png",
        id: 1,
        designation: "Front End Developer",
        name: "Md. Bayazid Hossain",
        github: "https://github.com/xbayazid",
        linkedin: "",
        resume: ""
    }, 
    {
        image: "https://i.ibb.co/199wc0y/3d-illustration-person-23-2149436179.webp", 
        id: 2,
        designation: "Front End Developer",
        name:"Md. Tamjid Mostafa",
        github: "",
        linkedin: "",
        resume: "" 
    }, 
    {
        image: "https://i.ibb.co/199wc0y/3d-illustration-person-23-2149436179.webp", 
        id: 3,
        designation: "Front End Developer",
        name:"Rakibul Islam",
        github: "",
        linkedin: "",
        resume: "" 
    },
    {
        image: "https://i.ibb.co/4ZwwGG5/noman.jpg", 
        id: 4,
        designation: "Front End Developer",
        name:"Al Noman Mahib",
        github: "https://github.com/Noman02",
        linkedin: "",
        resume: "" 
    },
    {
        image: "https://i.ibb.co/WPCThT5/55555.jpg", 
        id: 5,
        designation: "Front End Developer",
        name:"Chayon Ghosh",
        github: "",
        linkedin: "",
        resume: ""
    },
    {
        image: "https://i.ibb.co/199wc0y/3d-illustration-person-23-2149436179.webp", 
        id: 6,
        designation: "Front End Developer",
        name:"Most. Jesmin Ara",
        github: "",
        linkedin: "",
        resume: ""
    },
]
const OurTeam = () => {
    return (
        <div>
            <div>
            <h1 className='text-white text-center text-4xl font-bold section-title'>Our Team</h1>
            
            </div>
            <div className='grid gap-7 md:grid-cols-2 lg:grid-cols-3 mx-auto my-5'>
            {
                teamData.map(card => <OurTeams
                key={card.id}
                card={card}
                ></OurTeams>)
            }
            </div>
        </div>
    );
};

export default OurTeam;