import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Outlet } from 'react-router-dom';
function Home() {
  return (
    <div>
    <Nav variant="tabs"   defaultActiveKey="/home">
      <Nav.Item >
        <Nav.Link href="/home/add-emp" active>Add Employee</Nav.Link>
        <Nav.Link href="/home/view-emp">Update Employee</Nav.Link>
        <Nav.Link href="/home/del-emp">
          Delete Employee
        </Nav.Link>
      
      </Nav.Item>
    </Nav>
    <Outlet/>
    </div>
  )
}

export default Home