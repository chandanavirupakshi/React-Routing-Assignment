import React,{useState , useEffect} from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
function AddEmployee(){
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

        <label htmlFor='name'class="col-xs-3">Name:</label>
        <input style={{ width: "40%" }}
              type="text"
              id="name"
              
              className="form-control"
              placeholder="Enter Name" type="text"  name="dept" id="name" value={name} onChange={changeName}/>
        <label htmlFor='dept'class="col-xs-3">Dept:</label>
        <input style={{ width: "40%" }}
              type="text"
              id="name"
              
              className="form-control"
              placeholder="Enter Name" type="text"  name="dept" id="dept" value={dept} onChange={changeDept}/><br /><br />
        <input type="submit" value="Add Employee" onClick={add}/>
    {/* {employees.length>0?(
        
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
                        <td>
                        <button onClick={()=>deleteEmployee(emp.id)}>
                        <i className="fa fa-trash"></i>
                        </button>
                  </td>
                    </tr>
                })}
            </tbody>
        </table>
   
    ):(<div><h1>No Data Found</h1></div>)} */}
     </form>
    </>);
}

export default AddEmployee;