import React, { useState } from 'react';
import './Survey.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Survey = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        sueno: 0
    });
    const [success, setSuccess] = useState(false);
    const [showHoursSlept, setShowHoursSlept] = useState(true);
    const [showExerciseHours, setShowExerciseHours] = useState(false);

    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(formData);

        axios.post('http://localhost:8080/api/cuestionario', formData)
            .then((response) => {
                console.log(response.data);
                setSuccess(true);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleInsomniaChange = (inputData) => {
        const isChecked = inputData.target.checked;
        setFormData({
            ...formData,
            insomnio: isChecked ? inputData.target.value : "",
            sueno: isChecked ? 0 : formData.sueno // Establecer el valor en 0 si el checkbox de insomnio se deselecciona
        });
        setShowHoursSlept(!isChecked);
    };

    const handleExerciseChange = (inputData) => {
        const isChecked = inputData.target.checked;
        setShowExerciseHours(isChecked);
        setFormData({
            ...formData,
            ejercicio: isChecked ? inputData.target.value : "",
            tiempo: isChecked ? formData.tiempo : 0 // Establecer el valor en 0 si el checkbox de ejercicio se deselecciona
        });
    };

    return (
        <div className='SeccionEntera' >
            {success ? (
                <section>
                    <h1><span className='text'>RESPUESTA REGISTRADA!</span></h1>
                    <p className='botones_respondi'>
                        <button className='cuesti' onClick={() => navigate('/')}>Volver al inicio</button>
                        <button className='cuesti' onClick={() => navigate('/videojuego')}>Ir al Videojuego</button>
                    </p>
                </section>
            ) : (
                <form className='form' onSubmit={onSubmitForm} >
                    <div className="inputContainer">
                        <label>Fecha: </label>
                        <input onChange={(inputData) => { setFormData({
                            ...formData,
                            fecha: inputData.target.value
                        })  }} type="date" name="fecha" id="date" />
                    </div>
                    <div className="inputContainer">
                        <label>Tuviste insomnio?</label>
                        <input
                            onChange={handleInsomniaChange}
                            type="checkbox"
                            name="no_sueno"
                            id="insomnio"
                        />
                    </div>
                    {showHoursSlept && (
                        <div className="inputContainer">
                            <label>Cuantas horas dormiste?</label>
                            <input
                                onChange={(inputData) => {
                                    setFormData({
                                        ...formData,
                                        sueno: inputData.target.value
                                    });
                                }}
                                type="number"
                                name="h_sueno"
                                id="sueno"
                                value={formData.sueno}
                            />
                        </div>
                    )}
                    <div className="inputContainer">
                        <label>Desayuno</label>
                        <input onChange={(inputData) => { setFormData({
                            ...formData,
                            desayuno: inputData.target.value
                        })  }} type="checkbox" name="desayuno_r" id="desayuno" />
                    </div>
                    <div className="inputContainer">
                        <label>Comida</label>
                        <input onChange={(inputData) => { setFormData({
                            ...formData,
                            comida: inputData.target.value
                        })  }} type="checkbox" name="comida_r" id="comida" />
                    </div>
                    <div className="inputContainer">
                        <label>Cena</label>
                        <input onChange={(inputData) => { setFormData({
                            ...formData,
                            cena: inputData.target.value
                        })  }} type="checkbox" name="cena_r" id="cena" />
                    </div>
                    <div className="inputContainer">
                        <label>Hiciste ejercicio hoy?</label>
                        <input
                            onChange={handleExerciseChange}
                            type="checkbox"
                            name="ejercicio"
                            id="ejer"
                        />
                    </div>
                    {showExerciseHours && (
                        <div className="inputContainer">
                            <label>Cuantas horas te ejercitaste?</label>
                            <input
                                onChange={(inputData) => {
                                    setFormData({
                                        ...formData,
                                        tiempo: inputData.target.value
                                    });
                                }}
                                type="number"
                                name="h_ejercicio"
                                id="duracion"
                                value={formData.tiempo}
                            />
                        </div>
                    )}
                    <div className="inputContainer">
                        <label>Tomaste algun medicamento?</label>
                        <input onChange={(inputData) => { setFormData({
                            ...formData,
                            medicamento: inputData.target.value
                        })  }} type="checkbox" name="medicamento_r" id="medicamento" />
                    </div>
                    <div className="inputContainer">
                        <button className='cuesti' type='submit' >Submit</button>
                    </div>
                </form>
            )}
        </div>
    )
}

export default Survey