
import React, { useState, useEffect, type ChangeEventHandler, type MouseEventHandler } from 'react';
import UserForm, { type UserFormState } from './forms/User';

// import React, { ChangeEventHandler, MouseEventHandler } from 'react';
// import UserForm from './forms/User';

// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

import 'bulma/css/bulma.css';

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
    <>
      <div className="App">
        <ul>
          {users.map( user => <li key={user.id}>{user.name}</li>) }
        </ul>
        <UserForm handleSubmit={ user => setUsers([...users, {...user, id: Date.now()} ]) } />
      </div>
      
    </>
  )
}

export default App
