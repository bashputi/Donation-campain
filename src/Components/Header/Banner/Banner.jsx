import './Banner.css'

const Banner = () => {
    return (
       <div>
         <div id='banner' className="bg-green-200 h-[60vh] relative">
            </div>

            <div className='absolute top-60 ml-12 md:ml-40 lg:ml-80'>
            <h1 className='text-black font-bold text-2xl md:text-3xl lg:text-5xl mb-2 lg:mb-10 mt-5 lg:mt-20'>I Grow By
             Helping People In Need</h1>
             <div className="relative w-[60vw] lg:w-[30vw] ml-10 md:ml-2 lg:ml-24">
              <input type="text" className="input input-bordered w-full pr-16" /> 
              <button className="btn bg-[#FF444A] absolute top-0 right-0 rounded-l-none">Search</button>
            </div>

            </div>
       </div>
            
    );
};

export default Banner;