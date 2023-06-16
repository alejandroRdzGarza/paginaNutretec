import React from 'react'
import './PerfilMedico.css'
import profile_image from '../../assets/medico.png'
import {useNavigate} from 'react-router-dom'



const PerfilMedico = () => {
    const navigate = useNavigate()
    


    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const monthNames = [
            'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
            'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
        ];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${day+1} de ${month} del ${year}`;
    };

    const logoutOnClick = () => {
        localStorage.clear()
        navigate('/')
    }

    // useEffect(() => {
    //     const userID = JSON.parse(localStorage.getItem('user')).IDusuario;
    //     console.log(userID)
    //     const fetchData = async () => {
    //     try {
    //         const response = await axios.get('http://localhost:8080/api/usuario/'+userID);
    //         console.log(response.data);
    //         setData2(response.data);
    //     } catch (error) {
    //         setError(error.message);
    //     }
    //     };

    //     fetchData();
    // }, []);

    return (
        <div className='SeccionProfile_Arnold'>
            <div>
                <div>
                    <img className='foto_profile_arnold' src={profile_image} alt=''/>
                </div>
            </div>
            <div>
                    <div className='personal_profile_arnold'>
                        <div className='bandera_profile'>
                            <span>Datos personales</span>
                        </div>
                        <div className='cosas_nombre'>
                            <span>Nombre del usuario</span>
                            <div className='rectangulo_nombre'>{JSON.parse(localStorage.getItem('user')).nombre}</div>
                        </div>
                        <div className='line_perso'>
                        <div className='fechita'>
                            <span>Fecha de nacimiento</span>
                            <div className='rectangulo_fecha'>{JSON.parse(localStorage.getItem('user')) && formatDate(JSON.parse(localStorage.getItem('user')).fechaNacimiento)}</div>
                        </div>
                            <div className='cel'>
                                <span>Telefono</span>
                                <div className='rectangulo_telefono'>{JSON.parse(localStorage.getItem('user')).telefono}</div>
                            </div>
                            <div className='correito'>
                                <span>Correo electronico</span>
                                <div className='rectangulo_correo'>{JSON.parse(localStorage.getItem('user')).email}</div>
                            </div>
                        </div>
                    </div>
            </div>
            <button className='Modificar' onClick={() => navigate('/modificarDatos')}>Modificar Datos</button>
            <button className='Cerrar' onClick={logoutOnClick}>Cerrar Sesion</button>

        </div>
    )
}

export default PerfilMedico
