// Funding.js
import React, { useState, useEffect } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import FundingCard from './FundingCard';
import ProgressBar from './ProgressBar';
import Qrpopup from './Qrpopup';

const Funding = () => {
  const [fundsRaised, setFundsRaised] = useState(0);
  const requiredFunds = 400000;
  const [donationMessage, setDonationMessage] = useState('');
  const [isExploding, setIsExploding] = useState(false);
  const [donationCount, setDonationCount] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false); // Track if the QR code should be shown

  useEffect(() => {
    // Function to check if the current view is mobile
    const checkIsMobileView = () => {
      setIsMobileView(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobileView);

    // Initial check for the current view
    checkIsMobileView();

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', checkIsMobileView);
    };
  }, []);

  const handleDonate = () => {
    // ... (existing donation logic)

    // Update the donation count
    // Change 100 to the actual amount donated
    setIsExploding(true);
    // Clear the donation message and stop the explosion after 3 seconds
    setTimeout(() => {
      setDonationMessage('');
      setIsExploding(false);
    }, 4000);

    // Show the QR code after clicking the "Submit" button
    setShowQRCode(true);
  };

  const onClose =()=>{
    setShowQRCode(false)
  }

  const componentStyles = {
    display: 'flex',
    flexDirection: 'row',
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
    maxHeight: '35em',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    border: '1px solid #888',
  };

  const mainHeadingStyles = {
    fontSize: '40px',
    marginBottom: '20px',
    color: '#f50057',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '50px',
    paddingTop: '70px',
  };

  return (
    <div id='sponsor'>
      <h1 style={mainHeadingStyles}>Sponsor Us</h1>
    <div id="funding-component" style={componentStyles}>
      {isExploding && <ConfettiExplosion />}
      {showQRCode ? (
        <Qrpopup onClose={onClose}/>
        // <p>HI</p>
      ) : (
        <div>
          <FundingCard
            requiredFunds={requiredFunds}
            fundsRaised={fundsRaised}
            donationCount={donationCount}
            handleDonate={handleDonate}
            donationMessage={donationMessage}
          /> 
          </div>)}
          {!isMobileView && (
            <ProgressBar fundsRaised={fundsRaised} requiredFunds={requiredFunds} />
          )}
        </div>
        </div>
  );
};

export default Funding;
