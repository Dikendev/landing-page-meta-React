import React from 'react';
import './App.css';

import {Header,Footer,Blog,WhatMeta,Features,Possibility} from './containers';
import {Brand,Navbar,Cta} from './components';

function App() {
  return (
    <div className="App">
      <div className="gradient-bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatMeta />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
