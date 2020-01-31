import React, { useEffect } from 'react';
import OpenSeadragon from 'openseadragon';


function Osd(props) {
  const { 
    setOsdInstance,
    ordinal,
    audioEl,
    osdInstance,
    init,
  } = props;
  
  useEffect(() => {
    window.osd = OpenSeadragon({
      id: 'viewer',
      showZoomControl: false,
      showFullPageControl: false,
      showNavigationControl: false,
      tileSources: [
        `${window.location.origin}/assets/images/0.json`,
        `${window.location.origin}/assets/images/1.json`
      ]
    });
    setOsdInstance(window.osd);
  }, [setOsdInstance]);

  useEffect(() => {
    if (osdInstance.viewport) {
      console.log('ordinal updated: change image to ' + ordinal);
      osdInstance.goToPage(ordinal);
    }
  }, [osdInstance, ordinal]);

  useEffect(() => {
    async function play() {
      if (audioEl && init) {
        audioEl.pause();
        audioEl.src=`${window.location.origin}/assets/audio/${ordinal}.mp3`;
        await audioEl.play()
      }
    }
    play();
  }, [init, ordinal, audioEl])

  return (
    <div id="viewer">
    </div>
  );
}

export default Osd;
