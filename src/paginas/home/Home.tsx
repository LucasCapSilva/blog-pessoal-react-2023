import React from 'react';
import './Home.css';

interface minhaProps {
    title: string;
    description: string;
  }
  
function Home(props:minhaProps){
    return (
        <>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        </>
    );
}

export default Home;