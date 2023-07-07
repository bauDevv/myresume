import '../assets/css/index.css';

import typescript from '../assets/img/lenguajes/typescript.svg';
import csharp from '../assets/img/lenguajes/csharp.svg';
import delphi from '../assets/img/lenguajes/delphi.svg';
import python from '../assets/img/lenguajes/python.svg'

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
            value: 'Delphi | Pascal',
            img: delphi,
        },
        {
            value: 'Python',
            img: python,
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