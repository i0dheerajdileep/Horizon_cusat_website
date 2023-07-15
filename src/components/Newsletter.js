import React, { useState } from "react";

export const Newsletter = () => {
  const [email, setEmail] = useState('');

  const clearFields = () => {
    setEmail('');
  }

  return (
    <div className="newsletter-container  ">
      <div className="newsletter-heading">
        <h3>Subscribe to our Newsletter<br /> & Never miss latest updates</h3>
        {/* {status === 'sending' && <Alert>Sending...</Alert>}
        {status === 'error' && <Alert variant="danger">{message}</Alert>}
        {status === 'success' && <Alert variant="success">{message}</Alert>} */}
      </div>
      <form>
        <div className="newsletter-input-box">
          <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
