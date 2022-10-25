import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react';
const Login = () => {
    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const changeUserName = (e)=>{
        setUserName(e.target.value);
    }
    const changePassword = (e)=>{
        setPassword(e.target.value);
    }
  return (
    <>
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="name">Username:</label>
            <input
              style={{ width: "40%" }}
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              name="name"
              onChange={changeUserName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              style={{ width: "40%" }}
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="password"
              onChange={changePassword}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
<div className="resultDiv">
    <h1>UserName:{username}</h1>
    <h1>Password:{password}</h1>
</div>
      </div>
    </>
  );
};
export default Login;
