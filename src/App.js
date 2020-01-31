import React, { useState } from 'react';
import Osd from './components/Osd';
import AudioPlayer from './components/AudioPlayer';
import Initiator from './components/Initiator';
import './App.css';

function App() {
  const totalTracks = 3;
  const [ordinal, setOrdinal] = useState(0);
  const [audioEl, setAudioEl] = useState(null);
  const [osdInstance, setOsdInstance] = useState({});
  const [init, setInit] = useState(false);

  return (
    <div>
      <Initiator
        init={init}
        setInit={setInit} />
      <Osd
        init={init}
        ordinal={ordinal}
        audioEl={audioEl}
        osdInstance={osdInstance}
        setOsdInstance={setOsdInstance}
        totalTrack={totalTracks}
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
