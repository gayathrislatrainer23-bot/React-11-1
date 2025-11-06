
import './App.css';
import Counter from './components/counter/Counter';
import Fruit from './components/Fruit';
import Greetings from './components/Greetings';
import LogIn from './components/LogIn';
// import Message from './components/Message';
import StudentList from './components/StudentList';
function App() {
 const userName =["Manu","Malu"]

  return (
    <div className="App">
  {/*  MAIN COMP */}
  <p className='username' style={{color:"red"}}> {userName}</p> 
  <input/>
* <Greetings userName={userName}/>
  <Counter/>
  {/* <Message/> */}
  <LogIn/>
  <StudentList/>
  <Fruit/>
    </div>

  );
}

export default App;
