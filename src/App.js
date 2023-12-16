import Intro from './components/intro';
import Button from './components/button';
import Footer from './components/footer';

const App = () => {
  const nama="andika sandi yudistira";

  const clicked = () =>{
    return alert("button di pencet");
  };

  const paragrap = () =>{
    return <i>see u olll</i>
  }
  return (
    <div>
      <h1>sesi 1</h1>
      <Intro nama={nama} />
      <Button clicked={clicked}/>
      <Footer paragrap={paragrap}/>
    </div>
  );
}

export default App;
