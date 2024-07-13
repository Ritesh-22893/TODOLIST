import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='bg-[#1e1950] bg-opacity-100 min-h-screen flex flex-col'>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
