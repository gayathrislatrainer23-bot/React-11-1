day-1
27/10/2025
1. Bom
   dom
2. React
3. Library
4. Npm
5. node 
6. node installation
7. create react app 
8. Babel -- compailer/ transpailer -convert jsx to pure js

day-2

28/10/2025
1. file structucture

 work flow and folder structure of react
project/
node-module -- store dependencies
index.html -- entry html file -- Single page
src-- dynamic folder -- changes occurs
index.js -- app entry point
App.jsx -- main react component -- parsel casing
package.json -- keep meta data of dependencies

2. comp  --  1. class
              2. fun comp
3. fun comp : js fun returns jsx element
4. jsx  - js xml
          html like syntax
5.  jsx rules
        1.retrun only one parent element
        2. embaded js using {}
        3.inline styles -- {{}}
        4. className intea of class
6. create a comp folder and file      import it in app
7. props : data passing from parent comp to child comp

day-3

29/10/2025

State : spacial memory inside comp that hold data which can change over time
hooks: special fun:s used to state management ,life cycle metnods and  side effect
useState : hook used to manage state.
const [state, setState] = useState(0)
events:action performed by user
synthetic events : react wrap html events.

day-4
30/10/2025

object destructuring
const student = {
  name: "Gayathri",
  age: 22,
  course: "MERN",
  city: "Chennai"
};
props ={
  userName : "Malu"
  object:{
    pototype
  }
}
const {userName } = props

// Split (extract) some properties
const { name, age } = student;

console.log(name); // Gayathri
console.log(age);  // 22
task : 
Show each student’s name (from props) with a Present/Absent button.
Use state to toggle and display the attendance status.

 day-5
31/10/2025

listing in react  by map and key
ternary opertor , boolean in state 
tasks
1. counter => reset()
2. login button ,and islogin only show  homepage 
      && and state
<!-- 3. hide and show button 
hide btn show btn-- show some message
hide the messsage -->
task
3.Show and Hide Button
a. Create a component with content that can be toggled visible or hidden.
b. Use a button to show or hide the content dynamically.

day-6
3/10/2025
ternary opertor  login and $$ operator
1. weather app ==> temp : 30 hot else cold
 1. need input filed 
 2. temp enter (0-55)
 3. temp bellow + image  --> && 
 
day-7
4/10/2025
revise

day-8
5/10/2025
list and key
class task: 1. list some list of fruits in array(for of loop)
         2. list of vagitable and price  object 

list 
vegetables =[
  {
    name: "carrot",
    color:"orange",
    price: 30
  },
  {
   name: "potato",
   color: "brown",
   price: 20
  }
]

day-9
6/11/2025

1: Weather Info with Object Prop

     Create a component that accepts a single object as a prop
          (example: { city: "Chennai", temp: 30 }) and displays:
     output:
              Current temperature in Chennai is 30°C


WeatherInfo -- parent comp 

weather = { city: "Chennai", temp: 30 } -- props

WeatherDisplay - child comp

display:
use template literal
eg :         <p>{`nfjkghijsf ${userName}`}</p>

weather.city
weather.temp

 2: User Login Status with Conditional Prop

        Pass a user object as a prop 
         (example: { name: "Manu", isLoggedIn: true }).

     output:

"Welcome back!" if isLoggedIn is true, otherwise show "Please login".

LoginParent - parent
LoginStatus - child

{ name: "Manu", isLoggedIn: true } -- props

isLoggedIn ? "Welcome back!" : "Please login"

 3: Colors with Array Prop

 Pass an array of colors as a prop (example: ["Red", "Blue", "Yellow"]).
    Display them in one line like:
     output:
         Primary colors are: Red, Blue, Yellow

colorParent -
PrimayColor -

props - ["Red", "Blue", "Yellow"]
colors.map((color,index)=>(
<!-- list -->
))


list
day-10
7/11/2025

1. Table Task
 Create a JSX component that shows a student details table.
 Columns: Roll No, Name, Grade.
 Add at least 3 rows with sample data.
 Use className="student-table" for the table.
