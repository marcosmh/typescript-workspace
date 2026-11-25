import React, { useState, useEffect,  ChangeEventHandler, MouseEventHandler } from 'react';
import UserForm, { UserFormState } from './forms/User';

// @ts-ignore: Bulma's CSS file is loaded by the bundler and has no TypeScript declarations.
import 'bulma/css/bulma.css';


//import logo from './logo.svg';
//import './App.css';

type User = UserFormState & {id: number};

function App() {
  const [users, setUsers] = useState<User[]>([]);

  async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setUsers(data);
  }

  useEffect( () => {
    fetchUsers();
  }, []);
  
  return (
    <div className="App">
      <ul>
        {users.map( user => <li key={user.id}>{user.name}</li>) }
      </ul>
      <UserForm handleSubmit={ user => setUsers([...users, {...user, id: Date.now()} ]) } />
    </div>
  );
}

export default App;
