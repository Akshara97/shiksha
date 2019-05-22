import React from 'react';
import './App.scss';
import RightMenu from './Pages/RightMenu';
import Content from './Pages/Content';
import LeftSection from './Pages/LeftSection';
function App() {
  return (
    <div className="main">
      <LeftSection />
      <div className="content">
        <Content />
      </div>
      <div className="rightsection">
        <RightMenu />
      </div>
    </div>
  );
}

export default App;
