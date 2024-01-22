import React from 'react'
import Link from 'next/link'
import './Attractions.css'

function Attractions() {
  return (
      <section className=" ">
          <h5 className="text-base md:text-lg text-indigo-700 mb-3 mt-5 text-center"> History | Beaches | Water Sports | Culture | VISA | Driver License </h5>
                  <h1 className="text-3xl md:text-4xl text-gray-700 font-semibold text-center mb-5">Discover Sri Lanka</h1>
          <div className=''>
                    <div className="container px-1 py-1 mx-auto">
                        
                        <div className="flex">
                            <div className="flex p-1">
                                <div className=" flex h-full flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                        src="/nagadeepa.jpg" alt="Nagadeepa temple" />
                                    <div></div>
                                    <div className="p-3">
                                        <h2 className="text-base font-medium text-indigo-300 mb-1">Jaffna</h2>
                                        <h1 className="text-xl font-semibold mb-1">1. Nagadeepa</h1>
                                        <p className="leading-relaxed mb-2">Nagadeepa, located in the Jaffna District of Sri Lanka,
                                            is an important religious and historical site. The region is known for its two significant
                                            Buddhist temples, Nagadeepa Purana Viharaya and Nagadeepa Rajamaha Viharaya, which are believed
                                            to have been visited by Lord Buddha during his second and third visits to Sri Lanka. Pilgrims and
                                            tourists are drawn to Nagadeepa for its cultural and religious significance, and the island is
                                            accessible by boat from the Jaffna Peninsula. The serene surroundings, ancient ruins, and religious
                                            structures contribute to the spiritual and historical allure of Nagadeepa.
                                        </p>
                                            <div className="flex items-center flex-wrap ">
                                        {/* <Link href="/Places" className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0"> Search details
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                            </Link> */}
                                            </div>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>

                    <div className="container px-1 py-1 mx-auto">
                        
                        <div className="flex">
                            <div className="flex p-1">
                                <div className=" flex h-full flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-60 md:h-48 w-full object-cover object-center pr-1"
                                        src="/kones.jpg" alt="Koneswaram Kovil" width={100} height={100} />
                                    <div></div>
                                    <div className="p-3">
                                        <h2 className="text-base font-medium text-indigo-300 mb-1">Trincomalee</h2>
                                        <h1 className="text-xl font-semibold mb-1">2. Koneswaram Kovil</h1>
                                  <p className="leading-relaxed mb-2">The Koneswaram Kovil, situated in Trincomalee, Sri Lanka,
                                      is a prominent Hindu temple with a rich history dating back centuries. Perched on Swami
                                      Rock overlooking the Indian Ocean, the temple is dedicated to Lord Shiva. The original
                                      structure was said to be grand and was a renowned pilgrimage site. However, it faced destruction
                                      during colonial periods. The present-day kovil, reconstructed in the 20th century, is a vibrant
                                      and revered religious site for Hindus. With its stunning coastal location and intricate architecture,
                                      Koneswaram Kovil attracts devotees, tourists, and those interested in the cultural and historical
                                      heritage of Sri Lanka.
                                      
                                        </p>
                                            <div className="flex items-center flex-wrap ">
                                        {/* <Link href="/Places" className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0"> Search details
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                            </Link> */}
                                            </div>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>
          </div>

          <div className=''>
                    <div className="container px-1 py-1 mx-auto">
                        
                        <div className="">
                            <div className=" p-1">
                                <div className=" h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <div className='flex'>
                                        <img className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                        src="/kitesurf.jpg" alt="Kite Surfing" />
                                        <img className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                                    src="/kitesurf1.jpg" alt="Kite Surfing" />
                                        <img className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                            src="/kitesurf2.jpg" alt="Kite Surfing" />
                                    </div>
                                    <div className="p-3">
                                        <h2 className="text-base font-medium text-indigo-300 mb-1">Kalpitiya</h2>
                                        <h1 className="text-xl font-semibold mb-1">3. Kite Surfing</h1>
                                  <p className="leading-relaxed mb-2">Kite surfing on the west coast of Sri Lanka is a thrilling
                                      and popular water sport, drawing enthusiasts to its pristine beaches and ideal wind conditions.
                                      The coastal areas, such as Kalpitiya, are renowned for their consistent and strong winds, creating
                                      an excellent environment for kite surfers of all skill levels. With its shallow lagoons and expansive
                                      sandy shores, the west coast provides an ideal setting for both beginners and experienced kite surfers.
                                      The region has established itself as a hub for kite surfing schools and resorts, offering not only
                                      fantastic conditions for the sport but also a laid-back atmosphere and stunning coastal scenery, making
                                      it a sought-after destination for those seeking adventure on the water.
                                      
                                        </p>
                                            <div className="flex items-center flex-wrap ">
                                        {/* <Link href="/Places" className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0"> Search details
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                            </Link> */}
                                            </div>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>

                    <div className="container px-1 py-1 mx-auto">
                        
                        <div className="">
                            <div className=" p-1">
                                <div className=" flex h-full flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-60 md:h-48 w-full object-cover object-center pr-1"
                                        src="/sigiriya.jpg" alt="Sigiriya Lion's rock" />
                                    <div></div>
                                    <div className="p-3">
                                        <h2 className="text-base font-medium text-indigo-300 mb-1">Damdulla</h2>
                                        <h1 className="text-xl font-semibold mb-1">4. Sigiriya </h1>
                                  <p className="leading-relaxed mb-2">Sigiriya is an ancient rock fortress and UNESCO
                                      World Heritage Site located in central Sri Lanka. Rising dramatically from the surrounding
                                      landscape, it features a colossal rock plateau with ruins of a royal palace at its summit.
                                      Also known as the "Lion's Rock," Sigiriya is renowned for its historical and cultural significance,
                                      dating back to the 5th century. The site boasts intricate frescoes, the iconic Lion Gate entrance,
                                      and a mesmerizing view of the surrounding landscapes. Sigiriya stands as a testament to Sri Lanka's
                                      rich history, attracting visitors with its architectural marvels and captivating archaeological treasures.
                                      
                                        </p>
                                            <div className="flex items-center flex-wrap ">
                                        {/* <Link href="/Places" className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0"> Search details
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                            </Link> */}
                                            </div>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>
          </div>

          <div className=''>
                    <div className="container px-1 py-1 mx-auto">
                        
                        <div className="">
                            <div className=" p-1">
                                <div className=" h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                              <div className='flex'>
                                  <img className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                  src="/dalada.jpg" alt="Kandy Dalada Maligawa" />
                                    <img className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                        src="/kandy.jpg" alt="Kandy Dalada Maligawa" />
                                    </div>
                                    <div className="p-3">
                                        <h2 className="text-base font-medium text-indigo-300 mb-1">Kandy</h2>
                                        <h1 className="text-xl font-semibold mb-1">5. Dalada Maligawa</h1>
                                  <p className="leading-relaxed mb-2">The Dalada Maligawa, also known as the Temple of the Tooth,
                                      is a sacred Buddhist temple located in Kandy, Sri Lanka. Recognized as a UNESCO World Heritage Site,
                                      the temple houses a revered relic—the tooth of the Buddha. The Dalada Maligawa is a significant
                                      pilgrimage site and a cultural symbol in Sri Lanka, drawing devotees and visitors alike. Its
                                      architecture is characterized by intricate carvings, and the temple complex includes shrines,
                                      prayer halls, and a museum. The annual Esala Perahera, a grand procession featuring traditional
                                      dancers and adorned elephants, is a highlight that revolves around the veneration of the sacred tooth relic.
                                      The Dalada Maligawa stands as a testament to the island's rich Buddhist heritage and cultural legacy.
                                      
                                        </p>
                                            <div className="flex items-center flex-wrap ">
                                        {/* <Link href="/Places" className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0"> Search details
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                            </Link> */}
                                            </div>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>

                    <div className="container px-1 py-1 mx-auto">
                        
                        <div className="">
                            <div className="flex p-1">
                                <div className=" flex h-full flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                        src="/lotus.jpg" alt="Lotus Tower" />
                                    <div></div>
                                    <div className="p-3">
                                        <h2 className="text-base font-medium text-indigo-300 mb-1">Colombo</h2>
                                        <h1 className="text-xl font-semibold mb-1">6. Lotus Tower</h1>
                                  <p className="leading-relaxed mb-2">The Lotus Tower, located in Colombo, Sri Lanka,
                                      is a prominent architectural landmark and telecommunication tower. Standing at a
                                      height of 350 meters (1,150 feet), it is one of the tallest structures in South Asia.
                                      Completed in 2019, the tower is named for its lotus flower-inspired design, with its shape
                                      symbolizing purity and cultural significance. The Lotus Tower serves as a multi-functional building,
                                      housing telecommunication equipment, observation decks, a museum, restaurants, and other facilities.
                                      Offering panoramic views of Colombo, it has become a popular attraction for both locals and tourists,
                                      combining modern technology with cultural aesthetics in the heart of the city.
                                      
                                        </p>
                                            <div className="flex items-center flex-wrap ">
                                        {/* <Link href="/Places" className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0"> Search details
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                            </Link> */}
                                            </div>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>
          </div>

          <div className=''>
                    <div className="container px-1 py-1 mx-auto">
                        
                        <div className="">
                            <div className="flex p-1">
                                <div className=" h-full flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                     <div className='flex'>
                                            <img className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                            src="/sripada.jpg" alt="SriPada Adam's Peak" />
                                            <img className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                                src="/sripada1.jpg" alt="SriPada Adam's Peak" />
                                            <img className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                                src="/sripada2.jpg" alt="SriPada Adam's Peak" />
                              
                                    </div>
                                    <div className="p-3 ">
                                        <h2 className="text-base font-medium text-indigo-300 mb-1">Hatton</h2>
                                        <h1 className="text-xl font-semibold mb-1">7. Sripada</h1>
                                  <p className="leading-relaxed mb-2">Sripada, also known as Adam's Peak,
                                      is a revered mountain in central Sri Lanka. Rising to an elevation of 2,243
                                      meters (7,359 feet), it holds religious significance for multiple faiths,
                                      including Buddhism, Hinduism, Christianity, and Islam. The mountain is known
                                      for the "Sacred Footprint" at its summit, believed by different religious
                                      traditions to be associated with the Buddha, Lord Shiva, Adam, or the Muslim
                                      prophet Ismail.
<br></br>
                                      Sripada is a popular pilgrimage site, and the trek to its summit involves
                                      ascending a steep staircase with over 5,000 steps. Pilgrims, hikers, and
                                      nature enthusiasts are drawn to Sripada not only for its religious importance
                                      but also for the breathtaking views from the top, especially during the
                                      pilgrimage season from December to May. The journey up Sripada is a blend of
                                      physical challenge, cultural exploration, and spiritual experience in the heart
                                      of Sri Lanka.
                                      
                                        </p>
                                            <div className="flex items-center flex-wrap ">
                                        {/* <Link href="/Places" className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0"> Search details
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                            </Link> */}
                                            </div>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
              </div>
              
              <div className="container px-1 py-1 mx-auto">
                        
                        <div className="flex">
                            <div className="flex p-1">
                                <div className=" flex h-full flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                        src="/ella.jpg" alt="Ella" />
                                    <div></div>
                                    <div className="p-3">
                                        <h2 className="text-base font-medium text-indigo-300 mb-1">Haputale</h2>
                                        <h1 className="text-xl font-semibold mb-1">8. Ella</h1>
                                  <p className="leading-relaxed mb-2">Ella, nestled in the picturesque hill country of
                                      Sri Lanka, is a charming town renowned for its breathtaking landscapes and relaxed
                                      ambiance. Surrounded by lush greenery, tea plantations, and mist-covered mountains,
                                      Ella offers panoramic views that captivate visitors. The iconic Nine Arch Bridge and
                                      the scenic Ella Rock are popular attractions for hikers and nature enthusiasts. The
                                      town's tea estates provide a glimpse into Sri Lanka's rich tea culture. With its cool
                                      climate and laid-back atmosphere, Ella has become a haven for those seeking tranquility
                                      and natural beauty in the heart of the island.
                                      
                                        </p>
                                            <div className="flex items-center flex-wrap ">
                                        {/* <Link href="/Places" className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0"> Search details
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                            </Link> */}
                                            </div>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>

                    <div className="container px-1 py-1 mx-auto">
                        
                        <div className="flex">
                            <div className="flex p-1">
                                <div className=" flex h-full flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                        src="/arugambay.jpg" alt="Arugambay surfing" />
                                    <div></div>
                                    <div className="p-3">
                                        <h2 className="text-base font-medium text-indigo-300 mb-1">Potuvil</h2>
                                        <h1 className="text-xl font-semibold mb-1">9. Arugam Bay </h1>
                                  <p className="leading-relaxed mb-2">Arugam Bay, located on the east coast of Sri Lanka,
                                      is a renowned coastal destination celebrated for its stunning beaches and world-class surf conditions.
                                      The bay attracts surf enthusiasts globally, offering a laid-back atmosphere with beachfront cafes, restaurants,
                                      and accommodations. Beyond surfing, Arugam Bay provides opportunities for snorkeling, diving, and exploration
                                      of nearby natural attractions like Lahugala National Park and Kumana Bird Sanctuary. The village's bohemian
                                      charm, coupled with its natural beauty, makes Arugam Bay a unique and popular destination that combines
                                      adventure, relaxation, and the allure of Sri Lanka's picturesque east coast.
                                      
                                        </p>
                                            <div className="flex items-center flex-wrap ">
                                        {/* <Link href="/Places" className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0"> Search details
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                            </Link> */}
                                            </div>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>
          </div>

          <div className=''>
                    <div className="container px-1 py-1 mx-auto">
                        
                        <div className="flex">
                            <div className="flex p-1">
                                <div className=" flex h-full flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                        src="/yala.jpg" alt="yala national park" />
                                    <div></div>
                                    <div className="p-3 ">
                                        <h2 className="text-base font-medium text-indigo-300 mb-1">Tissamaharama</h2>
                                        <h1 className="text-xl font-semibold mb-1">10. Yala National Park</h1>
                                  <p className="leading-relaxed mb-2">Yala National Park, situated in the southeastern region of Sri
                                      Lanka, stands as the country's most renowned wildlife sanctuary. Spanning a diverse range of ecosystems,
                                      including dense jungles, expansive grasslands, and coastal areas, Yala is celebrated for its rich biodiversity.
                                      Home to elephants, leopards, crocodiles, and numerous bird species, the park offers a unique safari experience
                                      for wildlife enthusiasts. With picturesque landscapes and a variety of habitats, Yala National Park provides
                                      a captivating environment for visitors to observe and appreciate the natural beauty and wildlife of Sri Lanka.
                                      
                                        </p>
                                            <div className="flex items-center flex-wrap ">
                                        {/* <Link href="/Places" className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0"> Search details
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                            </Link> */}
                                            </div>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>

                    <div className="container px-1 py-1 mx-auto">
                        
                        <div className="flex">
                            <div className="flex p-1">
                                <div className=" flex h-full flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                        src="/mirissa.jpg" alt="Mirissa" />
                                    <div></div>
                                    <div className="p-3 ">
                                        <h2 className="text-base font-medium text-indigo-300 mb-1"> Matara</h2>
                                        <h1 className="text-xl font-semibold mb-1">11. Mirissa</h1>
                                  <p className="leading-relaxed mb-2">Mirissa, located on the southern coast of Sri Lanka,
                                      is a captivating beach destination known for its pristine sandy shores, turquoise waters,
                                      and vibrant atmosphere. Renowned for its relaxed vibes, Mirissa offers a perfect blend of sun,
                                      sea, and surf. The beach is adorned with palm trees, and the coastline is dotted with cozy cafes and
                                      restaurants serving fresh seafood. Mirissa is not only a haven for beach lovers but also a popular spot
                                      for whale watching, providing the opportunity to witness majestic marine life, including blue whales and
                                      dolphins. The laid-back charm, stunning sunsets, and diverse activities make Mirissa a sought-after destination
                                      for travelers seeking a tranquil and scenic escape in the tropical paradise of Sri Lanka.
                                      
                                        </p>
                                            <div className="flex items-center flex-wrap ">
                                        {/* <Link href="/Places" className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0"> Search details
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                            </Link> */}
                                            </div>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>
          </div>

          <div className=''>
                    <div className="container px-1 py-1 mx-auto">
                        
                        <div className="">
                            <div className="flex p-1">
                                <div className=" h-full flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                              <div className='flex'>
                                  <img className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                  src="/fort2.jpg" alt="Galle Dutch Fort" />
                              <img className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                  src="/fort.jpg" alt="Galle Dutch Fort" />
                              <img className="lg:h-60 md:h-48 sm:h-32 w-full object-cover object-center pr-1"
                                        src="/fort3.jpg" alt="Galle Dutch Fort" />
                                    </div>
                                    <div className="p-3">
                                        <h2 className="text-base font-medium text-indigo-300 mb-1">Galle</h2>
                                        <h1 className="text-xl font-semibold mb-1">12. Dutch Fort</h1>
                                  <p className="leading-relaxed mb-2">The Galle Dutch Fort, located on the southwest
                                      coast of Sri Lanka, is a historic fortress with a rich colonial heritage. Constructed
                                      by the Dutch in the 17th century and later fortified by the British, the fort stands as
                                      a UNESCO World Heritage Site. It features well-preserved ramparts, bastions, and cobblestone
                                      streets, showcasing a blend of Dutch and Portuguese architectural influences. Within the fort walls,
                                      visitors can explore a charming mix of colonial-era buildings, boutique shops, cafes, and museums.
                                      The Galle Dutch Fort is not only a testament to Sri Lanka's colonial past but also a vibrant and
                                      captivating destination that attracts tourists with its historical significance and picturesque surroundings.
                                      
                                        </p>
                                            <div className="flex items-center flex-wrap ">
                                        {/* <Link href="/Places" className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0"> Search details
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                            </Link> */}
                                            </div>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>

                    
          </div>

    </section>
  )
}

export default Attractions
