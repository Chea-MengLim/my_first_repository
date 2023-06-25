import React from "react";
import "./App.css"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import HomeScreen from "./Screen/home/HomeScreen";
import StudentScreen from "./Screen/student/studentScreen";
import AboutScreen from "./Screen/About/About";
import PageNotFoundScreen from "./Screen/RouteNotFound/RouteNotFound";
import CourseScreen from "./Screen/course/courscreen";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () =>{
    return (
        <div>
            <button className="btn btn-primary"> Click me </button>
            
           <BrowserRouter>
                <div className="menu-bar">
                    <Link className="Link" to="/"> Home</Link>
                    <Link className="Link"  to="/student">Student</Link>
                    <Link className="Link" to="/about">About</Link>
                    <Link className="Link" to="/course">Course</Link>
                 
                </div>
                {/* register route*/}
                <div style={{paddingLeft:"20px"}}>
                    <Routes>
                        <Route path="/" element={<HomeScreen/>} />
                        <Route path="/Student" element={<StudentScreen/>}/>
                        <Route path="/about" element={<AboutScreen/>} />
                        <Route path="/course" element={<CourseScreen/>} />
                        <Route path="*" element={<PageNotFoundScreen/>}/>
                        
                        
                    </Routes>
                </div>
           </BrowserRouter>
        </div>
    )
}

export default App;

// finished 10