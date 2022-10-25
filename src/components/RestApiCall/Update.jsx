import React,{useState , useEffect} from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
function Update(){
    const[name,setName] = useState('');
    const[dept,setDept] = useState('');
    const[employees,setEmployees] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/employees/").then((res)=>{
          
            setEmployees(res.data);
        });
    },[]);
    const changeName = (e)=>{
        setName(e.target.value);
    }
    const changeDept = (e)=>{
        setDept(e.target.value);
    }
    const add = (e)=>{
            e.preventDefault();
                let emp = {name:name,dept:dept};
                axios.post("http://localhost:4000/employees/",emp).then((res)=>{
                    console.log(res);
                    if(res.status==201){
                        axios.get("http://localhost:4000/employees/").then((res)=>{
          
                        setEmployees(res.data);
                    });
                    }

                });
         
    }
    const deleteEmployee = (empId)=>{
        
        axios.delete("http://localhost:4000/employees/"+empId)
        .then((res)=>{
           axios.get("http://localhost:4000/employees/").then((res)=>{
            if(res.status==200){
                setEmployees(res.data);
            }
           });
         } );
    }

    return (<>
    <form>
        {/* <label htmlFor='name'class="col-sm-2 col-form-label" class="tab-pane fade show active">Name:</label>
        <input type="text" name="name" readonly class="form-control" id="name" value={name} onChange={changeName}/>
        <label htmlFor='dept'class="col-sm-2 col-form-label">Dept:</label>
        <input type="text" class="form-control" name="dept" id="dept" value={dept} onChange={changeDept}/> <br />
        <input type="submit" class="btn-btn-primary" value="Add Employee" onClick={add}/> */}
     {employees.length>0?(
        
        <table style={{ width: "60%" }} className="table table-bordered">
            <thead>
                <tr><th>ID</th><th>Name</th><th>Dept</th><th></th></tr>
            </thead>
            <tbody>
                {employees.map((emp)=>{
                    return <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.dept}</td>
                    </tr>
                })}
            </tbody>
        </table>
   
    ):(<div><h1>No Data Found</h1></div>)} 
     </form>
    </>);
}

export default Update;