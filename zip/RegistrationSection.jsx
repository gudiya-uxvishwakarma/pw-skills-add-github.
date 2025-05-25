const RegistrationSection = () => {
  return (
    <>
       <section className="p-4 bg-white">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          
          {/* Left Side Content (Image + Text) */}
          <div className="w-full md:w-1/2">
            <img src='dist/image.png' alt="Background" className="w-full rounded mb-4" />
            
          </div>
          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-green bg-opacity-30'>
          <span className='absolute top-5 left-20  tranform -translate-y-1 top-5 left-center mt-[150px]'>
          <h1 className='font-bold text-white text-2xl '>Become a In-Demand Digital
            <br/>
             Marketer In Just 3 Months</h1>
          <br/>
          <p className='text-1xl font-bold text-black'>Learn Digital Marketing from the IndustryProfessionals</p>
        <br/>
          <div className='font-bold text-white'>
          <li>
            Dive  into endless job opportunities with Salary upto 10LPA
          </li>
          <li>
            Become a Freelancer and Earn Passive income
          </li>
          <li>
            Elevate your Business to New Heights 
          </li>
          <br/>
          <p className='font-bold text-1xl text-black'>Eligibility Criteria: For Graduates & above</p>
          </div>
          </span>
            <div style={{ display: 'flex',justifyContent: 'flex-end',width: '100px', padding: '30px', marginTop: '450px'}}>
             <div className="relative w-full h-screen flex justify-center items-center w-800px">
              </div>
      {/* Right Side Registration Form */}
      <div className="right-section">
      <div className="absolute  border-2 border-green-900 w-full md:w-1/4 bg-gray-100 p-10 rounded shadow">
        <h3 className=" relative text-xl font-semibold mb-4 bg-green-600 rounded text-white">Register Now to Upskill for Your Dream Job </h3>
        <p className="">Get Free Career Counseling by our experts</p>
        <form className="space-y-4">
        
        <input
              type="text"
              placeholder="Enter Name *"
              className="w-full border border-gray-300 p-2 rounded"
            />
            <input
              type="email"
              placeholder="Enter Email Address *"
              className="w-full border border-gray-300 p-2 rounded"
            />
            <input
              type="text"
              placeholder="Enter Mobile Number *"
              className="w-full border border-gray-300 p-2 rounded"
            />
            <select className="w-full border border-gray-300 p-2 rounded">
              <option value="">Select Current Working Status *</option>
              <option value="student">Student</option>
              <option value="working">Working</option>
            </select>
            <div className="flex items-start">
              <input type="checkbox" className="mr-2 mt-1" />
              <label className="text-sm">
                I agree to receive information regarding my submitted application by signing up on Physics Wallah Skills *
              </label>
            </div>
          <button type="submit" className="w-100px bg-blue-400 text-white py-2 rounded">
            Submit
          </button>
        </form>
      </div>
</div>
        </div>

    </div>
   </div>
 
    </section>
   
  </>
);
}
  


export default RegistrationSection;