import React, { useState } from 'react';
import Osd from './components/Osd';
import AudioPlayer from './components/AudioPlayer';
import './App.css';

function App() {
  const totalTracks = 2;
  const [ordinal, setOrdinal] = useState(0);
  const [audioEl, setAudioEl] = useState(null);
  const [osdInstance, setOsdInstance] = useState({});

  return (
    <div>
      <Osd
        ordinal={ordinal}
        audioEl={audioEl}
        osdInstance={osdInstance}
        setOsdInstance={setOsdInstance}
      />
      <AudioPlayer 
        ordinal={ordinal}
        audioEl={audioEl}
        setOrdinal={setOrdinal}
        setAudioEl={setAudioEl}
        totalTracks={totalTracks}
      />
    </div>
  );
}

export default App;
