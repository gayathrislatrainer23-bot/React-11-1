
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
import Login from './pages/Login';
import Profile from './pages/Profile';
import Country from './components/Country';
function App() {
//  const userName =["Manu","Malu"]
const username ="Jaya suriya"
const _id =123
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
  <Link to={"/login"}>Login</Link>
  <Link to={`/profile/:${username}/:${_id}`}>profile</Link>

</nav>
  <Routes>
<Route path='/home' element ={<Home/>} />
<Route path='/about' element ={<About/>} />
<Route path='/login' element ={<Login/>} />
<Route path='/c' element ={<Country/>} />
<Route path='/profile/:username/:_id' element ={<Profile/>} />
</Routes>
  </BrowserRouter>
    </div>

  );
}

export default App;
