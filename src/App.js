import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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
                <Switch>

                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/Animes">
                        <Animes />
                    </Route>

                    <Route path="/Mangas">
                        <Mangas />
                    </Route>

                    <Route path="/Jogos">
                        <Jogos />
                    </Route>

                </Switch>    
                
            </Router>            

        </>


    )

}

export default App;