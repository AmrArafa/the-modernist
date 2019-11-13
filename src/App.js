import React from 'react';
import {
  GlobalStyle,
  Header,
  LandingPageSlider,
  Services,
} from './components';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <LandingPageSlider />
        <Services />
      </div>
    </>
  );
}

export default App;
