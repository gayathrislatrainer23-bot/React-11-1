
import './App.css';
import Counter from './components/Counter';
import Greetings from './components/Greetings';
import Message from './components/Message';
function App() {
 const userName ="Manu"

  return (
    <div className="App">
  {/*  MAIN COMP */}
  {/* <p className='username' style={{color:"red"}}> {userName}</p> */}
  {/* <Greetings userName={userName}/> */}
  <Counter/>
  <Message/>
    </div>

  );
}

export default App;
