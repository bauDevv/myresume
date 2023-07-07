import '../assets/css/index.css';
import asp from '../assets/img/framework/asp.svg';
import angular from '../assets/img/framework/angular.svg';
import ionic from '../assets/img/framework/ionic.svg';
import react from '../assets/img/framework/react.svg';

export default function carousel_frameworks() {

    const frameworks = [
        {
            value: 'ASP .NET CORE',
            image: asp,
            index:1
        },
        {
            value: 'Angular',
            image: angular,
            index:2
        },
        {
            value: 'IONIC',
            image: ionic,
            index:3
        },
        {
            value: 'ReactJS',
            image: react,
            index:4
        },
        // Agrega más elementos del arreglo frameworks según sea necesario
    ];

    return (
        <div className='carousel-item'>
            {frameworks.map((framework) => (
                <div className='carousel-item'>
                    <div className='block grid-cols-1 grid-rows-2 mt-[-1rem]'>
                        <img src={framework.image} alt="" />
                        <h1 className='font-bold text-lg'>{framework.value}</h1>
                    </div>
                </div>
            ))}
        </div>
    );
}

