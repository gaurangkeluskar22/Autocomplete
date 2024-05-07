import { useState } from 'react';
import './App.css';
import InputBox from './Components/InputBox/InputBox';
import AutoCorrectCompoent from './Components/AutoCorrectCompoent/AutoCorrectCompoent';

function App() {
  const [inputText, setInputText] = useState('')

  return (
    <div className="App">
      <InputBox inputText={inputText} setInputText={setInputText}/>
      <AutoCorrectCompoent/>
    </div>
  );
}

export default App;
