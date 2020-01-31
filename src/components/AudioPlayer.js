import React, { useEffect, useRef } from 'react';

function AudioPlayer(props) {
  const audioRef = useRef(null);
  const {
    setAudioEl,
    setOrdinal,
    ordinal,
    audioEl,
    totalTracks
  } = props;

  useEffect(() => {
    setAudioEl(audioRef.current);
  }, [setAudioEl]);

  useEffect(() => {
    // When audio finished progress ordinal
    if (audioEl) {
      audioEl.onended = () => {
        if (ordinal < totalTracks - 1) {
          setOrdinal(ordinal + 1);
        }
        else {
          setOrdinal(0);
        }
      }      
    }
  }, [totalTracks, audioEl, ordinal, setOrdinal]);

  return (
    <audio ref={audioRef} id="player">
      <source src={`${window.location.origin}/assets/audio/${props.ordinal}.mp3`} type="audio/mp3" />
    </audio>
  );
}

export default AudioPlayer;
