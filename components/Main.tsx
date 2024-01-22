import React from 'react'
import Link from 'next/link'

function Main() {
  return (
    <section className="md:h-full flex items-center text-gray-600">
        <div className="container px-5 py-5 mx-auto">
            <div className="text-center mb-12">
                <h5 className="text-base md:text-lg text-indigo-700 mb-1">Ayubowan | Vanakkam | Assalamu Alaikum </h5>
                <h1 className="text-3xl md:text-5xl text-gray-700 font-semibold">Welcome to Sri Lanka</h1>
            </div>
            <div className="flex flex-wrap">
                <div className="p-6 sm:w-1/2 lg:w-1/3">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                            src="/dalada.jpg" alt="Kandy Dalada Maligawa"/>
                        <div className="p-6 hover:bg-blue-950 hover:text-white transition duration-300 ease-in">
                            <h2 className="text-base font-medium text-indigo-300 mb-1">Kandy</h2>
                            <h1 className="text-2xl font-semibold mb-3">Dalada Maligawa</h1>
                              <p className="leading-relaxed mb-3">The Kandy Dalada Maligawa, also known as the Temple of the Tooth,
                                  is a revered Buddhist temple in Kandy, Sri Lanka. It houses a sacred relic—the tooth of the Buddha.
                                  The temple, situated by Kandy Lake, features intricate architecture and
                                  hosts the annual Esala Perahera, a grand procession celebrating the tooth relic. This cultural and religious
                                  landmark is a symbol of Sri Lanka's rich heritage, drawing visitors for its spiritual significance and historical
                                  importance.</p>
                        <div className="flex items-center flex-wrap ">
                              <Link href="/Places" className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0"> Search details
                                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                  </svg>
                                </Link>
                                <span
                                    className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>5.2K
                                </span>
                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path
                                            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                                        </path>
                                    </svg>88
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-6 sm:w-1/2 lg:w-1/3">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                            src="/hiri.jpg" alt="Hiriketiya Beach Sri Lanka"/>
                        <div className="p-6 hover:bg-blue-950 hover:text-white transition duration-300 ease-in">
                            <h2 className="text-base font-medium text-indigo-300 mb-1">Matara</h2>
                            <h1 className="text-2xl font-semibold mb-3">Hiriketiya Beach</h1>
                              <p className="leading-relaxed mb-3">Hiriketiya Beach is a picturesque and crescent-shaped
                                  sandy beach located in the southern coast of Sri Lanka. Hiriketiya has become a popular destination for surfers and
                                  beachgoers seeking a laid-back atmosphere. The beach is surrounded by lush green hills,
                                  creating a scenic backdrop. In addition to surfing, Hiriketiya offers a range of beachside
                                  cafes, restaurants, and accommodations, making it an attractive and relaxed coastal
                                  destination for both locals and tourists.</p>
                            <div className="flex items-center flex-wrap ">
                                <Link href="/Places" className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0"> Search details
                                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                  </svg>
                                </Link>
                                <span
                                    className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>8.2K
                                </span>
                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path
                                            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                                        </path>
                                    </svg>601
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-6 sm:w-1/2 lg:w-1/3">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                            src="/sigiriya.jpg" alt="Sigiriya Lion's rock"/>
                        <div className="p-6 hover:bg-blue-950 hover:text-white transition duration-300 ease-in">
                            <h2 className="text-base font-medium text-indigo-300 mb-1">Dambulla</h2>
                            <h1 className="text-2xl font-semibold mb-3">Sigiriya</h1>
                              <p className="leading-relaxed mb-3">Sigiriya is an ancient rock fortress and archaeological
                                  site located in the central part of Sri Lanka. Sigiriya is renowned for its historical and cultural significance. Rising dramatically from
                                  the surrounding landscape, the site features a massive rock plateau with the ruins of a royal
                                  palace atop. The "Lion's Rock," as it is often called, is adorned with vibrant frescoes. Sigiriya, dating back to the 5th century,
                                  offers a glimpse into Sri Lanka's rich history and architectural prowess. </p>
                            <div className="flex items-center flex-wrap ">
                                <Link href="/Places" className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0"> Search details
                                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                  </svg>
                                </Link>
                                <span
                                    className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>3.2K
                                </span>
                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path
                                            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                                        </path>
                                    </svg>106
                                </span>
                            </div>
                        </div>
                    </div>
                 </div>
                <div className="p-6 sm:w-1/2 lg:w-1/3">
                          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                              <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                                  src="/gallefort.jpg" alt="Dutch fort in Galle Sri Lanka"/>
                              <div className="p-6 hover:bg-blue-950 hover:text-white transition duration-300 ease-in">
                                  <h2 className="text-base font-medium text-indigo-300 mb-1">Galle</h2>
                                  <h1 className="text-2xl font-semibold mb-3">Dutch Fort</h1>
                              <p className="leading-relaxed mb-3">The Dutch Fort in Galle, located on the southern
                                  coast of Sri Lanka, is a historic fortress with a rich colonial heritage.
                                  Constructed by the Dutch in the 17th century. The fort features well-preserved ramparts, bastions, and cobblestone streets,
                                  showcasing a blend of Dutch and Portuguese architectural influences. Within its walls,
                                  visitors can explore a charming mix of colonial-era buildings, boutiques, cafes, and museums.
                                  </p>
                                  <div className="flex items-center flex-wrap ">
                                      <Link href="/Places" className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0"> Search details
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                          fill="none" stroke-linecap="round" stroke-linejoin="round">
                                          <path d="M5 12h14"></path>
                                          <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                      </Link>
                                      <span
                                          className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                          <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                              stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                              <circle cx="12" cy="12" r="3"></circle>
                                          </svg>1.7K
                                      </span>
                                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                          <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                              stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                              <path
                                                  d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                                              </path>
                                          </svg>66
                                      </span>
                                  </div>
                              </div>
                          </div>
                </div>
                <div className="p-6 sm:w-1/2 lg:w-1/3">
                          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                              <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                                  src="/yala.jpg" alt="Yala National Park Sri Lanka"/>
                              <div className="p-6 hover:bg-blue-950 hover:text-white transition duration-300 ease-in">
                                  <h2 className="text-base font-medium text-indigo-300 mb-1">Hambanthota</h2>
                                  <h1 className="text-2xl font-semibold mb-3">Yala National Park</h1>
                              <p className="leading-relaxed mb-3">Yala National Park, situated in the southeastern region
                                  of Sri Lanka, is the country's most renowned wildlife sanctuary. As one of the oldest and
                                  largest national parks, Yala is celebrated for its diverse ecosystems and rich biodiversity.
                                  The park is home to a variety of wildlife, including elephants, leopards, crocodiles,
                                  and numerous bird species. Its picturesque landscapes encompass dense jungles, expansive
                                  grasslands. </p>
                                  <div className="flex items-center flex-wrap ">
                                      <Link href="/Places" className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0"> Search details
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                          fill="none" stroke-linecap="round" stroke-linejoin="round">
                                          <path d="M5 12h14"></path>
                                          <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                      </Link>
                                      <span
                                          className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                          <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                              stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                              <circle cx="12" cy="12" r="3"></circle>
                                          </svg>10.1K
                                      </span>
                                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                          <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                              stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                              <path
                                                  d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                                              </path>
                                          </svg>206
                                      </span>
                                  </div>
                              </div>
                          </div>
                </div>
                  <div className="p-6 sm:w-1/2 lg:w-1/3">
                          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                              <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                                  src="/anuradha.jpg" alt="Anuradhapura, cultural triangle Sri Lanka"/>
                              <div className="p-6 hover:bg-blue-950 hover:text-white transition duration-300 ease-in">
                                  <h2 className="text-base font-medium text-indigo-300 mb-1">Anuradhapura</h2>
                                  <h1 className="text-2xl font-semibold mb-3">Cultural Triangle</h1>
                              <p className="leading-relaxed mb-3">The Cultural Triangle in Sri Lanka encompasses the
                                  ancient city of Anuradhapura. Anuradhapura served as the capital of ancient Sri Lanka for
                                  over a millennium. The city is renowned for its well-preserved ruins, including stupas,
                                  monasteries, and ancient reservoirs. Notable landmarks such as the sacred Bo Tree,
                                  Ruwanwelisaya stupa, and Abhayagiri complex contribute to the city's cultural and
                                  religious importance. </p>
                                  <div className="flex items-center flex-wrap ">
                                      <Link href="/Places" className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0"> Search details
                                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                      </svg>
                                    </Link>
                                      <span
                                          className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                          <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                              stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                              <circle cx="12" cy="12" r="3"></circle>
                                          </svg>2.2K
                                      </span>
                                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                          <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                              stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                              <path
                                                  d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                                              </path>
                                          </svg>301
                                      </span>
                                  </div>
                              </div>
                          </div>
                  </div>
        </div>
        </div>
    </section>
  )
}

export default Main
