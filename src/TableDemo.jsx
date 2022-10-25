import { useState } from "react";

function TableDemo() {
    const [show,setShow] = useState(false);
    let isShown=false;
    let changeState = (event)=>{
        console.log(event);
        console.log(event.target.value);
        if(event.target.value=="Show"){
            setShow(true);
        }else if(event.target.value=="Hide"){
            setShow(false);
        }
    }
    var employees = [
      { empId: 1234, name: "John", designation: "SE" },
      { empId: 1235, name: "John1", designation: "SE1" },
      { empId: 4567, name: "Tom", designation: "SSE" },
      { empId: 8910, name: "Kevin", designation: "TA" },
    ];
    return (
      <>
      <input type="radio"  name="toggle" value="Show" onClick={(e)=>changeState(e)}/>Show
      <input type="radio"  name="toggle" value="Hide" onClick={(e)=>changeState(e)}/>Hide
       
       {
        show &&  <table>
            <thead>
              <tr>
                <th>EmpID</th>
                <th>Name</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => {
                return (
                  <tr key={employee.empId}>
                    <td>{employee.empId}</td>
                    <td>{employee.name}</td>
                    <td>{employee.designation}</td>
                  </tr>
                );
              })}
            </tbody>
          </table> 
          
       }
       
      </>
    );
  }
  export default TableDemo;
  