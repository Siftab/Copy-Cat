import React, { useContext } from 'react';
import { SeacrhContext } from '../../Pages/Home';

const Banner = () => {
    const handleSearch = useContext(SeacrhContext);
    return (<>
        <div className='relative -top-44'>
            <div className="h-[80vh] bg-[url('/banner.jpg')] opacity-10 bg-cover " >


            </div>
            <div className='  flex flex-col justify-center   items-center absolute left-10 md:text-center  lg:left-[550px] lg:top-80 top-60'>
                <div><h1 className='text-5xl font-bold '>I Grow By Helping People In Need</h1></div>
                <form onSubmit={handleSearch} className='mt-5 '>
                    <input type="text" className='border py-2 px-3 rounded-md ' placeholder='Search here' name='search'/>
                    <button className='bg-[#FF444A] py-2 px-4 rounded-r-md text-white ' type="submit">Search</button>
                    {/* <input className='bg-[#FF444A] py-2 px-4 rounded-r-md text-white ' type="submit" value="Search" /> */}

                </form>
            </div>
        </div>
    </>
    );
};

export default Banner;  