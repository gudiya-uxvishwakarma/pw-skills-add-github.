import { AlignLeft } from 'lucide-react';
import React from 'react';

const UniqueOfferings = () => {
  return (
    <>
    <div className='container relative'>
      
        <h2 className='flex justify-center text-center
          max-w-md mx-auto text-5xl text-green-600 font-bold'>Our Unique Offerings</h2>
        <div style={{border:'1px solid gray',padding:'20px',widows:'100px', height: '290px',borderRadius: '20px', width:'1460px',AlignLeft:'100%',maxWidth:'1900px'}} className='flex justify-center top-10 mb-4'>
        <div className=' justify-center mb-10'>
       
            
          <ul className='space-y-2 text-2xl flex-com'>
          <li>
          <span className='text-green-500 font-bold text-2xl'>&#10003;</span> Learn from Industry Professionals</li>

          <li>
          <span className='text-green-500 font-bold text-2xl'>&#10003;</span> Real World Projects & Case Studies</li>
          <li>
          <span className='text-green-500 font-bold text-2xl'>&#10003;</span> Industry-Relevant Projects</li>
          <li>
          <span className='text-green-500 font-bold text-2xl'>&#10003;</span> Digital Marketing Course with Placement Assistance</li>
          <li>
          <span className='text-green-500 font-bold text-2xl'>&#10003;</span> Interview Preparation & More!</li>
         
        </ul>
       
      </div>
      <div className='container'>
        <div className='flex justify-center items-center w-1500px'>
      <img 
        src="src/components/image copy 29.png" 
        alt="Offering Illustration" 
        style={styles.image} 
      />
    </div>
    </div>
    </div>
    </div>
    </>
    )
   
};
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '100px',
  },
  textContainer: {
    flex: 1,
    paddingRight: '50px',
  },
  image: {
    maxWidth: '500px',
    height: 'auto',
  }
};

export default UniqueOfferings;

