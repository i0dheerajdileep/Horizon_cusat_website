import React, { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Funding = () => {
  const [fundsRaised, setFundsRaised] = useState(2000);
  const requiredFunds = 10000;
  const [donationMessage, setDonationMessage] = useState('');
  const [isExploding, setIsExploding] = useState(false);
  const [donationCount, setDonationCount] = useState(0);

  const handleDonate = () => {
    // ... (existing donation logic)

    // Update the donation count
    setDonationCount((prevCount) => prevCount + 1);

    // Update the funds raised
    setFundsRaised((prevFunds) => prevFunds + 100); // Change 100 to the actual amount donated

    // Clear the donation message and stop the explosion after 3 seconds
    setTimeout(() => {
      setDonationMessage('');
      setIsExploding(false);
    }, 3000);
  };

  const componentStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',
    marginBottom: '60px',
    marginLeft: '30px',
    padding: '20px',
    borderRadius: '10px',
    width: '100%',
    maxWidth: '95%',
    height: 'auto',
    maxHeight:'35em',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    border: '1px solid #888', // Use a darker color for the border, such as #888
  };

  const mainHeadingStyles = {
    fontSize: '40px',
    marginBottom: '20px',
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '50px',
    paddingTop: ' 70px',
  };

  const headingStyles = {
    fontSize: '36px',
    marginBottom: '20px',
    color: '#f50057',
    fontWeight: 'bold',
    textAlign: 'start',
  };

  const cardStyles = {
    backgroundColor: 'transparent',
    padding: '0px 40px 40px 40px', // Add padding to the card
    borderRadius: '10px',
    textAlign: 'left',
    color: 'white',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '350px',
    height: 'auto',
  };

  const buttonStyles = {
    padding: '8px 40px', // Reduce the height and increase the width of the buttons
    fontSize: '16px',
    backgroundColor: '#f50057', // Make the "Donate" button pink
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    flex: 2, // Make the button wider
    marginRight: '10px', // Add space between the buttons
  };

  const shareButtonStyles = {
    padding: '8px 40px', // Reduce the height and increase the width of the buttons
    fontSize: '16px',
    backgroundColor: 'transparent', // Set the background of the "Share" button to transparent
    color: 'white', // Set the text of the "Share" button to white
    border: '2px solid white', // Add a white border to the "Share" button
    borderRadius: '5px',
    cursor: 'pointer',
    flex: 2, // Make the button wider
  };

  const donationCountStyles = {
    fontSize: '16px',
    color: '#fff',
    textAlign: 'left',
    margin: '10px 0', // Add margin to the top and bottom of the donation count
  };

  return (
    <div id="funding-component" style={componentStyles}>
      {isExploding && <ConfettiExplosion />}
      <h1 style={mainHeadingStyles}>Sponsor Us</h1>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center',paddingBottom:'50px' }}>
        <div style={cardStyles}>
          <h2 style={headingStyles}>Help Us Reach<br />Our Goal!</h2>
          <p style={{ color: '#fff', marginBottom: '10px' }}>Our Fundraising Target: Goal: ${requiredFunds}</p>
          <p style={{ marginBottom: '10px' }}>Raised: ${fundsRaised} of ${requiredFunds} total</p>
          <div style={donationCountStyles}>{donationCount} people donated so far!</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
            <button style={buttonStyles} onClick={handleDonate}>
              Donate
            </button>
            <button style={shareButtonStyles}>Share</button>
          </div>
          {donationMessage && (
            <p style={{ marginBottom: '10px', fontSize: '16px' }}>{donationMessage}</p>
          )}
        </div>
        <div style={{ width: 500, height: 500, margin: '0 50px' }}>
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
                strokeWidth={5} // Set the stroke width to make it thinner
                styles={{
                  path: {
                    stroke: '#f50057', // Set the color to pink
                    strokeLinecap: 'butt',
                  },
                  trail: {
                    stroke: '#ccc', // Set the color of the progress bar outline
                    strokeLinecap: 'butt',
                  },
                }}
              >
                <p style={{ color: '#888', textAlign: 'center', fontSize: '14px' }}>
                  Raised: ${fundsRaised} of<br/> ${requiredFunds} total
                </p>
              </CircularProgressbarWithChildren>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funding;
