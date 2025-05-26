import React from 'react'
import {Link} from 'react-router'

function Footer() {
  return (
    <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2025 &nbsp;
                        <a href="#" className="hover:underline">
                            Mini Lesson Academy
                        </a>
                        . All Rights Reserved.
                    </span>
                    
                </div>
            </div>
        </footer>
  )
}

export default Footer