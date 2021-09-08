import React ,{ useState } from "react";
import {Table} from 'reactstrap';
import './App.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import {FaDeskpro} from 'react-icons/fa';
var link=["https://reqres.in/api/users?page=1","https://reqres.in/api/users?page=2"];
var i=0;
function App(){
  const[cirin,cirfin]=useState(0);
  const [users,setUsers]=useState([]);
  async function load()
  { 
    cirfin(1);
    fetch(link[i])
    .then((response) => response.json())
    .then((json) => {
      console.log(json.data)
      setUsers(json.data); // Prints result from `response.json()` in getRequest
    });
    setTimeout(()=>{
      cirfin(0);
      },1500);/*for change of value cirin*/
    i>=1?i=0:i++;/*for increament of array*/
  };
  return (
    <div className="App">
      <header>
        <nav className='navbar'>
        {cirin  ?'':<button onClick={load}>GET USERS</button>};
        <span><FaDeskpro />ZIGZAG</span>
        </nav>
        </header>
        {cirin ?
        <div className='circle'>
        <CircularProgress color='secondary' size='95px'/>    
        </div>
            : 
        <div>
      {users.map((data) => {
            return (
              <div className='card'>
                <img src={data.avatar} alt='profilepic' className="propic"></img>
                <Table>
                <tr>
                  <th>FIRST NAME</th>
                  <td>{data.first_name}</td>
                </tr>
                <tr>
                  <th>LAST NAME</th>
                  <td>{data.last_name}</td>
                </tr>
                <tr>
                  <th>EMAIL ID:</th>
                  <td>{data.email}</td>
                </tr>
                </Table>
              </div>
            );
          })}
      </div> 
        }
    </div>
  );
}
export default App;
