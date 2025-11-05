function StudentList(){
    let students = ['Manu','Anu','Sanu']
    return(
<div className="studentList">
<ul style={{listStyle:"none"}}>
{students.map((student,index)=>(
    <li key={index}>{index}{student}</li>
))}

</ul >
</div>
    );
}
export default StudentList;

{/* <li>Manu</li>
<li>Anu</li>
<li>Sanu</li>
<li>Balu</li> */}

// function green(g,n){

// }
// green()