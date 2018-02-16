import React from 'react';

const Validation = (props) => {
    return    <div>
                  {props.length < 5 ? <div><p>Text too short</p></div>:<div> <p>Text long enough</p></div> }
             </div>
}

export default Validation;