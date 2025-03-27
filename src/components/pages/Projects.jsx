import React, { useEffect } from 'react'
import img1 from '../img/img1.png';
import img2 from '../img/img-2.png';
import img3 from '../img/img-3.png'
import img4 from '../img/img-4.png'
import img5 from '../img/img-5.png'
import img6 from "../img/img-6.jpg"
import { HiMiniArrowUpRight } from "react-icons/hi2";

function Projects() {
    const cardsData = [
        {
            image: img1,
            title: 'Note Saver Application',
            description: 'You can Save Your Notes and daily Task here',
            links: "https://notes-saver-app-three.vercel.app/"
        },
        {
            image: img2,
            title: 'Social Media App',
            description: 'Here users can upload their posts after logging in, and any other user can like and comment on that post',
            links: "https://social-media-react-gamma.vercel.app/"
        },
        {
            image: img3,
            title: 'Responsive web clone',
            description: 'I have made this website fully responsive for all screens with Tailwind CSS.',
            links: "https://responsivetailwindproject.vercel.app/"
        },
        {
            image: img4,
            title: 'Medpro web clone',
            description: 'I have made this website clone with HTML and CSS',
            links: "https://medpro-web-clone.vercel.app/"
        },
        {
            image: img5,
            title: 'Recipe-web-app',
            description: 'A MERN stack-based recipe app with user authentication, where users can save and view recipes. Admins, registered via Postman, can log in to access exclusive features like adding, editing, and deleting recipes. Upon admin login, a "Add Recipe" button appears in the header for easy management',
            links: "https://github.com/Pravesh-Prajapati/MERN-project/tree/main/Recipe-app"
        },
    ];

    return (
        <>

<div className='bg-gradient-to-br from-gray-800 to-black pb-5 pt-10'>
                <div className='max-w-[1450px] mx-auto'>
                    {/* Projects Section */}
                    <div className='text-center font-bold mx-3 py-9 rounded-3xl'>
                        <div className='text-white'>
                            <h1 className='text-4xl mb-6'>Works And Projects</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
                                {cardsData.map((card, i) => (
                                    <div key={i} className="group custom-card transition-transform transform hover:shadow-2xl duration-500 bg-orange-100 rounded-xl relative  text-black">
                                        <img src={card.image} alt="Project" className="custom-card-image object-cover rounded-lg h-[500px] w-full" />
                                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
                                        <div className="custom-card-content p-6">
                                            <h2 className="custom-card-title text-2xl mb-2 font-semibold text-left">{card.title}</h2>
                                            <p className="custom-card-description text-gray-700 text-left">{card.description}</p>
                                            <a href={card.links} target='_blank' className='absolute text-white bg-orange-600 text-3xl p-4 rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-all duration-500'>
                                                <HiMiniArrowUpRight />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Certificate Section */}
                    
                </div>
            </div>
        </>
    )
}

export default Projects