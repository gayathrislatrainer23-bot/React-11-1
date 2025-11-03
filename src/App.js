
import './App.css';
import Counter from './components/Counter';
import Greetings from './components/Greetings';
import LogIn from './components/LogIn';
import Message from './components/Message';
function App() {
 const userName ="Manu"

  return (
    <div className="App">
  {/*  MAIN COMP */}
  <p className='username' style={{color:"red"}}> {userName}</p> 
  <input/>
* <Greetings userName={userName}/>
  <Counter/>
  <Message/>
  <LogIn/>
    </div>

  );
}

export default App;
