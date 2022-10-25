import './css/ContentComponent.css';
import  FooterComponent from './FooterComponent';
import SimpleAccordion from './materialComponents/SimpleAccordion';
function ContentComponent(props){
return (
    <div className="content">
        <SimpleAccordion/>
        <table className="tbl">
            <tr><th>ID</th><th>Name</th><th>Dept</th><th>Desg</th></tr>
        {
            props.employees.map((employee)=>
            <tr><td>{employee.id}</td><td>{employee.name}</td>
            <td>{employee.dept}</td><td>{employee.desg}</td>
            </tr>
            )
        }
        </table>
        <FooterComponent copyright="bapun00@gmail.com" company="mycompany.com" bgcolor='black' color='white'></FooterComponent>
       
    </div>
);
}

export default ContentComponent;