Expected Output:
Roll No
Name
Grade
1
Anitha
A
2
Rahul
B
3
Deepak
A+

learn on monday
1. select (drop down)
2.  Form (submit)


day-11
10/11/2025

form submit
 Class task : email
 controlled compm : component controlled by react state
 uncontrolled compm : component controlled by dom itself

 2. Form Task
 Create a Student Registration Form with the following inputs:
Name (text input)


Age (number input)


Email (email input)


Password (password input)


Date of Birth (date input)


 Use proper className for each input (e.g., "form-input", "form-label").
  Display below the form:
 Student Registered: [Name] - [Age] years old

day-11
11/11/2025

task:
3. Dropdown (Select) Task
  Create a dropdown (<select>) to choose a student name.
  Options: Anitha, Rahul, Deepak, Gayathri.
  Default option: "Select a student".
  Display below:
 You selected: [student name]

 usEffect -- > hook in react -- handling side effect 

 login --> post ---> api
navigate to dashboard
--> render --> side effect  --> products api -->

useEffect ??
syntax:

useEffect(()=>{
  <!-- side effect code -->
})

case: 1 --> run after all renders
useEffect(()=>{
  <!-- side effect code -->
})

case: 2 --> run after initial render

useEffect(()=>{
  <!-- side effect code -->
},[])
dependancy - array - second argument in useEffect

case: 3 --> run after state change  render

const [name, setNAme] =useState("")

useEffect(()=>{
  <!-- side effect code -->
},[name,age])

 console : 1.you are logged in  all
 alert : 2. the page is loaded   []
 alert : 3.you are loggedin / you are not loggedin  [state]

day-11
12/11/2025
TASK:
 4️ Feedback Form – Username, Rating (1–5), Comment.
 Display submitted feedback below form.

 day-12
13/11/2025

Router dom  --> used to routes pages
install library

  <BrowserRouter>
  <!-- main wraper of router dom -->

<nav>
  <Link to={"/home"}>Home</Link>
  <Link to={"/about"}>About</Link>
  <!-- link the path -->
</nav>
  <Routes>
    <!--wrapet for collecting each routes router dom -->

<Route path='/home' element ={<Home/>} />
<Route path='/about' element ={<About/>} />
<!-- defining the path for each page -->
  </Routes>
  </BrowserRouter>

 task :1
 
Full name = state ==> string
user => first and last name inputs
first --> state
last --> state
useeffect(()=>{
  setFullName(`${first} ${last}`)
},[first,last])
2 inputs

 day-15
14/11/2025
Router dom -->
Home
about
login
profile -->img 

navigate() --> NAVIGATE TO NEXT page
pathparams() -->  can pass data through url

17/11/2025

todo list
1. todo input field +button
2. show list
3. update 
4. delete 
5. date add.

routing

18/11/2025

todo list

19/11/2025

Create a counter in React that increases by 1 when a button is clicked.
Check if the counter number is even or odd.
If the number is even, display “Patient go to Room 3”.
If the number is odd, display “Patient go to Room 4”.
If the number is 0, please Wait .


Create a React input where the user enters temperature.
If temperature is above 40, display “High Fever”.
If temperature is between 30–40, display “Normal”.
If below 30, display “Low Temperature”.


Create an input for age in React.
If age is below 13, show “Child”.
If age is 13–19, show “Teenager”.
If age is 20 or above, show “Adult”.

Create an input for vehicle speed.
If speed > 80 show “Over Speeding”.
If speed 40–80 show “Normal Speed”.
If speed < 40 show “Too Slow”.

task:
Create a simple product list with at least three items, each having a name and price. Display all the products on the screen with an “Add to Cart” button next to each. When a user clicks the button, add that product to a cart array and show all the selected items below. Allow the user to remove any item from the cart. Finally, display the total number of items in the cart at the top.

21/11/2025
revise
TASK:
 Dropdown Country & City Selector
a. Create two dropdowns: one for countries and one for cities.
b. The city dropdown should update dynamically based on the selected
    country.

24/11/2025
    npm install @reduxjs/toolkit react-redux

    https://redux.js.org/tutorials/quick-start