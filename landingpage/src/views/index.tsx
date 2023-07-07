import { useState } from 'react';
import '../assets/css/index.css';
import carousel_frameworks from '../components/carousel_frameworks';
import carousel_lenguajes from '../components/carousel_lenguajes';
import carousel_databases from '../components/carousel_databases';
import carousel_control_version from '../components/carousel_controlversion';

//import icons from redes
import profile from '../assets/img/profile-image.png';
import facebook from '../assets/img/red-social/icons8-facebook.svg';
import linkedin from '../assets/img/red-social/linkedin-svgrepo-com.svg';
import github from '../assets/img/red-social/icons8-github-50.png';
import flagmx from '../assets/img/flags/mexico.svg';
import flagusa from '../assets/img/flags/usa.svg';


export default function Index() {
    const [showMenu, setShowMenu] = useState(false);

    const [changeFlag, setChangeFlag] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const changeFlags = () => {
        setChangeFlag(!changeFlag);
    };


    const facebookLink = 'https://www.facebook.com/bauwu14/';
    const linkedingLink = 'https://www.linkedin.com/in/alfredo-bautista-ramirez14/';
    const githubLink = 'https://github.com/bauDevv';

    return (
        <div className=' justify-center'>
            {/* navbar */}
            <nav>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <a className="text-black font-bold text-lg">Alfredo Bautista</a>
                        </div>
                        <div className="hidden sm:block">
                            <div className="flex space-x-4">
                                <a href="#home" className='hover:text-white'>Home</a>
                                <a href="#aboutme" className='hover:text-white'>{changeFlag ? 'Sobre mí' : 'About me'}</a>
                                <a href="#experience" className='hover:text-white'>{changeFlag ? 'Mi experiencia' : 'My experience'}</a>
                                <a href="#portfolio" className='hover:text-white'>{changeFlag ? 'Portafolio' : 'Portfolio'}</a>
                                <p className='flex justify-center items-center text-sm hover:text-white' onClick={changeFlags}>Lenguaje: <img src={changeFlag ? flagmx : flagusa} className='ml-2 h-5' /></p>
                            </div>
                        </div>
                        <div className="sm:hidden">
                            <button
                                type="button"
                                className="hover:bg-gray-700 hover:text-white block px-2 py-2 rounded-md text-base font-medium"
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
                    </div>
                </div>
                <div className={`${showMenu ? 'block' : 'hidden'} sm:hidden`}>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <ul className='p-4'>
                            <li className='p-2'>
                                <a href="#home" className='hover:text-white active'>Home</a>
                            </li>
                            <li className='p-2'>
                                <a href="#aboutme" className='hover:text-white'>{changeFlag ? 'Sobre mí' : 'About me'}</a>
                            </li>
                            <li className='p-2'>
                                <a href="#experience" className='hover:text-white'>{changeFlag ? 'Mi experiencia' : 'My experience'}</a>
                            </li>
                            <li className='p-2'>
                                <a href="#portfolio" className='hover:text-white'>{changeFlag ? 'Portafolio' : 'Portfolio'}</a>
                            </li>
                            <li>
                                <p className='flex justify-center items-center text-sm hover:text-white' onClick={changeFlags}>Lenguaje: <img src={changeFlag ? flagmx : flagusa} className='ml-2 h-5' /></p>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            {/* Home section */}
            <section id="home" >
                <div>
                    <div className="text-container">
                        <div>
                            <p className=' text-5xl'> {changeFlag ? 'Bienvenido!' : 'Welcome!'}</p>
                            <h1 className='p-2 text-xl'>{changeFlag ? 'Ingeniería en Sistemas' : 'Systems Engineering'}</h1>
                        </div>

                    </div>
                </div>
            </section>
            {/* Abotu me section */}
            <section id='aboutme'>
                <div className='bg-slate-50 rounded-2xl shadow-2xl'>
                    <div className=''>
                        <div className="lg:flex lg:grid-cols-2 md:flex md:grid-cols-1 md:grid-rows-2 sm:grid sm:grid-rows-2 sm:grid-cols-1 gap-4 p-5">
                            <div className="flex">
                                <img src={profile} className="lg:max-w-screen md:max-w-xs sm:max-w-screen rounded-lg shadow-2xl p-2" />
                            </div>
                            <div className="lg:flex-grow md:flex-grow sm:flex sm:items-center">
                                <div>
                                    <div className='text-4xl p-4'>
                                        <h1>{changeFlag ? 'Sobre mí' : 'About me'}</h1>
                                    </div>
                                    <div className='p-4 text-md'>
                                        <h1>{changeFlag ? 'Hola, me llamo Alfredo Bautista. Soy estudiante de Ingeniería en Sistemas, actualmente trabajo como Desarrollador Full Stack, así como también soy responsable de organizar/dirigir proyectos, realizar maquetados de aplicaciones y administrar aplicaciones en AWS. ' : 'Hello, my name is Alfredo Bautista. I am a Systems Engineering student and currently work as a full-stack developer. I am also responsible for managing projects, creating web design mockups, and handling AWS administration.'}</h1>
                                    </div>
                                    <div className='p-4'>
                                        <div className=' font-bold'>
                                            <h1>{changeFlag ? 'Contacto:' : 'Contact:'}</h1>
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
                <div className='bg-slate-50 rounded-2xl shadow-2xl p-2'>
                    <div className='lg:grid lg:grid-cols-2 lg:grid-rows-1 md:grid md:grid-cols-2 md:grid-rows-1 sm:grid sm:grid-cols-1 sm:grid-rows-2'>
                        <div className='block p-4'>
                            <div className='p-4'>
                                <h1 className=' text-4xl p-2'>My experience</h1>
                            </div>
                            <div className='p-4'>
                                <h1>I have developed systems in different frameworks, languages, and environments, using diferent methodologies and development patterns. Here is a list of each one:</h1>
                            </div>
                        </div>
                        <div className='p-4'>
                            <div className='rounded-box bg-slate-400/20'>
                                <div className='carousel main'>
                                    <div className='carousel-item w-full' id='item1'>
                                        <div>
                                            <div className='p-2 mt-7'>
                                                <h1 className=' font-bold'>Framework</h1>
                                            </div>
                                            <div className='carousel'>
                                                {carousel_frameworks()}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='carousel-item w-full' id='item2'>
                                        <div className=''>
                                            <div className='p-2 mt-7'>
                                                <h1 className=' font-bold'>Lenguaje</h1>
                                            </div>
                                            <div className='carousel'>
                                                {carousel_lenguajes()}
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' carousel-item w-full' id='item3'>
                                        <div>
                                            <div className='p-2 mt-7'>
                                                <h1 className=' font-bold'>Database</h1>
                                            </div>
                                            <div className='carousel'>
                                                {carousel_databases()}
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' carousel-item w-full' id='item4'>
                                        <div>
                                            <div className='p-2 mt-7'>
                                                <h1 className=' font-bold'>Control Version</h1>
                                            </div>
                                            <div className='carousel'>
                                                {carousel_control_version()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center w-full py-2 gap-2">
                                    <a href="#item1" className="btn btn-xs">1</a>
                                    <a href="#item2" className="btn btn-xs">2</a>
                                    <a href="#item3" className="btn btn-xs">3</a>
                                    <a href="#item4" className="btn btn-xs">4</a>
                                </div>
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