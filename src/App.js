import Intro from './components/intro';
import Button from './components/button';
import Footer from './components/footer';
import { useState } from 'react';
import './App.css'

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
    <div>
      <h1>state pada react</h1>
      <Intro nama={nama} />
      <Button clicked={clicked} cangeSeeUoll={cangeSeeUoll}/>
      <Footer paragrap={paragrap} SeeValue={getSeeUoll}/>
    </div>
  );
}

export default App;
