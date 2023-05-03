import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './paginas/home/Home';

interface User {
  id: number;
  name: string;
}

function App() {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de usuários</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;