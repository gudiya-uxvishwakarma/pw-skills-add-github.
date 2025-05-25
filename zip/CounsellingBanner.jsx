import React from "react";

const CounsellingBanner = () => {
  return (
    <div className="container relative">
   
   <div className= " p-2 border max-w-md mx-auto border-5px text-white  bg-black p-100px flex items-center justify-between rounded-2xl mt-8 min-h-[150px]">
   <div className=" font-bold text-4xl mb-4 ">
   <div style={{ border: '2px solid green',borderRadius: '10px',}}>
        Reach Out To Us For Free Counselling!
        <br/>
      
    <div className=" border-5px text-white  p-100px flex items-center justify-between rounded-2xl mt-4 min-h-[150px]">
      <div className=" font-bold text-4xl mb-10 text-green-600">
        Intersted In PW's Digital Marketing Course ?
        
     <button style={{ backgroundColor: '#f97316', color: 'white', padding: '10px', borderRadius: '10px', border: 'none', cursor: 'pointer', fontSize: '2rem', justifyContent: 'center', alignItems: 'center' }}>
        Contact Us Now!
        </button>
        </div>
        </div>
        
       </div>
   <div className="flex justify-center text-6xl font-bold">
     </div>
    </div>
    </div>
    </div>
    
    


  );
};

export default CounsellingBanner;