import React from 'react';

const CertificationSection = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '60px 20px' }}>
      
      {/* Main Content Row */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '50px' }}>
        
        {/* Left Text */}
        <div style={{ flex: '1', minWidth: '300px', textAlign: 'center' }}>
          <h2 style={{ color: 'green', fontSize: '2rem', marginBottom: '20px' }}>
            Get A Well-Recognised<br /> Digital Marketing<br /> Certification From PW Skills
          </h2>
        </div>

        {/* Right Certificate Image */}
        <div style={{ flex: '1', minWidth: '300px', textAlign: 'center', marginTop: '50px' }}>
          <img 
            src="src/components/image copy 37.png" 
            alt="Digital Marketing Certification" 
            style={{ Width: '100%', height: 'auto', display: 'flex', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0,0,0,0.3)' }}
          />
        </div>

      </div>

      {/* Banner Section */}
      <div className='container relative'>
      <div style={{ width: '100%',backgroundColor: '#1e293b', padding: '10px', marginTop: '40px', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap:  'wrap', gap: '50px',position: 'relative' }}>
        <h3 style={{ color: 'white', fontSize: '1.5rem' }}>
          Want A High-Paying Career in Digital Marketing?
        </h3>

        <button style={{ backgroundColor: '#f97316', color: 'white', padding: '12px', borderRadius: '10px', border: 'none', cursor: 'pointer', fontSize: '1rem',}}>
          Get Started!
        </button>

      </div>
  </div>
    </div>
  );
};

export default CertificationSection;