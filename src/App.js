import React from 'react';
import { GlobalStyle, Header, LandingPageSlider } from './components';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <LandingPageSlider />
      </div>
    </>
  );
}

export default App;
