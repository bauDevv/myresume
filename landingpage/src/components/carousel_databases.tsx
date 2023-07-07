import '../assets/css/index.css';
import sqlserver from '../assets/img/database/sqlserver.svg';
import firebird from '../assets/img/database/firebird.svg';
import mysql from '../assets/img/database/mysql.svg';
import postgres from '../assets/img/database/postgres.svg'

export default function carousel_databases() {

    const databases = [
        {
            value: 'Microsoft SQL Server',
            image: sqlserver,
        },
        {
            value: 'FireBird',
            image: firebird,
        },
        {
            value: 'MySQL',
            image: mysql,
        },
        {
            value: 'PostgreSQL',
            image: postgres,
        },
        // Agrega más elementos del arreglo frameworks según sea necesario
    ];

    return (
        <div className='carousel-item'>
            {databases.map((database) => (
                <div className='carousel-item'>
                    <div className='block grid-cols-1 grid-rows-2 mt-[-1rem] pb-2'>
                        <img src={database.image} alt="" />
                        <h1 className='font-bold text-lg '>{database.value}</h1>
                    </div>
                </div>
            ))}
        </div>
    );
}