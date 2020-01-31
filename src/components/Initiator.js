import React, { useEffect } from 'react';

function Initiator(props) {

  const handleClick = (e) => {
    props.setInit(true);
    e.preventDefault();
  };

  const render = () => {
    if (!props.init) {
      return (<button className="initButton" onClick={handleClick}>Start</button>)
    }
    else {
      return null;
    }
  }
  useEffect(() => {

  }, []);


  return (
    <div>
      {render()}
    </div>
  );
}

export default Initiator;
