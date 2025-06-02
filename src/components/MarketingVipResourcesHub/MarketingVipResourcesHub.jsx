import React, { useState, useEffect } from 'react';

const MarketingVipResourcesHub = () => {

    //Ebook Open
    const [modalOpen, setModalOpen] = useState(false);
    const [pdfUrl, setPdfUrl] = useState('');

    // Open modal with proper preview link (Google Drive detection)
    const openModal = (link) => {
        const match = link.match(/\/d\/([a-zA-Z0-9_-]+)\//);
        const fileId = match ? match[1] : null;

        let previewLink = link;
        if (fileId) {
            previewLink = `https://drive.google.com/file/d/${fileId}/preview`;
        }

        setPdfUrl(previewLink);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setPdfUrl('');
    };

    // Prevent background scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = modalOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [modalOpen]);

    // Handle download button click: trigger download programmatically
    const getDownloadLink = (link) => {
        const match = link.match(/\/d\/([a-zA-Z0-9_-]+)\//);
        const fileId = match ? match[1] : null;
        return fileId ? `https://drive.google.com/uc?export=download&id=${fileId}` : link;
    };

    const EBooks = [
        {
            title: "Affiliate Marketing",
            subtitle: "Tap to read online!",
            image: "/img/Affiliate-Marketing-img.webp",
            link: "https://drive.google.com/file/d/15T4VajWXJvyFnas_h_x2ICCfSGW6OxAl/preview",
        },
        {
            title: "Captivate Your Audience",
            subtitle: "Tap to read online!",
            image: "/img/Captivate-Your-Audience-img.webp",
            link: "https://drive.google.com/file/d/1BWMttj-Mo5sT_k0DNYuWcxd51IwyKu6H/preview",
        },
        {
            title: "Copywriting Expert",
            subtitle: "Tap to read online!",
            image: "/img/Copywriting-Expert-MLA-img.webp",
            link: "https://drive.google.com/file/d/1JVNryEkhJWmC4O6-1wd8jiMi51Z0LQDi/preview",
        },
        {
            title: "Copywriting Influence",
            subtitle: "Tap to read online!",
            image: "/img/Copywriting-Influence-MLA-img.webp",
            link: "https://drive.google.com/file/d/1ehaZPKYXfvn9GFlWUUTEbciyoQBdM2Hg/preview",
        },
        {
            title: "Direct Messaging Strategy",
            subtitle: "Tap to read online!",
            image: "/img/Direct-Messaging-Strategy-MLA-img.webp",
            link: "https://drive.google.com/file/d/1ZzDL9lt7AJKLJMRcX7KpJX_wqsA1Dovc/preview",
        },
        {
            title: "Email Marketing Expertise",
            subtitle: "Tap to read online!",
            image: "/img/Email-Marketing-Expertise-MLA-img.webp",
            link: "https://drive.google.com/file/d/1PyucQnf8eNf9wxx2D0cFhUoSI3P1BlYq/preview",
        },
        {
            title: "Email Marketing Success",
            subtitle: "Tap to read online!",
            image: "/img/Email-Marketing-Success-MLA-img.webp",
            link: "https://drive.google.com/file/d/1jKMu9RhweS8Pt9FN-xjSJDNxCIVU_zj7/preview",
        },
        {
            title: "Facebook Marketing Unleashed",
            subtitle: "Tap to read online!",
            image: "/img/Facebook-Marketing-Unleashed-MLA-img.webp",
            link: "https://drive.google.com/file/d/1ED7waAnwWrdc1Ne9d0m0nrfohku5JgK5/preview",
        },
        {
            title: "High Ticket Authority",
            subtitle: "Tap to read online!",
            image: "/img/High-Ticket-Authority-MLA-img.webp",
            link: "https://drive.google.com/file/d/1boG4hQfaHy1Ijap4ivOFIR4l4NVcmh2e/preview",
        },
        {
            title: "High Ticket Authority Checklist",
            subtitle: "Tap to read online!",
            image: "/img/High-Ticket-Authority-Checklist-MLA.jpg",
            link: "https://drive.google.com/file/d/1p0PtPAw4fnnLKuoeBkMnp2lccfBSGqjO/preview",
        },
        {
            title: "High Ticket Clients Secrets",
            subtitle: "Tap to read online!",
            image: "/img/High-Ticket-Clients-Secrets-MLA-img.webp",
            link: "https://drive.google.com/file/d/12SCWv18HtwdMiqeIPJm2RWOmuB3BdFKn/preview",
        },
        {
            title: "Insta Profit Magnet",
            subtitle: "Tap to read online!",
            image: "/img/Insta-Profit-Magnet-MLA-img.jpg",
            link: "https://drive.google.com/file/d/1CwHDu6M358rTEZORrx5nAAYtxeXPL1Co/preview",
        },
        {
            title: "The Ultimate Online Business Blueprint",
            subtitle: "Tap to read online!",
            image: "/img/Part-4_-Marketing-MLA-img.webp",
            link: "https://drive.google.com/file/d/1G0Xo8kDNV0VcIWszmRl6knFLNRxuk8Xf/preview",
        },
        {
            title: "Social Media Marketing Made Simple",
            subtitle: "Tap to read online!",
            image: "/img/Social-Media-Marketing-Made-Simple-MLA-img.jpg",
            link: "https://drive.google.com/file/d/14Bi4hy2jsfjC_bnMP9KbfNwkMs-7nJoM/preview",
        },
        {
            title: "Social Media Marketing Revolution",
            subtitle: "Tap to read online!",
            image: "/img/Social-Media-Marketing-Revolution-MLA-img.webp",
            link: "https://drive.google.com/file/d/1g_IVG7oGlOxFxZNoVgFAomeBeXmSyxe_/preview",
        },
        {
            title: "Solopreneur Success",
            subtitle: "Tap to read online!",
            image: "/img/Solopreneur-Success-MLA-img.webp",
            link: "https://drive.google.com/file/d/1iQOwi2AR2xi-VyFJFowFpESaXGGm1rFu/preview",
        },
        {
            title: "Supercharge Your Online Business",
            subtitle: "Tap to read online!",
            image: "/img/Supercharge-Your-Online-Business-MLA-img.webp",
            link: "https://drive.google.com/file/d/14U-pQWrR5YFAxVIVdbyxgGTgHHuuWESR/preview",
        },
        {
            title: "The DALL-E 2 Advantage",
            subtitle: "Tap to read online!",
            image: "/img/The-DALL-E-2-Advantage-MLA-img.jpg",
            link: "https://drive.google.com/file/d/14OXzVqBZzW0cI6V904hLFVA5I1K1-M9k/preview",
        },
        {
            title: "Tiktok Marketing",
            subtitle: "Tap to read online!",
            image: "/img/Tiktok-Marketing-MLA-img.webp",
            link: "https://drive.google.com/file/d/1heVXzv_8WMPPUYRcFjeyshtiiXlBMx1I/preview",
        },
        {
            title: "Top 10 High Ticket Resources",
            subtitle: "Tap to read online!",
            image: "/img/Top-10-High-Ticket-Resources-MLA-img.webp",
            link: "https://drive.google.com/file/d/1RdC8TXypZXVNuzL-BqXd-WXnnqpYQjNg/preview",
        },
        {
            title: "Voices of the Future",
            subtitle: "Tap to read online!",
            image: "/img/Voices-of-the-Future-MLA-img.webp",
            link: "https://drive.google.com/file/d/1gbjyZ-s-2qRjaYofBuo6shtu39JqMMxb/preview",
        },
        {
            title: "YouTube Authority",
            subtitle: "Tap to read online!",
            image: "/img/YouTube-Authority-MLA.webp",
            link: "https://drive.google.com/file/d/1DVC5TDTg2bQR3czjXif6oehEYHO4sAnw/preview",
        },
        {
            title: "YouTube Success Step By Step",
            subtitle: "Tap to read online!",
            image: "/img/YouTube-Success-Step-By-Step-MLA.webp",
            link: "https://drive.google.com/file/d/1KpzyXCydk_nmzKYY-6rTYxmysXNMNacL/preview",
        },

    ];

    // For Ebook Close

    // For Video Open
    const [videoPopup, setVideoPopup] = useState(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState('');

    const openVideoPopup = (url) => {
        setCurrentVideoUrl(url);
        setVideoPopup(true);
    };

    const closeVideoPopup = () => {
        setCurrentVideoUrl('');
        setVideoPopup(false);
    };

    const highTicketVideos = [
        {
            bgLink: '/video/High_Ticket_Advanced_Videos/videoBg/v1.webp',
            vdLink: '/video/High_Ticket_Advanced_Videos/1-Why-Go-For-High-Paying-Clients.mp4',
        },
        {
            bgLink: '/video/High_Ticket_Advanced_Videos/videoBg/v2.webp',
            vdLink: '/video/High_Ticket_Advanced_Videos/2-What-it-Takes-to-Close-High-Paying-Clients.mp4',
        },
        {
            bgLink: '/video/High_Ticket_Advanced_Videos/videoBg/v3.webp',
            vdLink: '/video/High_Ticket_Advanced_Videos/3-How-to-Position-Yourself-as an-Expert.mp4',
        },
        {
            bgLink: '/video/High_Ticket_Advanced_Videos/videoBg/v4.webp',
            vdLink: '/video/High_Ticket_Advanced_Videos/4-How-to-Identify-and-Qulify-Clients.mp4',
        },
        {
            bgLink: '/video/High_Ticket_Advanced_Videos/videoBg/v5.webp',
            vdLink: '/video/High_Ticket_Advanced_Videos/5-The-Sales-Process.mp4',
        },
        {
            bgLink: '/video/High_Ticket_Advanced_Videos/videoBg/v6.webp',
            vdLink: '/video/High_Ticket_Advanced_Videos/6-Sales-Objections.mp4',
        },
        {
            bgLink: '/video/High_Ticket_Advanced_Videos/videoBg/v7.webp',
            vdLink: '/video/High_Ticket_Advanced_Videos/7-How-to-Price-Your-Product.mp4',
        },
        {
            bgLink: '/video/High_Ticket_Advanced_Videos/videoBg/v8.webp',
            vdLink: '/video/High_Ticket_Advanced_Videos/8-How-to-Deliver-After-Payment-is-Made.mp4',
        },
    ];

    const youtubeAuthorityVideos = [
        {
            bgLink: '/video/YouTube_Ads_Videos/videoBg/v1.webp',
            vdLink: '/video/YouTube_Ads_Videos/video01.mp4',
        },
        {
            bgLink: '/video/YouTube_Ads_Videos/videoBg/v2.webp',
            vdLink: '/video/YouTube_Ads_Videos/video02.mp4',
        },
        {
            bgLink: '/video/YouTube_Ads_Videos/videoBg/v3.webp',
            vdLink: '/video/YouTube_Ads_Videos/video03.mp4',
        },
        {
            bgLink: '/video/YouTube_Ads_Videos/videoBg/v4.webp',
            vdLink: '/video/YouTube_Ads_Videos/video04.mp4',
        },
        {
            bgLink: '/video/YouTube_Ads_Videos/videoBg/v5.webp',
            vdLink: '/video/YouTube_Ads_Videos/video05.mp4',
        },
        {
            bgLink: '/video/YouTube_Ads_Videos/videoBg/v6.webp',
            vdLink: '/video/YouTube_Ads_Videos/video06.mp4',
        },
        {
            bgLink: '/video/YouTube_Ads_Videos/videoBg/v7.webp',
            vdLink: '/video/YouTube_Ads_Videos/video07.mp4',
        },
        {
            bgLink: '/video/YouTube_Ads_Videos/videoBg/v8.webp',
            vdLink: '/video/YouTube_Ads_Videos/video08.mp4',
        },
        {
            bgLink: '/video/YouTube_Ads_Videos/videoBg/v9.webp',
            vdLink: '/video/YouTube_Ads_Videos/video09.mp4',
        },
        {
            bgLink: '/video/YouTube_Ads_Videos/videoBg/v10.webp',
            vdLink: '/video/YouTube_Ads_Videos/video10.mp4',
        },
    ];

    // For Video

    useEffect(() => {
        const loadScript = (src) =>
            new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = src;
                script.async = true;
                script.onload = resolve;
                script.onerror = reject;
                document.body.appendChild(script);
            });

        const loadStyle = (href) => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            document.head.appendChild(link);
            return link;
        };

        // Load Owl Carousel CSS
        const owlCSS1 = loadStyle('https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css');
        const owlCSS2 = loadStyle('https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css');

        // Load jQuery and then Owl Carousel JS in order
        loadScript('https://code.jquery.com/jquery-3.6.0.min.js')
            .then(() => loadScript('https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js'))
            .then(() => loadScript('https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js'))

            .then(() => {
                const $ = window.jQuery;

                // Accordion
                $('.accordion-header').off('click').on('click', function () {
                    const $header = $(this);
                    const $accordion = $header.parent();
                    const $content = $accordion.find('.accordion-content');
                    const $icon = $header.find('.accordion-icon');
                    const isOpen = $content.css('max-height') !== '0px' && $content.css('max-height') !== 'none';

                    $('.accordion-content').css('max-height', '0px');
                    $('.accordion-icon').text('+');

                    if (!isOpen) {
                        $content.css('max-height', $content[0].scrollHeight + 'px');
                        $icon.text('−');
                    }
                });

                $(window).off('resize.accordion').on('resize.accordion', function () {
                    $('.accordion-content').each(function () {
                        const $content = $(this);
                        if ($content.css('max-height') !== '0px' && $content.css('max-height') !== 'none') {
                            $content.css('max-height', $content[0].scrollHeight + 'px');
                        }
                    });
                });

                //OwlCarousel
                $(document).ready(function () {
                    const $carousels = $('.video-carousel-1, .video-carousel-2');

                    $carousels.each(function () {
                        const $carousel = $(this);

                        // Destroy Owl Carousel if already initialized
                        if ($carousel.hasClass('owl-loaded')) {
                            $carousel.trigger('destroy.owl.carousel');
                            $carousel.removeClass('owl-loaded owl-hidden');
                            $carousel.find('.owl-stage-outer').children().unwrap(); // unwrap stage
                            $carousel.find('.owl-stage, .owl-item').remove(); // clean owl DOM
                        }

                        // Re-initialize Owl Carousel
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
                                768: { items: 2 },
                                1024: { items: 3 },
                            },
                        });
                    });
                });

            })
            .catch(console.error);

        return () => {
            document.head.removeChild(owlCSS1);
            document.head.removeChild(owlCSS2);
            window?.jQuery?.(window).off('resize.accordion');
        };

    }, []);


    return (
        <>
            <section className="text-gray-600  body-font overflow-hidden">
                <div className="container px-5 pt-10 sm:px-2 mx-auto">
                    <div className="grad-bg flex flex-col text-center w-full sm:p-30 p-10 mb-15 rounded-xl">
                        <h1 className="sm:text-6xl text-4xl font-bold title-font mb-2 text-white">Marketing Vip Resources Hub
                        </h1>
                        <p className="lg:w-2/2 pt-3 sm:px-12 px-0 mx-auto font-light text-white sm:text-lg leading-relaxed">Your ultimate
                            toolkit for turning your Mini Lessons Academy courses and books into buzzworthy successes! Dive into exclusive marketing
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
                                    <p className="font-light text-gray-800 sm:text-lg leading-relaxed pt-2">Explore comprehensive guides and strategies to help you market and monetize the content you’ve created, offering actionable steps for maximizing your profits.</p>
                                    <div className="mt-3 h-1 w-20 rounded-full transition-all duration-300 bg-gray-200 group-hover:bg-blue-200"> </div>
                                </div>
                                <span className="accordion-icon text-3xl transition-opacity duration-300">+</span>
                            </button>
                            <div className="accordion-content overflow-hidden max-h-0 transition-all duration-500 ease-in-out">
                                <div className="container px-5 py-10 mx-auto">
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                        {EBooks.map((ebook, index) => (
                                            <div
                                                key={index}
                                                className="border flex flex-col p-2 relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer group ring-1 ring-blue-500 bg-gradient-to-br from-blue-50 to-white"
                                            >
                                                <div className="flex flex-col items-center justify-center text-center mb-4">
                                                    <h3>{ebook.title}</h3>
                                                    <h3 className="rounded-lg py-2 px-4 mt-2 border-gray-200 border-1 bg-white">
                                                        {ebook.subtitle}
                                                    </h3>
                                                </div>
                                                <img
                                                    onClick={() => openModal(ebook.link)}
                                                    className="lg:w-1/1 mb-2 object-cover object-center mx-auto rounded-xl cursor-pointer transition-transform"
                                                    alt={ebook.title}
                                                    src={ebook.image}
                                                />

                                                <a
                                                    href={getDownloadLink(ebook.link)}
                                                    className="lg:w-1/1 md:px-5 px-2.5 py-3 content-center rounded-lg font-medium text-sm text-center gap-2 transition-all duration-200 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-[0_4px_10px_-3px_rgba(124,58,237,0.5)]"

                                                >
                                                    Download
                                                </a>
                                            </div>
                                        ))}
                                    </div>

                                    {modalOpen && (
                                        <div
                                            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                                            onClick={closeModal}
                                        >
                                            <div
                                                className="bg-white rounded-lg overflow-hidden shadow-lg max-w-4xl w-full h-[80vh] sm:h-[70vh] relative"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <button
                                                    className="absolute closeBtn top-2 right-2 text-red-500 text-xl z-10"
                                                    onClick={closeModal}
                                                >
                                                    &times;
                                                </button>
                                                <iframe
                                                    src={pdfUrl}
                                                    className="w-full h-full"
                                                    frameBorder="0"
                                                    title="PDF Preview"
                                                ></iframe>
                                                <p className="text-center text-sm p-2 bg-gray-50">
                                                    Can’t view the PDF?{' '}
                                                    <a
                                                        href={pdfUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-600 underline"
                                                    >
                                                        Download it here
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    )}


                                </div>
                            </div>
                        </div>

                        {/* <!-- Accordion Item Two - Marketing Funnels --> */}
                        <div
                            className="accordion relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer group border border-gray-200 bg-white">
                            <button type="button"
                                className="accordion-header w-full text-left p-5 flex items-center justify-between cursor-pointer transition-all">
                                <div className="title">
                                    <h2 className="text-2xl font-semibold mb-2 transition-colors"> Marketing Funnels</h2>
                                    <p className="font-light text-gray-800 sm:text-lg leading-relaxed pt-2">Download pre-built, high-converting templates that help you capture leads and boost course enrollments—no guesswork needed.</p>
                                    <div
                                        className="mt-3 h-1 w-20 rounded-full transition-all duration-300 bg-gray-200 group-hover:bg-blue-200">
                                    </div>
                                </div>
                                <span className="accordion-icon text-3xl transition-opacity duration-300">+</span>
                            </button>
                            <div className="accordion-content overflow-hidden max-h-0 transition-all duration-500 ease-in-out">
                                <div className="container px-5 py-10 mx-auto">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                                        <a href='https://app.clickfunnels.com/users/sign_in' target='_blank' className="border flex flex-col p-2 relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer group ring-1 ring-blue-500 bg-gradient-to-br from-blue-50 to-white">
                                            <img className="lg:w-1/1 mb-2 object-cover objet-center mx-auto rounded-xl" alt="hero" src="/img/mf-1-768x432.jpg" />
                                            <h3 className="text-center text-l sm:text-2xl font-semibold mb-2 transition-colors">VIP Lead Gen Funnel</h3>
                                        </a>

                                        <a href='https://app.clickfunnels.com/users/sign_in' target='_blank' className="border flex flex-col p-2 relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer group ring-1 ring-blue-500 bg-gradient-to-br from-blue-50 to-white">
                                            <img className="lg:w-1/1 mb-3 object-cover objet-center mx-auto rounded-xl" alt="hero" src="/img/mf-2-768x432.jpg" />
                                            <h3 className="text-center text-l sm:text-2xl font-semibold mb-2 transition-colors">VIP Video Sales Funnel</h3>
                                        </a>

                                        <a href='https://app.clickfunnels.com/users/sign_in' target='_blank' className="border flex flex-col p-2 relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer group ring-1 ring-blue-500 bg-gradient-to-br from-blue-50 to-white">
                                            <img className="lg:w-1/1 mb-3 object-cover objet-center mx-auto rounded-xl" alt="hero" src="/img/mf-3-768x432.jpg" />
                                            <h3 className="text-center text-l sm:text-2xl font-semibold mb-2 transition-colors">VIP Multi-Product Sales Funnel</h3>
                                        </a>
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
                                    <div className="flex sm:flex-row flex-col gap-4">
                                        {/* <!-- 30% Width --> */}
                                        <div className="w-[100%] sm:w-[20%]  text-3xl font-semibold mb-2 transition-colors">
                                            High Ticket Videos
                                        </div>
                                        {/* <!-- 70% Width --> */}
                                        <div className="w-[100%] sm:w-[80%]">
                                            {/* <!-- Owl Carousel --> */}
                                            <div className="carousel-wrapper w-full overflow-hidden relative">
                                                <div className="owl-carousel video-carousel-1">
                                                    {highTicketVideos.map((video, index) => (
                                                        <div
                                                            key={index}
                                                            className="item cursor-pointer relative rounded-lg border border-gray-200"
                                                            style={{
                                                                backgroundImage: `url(${video.bgLink})`,
                                                                backgroundSize: 'cover',
                                                                backgroundPosition: 'center',
                                                            }}
                                                            data-videolink={video.vdLink}
                                                            onClick={() => openVideoPopup(video.vdLink)}
                                                        >
                                                            <i className="fas fa-play plyIcon absolute top-2 left-2 text-white text-xl z-10"></i>
                                                            <video muted className="w-full opacity-0 pointer-events-none">
                                                                <source src={video.vdLink} type="video/mp4" />
                                                            </video>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {videoPopup && (
                                                <div
                                                    className="video-lightbox fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                                                    onClick={closeVideoPopup}
                                                >
                                                    <div
                                                        className="bg-white rounded-xl overflow-hidden shadow-lg max-w-4xl w-full h-[80vh] relative"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <button
                                                            className="absolute top-2 right-2 text-red-500 text-xl"
                                                            onClick={closeVideoPopup}
                                                        >
                                                            &times;
                                                        </button>
                                                        <iframe
                                                            src={currentVideoUrl}
                                                            className="w-full h-full"
                                                            frameBorder="0"
                                                            allow="autoplay"
                                                            allowFullScreen
                                                            title="Video Popup"
                                                        ></iframe>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex sm:flex-row flex-col gap-4">
                                        <div className="w-[100%] sm:w-[20%]  text-3xl font-semibold mb-2 transition-colors">Youtube Authority </div>
                                        <div className="w-[100%] sm:w-[80%]">
                                            {/* <!-- Owl Carousel --> */}
                                            <div className="carousel-wrapper w-full overflow-hidden relative">
                                                <div className="owl-carousel video-carousel-1">
                                                    {youtubeAuthorityVideos.map((video, index) => (
                                                        <div
                                                            key={index}
                                                            className="item cursor-pointer relative rounded-lg border border-gray-200"
                                                            style={{
                                                                backgroundImage: `url(${video.bgLink})`,
                                                                backgroundSize: 'cover',
                                                                backgroundPosition: 'center',
                                                            }}
                                                            data-videolink={video.vdLink}
                                                            onClick={() => openVideoPopup(video.vdLink)}
                                                        >
                                                            <i className="fas fa-play plyIcon absolute top-2 left-2 text-white text-xl z-10"></i>
                                                            <video muted loop autoplay preload="auto" playsinline="true" className="w-full opacity-0 pointer-events-none">
                                                                <source src={video.vdLink} type="video/mp4" />
                                                            </video>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Accordion Item Four - Slideshow Presentations--> */}
                        <div
                            className="accordion relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer group border border-gray-200 bg-white">
                            <button type="button"
                                className="accordion-header w-full text-left p-5 flex items-center justify-between cursor-pointer transition-all">
                                <div className="title">
                                    <h2 className="text-2xl font-semibold mb-2 transition-colors">Slideshow Presentations</h2>
                                    <p className="font-light text-gray-800 sm:text-lg leading-relaxed pt-2">Watch engaging
                                        slideshows packed with valuable marketing tips and strategies to help you promote your
                                        courses and books more effectively.</p>
                                    <div
                                        className="mt-3 h-1 w-20 rounded-full transition-all duration-300 bg-gray-200 group-hover:bg-blue-200">
                                    </div>
                                </div>
                                <span className="accordion-icon text-3xl transition-opacity duration-300">+</span>
                            </button>
                            <div className="accordion-content overflow-hidden max-h-0 transition-all duration-500 ease-in-out">
                                <div className="container px-5 py-10 mx-auto">
                                    <div className="xl:w-1/1 md:w-1/1">
                                        <h2 className="text-l sm:text-2xl font-semibold mb-2 transition-colors mb-4 text-center">YouTube Authority</h2>
                                        <iframe src={`https://view.officeapps.live.com/op/embed.aspx?src=https://purehomeprofits.com/wp-content/uploads/2024/09/YouTube-Authority.pptx`} width="100%" height="600px" frameBorder="0"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Accordion Item Five - Case Studies --> */}
                        <div
                            className="accordion relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer group border border-gray-200 bg-white">
                            <button type="button"
                                className="accordion-header w-full text-left p-5 flex items-center justify-between cursor-pointer transition-all">
                                <div className="title">
                                    <h2 className="text-2xl font-semibold mb-2 transition-colors">Case Studies</h2>
                                    <p className="font-light text-gray-800 sm:text-lg leading-relaxed pt-2">Discover real-world
                                        examples of how creators have successfully marketed their courses and books, turning
                                        their efforts into sustainable income.</p>
                                    <div
                                        className="mt-3 h-1 w-20 rounded-full transition-all duration-300 bg-gray-200 group-hover:bg-blue-200">
                                    </div>
                                </div>
                                <span className="accordion-icon text-3xl transition-opacity duration-300">+</span>
                            </button>

                            <div className="accordion-content overflow-hidden max-h-0 transition-all duration-500 ease-in-out">
                                <div className="container px-5 py-10 mx-auto">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <a href='https://minilessonsacademy.com/case-study-1-empowering-a-health-fitness-coach-to-scale-her-business-with-mini-lessons-academy/' target='_blank' className="border flex flex-col p-2 relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer group ring-1 ring-blue-500 bg-gradient-to-br from-blue-50 to-white">
                                            <img className="lg:w-1/1 mb-2 object-cover objet-center mx-auto rounded-xl"
                                                alt="hero" src="/img/Emma.png" />
                                            <h3 className="text-center text-l sm:text-2xl font-semibold mb-2 transition-colors">Emma's Health and Fitness</h3>
                                        </a>
                                        <a href='https://minilessonsacademy.com/case-study-2-how-a-business-consultant-expanded-his-reach-with-mini-lessons-academy/' target='_blank' className="border flex flex-col p-2 relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer group ring-1 ring-blue-500 bg-gradient-to-br from-blue-50 to-white">
                                            <img className="lg:w-1/1  mb-2 object-cover objet-center mx-auto rounded-xl" alt="hero" src="/img/Daniel.png" />
                                            <h3 className="text-center text-l sm:text-2xl font-semibold mb-2 transition-colors">Daniel's Business Consultancy</h3>
                                        </a>
                                        <a href='https://minilessonsacademy.com/case-study-3-a-teacher-transforms-education-with-mini-lessons-academy/' target='_blank' className="border flex flex-col p-2 relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer group ring-1 ring-blue-500 bg-gradient-to-br from-blue-50 to-white">
                                            <img className="lg:w-1/1  mb-2 object-cover objet-center mx-auto rounded-xl" alt="hero" src="/img/Samantha.png" />
                                            <h3 className="text-center text-l sm:text-2xl font-semibold mb-2 transition-colors">Samantha's Teaching</h3>
                                        </a>
                                        <a href='https://minilessonsacademy.com/case-study-4-transforming-passion-into-purpose-a-spiritual-guides-journey-with-mini-lessons-academy/' target='_blank' className="border flex flex-col p-2 relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer group ring-1 ring-blue-500 bg-gradient-to-br from-blue-50 to-white">
                                            <img className="lg:w-1/1  mb-2 object-cover objet-center mx-auto rounded-xl" alt="hero" src="/img/Liam.png" />
                                            <h3 className="text-center text-l sm:text-2xl font-semibold mb-2 transition-colors">Liam's Spiritual Workshops</h3>
                                        </a>
                                        <a href='https://minilessonsacademy.com/case-study-5-overcoming-burnout-how-a-psychologist-reignited-her-passion-with-mini-lessons-academy/' target='_blank' className="border flex flex-col p-2 relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer group ring-1 ring-blue-500 bg-gradient-to-br from-blue-50 to-white">
                                            <img className="lg:w-1/1  mb-2 object-cover objet-center mx-auto rounded-xl" alt="hero" src="/img/Dr-Michelle.png" />
                                            <h3 className="text-center text-l sm:text-2xl font-semibold mb-2 transition-colors">Michelle's Doctoral Research</h3>
                                        </a>
                                        <a href='https://minilessonsacademy.com/case-study-6-how-a-tech-startup-enhanced-customer-education-with-mini-lessons-academy/' target='_blank' className="border flex flex-col p-2 relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer group ring-1 ring-blue-500 bg-gradient-to-br from-blue-50 to-white">
                                            <img className="lg:w-1/1  mb-2 object-cover objet-center mx-auto rounded-xl" alt="hero" src="/img/Elevate-Solutions-e1731609374373-768x765.png" />
                                            <h3 className="text-center text-l sm:text-2xl font-semibold mb-2 transition-colors">Startup Kickstarting</h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section >

        </>

    );
}

export default MarketingVipResourcesHub;