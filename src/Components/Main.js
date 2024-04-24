import React from 'react';
import Home from './Home';
import AboutMe from './Pages/AboutMe';
import FirstProject from './Pages/FirstProject';
import SecondProject from './Pages/SecondProject';
import ThirdProject from './Pages/ThirdProject';
import FourthProject from './Pages/FourthProject';
import GenerativeArt from './Pages/GenerativeArt'

function MainComponent({ selectedButton, pageState, setPageState }) {



  // Render different components based on the page state
  let componentToRender;
  switch (pageState) {
    case 'home':
      componentToRender = <Home selectedButton={selectedButton} setPageState={setPageState} />;
      break;
    case 'about':
      componentToRender = <AboutMe />;
      break;
    case 'generativeart':
    componentToRender = <GenerativeArt />;
    break;
    case 'project1':
      componentToRender = <FirstProject />;
      break;
    case 'project2':
      componentToRender = <SecondProject />;
      break;
    case 'project3':
      componentToRender = <ThirdProject />;
      break;
    case 'project4':
      componentToRender = <FourthProject />;
      break;
    default:
      componentToRender = <div>Page Not Found</div>;
  }

  return (
    <div>
      {/* Render the selected component */}
      {componentToRender}
    </div>
  );
}

export default MainComponent;
