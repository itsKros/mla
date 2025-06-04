 import React, { useState } from 'react'
import {Link} from 'react-router'
import logo from '../../assets/mla_logo.webp'

function Header() {
  const [isOpen, setIsOpen] = useState(false); 
  const toggleMenu = () => setIsOpen(prev => !prev);

  return ( 
    <header className="bg-white shadow-md">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img src={logo} alt="Logo" className="h-8 sm:h-10 w-auto" /> 
                    </Link>

                    <button onClick={toggleMenu} class="md:hidden p-2 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu h-6 w-6"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg></button>
                    
                    <div id="mobile-menu-2" className={`justify-between items-center w-full lg:flex lg:w-auto lg:order-1 transition-all duration-300 ease-in-out ${ isOpen ? 'block' : 'hidden' }`} >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link
                                    to="/"
                                    className={({isActive}) =>
                                        `flex items-center text-gray-700 hover:text-primary  ${isActive ? "text-primary" : "text-gray-700"} font-semibold`
                                    }
                                >
                                    Marketing Resources
                                </Link>                                
                            </li>
                            <li>
                                <Link
                                    to="book-a-call"
                                    className={({isActive}) =>
                                        `flex items-center text-gray-700 hover:text-primary  ${isActive ? "text-primary" : "text-gray-700"} font-semibold`
                                    }
                                >
                                    Book A Call
                                </Link>                                
                            </li>
                            <li>
                                <Link
                                    to="ai-tools"
                                    className={({isActive}) =>
                                        `flex items-center text-gray-700 hover:text-primary  ${isActive ? "text-primary" : "text-gray-700"} font-semibold`
                                    }
                                >
                                    AI Tools
                                </Link>                                
                            </li>
                            <li>
                                <Link
                                    to="course-book-spotlight"
                                    className={({isActive}) =>
                                        `flex items-center text-gray-700 hover:text-primary  ${isActive ? "text-primary" : "text-gray-700"} font-semibold`
                                    }
                                >
                                    Course & Book Spotlight
                                </Link>                                
                            </li> 
                        </ul>
                    </div>
                </div>
            </nav>
        </header>



    



       
  )
}

export default Header