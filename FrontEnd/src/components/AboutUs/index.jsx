import React from 'react';

function AboutUs() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2 style={{ color: '#ff6600' }}>About Us</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.</p>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px' }}>
        <img 
          src="https://preview.colorlib.com/theme/banker/images/hero_1.jpg" 
          alt="About Us" 
          style={{ width: '400px', borderRadius: '10px', marginRight: '20px' }} 
        />
        
        <div style={{ textAlign: 'left', maxWidth: '500px' }}>
          <h3>We Solve Your Financial Problem</h3>
          <p>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of 
            the Semantics, a large language ocean.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with the necessary regelialia. 
            It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
