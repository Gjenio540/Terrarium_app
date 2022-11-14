import './App.css';
import CurrentValues from './components/CurrentValues';
import TargetValues from './components/TargetValues';

const App = () => {
  return (
    <>
    <div className="header">
      <h1>Terrarium 🦎</h1>
    </div>
    <CurrentValues/>
    <TargetValues/>
    </>
    
  );
}

export default App;