import Intro from './components/intro';
import Button from './components/button';
import Footer from './components/footer';
import './App.css'
// router
import Home from './page/home';
import About from './page/about';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Notfund from './page/notfund';
// Hooks
import React, { useState,useEffect } from 'react';
const App = () => {
  const nama="andika sandi yudistira";

  const clicked = () =>{
    return alert("button di pencet");
  };
  // state pada react js
  const [getSeeUoll, setSeeUoll] = useState("");
  const cangeSeeUoll =()=>{
    setSeeUoll("SEE U AGAIN");
  };
 
  //props
  const paragrap = () =>{
    return (
    <div>
      <h1>see u oll</h1>  
    </div>
    );
  }
  
  
  //Hooks state 2
  const [pacarSaya, setPacar]= useState(1)
  const [getMetiont, setMention]=useState("")
  useEffect(() =>{
    if(pacarSaya > 1){
    setMention('nah ketahuan loo dasar playboy')
    } else if  (pacarSaya === 0){
    setMention('yahahaha jomblo yaa')
    } else{
    setMention('nah gitu dong setia')
    }
  },[pacarSaya])

  return (
    //state & props component
    // <div>
    //   <h1>state pada react</h1>
    //   <Intro nama={nama} />
    //   <Button clicked={clicked} cangeSeeUoll={cangeSeeUoll}/>
    //   <Footer paragrap={paragrap} SeeValue={getSeeUoll}/>
    // </div>

    //router dom
    // <div>
    //   <Router>
    //     <Routes>
    //       <Route path='/' element={<Home/>}/>
    //       <Route path='About' element={<About/>}/>
    //       <Route path='*' element={<Notfund/>}/>
    //     </Routes>
    //   </Router>
    // </div>
    
    // hooks state 
    <>
    <h2>{getMetiont}</h2>
    <h1>saya memiliki pacar :{pacarSaya}</h1>
    <button onClick={()=>setPacar((prev) => prev + 1)}>Tambah pacar</button>
    <button onClick={()=>setPacar((prev) => prev - 1)}>Kurangi pacar</button>
    </>
  );
}

export default App;
