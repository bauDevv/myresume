import { useState } from 'react';
import '../assets/index.css';
import profile from '../assets/img/profile-image.png';
import facebook from '../assets/img/red-social/icons8-facebook.svg';
import linkedin from '../assets/img/red-social/linkedin-svgrepo-com.svg';
import github from '../assets/img/red-social/icons8-github-50.png';
import react from '../assets/img/framework/icons8-.net-framework.svg'
export default function Index() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    let facebookLink = 'https://www.facebook.com/bauwu14/';
    let linkedingLink = 'https://www.linkedin.com/in/alfredo-bautista-ramirez14/';
    let githubLink = 'https://github.com/bauDevv';

    return (
        <div className=' align-middle'>
            {/* navbar */}
            <nav className='flex lg:justify-center sm:justify-between items-center'>
                <div className=''>
                    <a href="#home"></a>
                </div>
                <div className={`${isOpen ? 'hidden' : 'block'
                    } md:static absolute md:min-h-fit min-h-[60vh] left-1 top-[9%] md:w-auto w-full pt-5`}>
                    <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8'>
                        <li className='hover:text-white'>
                            <a href="#home">Home</a>
                        </li>
                        <li className='hover:text-white'>
                            <a href="#aboutme">About me</a>
                        </li>
                        <li className='hover:text-white'>
                            <a href="#experience">My experience</a>
                        </li>
                        <li className='hover:text-white'>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <button
                        className="navbar-toggler btn btn-square btn-ghost md:hidden"
                        onClick={toggleMenu}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-menu"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1="4" y1="6" x2="20" y2="6" />
                            <line x1="4" y1="12" x2="20" y2="12" />
                            <line x1="4" y1="18" x2="20" y2="18" />
                        </svg>
                    </button>
                </div>
            </nav>
            {/* Home section */}
            <section id="home" >
                <div>
                    <div className="col-span-12 text-container">
                        <div>
                            <p> Welcome!</p>
                            <h2>Systems Engineering</h2>
                        </div>

                    </div>
                </div>
            </section>
            {/* Abotu me section */}
            <section id='aboutme'>
                <div className=' bg-slate-50 rounded-2xl shadow-2xl'>
                    <div className=''>
                        <div className="lg:flex md:flex sm:flex lg:grid-cols-2 sm:grid-flow-col gap-4 sm:grid-rows-1 sm:grid-cols-1 p-5">
                            <div className="flex">
                                <img src={profile} className="lg:max-w-screen md:max-w-screen sm:max-w-xs rounded-lg shadow-2xl p-2" />
                            </div>
                            <div className="flex-grow">
                                <div>
                                    <div className='text-4xl p-4'>
                                        <h1>About me</h1>
                                    </div>
                                    <div className='p-4 text-md'>
                                        <h1>Hello, my name is Alfredo Bautista. I am a Systems Engineering student and currently work as a full-stack developer.
                                            I am also responsible for managing projects, creating web design mockups, and handling AWS administration.</h1>
                                    </div>
                                    <div className='p-4'>
                                        <div className=' font-bold'>
                                            <h1>Contact:</h1>
                                        </div>
                                        <div className='grid grid-cols-3 grid-rows-1 p-5'>
                                            <div>
                                                <a href={facebookLink} className='flex justify-center'><img src={facebook} className='logo' /></a>
                                            </div>
                                            <div>
                                                <a href={linkedingLink} className='flex justify-center'><img src={linkedin} className='logo' /></a>
                                            </div>
                                            <div>
                                                <a href={githubLink} className='flex justify-center'><img src={github} className='logo' /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* My experience section */}
            <section id='experience' className='pt-10'>
                <div className='container bg-slate-50 rounded-2xl shadow-2xl'>
                    <div>
                        <h1>In my experience, I have developed systems in different frameworks, languages, and environments, using various methodologies and development patterns. Here is a list of each one:</h1>
                    </div>
                    <div className='grid lg:grid-cols-3 lg:grid-rows-1'>
                        <div className='p-5'>
                            <div>
                                <h1 className=' text-3xl font-bold'>Lenguajes</h1>
                            </div>
                            <div className='carousel'>
                                <div id='item1' className='carousel-item justify-center w-full'>
                                    <img src={react} className='logo-framework' />
                                </div>
                                <div id='item2' className='carousel-item justify-center w-full'>
                                    <img src={react} className='logo-framework' />
                                </div>
                            </div>
                            <div className="flex justify-center w-full gap-2">
                                <a href="#item1" className="btn btn-xs">1</a>
                                <a href="#item2" className="btn btn-xs">2</a>
                                <a href="#item3" className="btn btn-xs">3</a>
                                <a href="#item4" className="btn btn-xs">4</a>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <section id='portfolio'>

            </section>
            <section>

            </section>
        </div>
    )
}