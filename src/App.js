import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.css'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import Icon from "./components/Icon";

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Switch>
                    <Route path='/' render={() => <Home/>}/>
                </Switch>
                <div className="socialsBlock d-flex flex-column align-items-center justify-content-around">
                    <Link className='socialsBlock__link' to='#'><Icon type='fab' name='telegram-plane'/></Link>
                    <Link className='socialsBlock__link' to='#'><Icon type='fab' name='vk'/></Link>
                    <Link className='socialsBlock__link' to='#'><Icon type='fab' name='instagram'/></Link>
                </div>
            </div>
        </Router>
    );
}

export default App;
