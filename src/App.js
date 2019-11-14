import React from 'react';
import {
  GlobalStyle,
  Header,
  LandingPageSlider,
  Services,
  LatestWork,
  Footer,
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
        <Footer />
      </div>
    </>
  );
}

export default App;
