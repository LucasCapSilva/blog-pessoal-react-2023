import React from 'react'


function DeletarPostagem() {
 
  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Deletar postagem</h1>

      <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a postagem a seguir?</p>

      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>Postagem</header>
      <div className="p-4">
        <p className='text-xl h-full'>Titulo da postagem</p>
        <p>texto da postagem</p>
      </div>
      <div className="flex">
        <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' >Não</button>
        <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' >
          Sim
        </button>
      </div>
    </div>
    </div>
  )
}

export default DeletarPostagem