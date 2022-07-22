import React from 'react';
import axios from 'axios';
function testApi(e) {
    e.preventDefault();
    const inputValue = document.getElementById('name').value;
    axios
        .post('http://localhost:3000/car', {
            name: inputValue,
        })
        .then((response) => {
            console.log(response);
        })
        .then((error) => console.log(error));
}

export { testApi };
