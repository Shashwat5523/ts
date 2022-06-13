import Home from "./components/Menu List/Dashboard/Home";
import Log from "./components/Menu List/Login/Log";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FormElement from "./components/Menu List/Forms/FormElement";
import Tables from "./components/Menu List/Tables/Tables";
import './App.css';
import './style/dark.css'

function App() {
    return ( 
        <div className = "App" >
        <Router>
        <Routes>
        <Route path = '/' element = { <Home/> }/> 
        <Route path = '/login' element = { <Log/> }/>  
        <Route path = '/form' element = { <FormElement/> }/>  
        <Route path = '/tables' element = { <Tables/> }/>  
        </Routes>
        </Router>  
        </div>
    );
}

export default App;