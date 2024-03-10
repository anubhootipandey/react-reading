import { useState } from 'react';
import './App.css';
import { FirstComponent } from './components/FirstComponent';
import InputForm from './components/InputForm';
import PlayingWithArray from './components/PlayingWithArray';

const App = () => {
  const [myName, setMyName] = useState("Anubhooti");
  const [myAge, setMyAge] = useState(12);

  const updateName = () => {
    //setMyName("Tanu");
    setMyAge(16);
  }

  return (
    <div className="App">
      <FirstComponent myName={myName} myAge={myAge} />
      <br/>
      <InputForm />
      <br/>
      <button onClick={updateName}>Update Name</button>
      <br/>
      <PlayingWithArray />
    </div>
  );
}

export default App;
