 import React , { useState } from 'react'

 const Navbar = () => {
  const [color, setColor] = useState("olive")
  return (
  
<>
   <div className='container relative'>
    <div className='flex font-bold text-3xl items-center px-4 py-2 shadow-lg text-pink'>
      <img src='src/components/image.png' alt='' className='h-12' />
      <div>
        <h1>SKILLS</h1>
        </div>
        </div>
        <div className='relative'>
        <div className='absolute top-6 right-5 tranform -translate-y-1 top-2 left-center mt-[-60px]'>
      <a href='brochure.pdf' className='bg-black text-white px-4 py-2 rounded hover:bg-grat transition justify-center'
      >Download Brochure</a>
      </div>
      </div>
      </div>
    

  
  
  
  
 </>
     
  );
};

 export default Navbar;