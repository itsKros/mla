import React from 'react'

function AIBook() {
    return (
        <>
            <section className="text-gray-600 pb-10 body-font overflow-hidden bg-[url('/img/deco-back.webp')] bg-cover bg-center">
                <div className="container px-5 py-24 max-w-7/8 mx-auto">
                    <div className="flex flex-wrap -m-12 sm:px-0 px-5">
                        <div className="p-0 sm:p-5 lg:w-2/3 md:w-1/2 flex flex-col items-center">
                            <h2 className="sm:text-5xl text-2xl title-font font-extrabold text-gray-900 mt-4 mb-1 sm:mb-4">Your A.I. Assistant, Andy</h2>
                            <h3 className="sm:text-xl text-sm title-font font-extrabold text-gray-900 mt-4 mb-4 ">👋 Say hello to Andy, your friendly A.I. assistant!</h3>
                            <p className="text-1xl text-center">Just type in a few words about what you need, and Andy's smart enough to give you awesome results for your project. Not quite what you wanted? No worries! Just ask again, and Andy will try with new ideas.</p>

                            <div class="flex flex-wrap mt-5 lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 text-[#000]">
                                <div class="p-2 sm:w-1/2 w-full">
                                    <div class="bg-gray-100 rounded flex p-4 items-center border-1 rounded-lg border-indigo-200 border-opacity-50">
                                        <img className="sm:lg:w-1/10 w-1/8 mr-3" src="/img/icons8-program.png" alt="" />
                                        <span class="title-font font-medium">Super Easy to Use</span>
                                    </div>
                                </div>
                                <div class="p-2 sm:w-1/2 w-full">
                                    <div class="bg-gray-100 rounded flex p-4 items-center border-1 rounded-lg border-indigo-200 border-opacity-50">
                                        <img className="sm:lg:w-1/10 w-1/8 mr-3" src="/img/icons8-tool-100.png" alt="" />
                                        <span class="title-font font-medium">Tools for Every Step</span>
                                    </div>
                                </div>
                            </div>

                            <h3 className="w-1/1 sm:text-2xl text-2xl font-extrabold text-center text-gray-900 mt-8 mb-4">Now With Andy You Can:</h3>
                            <ul className="pb-5 flex flex-col sm:flex-row flex-wrap gap-[10px] text-gray-600 justify-center text-sm text-[#000]">
                                <li class="bg-gray-100 rounded flex p-4 items-center border-1 rounded-lg border-indigo-200 text-[#000] border-opacity-50">Keyword Research: Generate list of keywords for Search Engines</li>
                                <li class="bg-gray-100 rounded flex p-4 items-center border-1 rounded-lg border-indigo-200 text-[#000] border-opacity-50">Research the product/offer you're interested in building</li>
                                <li class="bg-gray-100 rounded flex p-4 items-center border-1 rounded-lg border-indigo-200 text-[#000] border-opacity-50">Create Names for your offer/product</li>
                                <li class="bg-gray-100 rounded flex p-4 items-center border-1 rounded-lg border-indigo-200 text-[#000] border-opacity-50">Create Sales Copy for the Product or Offer</li>
                                <li class="bg-gray-100 rounded flex p-4 items-center border-1 rounded-lg border-indigo-200 text-[#000] border-opacity-50">Create Sales Copy for Opt In Form/Page</li>
                                <li class="bg-gray-100 rounded flex p-4 items-center border-1 rounded-lg border-indigo-200 text-[#000] border-opacity-50">Create Sales Copy for Auto Responder or Email Campaigns</li>
                                <li class="bg-gray-100 rounded flex p-4 items-center border-1 rounded-lg border-indigo-200 text-[#000] border-opacity-50">Create Copy for your Offer/Product/Site</li>
                                <li class="bg-gray-100 rounded flex p-4 items-center border-1 rounded-lg border-indigo-200 text-[#000] border-opacity-50">Create Ad Content</li>
                                <li class="bg-gray-100 rounded flex p-4 items-center border-1 rounded-lg border-indigo-200 text-[#000] border-opacity-50">Anything Tool to help with all types of marketing!</li>
                                <li className="mt-5 text-[#000] font-medium text-lg">Plus we're adding new tools all the time!</li>
                            </ul>
                        </div>
                        <div className="w-1/1 lg:w-1/3 flex flex-col items-start relative overflow-hidden rounded-lg transition-all duration-300 cursor-pointer group border border-gray-200 hover:border-blue-200 bg-white hover:shadow-md">
                            <h2 className="text-lg w-1/1 pb-2 px-5 title-font font-medium text-gray-900 mt-4 mb-4 border-b-1 border-gray-200">Jump to Assistant (click to jump)</h2>
                            <ul className="pl-5 pb-5 text-sm font-normal j-Assis">
                                <li>Product Research Assistant</li>
                                <li>SEO Keyword Assistant</li>
                                <li>Headline Creation Assistant</li>
                                <li>Blog Post Idea Assistant</li>
                                <li>Offer Name Generator</li>
                                <li>Offer Sales Copy Assistant</li>
                                <li>Product Name Generator</li>
                                <li>Product Description Assistant</li>
                                <li>Opt In Copy Assistant</li>
                                <li>Email Copy Assistant</li>
                                <li>Discount Page Copy Assistant</li>
                                <li>Upsell Copy Assistant</li>
                                <li>Social Post Assistant</li>
                                <li>About Us Copy Assistant</li>
                                <li>Ad Headline Assistant</li>
                                <li>Ad Copy Assistant</li>
                                <li>Anything Marketing Assistant</li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </section>
            <section className="text-gray-600 body-font overflow-hidden bg-no-repeat bg-center bg-cover bg-fixed" style={{ backgroundImage: "url('/img/section-bg-1.png')" }}>
                <div className="container sm:px-5 px-1 py-24 grid sm:grid-cols-2 grid-cols-1 gap-1 sm:gap-4 mx-auto">
                    <div class="p-4 w-1/1">
                        <div class="flex rounded-lg h-full flex-col verflow-hidden rounded-lg transition-all duration-300 cursor-pointer group border border-gray-200 hover:border-blue-200 bg-white hover:shadow-md">
                            <div class="flex items-center p-5 border-b-1 border-gray-200 border-opacity-60">
                                <img className="w-1/10 object-cover objet-center mr-3" alt="hero" src="/img/icons-person.png" />
                                <h2 class="text-gray-900 sm:text-2xl text-lg title-font font-medium">Product Research Assistant</h2>
                            </div>
                            <div class="flex-grow p-5">
                                <div class="p-2 w-full">
                                    <div class="relative text-[#000]">
                                        <label for="message" class="leading-7 text-base font-light text-gray-600">What product are you researching? - Andy</label>
                                        <textarea id="message" name="message" class="w-full mt-2 bg-gray-100 bg-opacity-50 rounded rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                        <button class="w-1/1 md:py-3 px-2.5 py-3 content-center rounded-lg font-medium text-lg text-center gap-2 transition-all duration-200 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-[0_4px_10px_-3px_rgba(124,58,237,0.5)]">Create</button>
                                        <h3 className="sm:text-sm text-xs title-font font-normal mt-4">Just type a product or category, and <b>Andy gives you quick insights, trends, and competitor info.</b></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 w-1/1">
                        <div class="flex rounded-lg h-full flex-col verflow-hidden rounded-lg transition-all duration-300 cursor-pointer group border border-gray-200 hover:border-blue-200 bg-white hover:shadow-md">
                            <div class="flex items-center p-5 border-b-1 border-gray-200 border-opacity-60">
                                <img className="w-1/10 object-cover objet-center mr-3" alt="hero" src="/img/icons-person.png" />
                                <h2 class="text-gray-900 sm:text-2xl text-lg title-font font-medium">SEO Keyword Assistant</h2>
                            </div>
                            <div class="flex-grow p-5">
                                <div class="p-2 w-full">
                                    <div class="relative text-[#000]">
                                        <label for="message" class="leading-7 text-base font-light text-gray-600">What topid do you need SEO keywords for? - Andy</label>
                                        <textarea id="message" name="message" class="w-full mt-2 bg-gray-100 bg-opacity-50 rounded rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                        <button class="w-1/1 md:py-3 px-2.5 py-3 content-center rounded-lg font-medium text-lg text-center gap-2 transition-all duration-200 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-[0_4px_10px_-3px_rgba(124,58,237,0.5)]">Create</button>
                                        <h3 className="sm:text-sm text-xs title-font font-normal mt-4">Give Andy a topic, <b>and get a handy list of keywords to boost your site's search visibility!</b></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 w-1/1">
                        <div class="flex rounded-lg h-full flex-col verflow-hidden rounded-lg transition-all duration-300 cursor-pointer group border border-gray-200 hover:border-blue-200 bg-white hover:shadow-md">
                            <div class="flex items-center p-5 border-b-1 border-gray-200 border-opacity-60">
                                <img className="w-1/10 object-cover objet-center mr-3" alt="hero" src="/img/icons-person.png" />
                                <h2 class="text-gray-900 sm:text-2xl text-lg title-font font-medium">Headline Creation Assistant</h2>
                            </div>
                            <div class="flex-grow p-5">
                                <div class="p-2 w-full">
                                    <div class="relative text-[#000]">
                                        <label for="message" class="leading-7 text-base font-light text-gray-600">What would you like to create a headline for? - Andy</label>
                                        <textarea id="message" name="message" class="w-full mt-2 bg-gray-100 bg-opacity-50 rounded rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                        <button class="w-1/1 md:py-3 px-2.5 py-3 content-center rounded-lg font-medium text-lg text-center gap-2 transition-all duration-200 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-[0_4px_10px_-3px_rgba(124,58,237,0.5)]">Create</button>
                                        <h3 className="sm:text-sm text-xs title-font font-normal mt-4">Need a headline? <b>Just give Andy a few words, and get 3 cool headlines in a snap. with optional emojis.</b> Copy/Paste the headline you like best!</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 w-1/1">
                        <div class="flex rounded-lg h-full flex-col verflow-hidden rounded-lg transition-all duration-300 cursor-pointer group border border-gray-200 hover:border-blue-200 bg-white hover:shadow-md">
                            <div class="flex items-center p-5 border-b-1 border-gray-200 border-opacity-60">
                                <img className="w-1/10 object-cover objet-center mr-3" alt="hero" src="/img/icons-person.png" />
                                <h2 class="text-gray-900 sm:text-2xl text-lg title-font font-medium">Blog Post Idea Assistant</h2>
                            </div>
                            <div class="flex-grow p-5">
                                <div class="p-2 w-full">
                                    <div class="relative text-[#000]">
                                        <label for="message" class="leading-7 text-base font-light text-gray-600">What topic are you creating a blog post for? - Andy</label>
                                        <textarea id="message" name="message" class="w-full mt-2 bg-gray-100 bg-opacity-50 rounded rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                        <button class="w-1/1 md:py-3 px-2.5 py-3 content-center rounded-lg font-medium text-lg text-center gap-2 transition-all duration-200 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-[0_4px_10px_-3px_rgba(124,58,237,0.5)]">Create</button>
                                        <h3 className="sm:text-sm text-xs title-font font-normal mt-4">Stuck on blog ideas? <b>Tell Andy your topic, and get lots of creative ideas in no time.</b> Blogging made easy!</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 w-1/1">
                        <div class="flex rounded-lg h-full flex-col verflow-hidden rounded-lg transition-all duration-300 cursor-pointer group border border-gray-200 hover:border-blue-200 bg-white hover:shadow-md">
                            <div class="flex items-center p-5 border-b-1 border-gray-200 border-opacity-60">
                                <img className="w-1/10 object-cover objet-center mr-3" alt="hero" src="/img/icons-person.png" />
                                <h2 class="text-gray-900 sm:text-2xl text-lg title-font font-medium">Offer Name Generator</h2>
                            </div>
                            <div class="flex-grow p-5">
                                <div class="p-2 w-full">
                                    <div class="relative text-[#000]">
                                        <label for="message" class="leading-7 text-base font-light text-gray-600">Describe your offer and audience in a few words? - Andy</label>
                                        <textarea id="message" name="message" class="w-full mt-2 bg-gray-100 bg-opacity-50 rounded rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                        <button class="w-1/1 md:py-3 px-2.5 py-3 content-center rounded-lg font-medium text-lg text-center gap-2 transition-all duration-200 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-[0_4px_10px_-3px_rgba(124,58,237,0.5)]">Create</button>
                                        <h3 className="sm:text-sm text-xs title-font font-normal mt-4">Need a name for your offer? <b>Andy quickly suggests catchy names that attract attention.</b></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 w-1/1">
                        <div class="flex rounded-lg h-full flex-col verflow-hidden rounded-lg transition-all duration-300 cursor-pointer group border border-gray-200 hover:border-blue-200 bg-white hover:shadow-md">
                            <div class="flex items-center p-5 border-b-1 border-gray-200 border-opacity-60">
                                <img className="w-1/10 object-cover objet-center mr-3" alt="hero" src="/img/icons-person.png" />
                                <h2 class="text-gray-900 sm:text-2xl text-lg title-font font-medium">Offer Sales Copy Assistant</h2>
                            </div>
                            <div class="flex-grow p-5">
                                <div class="p-2 w-full">
                                    <div class="relative text-[#000]">
                                        <label for="message" class="leading-7 text-base font-light text-gray-600">What's your offer about? - Andy</label>
                                        <textarea id="message" name="message" class="w-full mt-2 bg-gray-100 bg-opacity-50 rounded rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                        <button class="w-1/1 md:py-3 px-2.5 py-3 content-center rounded-lg font-medium text-lg text-center gap-2 transition-all duration-200 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-[0_4px_10px_-3px_rgba(124,58,237,0.5)]">Create</button>
                                        <h3 className="sm:text-sm text-xs title-font font-normal mt-4">Andy helps write persuasive sales text for your offer that <b>highlights the benefits of your offer, address potential customer objections, and improve conversions.</b></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 w-1/1">
                        <div class="flex rounded-lg h-full flex-col verflow-hidden rounded-lg transition-all duration-300 cursor-pointer group border border-gray-200 hover:border-blue-200 bg-white hover:shadow-md">
                            <div class="flex items-center p-5 border-b-1 border-gray-200 border-opacity-60">
                                <img className="w-1/10 object-cover objet-center mr-3" alt="hero" src="/img/icons-person.png" />
                                <h2 class="text-gray-900 sm:text-2xl text-lg title-font font-medium">Product Name Generator</h2>
                            </div>
                            <div class="flex-grow p-5">
                                <div class="p-2 w-full">
                                    <div class="relative text-[#000]">
                                        <label for="message" class="leading-7 text-base font-light text-gray-600">Describe your product? - Andy</label>
                                        <textarea id="message" name="message" class="w-full mt-2 bg-gray-100 bg-opacity-50 rounded rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                        <button class="w-1/1 md:py-3 px-2.5 py-3 content-center rounded-lg font-medium text-lg text-center gap-2 transition-all duration-200 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-[0_4px_10px_-3px_rgba(124,58,237,0.5)]">Create</button>
                                        <h3 className="sm:text-sm text-xs title-font font-normal mt-4">Looking for a product name? <b>Andy generates creative names in a flash that stand out.</b></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 w-1/1">
                        <div class="flex rounded-lg h-full flex-col verflow-hidden rounded-lg transition-all duration-300 cursor-pointer group border border-gray-200 hover:border-blue-200 bg-white hover:shadow-md">
                            <div class="flex items-center p-5 border-b-1 border-gray-200 border-opacity-60">
                                <img className="w-1/10 object-cover objet-center mr-3" alt="hero" src="/img/icons-person.png" />
                                <h2 class="text-gray-900 sm:text-2xl text-lg title-font font-medium">Product Description Assistant</h2>
                            </div>
                            <div class="flex-grow p-5">
                                <div class="p-2 w-full">
                                    <div class="relative text-[#000]">
                                        <label for="message" class="leading-7 text-base font-light text-gray-600">What product do you want to describe? - Andy</label>
                                        <textarea id="message" name="message" class="w-full mt-2 bg-gray-100 bg-opacity-50 rounded rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                        <button class="w-1/1 md:py-3 px-2.5 py-3 content-center rounded-lg font-medium text-lg text-center gap-2 transition-all duration-200 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-[0_4px_10px_-3px_rgba(124,58,237,0.5)]">Create</button>
                                        <h3 className="sm:text-sm text-xs title-font font-normal mt-4"><b>Andy crafts engaging descriptions for your products</b> that highlight key features, easily converting potential visitors.</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AIBook