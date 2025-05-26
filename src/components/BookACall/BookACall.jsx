import React from 'react'


function BookACall() {
  return (
    <>
    <section className="text-gray-600  p-5 body-font m7-8 font-['Montesserat'] ">
        <div className="container p-15 w-full max-w-7/8 mx-auto shadow-[0_10px_50px_-12px_rgba(124,58,237,0.25)] rounded-l ">
            <div className="text-center w-full mb-5">
                <img className="lg:w-1/10 md:w-3/6 w-5/6 mb-5 object-cover objet-center mx-auto" alt="hero" src="/img/high-ticket-contact.png" />
                <h1 className="mb-4 text-4xl text-[#000] tracking-tight font-extrabold">Turn Your Ideas Into Action—Let’s Talk!</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 w-full ">
                <div className="p-7 text-[#1f2937] items-start relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer group border border-gray-200 hover:border-blue-200 bg-white hover:shadow-md">
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br from-blue-100 to-transparent opacity-0 -translate-y-16 translate-x-16 transition-all duration-500 opacity-50 -translate-y-12 translate-x-12"></div>
                    <h2 className="text-lg font-['Montesserat'] font-bold mb-1">Need help with course strategy, website setup, or just have
                        questions? We’re here to help.</h2>
                    <p className="text-gray-600 text-sm flex-grow font-['Montesserat'] pt-3">Whether you’re mapping out your next steps, exploring website options, or
                        considering our accelerator program, let’s chat.</p>
                </div>

                <div className="p-7 text-[#1f2937] items-start relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer group border border-gray-200 hover:border-blue-200 bg-white hover:shadow-md">
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br from-blue-100 to-transparent opacity-0 -translate-y-16 translate-x-16 transition-all duration-500 opacity-50 -translate-y-12 translate-x-12"></div>

                    <h2 className="text-lg font-['Montesserat'] font-bold mb-1">No sales pitch—just real insights and guidance
                        from our team.</h2>
                    <ul className="bac text-gray-600 text-sm flex-grow text-[#000] font-['Montesserat'] pt-3">
                        <li className="text-left">Course structure & marketing advice</li>
                        <li className="text-left my-2">Website & branding guidance</li>
                        <li className=" text-left">Ask anything—this is your time!</li>
                    </ul>
                </div>

            </div>
            <h2 className="title-font font-medium text-2xl text-center text-gray-900 pt-5 font-['Montesserat']"> Spots fill up quickly - reserve yours today!</h2>
            <button className="md:px-5 mt-5 mx-auto px-2.5 py-2.5 rounded-lg font-medium text-2xl flex items-center gap-2 transition-all duration-200  bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-[0_4px_10px_-3px_rgba(124,58,237,0.5)] font-['Montesserat']">BOOK  A CALL NOW!</button>
        </div>
        
    </section>
    </>
  )
}

export default BookACall