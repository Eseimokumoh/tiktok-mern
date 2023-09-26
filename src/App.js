import React from 'react';
import './App.css';
import Video from './Video';
import { Download, Download2} from './assets/index';


function App() {
  return (
    <div className="app">

        <div className='app_videos'>
          <Video url={Download}
            channel='ruggedDev'
            description='Yooo this works'
            song='99 problems,REACT AINT ONE!'
            likes={123}
            messages={456}
            shares={789}
          />
          <Video url={Download2}
            channel='ruggedDev'
            description='Yooo this works'
            song='99 problems,REACT AINT ONE!'
            likes={999}
            messages={456}
            shares={789}
          />        
        </div>

      {/* app container */}
        {/* videos */}
        {/* <Video/> */}
        {/* <Video/> */}
        {/* <Video/> */}
        {/* <Video/> */}

    </div>
  );
}

export default App;
