import React from 'react';
import './Home.css';



function Home() {
    return (
        <>

            <div>
                <h3 className='text-xl'>justify-content alinhamento horizontal</h3>
                <h5>justify-start Esquerda</h5>
                <div className="flex flex-row  justify-start m-3">
                    <div className='basis-1/4 bg-red-500'>01</div>
                    <div className='basis-1/4 bg-gray-400'>01</div>
                </div>
                <h5>justify-end Direita</h5>
                <div className="flex flex-row  justify-end m-3">
                    <div className='basis-1/4 bg-red-500'>01</div>
                    <div className='basis-1/4 bg-gray-400'>01</div>
                </div>
                <h5>justify-center Centro</h5>
                <div className="flex flex-row  justify-center m-3">
                    <div className='basis-1/4 bg-red-500'>01</div>
                    <div className='basis-1/4 bg-gray-400'>01</div>
                </div>
                <h5>justify-around estremidades</h5>
                <div className="flex flex-row  justify-between m-3">
                    <div className='basis-1/4 bg-red-500'>01</div>
                    <div className='basis-1/4 bg-gray-400'>01</div>
                </div>
                <h5>justify-around estremidades com espaçamento</h5>
                <div className="flex flex-row  justify-around m-3">
                    <div className='basis-1/4 bg-red-500'>01</div>
                    <div className='basis-1/4 bg-gray-400'>01</div>
                </div>

            </div>

            <div className='mt-12'>
                <h3 className='text-xl'>justify-content alinhamento vertical</h3>
                <div className='w-auto h-60 bg-gray-400 flex  justify-center items-start m-3'>
                    <div className='basis-1/4 bg-red-500'>justify-center items-start alinhamento horizontal centro/vertical topo</div>
                </div>
                <div className='w-auto h-60 bg-gray-400 flex  justify-center items-center m-3'>
                    <div className='basis-1/4 bg-red-500'>justify-center items-start alinhamento horizontal centro/vertical centro</div>
                </div>
                <div className='w-auto h-60 bg-gray-400 flex  justify-center items-end m-3'>
                    <div className='basis-1/4 bg-red-500'>justify-center items-start alinhamento horizontal centro/vertical base</div>
                </div>
            </div>

        </>
    );
}

export default Home;