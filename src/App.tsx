import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Footer/>
    </>
);
}
export default App;