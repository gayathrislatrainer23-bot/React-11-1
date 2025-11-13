
import './App.css';
import Counter from './components/counter/Counter';
import Form from './components/Form';
import Fruit from './components/Fruit';
import Greetings from './components/Greetings';
// import LogIn from './components/LogIn';
import SideEffect from './components/SideEffect';
// import Message from './components/Message';
import StudentList from './components/StudentList';
import StudentTable from './components/StudentTable';
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
function App() {
 const userName =["Manu","Malu"]

  return (
    <div className="App">
  {/*  MAIN COMP */}
  {/* <p className='username' style={{color:"red"}}> {userName}</p>  */}

{/* * <Greetings userName={userName}/>
  <Counter/> */}
  {/* <Message/> */}
  {/* <LogIn/>
  <StudentList/>
  <Fruit/> */}
  {/* <StudentTable/>
  <Form/> */}
  {/* <SideEffect userName ={userName}/> */}

  <BrowserRouter>

<nav>
  <Link to={"/home"}>Home</Link>
  <Link to={"/about"}>About</Link>
</nav>
  <Routes>

<Route path='/home' element ={<Home/>} />
<Route path='/about' element ={<About/>} />
  </Routes>
  </BrowserRouter>
    </div>

  );
}

export default App;
