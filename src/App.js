
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

// context api
import LoginContext from './components/advancedHook/context/LoginContext';
import { AuthProvider } from "./components/advancedHook/context/AuthContext";


import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Country from './components/Country';
import ReduxCounter from './components/ReduxCounter';
import ReduxMessage from './components/ReduxMessage';
import LoginForm from './components/LoginForm';
import ReducerHook from './components/ReducerHook';
import NotFound from './components/NotFound';
import UseEff from './components/Effect/UseEff';
import UseEff2 from './components/Effect/UseEff2';
import CounterComponent from './components/advancedHook/CustomHook/CounterComponent';
import Users from './components/advancedHook/CustomHook/Users';

function App() {
//  const userName =["Manu","Malu"]
const username ="Jaya suriya"
const _id =123

  return (
    <div className="App">
      {/* context api */}
    {/* <AuthProvider>
      <LoginContext />
    </AuthProvider> */}

    {/* custom hook */}
    {/* <CounterComponent/>
    <Users/> */}
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

{/* <nav>
  <Link to={"/home"}>Home</Link>
  <Link to={"/about"}>About</Link>
  <Link to={"/login"}>Login</Link>
  <Link to={"/logi"}>Log</Link>
  <Link to={`/profile/:${username}/:${_id}`}>profile</Link>

</nav> */}
  <Routes>
<Route path='/' element={<UseEff/>}></Route>
<Route path='/effect' element={<UseEff2/>}/>
<Route path='/home' element ={<Home/>} />
<Route path='/about' element ={<About/>} />
<Route path='/login' element ={<Login/>} />
<Route path='/loginForm' element ={<LoginForm/>} />
<Route path='/counter' element ={<ReduxCounter/>} />
<Route path='/message' element ={<ReduxMessage/>} />
<Route path='/reducer' element ={<ReducerHook/>} />
<Route path='/c' element ={<Country/>} />
<Route path='/*' element ={<NotFound/>} />
<Route path='/profile/:username/:_id' element ={<Profile/>} />
<Route path='/profile' element ={<Profile/>} />
</Routes>
  </BrowserRouter>
    </div>

  );
}

export default App;
