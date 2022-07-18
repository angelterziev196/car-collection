import axios from 'axios';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Form() {
    function testApi(e) {
        e.preventDefault();
        const inputValue = document.getElementById('name').value;
        axios
            .post('http://localhost:3000/profile', {
                name: inputValue,
            })
            .then((response) => {
                console.log(response);
            })
            .then((error) => console.log(error));
    }

    return (
        <form className='dataForm'>
            <div className='dataForm-input'>
                <label>Brand:</label>
                <input
                    placeholder='Brand of car'
                    id='name'
                    type='text'
                    name='brand'
                />
            </div>
            <div className='dataForm-input'>
                <label>Model:</label>
                <input
                    placeholder='Car model'
                    id='name'
                    type='text'
                    name='model'
                />
            </div>
            <div className='dataForm-input'>
                <label>First Registration:</label>
                <input
                    placeholder='Year of first registration'
                    type='text'
                    name='firstRegistration'
                />
            </div>
            <div className='dataForm-input'>
                <label>Power:</label>
                <input placeholder='Horse Power' type='text' name='power' />
            </div>
            <div className='dataForm-input'>
                <label>Cubic Capacity:</label>
                <input
                    placeholder='Cubic Capacity'
                    type='text'
                    name='cubicCapacity'
                />
            </div>
            <div className='dataForm-input'>
                <legend>Fuel type</legend>
                <div className='dataForm-input-fuelType'>
                    <input type='checkbox' />
                    <label htmlFor='diesel'>Diesel</label>
                </div>
                <div className='dataForm-input-fuelType'>
                    <input type='checkbox' />
                    <label htmlFor='petrol'>Petrol</label>
                </div>
                <div className='dataForm-input-fuelType'>
                    <input type='checkbox' />
                    <label htmlFor='LPG'>LPG</label>
                </div>
                <div className='dataForm-input-fuelType'>
                    <input type='checkbox' />
                    <label htmlFor='hybrid'>Hybrid</label>
                </div>
            </div>
            <div className='dataForm-input'>
                <label>Choose your image:</label>
                <input type='file' name='filename' />
            </div>
            <input
                className='dataForm-button'
                onClick={(e) => testApi(e)}
                type='submit'
                value='Submit'
            />
            <Outlet />
        </form>
    );
}
