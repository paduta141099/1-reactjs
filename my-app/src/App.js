import './App.css';
import DateContainter from './components/DateContainer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="date-container">
        <DateContainter />
      </div>
  
    </div>
  );
}

export default App;
