import React from 'react';

function CoursePage() {
  return (
    <>
      <div className="p-4 md:p-8 bg-white rounded-2xl shadow-lg max-w-4xl mx-auto mt-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4  border-2 border-gray-300  ">
        {/* Total Program Fee Box */}
        <div className="bg-white border-2 border-green-900 p-6 rounded-lg text-center shadow-md  w-full md:w-1/3">
          <p className="text-black-500 font-semibold text-2xl">TOTAL PROGRAM FEE</p>
          <div className="text-3xl font-bold text-green-600 mt-2">₹35,000</div>
          <div className="text-black-400 line-through text-1px">₹50,000</div>
           
        </div>

        {/* Description Section */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-green-800 mb-2">At An Affordable Price</h2>
          <p className="text-black-600 text-2xl mb-2">
            We believe that advancing your career shouldn't be too costly, which is why we've made this
            premier program accessible to you at an affordable price:
          </p>
           <p className="text-green-700 font-bold text-2xl">Duration: 3 Months</p>
        </div>
      </div>

    
    </div>
    
          
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button style={{
        backgroundColor: '#f97316',
        color: 'white',
        border: 'none',
        padding: '12px 30px',
        fontSize: '1.2rem',
        borderRadius: '8px',
        cursor: 'pointer',
      }}>
        Click To Get Started!
      </button>
    </div>
      {/* Main Heading */}
      <div className='container relative'>
      <h1 className="text-3xl font-bold mb-6 text-center text-green-600">
        Learn Digital Marketing from Scratch
      </h1>

<div className=" border p-8 rounded-5xl  grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div className=" rounded-xl p-4">
        <div style={{ border:'1px solid black', padding:'10px'}}>
          <h3 className="text-1xl font-semibold mb-2 ">Build a Marketing Campaign with AI</h3>
          <img src='src/components/image copy 35.png' alt=''className='h-1px'/>
          <p className='bg-black-600 text-1xl'>Optimize marketing campaigns with AI: analyze behavior,personalize content,and target ads effectively.Harness machine learning for maximum engagement and ROI in advertising strategies</p>
        </div>
        <br/>
        <div className="flex p-3 rounded-md ">
        <div style={{ border:'1px solid black', padding:'10px'}}>
          <h3 className="text-1xl font-semibold mb-2">E-Commerce Website Development on Shopify</h3>
          <img src='src/components/image copy 36.png'alt='' />
          <p className='bg-black-600 text-1xl'>Optimize marketing campaigns with AI: analyze behavior,personalize content,and target ads effectively.Harness machine learning for maximum engagement and ROI in advertising strategies</p>
          </div>
          </div>
        </div>
        
        </div>
        <div className="p-3 rounded-md  borderRadius-10px grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div style={{ border:'1px solid black', padding:'10px',}}>
          <h3 className="text-1xl font-semibold mb-2">Build a No-Code Chatbot</h3>
          <img src='src/components/image copy 34.png' alt='' />
          <p className='bg-black-600 text-1xl'>Create a blog on WordPress or AI platforms. WordPress is flexible,while AI simplifies design for sharing ideas and connecting.</p>
        </div>
        </div>
        <div className=" p-3 rounded-md  grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div style={{ border:'1px solid black', padding:'10px'}}>
          <h3 className="text-1xl font-semibold mb-2">Website Development using WordPress</h3>
          <img src='src/components/image copy 38.png'alt='' />
          <p className='bg-black-600 text-1xl'>Crafting an Effective Analytics Dashboard: Strategies for data Visualization, Interpretation, and Actionable insights</p>
        </div>
        </div>
        </div>

    
    </>
  );
};
      
        
       

      
        
        
        
        
        
      
     
     
    
  

export default CoursePage;