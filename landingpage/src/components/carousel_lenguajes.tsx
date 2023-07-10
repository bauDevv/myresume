import '../assets/css/index.css';

import typescript from '../assets/img/lenguajes/typescript.svg';
import csharp from '../assets/img/lenguajes/csharp.svg';
import python from '../assets/img/lenguajes/python.svg';
import php from '../assets/img/lenguajes/php.svg'

export default function carousel_lenguajes() {

    const lenguajes = [
        {
            value: 'Typescript',
            img: typescript,
        },
        {
            value: 'C#',
            img: csharp,
        }, 
        {
            value: 'Python',
            img: python,
        },
        {
            value: 'PHP',
            img: php,
        }
    ]

    return (
        <div className='carousel-item'>
            {lenguajes.map((lenguajes) => (
                <div className='carousel-item'>
                    <div className='block grid-cols-1 grid-rows-2 mt-[-1rem]'>
                        <img src={lenguajes.img} alt="" />
                        <h1 className='font-bold text-lg'>{lenguajes.value}</h1>
                    </div>
                </div>
            ))}
        </div>
    )
}