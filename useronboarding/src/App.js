import React,{useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Users from './components/Users';

function App() {

  const [users, setUsers] = useState([]);

  const addUser = user => {
    setUsers([...users, user ]);
  };
  return (
    <div className="App">
      <Form setUsers={addUser}/>
      {users.length > 0 ? <Users users={users}/>: null }
    </div>
  );
}

export default App;
