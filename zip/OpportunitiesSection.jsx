import React from 'react';

const OpportunitiesSection = () => {
  return (
    <>
   
      {/* Top Heading and button*/}
      <div style={{  padding: '50px 20px' }}>
       
        <button style={{
          
          color: 'white',
          padding: '10px 20px',
          border: 'none',
        borderRadius: '5px',
        margin: '10px',
        cursor: 'pointer',
        fontSize: '16px',
        
        }}>
       
        </button>
      </div>
        {/* Best Opportunities */}
        <h2 style={{ color: 'green', textAlign: 'center', margin: '0px 0 20px', fontSize: '27px' }}>
        Best Opportunities On The Way
      </h2>

      {/* 3 boxes */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
        <div style={cardStyle}>
          <img src="src/components/image copy 42.png" alt="Hiring" style={iconStyle} />
          <h3>200+</h3>
          <p>Hiring partners</p>
        </div>

        <div style={cardStyle}>
          <img src="src/components/image copy 40.png" alt="Career" style={iconStyle} />
          <h3>1000+</h3>
          <p>Career Transitions</p>
        </div>

        <div style={cardStyle}>
          <img src="src/components/image copy 41.png" style={iconStyle} />
          <h3>10 LPA</h3>
          <p>Highest Package</p>
        </div>
        </div>
        
      






     

      
      {/* FAQ Section */}
      <section style={{ backgroundColor: '#1f1f1f', padding: '30px', borderRadius: '10px', color: 'white' }}>
        <h2 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '30px' }}>
          Frequently Asked Questions
          
        </h2>

        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ fontSize: '22px' }}>Q. Why Digital Marketing?</h4>
          <p style={{ fontSize: '15px', marginTop: '8px', color: 'white' }}>
            A. Digital marketing offers global reach, cost-effectiveness, targeted audience, measurable results, interactivity, flexibility, brand building and integration with traditional marketing.
           
          </p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ fontSize: '22px' }}>Q. What will I learn in Digital Marketing with AI?</h4>
          <p style={{ fontSize: '15px', marginTop: '8px', color: 'white',}}>
            A. In Digital Marketing with AI, you'll immerse yourself in a comprehensive curriculum covering the core principles of digital marketing alongside advanced AI techniques.
           
          </p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ fontSize: '22px'}}>Q. How can I get help if I encounter difficulties with the course material?</h4>
          <p  style={{ fontSize: '15px', marginTop: '8px', color: 'white',}}>
            A. We offer various support channels, including Doubt Support,Email support,Community and a Q&A Forum on our dashboard during revision sessions.</p>
          </div>

          <div style={{ marginBottom: '20px' }}>
          <h4 style={{ fontSize: '22px'}}>Q. Will I receive a certification upon completion of the course?</h4>
          <p  style={{ fontSize: '15px', marginTop: '8px', color: 'white',}}>
            A. Yes, you will receive an industry-recognised certification from PW Skills after completing the course.</p>
          </div>

          <div style={{ marginBottom: '20px' }}>
          <h4 style={{ fontSize: '22px'}}>Q. What are the prerequisites for enrolling in this course?</h4>
          <p  style={{ fontSize: '15px', marginTop: '8px', color: 'white',}}>
            A. This course is designed for beginners, and no prior Knowledge of programming is required. Basic computer literacy and a willingness to learn are the only prerequisites.</p>
          </div>
          
          <div style={{ marginBottom: '20px' }}>
          <h4 style={{ fontSize: '22px'}}>Q. How will the recorded content be structured to facilitate self-paced learning?</h4>
          <p  style={{ fontSize: '15px', marginTop: '8px', color: 'white',}}>
            A. Othe recorded content is organised into easily digestible modules, each coverring specific concepts and skills. You can progress at your own pace,pause,rewind, and review content as needed.</p>
          </div>
      </section>
      
      
      

   



</>

  );
};

// Card style
const cardStyle = {
  backgroundColor: 'black',
  color: 'white',
  padding: '20px',
  borderRadius: '10px',
  textAlign: 'center',
  width: '250px',
  height: '200px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

// Icon style
const iconStyle = {
  width: '50px',
  marginBottom: '10px',
};

export default OpportunitiesSection;