import React, { useEffect, useState, useRef } from 'react';

function MarketingVipResourcesHub() {
  

  return (

    <section className="text-gray-600  body-font overflow-hidden">
        <div className="container px-5 pt-10 mx-auto">
            <div className="grad-bg flex flex-col text-center w-full p-20 mb-20 rounded-xl">
                <h1 className="sm:text-6xl text-4xl font-bold title-font mb-2 text-white">Marketing Vip Resources Hub
                </h1>
                <p className="lg:w-2/2 pt-3 px-12 mx-auto font-light text-white sm:text-lg leading-relaxed">Your ultimate
                    toolkit for turning
                    your Mini Lessons Academy courses and books into buzzworthy successes! Dive into exclusive marketing
                    strategies and insider tips to grow your audience, boost engagement, and transform your creations
                    into must-have content.</p>
            </div>
        </div>
        <div className="container mx-auto accordion_Section pb-5">
            <div className="px-5 py-0 mx-auto flex flex-wrap flex-col gap-4 text-[#000]">

                {/* <!-- Accordion Item One - EBooks --> */}
                <div
                    className="accordion relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer group border border-gray-200 bg-white">
                    <button type="button"
                        className="accordion-header w-full text-left p-5 flex items-center justify-between cursor-pointer transition-all">
                        <div className="title">
                            <h2 className="text-2xl font-semibold mb-2 transition-colors"> EBooks</h2>
                            <p className="font-light text-gray-800 sm:text-lg leading-relaxed pt-2">Explore comprehensive
                                guides and strategies to help you market and monetize the content you’ve created,
                                offering actionable steps for maximizing your profits.</p>
                            <div
                                className="mt-3 h-1 w-20 rounded-full transition-all duration-300 bg-gray-200 group-hover:bg-blue-200">
                            </div>
                        </div>
                        <span className="accordion-icon text-3xl transition-opacity duration-300">+</span>
                    </button>
                    <div className="accordion-content overflow-hidden max-h-0 transition-all duration-500 ease-in-out">
                        <div className="container px-5 py-10 mx-auto">
                            <div className="grid grid-cols-4 gap-4">
                                <div className="xl:w-1/1 md:w-1/1">
                                    <div
                                        className="border flex flex-col p-2 relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer group ring-1 ring-blue-500 bg-gradient-to-br from-blue-50 to-white">
                                        <div className="flex flex-col items-center justify-center mb-4">
                                            <h3>Affiliate Marketing</h3>
                                            <h3 className="rounded-lg py-2 px-4 mt-2 border-gray-200 border-1 bg-white">Tap
                                                to read online!</h3>
                                        </div>
                                        <img className="lg:w-1/1 md:w-3/6 w-5/6 mb-2 object-cover objet-center mx-auto rounded-xl"
                                            alt="hero" src="/img/Affiliate-Marketing-img.webp" />
                                        <a href=""
                                            className="lg:w-1/1 md:px-5 px-2.5 py-3 content-center rounded-lg font-medium text-sm text-center gap-2 transition-all duration-200 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-[0_4px_10px_-3px_rgba(124,58,237,0.5)]">Download</a>
                                    </div>
                                </div>
                                <div className="xl:w-1/1 md:w-1/1">
                                    <div
                                        className="border flex flex-col p-2 relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer group ring-1 ring-blue-500 bg-gradient-to-br from-blue-50 to-white">
                                        <div className="flex flex-col items-center justify-center mb-4">
                                            <h3>Affiliate Marketing</h3>
                                            <h3 className="rounded-lg py-2 px-4 mt-2 border-gray-200 border-1 bg-white">Tap
                                                to read online!</h3>
                                        </div>
                                        <img className="lg:w-1/1 md:w-3/6 w-5/6 mb-2 object-cover objet-center mx-auto rounded-xl"
                                            alt="hero" src="/img/Affiliate-Marketing-img.webp" />
                                        <a href=""
                                            className="lg:w-1/1 md:px-5 px-2.5 py-3 content-center rounded-lg font-medium text-sm text-center gap-2 transition-all duration-200 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-[0_4px_10px_-3px_rgba(124,58,237,0.5)]">Download</a>
                                    </div>
                                </div>
                                <div className="xl:w-1/1 md:w-1/1">
                                    <div
                                        className="border flex flex-col p-2 relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer group ring-1 ring-blue-500 bg-gradient-to-br from-blue-50 to-white">
                                        <div className="flex flex-col items-center justify-center mb-4">
                                            <h3>Affiliate Marketing</h3>
                                            <h3 className="rounded-lg py-2 px-4 mt-2 border-gray-200 border-1 bg-white">Tap
                                                to read online!</h3>
                                        </div>
                                        <img className="lg:w-1/1 md:w-3/6 w-5/6 mb-2 object-cover objet-center mx-auto rounded-xl"
                                            alt="hero" src="/img/Affiliate-Marketing-img.webp" />
                                        <a href=""
                                            className="lg:w-1/1 md:px-5 px-2.5 py-3 content-center rounded-lg font-medium text-sm text-center gap-2 transition-all duration-200 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-[0_4px_10px_-3px_rgba(124,58,237,0.5)]">Download</a>
                                    </div>
                                </div>
                                <div className="xl:w-1/1 md:w-1/1">
                                    <div
                                        className="border flex flex-col p-2 relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer group ring-1 ring-blue-500 bg-gradient-to-br from-blue-50 to-white">
                                        <div className="flex flex-col items-center justify-center mb-4">
                                            <h3>Affiliate Marketing</h3>
                                            <h3 className="rounded-lg py-2 px-4 mt-2 border-gray-200 border-1 bg-white">Tap
                                                to read online!</h3>
                                        </div>
                                        <img className="lg:w-1/1 md:w-3/6 w-5/6 mb-2 object-cover objet-center mx-auto rounded-xl"
                                            alt="hero" src="/img/Affiliate-Marketing-img.webp" />
                                        <a href=""
                                            className="lg:w-1/1 md:px-5 px-2.5 py-3 content-center rounded-lg font-medium text-sm text-center gap-2 transition-all duration-200 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-[0_4px_10px_-3px_rgba(124,58,237,0.5)]">Download</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Accordion Item Three - Videos--> */}
                <div
                    className="accordion relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer group border border-gray-200 bg-white">
                    <button type="button"
                        className="accordion-header w-full text-left p-5 flex items-center justify-between cursor-pointer transition-all">
                        <div className="title">
                            <h2 className="text-2xl font-semibold mb-2 transition-colors">Videos</h2>
                            <p className="font-light text-gray-800 sm:text-lg leading-relaxed pt-2">Gain valuable insights
                                from marketing experts and step-by-step video tutorials that show you how to effectively
                                promote and grow your online presence.</p>
                            <div
                                className="mt-3 h-1 w-20 rounded-full transition-all duration-300 bg-gray-200 group-hover:bg-blue-200">
                            </div>
                        </div>
                        <span className="accordion-icon text-3xl transition-opacity duration-300">+</span>
                    </button>
                    <div className="accordion-content overflow-hidden max-h-0 transition-all duration-500 ease-in-out">
                        <div className="container px-5 py-10 mx-auto">
                            <div className="flex flex-row gap-4">
                                {/* <!-- 30% Width --> */}
                                <div className="w-[20%] text-3xl font-semibold mb-2 transition-colors">
                                    High Ticket Videos
                                </div>
                                {/* <!-- 70% Width --> */}
                                <div className="w-[80%] ">
                                    {/* <!-- Owl Carousel --> */}
                                    <div className="carousel-wrapper w-full overflow-hidden relative">
                                        <div className="owl-carousel video-carousel">
                                            <div
                                                className="item cursor-pointer relative rounded-lg border border-gray-200 bg-[url('./assets/img/v1.webp')] bg-cover bg-center py-3">
                                                <i className="fas fa-play plyIcon"></i><video muted className="w-full">
                                                    <source src="https://youtu.be/joiyb6c_Ry4?si=BhzVVORXAMUL_hLA"
                                                        type="video/mp4" />
                                                </video></div>
                                            <div
                                                className="item cursor-pointer relative rounded-lg border border-gray-200 bg-[url('./assets/img/v1.webp')] bg-cover bg-center py-3">
                                                <i className="fas fa-play plyIcon"></i> <video muted className="w-full">
                                                    <source src="https://youtu.be/joiyb6c_Ry4?si=BhzVVORXAMUL_hLA"
                                                        type="video/mp4" />
                                                </video></div>
                                        </div>
                                    </div>

                                    {/* <!-- Fullscreen video popup --> */}
                                    <div className="video-lightbox fixed inset-0 z-50 bg-black/80 flex items-center justify-center hidden">
                                        <div className="relative w-full max-w-5xl mx-auto px-4">
                                            <button className="close-video absolute top-2 right-2 text-white text-3xl font-bold">&times;</button>
                                            <div className="aspect-w-16 aspect-h-9">
                                                <iframe className="lightbox-video w-full h-130 rounded-lg shadow-lg" src="" frameborder="0" allowfullscreen></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                

            </div>
        </div>
    </section>



  );
}

export default MarketingVipResourcesHub;