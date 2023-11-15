
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='h-[100vh] flex justify-center items-center flex-col '>
            <div className='flex justify-center items-center flex-col'>
                <h1 className='text-9xl font-bold'>404!!!</h1>
                <p className='text-2xl'>Page not Found ,</p>
            </div>
            
            <Link to={'/'}><button className='px-4 py-3 bg-green-200 text-red-600 mt-5'>Back to homes</button></Link>
            
        </div>
    );
};

export default Error;