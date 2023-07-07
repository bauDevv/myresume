import '../assets/css/index.css';

import typescript from '../assets/img/lenguajes/typescript.svg'
import csharp from '../assets/img/lenguajes/csharp.svg'
export default function carousel_lenguajes() {

    const lenguajes = [
        {
            value: 'Typescript',
            img: typescript,
            index: 1
        },
        {
            value: 'C#',
            img: csharp,
            index: 2
        }
    ]

    return (
        <div className='carousel-item'>
            {lenguajes.map((lenguajes) => (
                <div className='carousel-item'>
                    <div className='block grid-cols-1 grid-rows-2 mt-[-1rem]' key={lenguajes.index}>
                        <img src={lenguajes.img} alt="" />
                        <h1 className='font-bold text-lg'>{lenguajes.value}</h1>
                    </div>
                </div>
            ))}
        </div>
    )
}