import './App.css';
import InputBox from './Components/InputBox/InputBox';

function App() {
  const data = ['apple', 'lemon', 'sugar', 'water', 'juice']

  return (
    <div className="App">
      <InputBox data={data}/>
    </div>
  );
}

export default App;
