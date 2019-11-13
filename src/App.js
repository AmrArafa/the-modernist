import React from 'react';
import {
  GlobalStyle,
  Header,
  LandingPageSlider,
  Services,
  LatestWork,
} from './components';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <LandingPageSlider />
        <Services />
        <LatestWork />
      </div>
    </>
  );
}

export default App;
