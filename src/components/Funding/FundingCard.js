import React, { useState } from 'react';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { AiOutlineCopy } from 'react-icons/ai';

const FundingCard = ({ requiredFunds, fundsRaised, donationCount, handleDonate, donationMessage }) => {
  const [selectedOption, setSelectedOption] = useState(false);

  const cardStyles = {
    backgroundColor: 'transparent',
    padding: '0px 40px 40px 40px',
    borderRadius: '10px',
    textAlign: 'left',
    color: 'white',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '350px',
    height: 'auto',
  };

  const headingStyles = {
    fontSize: '36px',
    marginBottom: '20px',
    color: '#f50057',
    fontWeight: 'bold',
    textAlign: 'start',
  };

  const buttonStyles = {
    padding: '8px 40px',
    fontSize: '16px',
    backgroundColor: '#f50057',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    flex: 2,
    marginRight: '10px',
  };

  const shareButtonStyles = {
    padding: '11px 40px',
    fontSize: '16px',
    display:'flex',
    flexDirection:'row',
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    color: 'white',
    border: '2px solid white',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'start', // Center align the text
    width: '100%', //
    whiteSpace: 'nowrap', 
    
  };

  const dropdownStyles = {
    position: 'absolute',
    top: '100%',
    right: '0',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '8px',
    zIndex: '1',
    color: '#000',
    minWidth: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'start',
  };

  const dropdownOptionStyles = {
    cursor: 'pointer',
    padding: '8px',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
  };

  const donationCountStyles = {
    fontSize: '16px',
    color: '#fff',
    textAlign: 'left',
    margin: '10px 0',
  };

  const handleShare = (option) => {
    const shareText = 'Check out this fundraising campaign! We need your support.';
    const shareLink = 'http://horizoncusat.in/#sponsor'; // Replace 'http' with 'https' if needed
    const combinedTextAndLink = shareText + '\n' + shareLink;

    if (option === 'whatsapp') {
      // Create a WhatsApp share link with the predefined message
      shareLink = `https://wa.me/?text=${encodeURIComponent(combinedTextAndLink)}`;
      window.open(shareLink, '_blank');
    } else if (option === 'copylink') {
      // Function to copy the link to the clipboard
      navigator.clipboard.writeText(combinedTextAndLink)
        .then(() => {
          alert('Link copied to clipboard!');
        })
        .catch((error) => {
          console.error('Failed to copy link: ', error);
        });
    }
  };

  return (
    <div style={cardStyles}>
      <h2 style={headingStyles}>Help Us Reach<br />Our Goal!</h2>
      <p style={{ color: '#fff', marginBottom: '10px' }}>Our Fundraising Target: Goal: ₹{requiredFunds}</p>
      <p style={{ marginBottom: '10px' }}>Raised:  ₹{fundsRaised} of  ₹{requiredFunds} total</p>
      <div style={donationCountStyles}>{donationCount} people donated so far!</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
        <button style={buttonStyles} onClick={handleDonate}>
          Donate
        </button>
        <div style={{ position: 'relative' }}>
        <button style={shareButtonStyles} onClick={() => setSelectedOption(!selectedOption)}>
             Share  {selectedOption ?  '▲' : '▼'} {/* Add the arrow here */}
        </button>
          {selectedOption && (
            <div style={dropdownStyles}>
              <div style={dropdownOptionStyles} onClick={() => handleShare('whatsapp')}>
                <IoLogoWhatsapp style={{ marginRight: '5px' }} />
                WhatsApp
              </div>
              <div style={dropdownOptionStyles} onClick={() => handleShare('copylink')}>
                <AiOutlineCopy style={{ marginRight: '5px' }} />
                Copy Link
              </div>
            </div>
          )}
        </div>
      </div>
      {donationMessage && (
        <p style={{ marginBottom: '10px', fontSize: '16px' }}>{donationMessage}</p>
      )}
    </div>
  );
};

export default FundingCard;
