import React from 'react'
import './Orb.css'
import { useWindowSize } from '../../utils/useWindowSize';

function Orb() {
    const { width, height } = useWindowSize();

    return (
        <div
        className="orb"
        style={{ '--orb-width': `${width}px`, '--orb-height': `${height / 2}px` }}
      ></div>
    );
}

export default Orb