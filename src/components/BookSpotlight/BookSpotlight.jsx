import React, { useState, useEffect } from 'react';

function BookSpotlight() {

    useEffect(() => {
        const loadScript = (src) =>
            new Promise((resolve, reject) => {
                if (document.querySelector(`script[src="${src}"]`)) {
                    // script already loaded
                    resolve();
                    return;
                }
                const script = document.createElement("script");
                script.src = src;
                script.async = true;
                script.onload = resolve;
                script.onerror = reject;
                document.body.appendChild(script);
            });

        const loadStyle = (href) => {
            if (document.querySelector(`link[href="${href}"]`)) {
                return document.querySelector(`link[href="${href}"]`);
            }
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = href;
            document.head.appendChild(link);
            return link;
        };

        const owlCSS1 = loadStyle(
            "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        );
        const owlCSS2 = loadStyle(
            "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
        );

        loadScript("https://code.jquery.com/jquery-3.6.0.min.js")
            .then(() =>
                loadScript(
                    "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
                )
            )
            .then(() => {
                const $ = window.jQuery;

                // Initialize carousel(s)
                $(".video-carousel-1, .video-carousel-2").each(function () {
                    const $carousel = $(this);

                    // Destroy if already initialized
                    if ($carousel.hasClass("owl-loaded")) {
                        $carousel.trigger("destroy.owl.carousel");
                        $carousel
                            .removeClass("owl-loaded owl-hidden")
                            .find(".owl-stage-outer")
                            .children()
                            .unwrap();
                        $carousel.find(".owl-stage, .owl-item").remove();
                    }

                    // Initialize Owl Carousel
                    $carousel.owlCarousel({
                        loop: true,
                        margin: 10,
                        nav: true,
                        navText: [
                            '<span class="owl-prev-custom"><i class="fas fa-chevron-left"></i></span>',
                            '<span class="owl-next-custom"><i class="fas fa-chevron-right"></i></span>',
                        ],
                        responsive: {
                            0: { items: 1 },
                            768: { items: 1 },
                            1024: { items: 1 },
                        },
                    });
                });
            })
            .catch(console.error);

        return () => {
            // Cleanup styles
            if (owlCSS1) document.head.removeChild(owlCSS1);
            if (owlCSS2) document.head.removeChild(owlCSS2);
            // Optionally destroy carousel on unmount
            const $ = window.jQuery;
            if ($) {
                $(".video-carousel-1, .video-carousel-2").trigger("destroy.owl.carousel");
            }
        };
    }, []);


    return (
        <>
            <style>
                {`
                    .custom-before-bg::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: url('/img/shape-slide.png');
                    background-repeat: no-repeat;
                    background-position: center bottom;
                    background-size: cover auto;
                    z-index: 0;
                    border-radius: 20px; /* optional: match container */
                    }

                    .custom-before-bg {
                    position: relative;
                    z-index: 1;
                    }

                    .custom-before-bg > * {
                    position: relative;
                    z-index: 2;
                    }

                    .BookSpotlightCR {
                    margin-top: -450px;
                    }
                    
                    .slidCont {
                        width: 87%; 
                        margin: auto; 
                        z-index: 1;
                        position: relative;
                    }

                    .slidCont::after {
                        position: absolute;
                        content: "";
                        top: 47px;
                        left: -40px;
                        right: 0;
                        height: 100%;
                        width: 108%;
                        background: linear-gradient(180deg, rgba(255, 255, 255, 0.0224) 0%, rgba(255, 255, 255, 0) 100%);
                        border: 1px solid rgba(255, 255, 255, 0.14);
                        filter: drop-shadow(0px 30px 50px rgba(1, 6, 20, 0.12));
                        backdrop-filter: blur(10px);
                        -webkit-backdrop-filter: blur(10px);
                        box-shadow: 0px 30px 50px rgba(1, 6, 20, 0.12);
                        border-radius: 20px;
                        z-index: 0;
                    } 
                    .owl-carousel .owl-item {
                        min-height: 800px;
                    }
                        
                    @media only screen and (max-width: 600px) {
                    .slidCont {
                        width: 100%;
                        margin: auto; 
                        z-index: 1;
                        position: relative;
                    }

                    .slidCont::after {
                        position: absolute;
                        content: "";
                        top: 47px;
                        left: -15px;
                        right: 0;
                        height: 100%;
                        width: 108%;
                    }
                    .BookSpotlightCR {
                        margin-top: -250px !important;
                    }
                    }
            `}
            </style>
            <section className="text-gray-600 sm:px-5 p-1 body-font">
                <div
                    className="container px-5 pt-0 z-0 sm:px-2 mt-10 sm:pb-70 pb-15 mx-auto rounded-lg text-[#000]"
                    style={{
                        background:
                            'linear-gradient(180.21deg, #FFF9F9 -64.58%, rgba(255, 255, 255, 0.1) 115.31%), linear-gradient(90deg, #FFC368 0%, #D569E1 50%, #4164E1 100%)',
                        opacity: 0.9,
                    }}
                >
                    <div className="flex flex-col text-center w-full pt-20 pb-[70px] mb-[15px] rounded-xl">
                        <h1 className="sm:text-6xl text-3xl font-bold title-font mb-1">Course Spotlight</h1>
                        <h3 className="lg:w-full pt-3 sm:px-12 px-0 mx-auto font-light sm:text-3xl leading-relaxed">
                            This Months Spotlighted Courses
                        </h3>
                    </div>
                </div>

                <div class="relative animate-bounce z-0 w-30 h-30 mr-auto"><img className="w-full rounded-lg object-cover object-center " alt="hero" src="/img/hero-shape-1.png" /></div>
                <div className="container sm:px-15 px-5 pt-0 sm:px-2 mx-auto">
                    <div className="carousel-wrapper w-full">
                        <div className="owl-carousel BookSpotlightCR block video-carousel-1">
                            {/* Slide 1 open */}
                            <div className="item slidCont flex flex-wrap -m-4 items-stretch w-[87%]">
                                <div className="p-4 lg:w-1/2 md:w-full">
                                    <div className="h-full flex sm:flex-row flex-col">
                                        <img className="w-full z-1 rounded-lg object-cover object-center mx-auto" alt="hero" src="/img/bs-1.png" />
                                    </div>
                                </div>
                                <div className="p-4 lg:w-1/2 md:w-full ">
                                    <div
                                        className="h-full flex sm:flex-row flex-col custom-before-bg"
                                        style={{
                                            border: "6px solid #fff",
                                            padding: "30px",
                                            position: "relative",
                                            background: "#F1EFF4",
                                            boxShadow: "0px 1px 3px rgba(18, 20, 32, 0.2)",
                                            borderRadius: "20px",
                                        }}
                                    >
                                        <div className="flex-grow">
                                            <h2 className="text-gray-900 text-xl pb-2 font-medium text-[#000]"> Course </h2>
                                            <p className="leading-snug sm:text-2xl text-lg font-bold text-[#000]"> Mindful Mastery: Thriving in a Fast-Paced World</p>
                                            <div className="iBox flex flex-col gap-5 mt-5">
                                                <div className="iconBox">
                                                    <h3 className="sm:text-xl text-base text-[#000]">Creator </h3>
                                                    <p className="mt-2">Sarah Caldwell</p>
                                                </div>
                                                <hr className="border-1 border-dashed text-blue-600/25" />
                                                <div className="iconBox">
                                                    <h3 className="sm:text-xl text-base  text-[#000]">What’s inside the course</h3>
                                                    <p className="mt-2"> Learn quick and powerful mindfulness techniques to reduce stress and boost productivity, no matter your schedule.</p>
                                                </div>
                                                <hr className="border-1 border-dashed text-blue-600/25" />
                                                <div className="iconBox">
                                                    <h3 className="sm:text-xl text-base  text-[#000]">Why we love this course</h3>
                                                    <p className="mt-2">Practical mindfulness solutions that fit seamlessly into busy lives.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Slide 1 close */}

                            {/* Slide 2 open */}
                            <div className="item slidCont flex flex-wrap -m-4 items-stretch w-[87%]">
                                <div className="p-4 lg:w-1/2 md:w-full">
                                    <div className="h-full flex sm:flex-row flex-col">
                                        <img className="w-full z-1 rounded-lg object-cover object-center mx-auto" alt="hero" src="/img/bs-2.png" />
                                    </div>
                                </div>
                                <div className="p-4 lg:w-1/2 md:w-full">
                                    <div
                                        className="h-full flex sm:flex-row flex-col custom-before-bg"
                                        style={{
                                            border: "6px solid #fff",
                                            padding: "30px",
                                            position: "relative",
                                            background: "#F1EFF4",
                                            boxShadow: "0px 1px 3px rgba(18, 20, 32, 0.2)",
                                            borderRadius: "20px",
                                        }}
                                    >
                                        <div className="flex-grow">
                                            <h2 className="text-gray-900 text-xl pb-2 font-medium text-[#000]"> Course </h2>
                                            <p className="leading-snug sm:text-2xl text-lg font-bold text-[#000]">Boosting Business Productivity with AI</p>
                                            <div className="iBox flex flex-col gap-5 mt-5">
                                                <div className="iconBox">
                                                    <h3 className="sm:text-xl text-base text-[#000]">Creator </h3>
                                                    <p className="mt-2">Kevin Matthews</p>
                                                </div>
                                                <hr className="border-1 border-dashed text-blue-600/25" />
                                                <div className="iconBox">
                                                    <h3 className="sm:text-xl text-base  text-[#000]">What’s inside the course</h3>
                                                    <p className="mt-2">iscover how AI tools can streamline daily tasks, enhance team collaboration, and drive business growth.</p>
                                                </div>
                                                <hr className="border-1 border-dashed text-blue-600/25" />
                                                <div className="iconBox">
                                                    <h3 className="sm:text-xl text-base  text-[#000]">Why we love this course</h3>
                                                    <p className="mt-2">This course breaks down complex AI tools into simple, actionable steps anyone can use.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Slide 2 open */}

                            {/* Slide 3 open */}
                            <div className="item slidCont flex flex-wrap -m-4 items-stretch w-[87%]">
                                <div className="p-4 lg:w-1/2 md:w-full">
                                    <div className="h-full flex sm:flex-row flex-col">
                                        <img className="w-full z-1 rounded-lg object-cover object-center mx-auto" alt="hero" src="/img/bs-3.png" />
                                    </div>
                                </div>
                                <div className="p-4 lg:w-1/2 md:w-full">
                                    <div
                                        className="h-full flex sm:flex-row flex-col custom-before-bg"
                                        style={{
                                            border: "6px solid #fff",
                                            padding: "30px",
                                            position: "relative",
                                            background: "#F1EFF4",
                                            boxShadow: "0px 1px 3px rgba(18, 20, 32, 0.2)",
                                            borderRadius: "20px",
                                        }}
                                    >
                                        <div className="flex-grow">
                                            <h2 className="text-gray-900 text-xl pb-2 font-medium text-[#000]"> Course </h2>
                                            <p className="leading-snug sm:text-2xl text-lg font-bold text-[#000]">Empowered Strength: A Wellness Journey for Women</p>
                                            <div className="iBox flex flex-col gap-5 mt-5">
                                                <div className="iconBox">
                                                    <h3 className="sm:text-xl text-base text-[#000]">Creator </h3>
                                                    <p className="mt-2"> Lisa Hernandez</p>
                                                </div>
                                                <hr className="border-1 border-dashed text-blue-600/25" />
                                                <div className="iconBox">
                                                    <h3 className="sm:text-xl text-base  text-[#000]">What’s inside the course</h3>
                                                    <p className="mt-2">A comprehensive guide to strength training, nutrition, and mental well-being, all designed to uplift and empower women.</p>
                                                </div>
                                                <hr className="border-1 border-dashed text-blue-600/25" />
                                                <div className="iconBox">
                                                    <h3 className="sm:text-xl text-base  text-[#000]">Why we love this course</h3>
                                                    <p className="mt-2">Inspires women to embrace both physical and mental strength.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Slide 3 open */}

                            {/* Slide 4 open */}
                            <div className="item slidCont flex flex-wrap -m-4 items-stretch w-[87%]">
                                <div className="p-4 lg:w-1/2 md:w-full">
                                    <div className="h-full flex sm:flex-row flex-col">
                                        <img className="w-full z-1 rounded-lg object-cover object-center mx-auto" alt="hero" src="/img/bs-4.jpg" />
                                    </div>
                                </div>
                                <div className="p-4 lg:w-1/2 md:w-full">
                                    <div
                                        className="h-full flex sm:flex-row flex-col custom-before-bg"
                                        style={{
                                            border: "6px solid #fff",
                                            padding: "30px",
                                            position: "relative",
                                            background: "#F1EFF4",
                                            boxShadow: "0px 1px 3px rgba(18, 20, 32, 0.2)",
                                            borderRadius: "20px",
                                        }}
                                    >
                                        <div className="flex-grow">
                                            <h2 className="text-gray-900 text-xl pb-2 font-medium text-[#000]"> Course </h2>
                                            <p className="leading-snug sm:text-2xl text-lg font-bold text-[#000]">Confident Classroom: Helping Shy Students Thrive</p>
                                            <div className="iBox flex flex-col gap-5 mt-5">
                                                <div className="iconBox">
                                                    <h3 className="sm:text-xl text-base text-[#000]">Creator </h3>
                                                    <p className="mt-2">James Bennett</p>
                                                </div>
                                                <hr className="border-1 border-dashed text-blue-600/25" />
                                                <div className="iconBox">
                                                    <h3 className="sm:text-xl text-base  text-[#000]">What’s inside the course</h3>
                                                    <p className="mt-2">Discover effective methods to support shy and introverted students in large classroom settings, helping them build confidence and engage with peers.</p>
                                                </div>
                                                <hr className="border-1 border-dashed text-blue-600/25" />
                                                <div className="iconBox">
                                                    <h3 className="sm:text-xl text-base  text-[#000]">Why we love this course</h3>
                                                    <p className="mt-2">EgeProvides practical tools to help educators create inclusive and supportive environments.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Slide 4 open */}

                        </div>
                    </div>
                    <div class="absolute top-[180%] right-0 animate-bounce w-30 h-30 z-0 ml-auto"><img className="w-full z-9 rounded-lg object-cover object-center " alt="hero" src="/img/hero-shape-2.png" /></div>
                </div>
            </section>
        </>
    )
}

export default BookSpotlight