import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom"
import Home from './components/pages/Home/';
import Animes from './components/pages/Animes';
import Mangas from './components/pages/Mangas';
import Jogos from './components/pages/Jogos';

import './App.css';
import NavBar from './components/NavBar';


function App (){

    return(

        <>

            <Router>
                
                <NavBar />
                <Routes>

                    <Route exact path="/" element={<Home />}>
                    </Route>

                    <Route path="/Animes" element={<Animes />}>
                    </Route>

                    <Route path="/Mangas" element={<Mangas />}>
                    </Route>

                    <Route path="/Jogos" element={<Jogos />}>
                    </Route>

                </Routes>    
                
            </Router>            

        </>


    )

}

export default App;