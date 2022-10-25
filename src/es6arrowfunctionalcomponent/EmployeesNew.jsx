import { useState } from "react";
import Employee from './Employee';
const EmployeesNew = ()=>{
  const [employees,setEmployees] = useState([
    { empId: 1234, name: 'John', designation: 'SE' },
                { empId: 4567, name: 'Tom', designation: 'SSE' },
                { empId: 8910, name: 'Kevin', designation: 'TA' }

  ]);
  return (
    <Employee employeesArr={employees}/>
  );
}
export default EmployeesNew;