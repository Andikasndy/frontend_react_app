import Intro from './components/intro';
import Button from './components/button';
import Footer from './components/footer';
import React, { useState } from 'react';
import './App.css'
// router
import Home from './page/home';
import About from './page/about';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Notfund from './page/notfund';

const App = () => {
  const nama="andika sandi yudistira";

  const clicked = () =>{
    return alert("button di pencet");
  };
  // uabah state
  const [getSeeUoll, setSeeUoll] = useState("");
  const cangeSeeUoll =()=>{
    setSeeUoll("SEE U AGAIN");
  };

  const paragrap = () =>{
    return (
    <div>
      <h1>see u oll</h1>  
    </div>
    );
  }

  return (
    //state & props component
    // <div>
    //   <h1>state pada react</h1>
    //   <Intro nama={nama} />
    //   <Button clicked={clicked} cangeSeeUoll={cangeSeeUoll}/>
    //   <Footer paragrap={paragrap} SeeValue={getSeeUoll}/>
    // </div>

    //router dom
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='*' element={<Notfund/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
