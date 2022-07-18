import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Form from './form/Form';
import Nav from './nav/Nav';

export default function App() {
    return (
        <div>
            <Form />
            {/* <Nav />
            <Router>
                <Routes>
                    <Route path='/form' element={} />
                </Routes>
            </Router> */}
        </div>
    );
}
