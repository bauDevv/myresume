import '../assets/css/index.css';

import figma from '../assets/img/others/figma.svg';
import aws from '../assets/img/others/aws.svg';
import devexpress from '../assets/img/others/devexpress.svg';

export default function carousel_others() {

    const lenguajes = [
        {
            value: 'Figma',
            img: figma,
        },
        {
            value: 'AWS',
            img: aws,
        },
        {
            value: 'DevExpress',
            img: devexpress,
        },
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