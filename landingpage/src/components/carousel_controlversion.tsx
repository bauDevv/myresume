import '../assets/css/index.css';
import gitlab from '../assets/img/controlversion/gitlab.svg';
import github from '../assets/img/controlversion/github.svg'

export default function carousel_control_version() {

    const control_version = [
        {
            value: 'GitLab',
            img: gitlab,
        },
        {
            value: 'GitHub',
            img: github,
        }
    ]

    return (
        <div className='carousel-item'>
            {control_version.map((controlVersions) => (
                <div className='carousel-item'>
                    <div className='block grid-cols-1 grid-rows-2 mt-[-1rem]'>
                        <img src={controlVersions.img} alt="" />
                        <h1 className='font-bold text-lg'>{controlVersions.value}</h1>
                    </div>
                </div>
            ))}
        </div>
    )
}