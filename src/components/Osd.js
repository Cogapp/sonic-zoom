import React, { useEffect } from 'react';
import OpenSeadragon from 'openseadragon';


function Osd(props) {
  const { 
    setOsdInstance,
    ordinal,
    audioEl,
    osdInstance
  } = props;
  
  useEffect(() => {
    window.osd = OpenSeadragon({
      id: 'viewer',
      showZoomControl: false,
      showFullPageControl: false,
      showNavigationControl: false,
    });
    setOsdInstance(window.osd);
  }, [setOsdInstance, ordinal]);

  useEffect(() => {
    console.log(osdInstance);
    if (osdInstance.viewport) {
      osdInstance.open(`${window.location.origin}/assets/images/${ordinal}.json`);
    }
  }, [osdInstance, ordinal]);

  useEffect(() => {
    if (audioEl) {
      audioEl.play();
    }
  }, [ordinal, audioEl])

  return (
    <div id="viewer">
    </div>
  );
}

export default Osd;
