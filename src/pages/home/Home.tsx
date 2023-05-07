import React, { useContext } from 'react';

import { UserContext } from '../../contexts/UserContext';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const { nome, setNome } = useContext(UserContext);

  return (
    <div className='flex justify-center items-center'>
      <div>
        <h2 className="text-slate-900 text-5xl  my-4">Logar</h2>
        <h2 className="text-slate-900 text-4xl ">Ola user : {nome}</h2>
        <Link to="/login" className="my-4 rounded bg-indigo-400
         hover:bg-indigo-900 text-white w-1/2 py-2 flex justify-center">
          Voltar 
        </Link>
      </div>

    </div>
  );
}

export default Home;