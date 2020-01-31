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
        `${window.location.origin}/assets/images/1.json`,
        `${window.location.origin}/assets/images/2.json`,
      ]
    });
    window.osd.addHandler('open', function() {
      // Set to max zoom center
      console.log('event: open')
      window.osd.viewport.zoomTo(window.osd.viewport.getMaxZoom(), undefined, true);
    });
    window.osd.addHandler('page', function() {
      // Set to max zoom center
      console.log('event: page')
      window.osd.viewport.zoomTo(window.osd.viewport.getMaxZoom(), undefined, true);
      if (init) {
        console.log('go')
      }
    });
    setOsdInstance(window.osd);
  }, []);

  if (props.init) {
    window.osd.viewport.zoomSpring.animationTime = audioEl.duration-10;
    window.osd.viewport.goHome();      
  }

  useEffect(() => {
    if (osdInstance && osdInstance.viewport) {
      console.log('ordinal updated: change image to ' + ordinal);
      osdInstance.goToPage(ordinal);
      osdInstance.viewport.goHome();
    }
  }, [osdInstance, ordinal, audioEl]);

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
