// ProgressBar.js
import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ({ fundsRaised, requiredFunds }) => {
  const styles = {
    width: 500,
    height: 500,
    margin: '0 50px',
  };

  return (
    <div style={styles}>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
          }}
        >
          <CircularProgressbarWithChildren
            value={(fundsRaised / requiredFunds) * 100}
            strokeWidth={5}
            styles={{
              path: {
                stroke: '#f50057',
                strokeLinecap: 'butt',
              },
              trail: {
                stroke: '#ccc',
                strokeLinecap: 'butt',
              },
            }}
          >
            <p style={{ color: '#888', textAlign: 'center', fontSize: '14px' }}>
              Raised:  ₹{fundsRaised} of  ₹{requiredFunds} total
            </p>
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
