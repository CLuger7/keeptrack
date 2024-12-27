import './App.css';
import CardList from './Compontents/CardList/CardList';
// import Search from './Compontents/Search/Search';

function App() {
  // let audio = new Audio("/01 Come Hell Or High Water.mp3")

  // const start = () => {
  //   let audio = new Audio("/Sounds/BsuffnWiaadSauu.mp3")
  //   audio.play()
  // }

  return (
    <div className="App">
      {/* <button onClick={start}>Play</button> */}
      {/* <Search /> */}
      <CardList/>
    </div>
    
  );
}

export default App;
