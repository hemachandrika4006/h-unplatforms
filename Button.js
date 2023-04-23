import React from 'react';

function Button(props) {
  return (
    <div className='s1'>
      {(props.status === 0)? 
        <button className=" b1 "
        onClick={props.start}> start </button> : " "
      }

      {(props.status === 1)? 
        <div>
          <button className="b1 "
                  onClick={props.stop}>Stop</button>
          <button className="b1"
                  onClick={props.reset}>Reset</button>
        </div> : ""
      }

    {(props.status === 2)? 
        <div>
          <button className="b1"
                  onClick={props.resume}>Resume</button>
          <button className="b1"
                  onClick={props.reset}>Reset</button>
        </div> : ""
      }
     
    </div>
  );
}

export default Button;