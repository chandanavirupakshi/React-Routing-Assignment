import React from 'react';
export default class CounterCompoent extends React.Component{
    constructor(props){
        super(props);
        this.fun();
        this.state = {
            counter:0,
            employees:props.employees
            /*employees:[
                {
                    id:101,
                    name:"John",
                    dept:"IT",
                    isMarried:false
                },{id:102,
                    name:"Foo",
                    dept:"IT",
                    isMarried:false
                },{
                    id:103,
                    name:"Bar",
                    dept:"IT",
                    isMarried:false
                }
            ]*/
        }
    }
    fun = ()=>{
        console.log("---------fun get called!!!");
    }
   
    increment = ()=>{

       this.setState({counter:++this.state.counter}); 
       //this.state.counter+=1;
    }
    decrement = ()=>{
        this.setState({counter:--this.state.counter}); 
        //this.state.counter+=1;
     }
     addEmployee = ()=>{
        let arr = this.state.employees;
        console.log(arr);
        arr.push({id:105,name:'Janmejaya',dept:'HR',isMarried:true});
        this.setState({employees:arr});
     }
    render(){
        console.log("-----rendered-----");
        this.fun();
        return (
            <div>
                <h1>Counter : {this.state.counter}</h1>
                <button className='btn btn-primary' onClick={this.increment}>Increment</button>
                <button className='btn btn-primary' onClick={this.decrement}>Decrement</button>
                <table>
                    <tr><th>ID</th><th>Name</th><th>Dept</th><th>IsMarried</th></tr>
                    {
                      this.state.employees.map((employee)=> 
                        <tr key={employee.id}><td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.dept}</td>
                        <td>{employee.isMarried+""}</td>
                        </tr>
                      )  
                    }
                </table>
                <button className='btn btn-success' onClick={this.addEmployee}>Add Employee</button>

            </div>
        );
    }

}