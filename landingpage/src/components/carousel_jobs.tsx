import '../assets/css/index.css';
import gprosur from '../assets/img/companies/gprosur.png'
import contabilizate from '../assets/img/companies/contabilizate.png'
import gfarrera from '../assets/img/companies/farrera.png'

export default function carousel_jobs() {

    const jobs = [
        {
            value: 'Grupo Prosur',
            img: gprosur,
            index:1
        },
        {
            value: 'Contabox',
            img: contabilizate,
        },
        {
            value: 'Procesos y Sistemas Farrera',
            img: gfarrera,
            index:3
        }
    ]

    return (
        <div className='carousel-item'>
            {jobs.map((jobs) => (
                <div className='carousel-item' >
                    <div className='block grid-cols-1 grid-rows-2 mt-[-1rem]'>
                        <img src={jobs.img} className='' />
                        <h1 className='font-bold text-xs'>{jobs.value}</h1>
                    </div>
                </div>
            ))}
        </div>
        
    )
}