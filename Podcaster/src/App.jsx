import React from 'react';
//import './index.css';
import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Mainlayout from './layout/Mainlayout';
import  Home  from './pages/Home';
import Authlayout from './layout/Authlayout';
import Signup  from './pages/Signup';
import Login from './pages/Login';
import Categories from './pages/Categories';

const App = () =>{
  return( 
    <div className=" ">
      <Router>
        <Routes>
           <Route path='/' element={<Mainlayout/>}>
             {" "}
           <Route index element={<Home/>}/>
           <Route path="/categories" element={<Categories/>} />
          </Route> 
           {/* So we are using here nested routes*/}
           <Route path="/" element={<Authlayout />}>
             <Route path="/signup" element={<Signup/>}/>
             <Route path="/login" element={<Login/>}/>
             
           </Route>          
        </Routes>
      </Router>
       
       </div>
);
}

export default App;