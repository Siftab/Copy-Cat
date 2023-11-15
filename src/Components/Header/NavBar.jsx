
import { NavLink } from 'react-router-dom';
import logo from '/Logo.png'
const NavBar = () => {
    return (
        <div className=' mt-12 relative z-10'>
            <nav className='flex flex-col md:flex-row lg:justify-between  items-center'>
                <div><img src={logo} alt="" /></div>
                <ul className='flex  gap-6 text-lg font-normal mt-4 md:mt-0'>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Statics
                        </NavLink>
                    </li>
                </ul>
                
            </nav>
        </div>
    );
};

export default NavBar;