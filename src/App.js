import './App.css';
import { Stopwatch, Button } from './components';

function App() {
  return (
    <div className="App center">
      <div className="container">
        <Stopwatch />
        <div className="buttons">
          <Button text={'test'} />
          <Button text={'test'} />
          <Button text={'test'} />
        </div>
      </div>
    </div>
  );
}

export default App;
