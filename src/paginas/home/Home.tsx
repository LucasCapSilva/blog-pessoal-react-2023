import React, { useState } from 'react';

const Home = () => {
    const [loggedIn, setLoggedIn] = useState(false);


  return (
   <div>
        {loggedIn ? (
             <h1>Bem-vindo de volta!</h1>
        ):(
            <button onClick={() => setLoggedIn(true)}>Entrar</button>    
        )
        }

   </div>
  )
}

export default Home