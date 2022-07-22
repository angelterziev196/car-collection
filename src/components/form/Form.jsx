import React from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import { nanoid } from 'nanoid';

export default function Form() {
    const [dataState, setDataState] = React.useState({
        id: '',
        brand: '',
        model: '',
        firstRegistration: '',
        horsePower: '',
        cubicCapacity: '',
    });

    function getData(event) {
        setDataState((oldDataState) => {
            return {
                ...oldDataState,
                [event.target.name]: event.target.value,
            };
        });
    }
    console.log(dataState);
    function testRequest(e) {
        e.preventDefault();
        axios
            .post('http://localhost:3000/cars', {
                ...dataState,
            })
            .then((response) => console.log(response))
            .then((error) => console.log(error));
    }

    return (
        <form className='dataForm'>
            <div className='dataForm-input'>
                <label>Brand:</label>
                <input
                    placeholder='Brand of car'
                    type='text'
                    name='brand'
                    onChange={getData}
                />
            </div>
            <div className='dataForm-input'>
                <label>Model:</label>
                <input
                    placeholder='Car model'
                    type='text'
                    name='model'
                    onChange={getData}
                />
            </div>
            <div className='dataForm-input'>
                <label>First Registration:</label>
                <input
                    placeholder='Year of first registration'
                    type='text'
                    name='firstRegistration'
                    onChange={getData}
                />
            </div>
            <div className='dataForm-input'>
                <label>Power:</label>
                <input
                    placeholder='Horse Power'
                    type='text'
                    name='horsePower'
                    onChange={getData}
                />
            </div>
            <div className='dataForm-input'>
                <label>Cubic Capacity:</label>
                <input
                    placeholder='Cubic Capacity'
                    type='text'
                    name='cubicCapacity'
                    onChange={getData}
                />
            </div>
            <div className='dataForm-input'>
                <legend>Fuel type</legend>
                <div className='dataForm-input-fuelType'>
                    <input
                        id='diesel'
                        type='radio'
                        name='fuelType'
                        value='diesel'
                        onChange={getData}
                    />
                    <label htmlFor='diesel'>Diesel</label>
                </div>
                <div className='dataForm-input-fuelType'>
                    <input
                        id='petrol'
                        type='radio'
                        name='fuelType'
                        value='petrol'
                        onChange={getData}
                    />
                    <label htmlFor='petrol'>Petrol</label>
                </div>
                <div className='dataForm-input-fuelType'>
                    <input
                        id='LPG'
                        type='radio'
                        name='fuelType'
                        value='LPG'
                        onChange={getData}
                    />
                    <label htmlFor='LPG'>LPG</label>
                </div>
                <div className='dataForm-input-fuelType'>
                    <input
                        id='hybrid'
                        type='radio'
                        name='fuelType'
                        value='hybrid'
                        onChange={getData}
                    />
                    <label htmlFor='hybrid'>Hybrid</label>
                </div>
            </div>
            <div className='dataForm-input'>
                <label>Choose your image:</label>
                <input type='file' name='filename' onChange={getData} />
            </div>
            <input
                className='dataForm-button'
                onClick={(e) => testRequest(e)}
                type='submit'
                value='Submit'
            />
            <Outlet />
        </form>
    );
}
