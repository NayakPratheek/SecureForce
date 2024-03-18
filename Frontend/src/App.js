import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Unit from './components/Unit';
import Soldier from './components/Soldier';
import Equipment from './components/Equipment';
import Commander from './components/Commander';
import Award from './components/Award';
import Units from './components/Units';
import Landing from './Screen/Landing';
import Area from './Screen/Area';
import Soldiers from './components/Soldiers';
import Equipments from './components/Equipments';
import Commanders from './components/Commanders';
import Awards from './components/Awards';
import LoginForm from './Screen/LoginForm';


function App() {
    return (
        <Router>
            <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/viewdetails" element={<Area />} />
            <Route exact path="/adddetails" element={<Unit />} />
                <Route exact path="/unit" element={<Unit />} />
                <Route exact path="/units" element={<Units/>} />
                <Route exact path="/soldier" element={<Soldier />} />
                <Route exact path="/soldiers" element={< Soldiers/>} />
                <Route exact path="/equipment" element={<Equipment />} />
                <Route exact path="/equipments" element={<Equipments />} />
                <Route exact path="/commander" element={<Commander />} />
                <Route exact path="/commanders" element={<Commanders />} />
                <Route exact path="/award" element={<Award />} />
                <Route exact path="/awards" element={<Awards />} />
                <Route exact path="/admin" element={<LoginForm/>}></Route>
            </Routes>
        </Router>
    );
}

export default App;

