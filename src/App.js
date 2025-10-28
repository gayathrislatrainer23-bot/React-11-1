
import './App.css';
import Greetings from './components/Greetings';

function App() {
 const userName ="Manu"

  return (
    <div className="App">
  {/*  MAIN COMP */}
  <p className='username' style={{color:"red"}}> {userName}</p>
  
  <Greetings userName={userName}/>
    </div>

  );
}

export default App;
