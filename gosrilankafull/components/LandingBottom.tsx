"use client"

import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import './style.css';

function LandingBottom() {
  const [state, setState] = useState(1);

  const action = (index) => {
    setState(index)
  }


  return (
      <div className="box p-2">
            <div className="tabs">
                  <div onClick={() => action(1)}
                    className={`${state===1 ? 'tab active-tab': 'tab'}`}
                  >Calendar Holidays | Events
                  </div>

                  <div onClick={() => action(2)}
                    className={`${state===2 ? 'tab active-tab': 'tab'}`}
                  > Rentals
                  </div>

                  <div onClick={() => action(3)}
                    className={`${state===3 ? 'tab active-tab': 'tab'}`}
                    > Bus | Train Tickets
                  </div>
              
                  <div onClick={() => action(4)}
                    className={`${state===4 ? 'tab active-tab': 'tab'}`}
                    > VISA
                  </div>
              
                  <div onClick={() => action(5)}
                    className={`${state===5 ? 'tab active-tab': 'tab'}`}
                    > Driver's License
                  </div>

            </div>

            <div className="content-tabs">

                  <div className={`${state === 1 ? 'content active-content'
                    : 'content'}`}>
                  <div className='text-justify'>
                <div className=' flex flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] text-justify'>
                        <div>
                          <p className='p-5'><strong className='text-blue-900 text-2xl'>S</strong>ri Lanka observes a variety of holidays and events,
                            reflecting
                            its multicultural and multi-religious population.</p>
                          <p>The range of holidays include religious festivals such as Vesak, celebrating Buddha's birth, enlightenment, and death,
                            and Deepavali, the Hindu festival of lights. National holidays like Independence Day and National
                            Day commemorate significant historical events.
                          </p> <br></br>
                          <p>The Sinhala and Tamil New Year stands out as a major cultural celebration, marking the end of the
                            harvest season with traditional customs and festivities. Poya Days, occurring monthly on full moon days,
                            are dedicated to Buddhist observances.
                        </p>
                        </div>
                        <div className='p-3 item-center'>
                                  <Image src='/vacation.jpg' alt='Jan-June Calendar' width={250} height={100}/>
                        </div>
                </div>
                <div className='flex flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] text-justify '>
                  <div >
                    <Image src='/Q1calendar.jpg' alt='Jan-March Calendar' className='rounded-lg' width={450} height={100} />
                  </div>
                  <div>
                    <Image src='/Q2calendar.jpg' alt='April-June Calendar' className='rounded-lg' width={450} height={100} />
                  </div>
                  <div>
                    <Image src='/Q3calendar.jpg' alt='July-Sep Calendar' className='rounded-lg' width={450} height={100} />
                  </div>
                  <div>
                    <Image src='/Q4calendar.jpg' alt='Oct-Dec Calendar' className='rounded-lg' width={450} height={100}/>
                  </div>
               </div>
          </div>
                   </div>

                  <div className={`${state === 2 ? 'content active-content'
                    : 'content'}`}>
          <h2 className='p-2 text-xl text-blue-800'></h2>
              <div className='flex text-justify'>
                          <div >
                            <Image src='/foot1.jpg' alt='foot and flower' className='rounded-full' width={200} height={100} />
                          </div>
                          <p className='p-4'><strong className='text-blue-900 text-2xl'>R</strong> enting a vehicle in Sri Lanka provides diverse options, each offering a unique travel experience.
                            When renting any type of vehicle, it's essential to ensure proper documentation, adhere to local traffic regulations,
                            and consider the type of terrain you'll encounter. Additionally, choosing a reliable rental provider and understanding
                            the terms and conditions of the rental agreement is crucial for a smooth and enjoyable travel experience in Sri Lanka.
                        </p>
          </div>

                <div className="flex flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] text-justify">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                            src="/carrent.jpg" alt="car rental"/>
                        <div className="p-2 hover:bg-blue-950 hover:text-white transition duration-300 ease-in">
                            <h2 className="text-base font-medium text-indigo-300 mb-1 text-center"> 4-Wheel</h2>
                            <h1 className="text-2xl font-semibold mb-3 text-center">Car | SUV | Van</h1>
                            <p className="leading-relaxed mb-3">Renting a car is a popular choice for comfort and convenience.
                              International and local car rental companies provide a range of vehicles, from compact cars to SUVs.
                              This option allows for flexibility in exploring Sri Lanka's diverse landscapes, historical sites, and
                  cities at one's own pace.</p>
                            <p><strong className='text-blue-900 text-1xl'>1.</strong> International Car Rental: Hertz, Avis, and Europcar.</p>
                            <p><strong className='text-blue-900 text-1xl'>2.</strong> Local Rental: Casons Rent a Car, Malkey Rent a Car, and SR Rent a Car</p>
                
                              <div className="flex items-center flex-wrap ">
                                    <Link href="/ContactUs" className="text-indigo-300 inline-flex items-center mt-5 md:mb-2 lg:mb-0"> Rent a Car
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                          fill="none" stroke-linecap="round" stroke-linejoin="round">
                                          <path d="M5 12h14"></path>
                                          <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                      </Link>
                              </div>
                        </div>
                    </div>
            
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                            src="/tuktukrent.jpg" alt="tuk tuk rental"/>
                        <div className="p-2 hover:bg-blue-950 hover:text-white transition duration-300 ease-in">
                            <h2 className="text-base font-medium text-indigo-300 mb-1 text-center"> 3-Wheel</h2>
                            <h1 className="text-2xl font-semibold mb-3 text-center">Tuk Tuk Rental</h1>
                              <p className="leading-relaxed mb-3">Tuktuks, or three-wheeled motorized rickshaws, are a distinctive mode of
                                transportation in Sri Lanka. Renting a tuktuk offers an adventurous and immersive way to navigate the country's
                                bustling streets and scenic routes. It provides a sense of local authenticity and allows travelers to engage closely
                                with their surroundings.
                </p>
                <p><strong className='text-blue-900 text-1xl'>1.</strong> Tuk Tuk Rental Sri Lanka</p>
                <p><strong className='text-blue-900 text-1xl'>2.</strong> Tuk Tuk Rent Sri Lanka</p>
                            
                
                              <div className="flex items-center flex-wrap ">
                                    <Link href="/ContactUs" className="text-indigo-300 inline-flex items-center mt-5 md:mb-2 lg:mb-0"> Rent a TukTuk                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                          fill="none" stroke-linecap="round" stroke-linejoin="round">
                                          <path d="M5 12h14"></path>
                                          <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                      </Link>
                              </div>
                        </div>
                   </div>
            
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                            src="/bicyclerent.jpg" alt="bicycle rental"/>
                        <div className="p-2 hover:bg-blue-950 hover:text-white transition duration-300 ease-in">
                            <h2 className="text-base font-medium text-indigo-300 mb-1 text-center"> 2-Wheel</h2>
                            <h1 className="text-2xl font-semibold mb-3 text-center">Bicycle Rental</h1>
                <p className="leading-relaxed mb-3">For the more adventurous traveler, renting a motorcycle provides a
                  thrilling way to explore Sri Lanka's winding roads and picturesque landscapes. It offers the freedom to
                  venture into less accessible areas and is particularly popular among those seeking a more intimate
                  connection with the journey.
                </p>
                <p><strong className='text-blue-900 text-1xl'>1.</strong> Sri Lanka Bike Rental</p>
                <p><strong className='text-blue-900 text-1xl'>2.</strong> SL Ride Rentals</p>
                              <div className="flex items-center flex-wrap ">
                                    <Link href="/ContactUs" className="text-indigo-300 inline-flex items-center mt-5 md:mb-2 lg:mb-0"> Contact Us
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                          fill="none" stroke-linecap="round" stroke-linejoin="round">
                                          <path d="M5 12h14"></path>
                                          <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                      </Link>
                              </div>
                        </div>
                    </div>
                </div>

                  </div>

                  <div className={`${state === 3 ? 'content active-content'
                    : 'content'}`}>
                    <h2 className='p-5'></h2>
                    
                    <p>
                      Traveling by train and public bus in Sri Lanka is a common and affordable way to explore the country.
          </p>
          
          <div className="flex flex-col lg:flex-row md:flex-row lg:mt-[1px] md:mt-[2px] sm:mt-[1px] text-justify">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden ">
                        <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                            src="/train.jpg" alt="train tickets"/>
                        <div className="p-2 hover:bg-blue-950 hover:text-white transition duration-300 ease-in">
                            <h2 className="text-base font-medium text-indigo-300 mb-1 text-center"> Scenic | Classes | Tickets</h2>
                            <h1 className="text-2xl font-semibold mb-3 text-center">Train Ride</h1>
                <p><strong className='text-blue-900 text-1xl'> Scenic </strong> Sri Lanka's railway network offers picturesque train
                  routes, especially the famous Kandy to Ella and Colombo to Galle journeys. The scenery includes lush landscapes,
                  tea plantations, and mountainous terrains.
                  </p>
                <p><strong className='text-blue-900 text-1xl'> Classes </strong> Trains typically have different classes, including
                  First Class, Second Class, and Third Class. First Class provides more comfort, while Third Class is the most economical option.
                </p>
                <p><strong className='text-blue-900 text-1xl'> Tickets </strong>
                  Tickets can be purchased at railway stations, and it's advisable to book in advance for popular routes.
                  </p>
                        <div className="items-center flex-wrap ">
                              <Link href="https://seatreservation.railway.gov.lk/mtktwebslr" target='_black' className="text-indigo-300 inline-flex items-center mt-5 md:mb-2 lg:mb-0"> Buy Train tickets online
                                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                  </svg>
                                </Link>
                </div>

                    </div>
              </div>
            
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                            src="/bus.jpg" alt="bus tickets"/>
                        <div className="p-2 hover:bg-blue-950 hover:text-white transition duration-300 ease-in">
                            <h2 className="text-base font-medium text-indigo-300 mb-1 text-center"> Extensive Network | Classes | Affordable |Tickets</h2>
                            <h1 className="text-2xl font-semibold mb-3 text-center">Bus Ride</h1>
                <p><strong className='text-blue-900 text-1xl'> Network </strong> Public buses cover almost every corner of the island, making them a widely used mode of transportation.
                  </p>
                <p><strong className='text-blue-900 text-1xl'> Classes </strong> Buses have different classes, including ordinary buses and more comfortable air-conditioned options.
                </p>
                <p><strong className='text-blue-900 text-1xl'> Affordable </strong>
                  Public buses are cost-effective, making them a budget-friendly choice for both locals and tourists.
                </p>
                <p><strong className='text-blue-900 text-1xl'> Tickets </strong>
                  Tickets can be purchased directly from the bus conductor when boarding. For longer journeys or specific routes, it's advisable to confirm the schedule and availability in advance.
                  </p>
                        <div className="items-center flex-wrap ">
                              <Link href="https://busseat.lk/" target='_blanck' className="text-indigo-300 inline-flex items-center mt-5 md:mb-2 lg:mb-0"> Buy bus tickets online
                                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                  </svg>
                                </Link>
                </div>

                    </div>
              </div>
                </div>


                   </div>

                  <div className={`${state === 4 ? 'content active-content'
                    : 'content'}`}>
                   
                    <p className='p-5'>
            It's highly recommended to visit the official website of the Department of Immigration and
            Emigration of Sri Lanka or consult with the Sri Lankan embassy or consulate in your country for
            the most accurate and current information regarding visa requirements and application procedures.
            
          </p>
          
            <div className="p-2 gap-2 text-justify items-center">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden ">
                        <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                            src="/visa.jpg" alt="visa"/>
                        <div className="p-2 hover:bg-blue-950 hover:text-white transition duration-300 ease-in">
                            <h2 className="text-base font-medium text-indigo-300 mb-1 text-center"> ETA | Exemptions | On Arrival | Longer Stay</h2>
                            <h1 className="text-2xl font-semibold mb-3 text-center">VISA</h1>
                <p><strong className='text-blue-900 text-1xl'> ETA </strong> Electronic Travel Authorization (ETA): Most travelers to Sri Lanka
                  need to obtain an ETA before entering the country. 
                </p>
                <div className="items-center flex-wrap mb-5 ">
                  <Link href="https://srilanka.visaonlinegov.org/apply-visa" target='_black' className="text-indigo-300 inline-flex items-center mt-5 md:mb-2 lg:mb-0">
                    Apply online
                                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                  </svg>
                                </Link>
                  </div>
                <p><strong className='text-blue-900 text-1xl'> Exemptions </strong> Some countries are exempt from obtaining an ETA for short visits. However, it's crucial to confirm the specific requirements based on your nationality.

                  
                </p>
                <p><strong className='text-blue-900 text-1xl'> On Arrival </strong>
                  In some cases, travelers can obtain a visa on arrival. However, this option may not be available for all nationalities and may have certain conditions.
                </p>
                <p><strong className='text-blue-900 text-1xl'> Longer Stay </strong>
                  If you plan to stay in Sri Lanka for an extended period or for specific purposes such as work or study, you may need to apply for a different type of visa.
                  </p>


                    </div>
                  </div>
            
                    
            </div>

                  </div>

                  <div className={`${state === 5 ? 'content active-content'
                    : 'content'}`}>
                     <p className='p-5'>
            As a tourist, obtaining a driver's license in Sri Lanka is not a common practice.
            Instead, tourists are typically allowed to drive in Sri Lanka using their valid foreign driver's license.
            Always check for the latest information and regulations, as requirements may change. 
            
          </p>
          
            <div className="flex p-3 gap-3 text-justify">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden ">
                        <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                            src="/road.jpg" alt="roads"/>
                        <div className="p-2 hover:bg-blue-950 hover:text-white transition duration-300 ease-in">
                            <h2 className="text-base font-medium text-indigo-300 mb-1 text-center"> License | IDP | Local Rules | Insurance | Renting a Vehicle</h2>
                            <h1 className="text-2xl font-semibold mb-3 text-center">Diver's License </h1>
                <p><strong className='text-blue-900 text-1xl'> License </strong> <br></br>1. Drive with an IDL/IDP with AA Endorsement: Tourists can drive with an International Drivers License or International Driving Permit (IDP) obtained in their home country.
                  To drive legally in Sri Lanka, visit the Automobile Association of Ceylon, open Monday through Friday from 9 AM to 4 PM,
                  to get your driving permit endorsed.

                  <br></br> 2. Obtain a temporary Sri Lankan Driving Permit from Sri Lanka. Foreign Driving License holders can obtain a temporary Sri Lankan Driving Permit from the Department of Motor Vehicles
                  (DMV). Required documents include your Country Driving License (English Copy) + Photocopy, National Passport + Photocopy
                  of profile/photo page and Sri Lankan Visa Page. 
                </p>
                <div className="flex items-center flex-wrap mb-5 ">
                  <Link href="https://dmt.gov.lk/index.php?lang=en" target='_black' className="text-indigo-300 inline-flex items-center mt-5 md:mb-2 lg:mb-0">
                    DMV Sri Lanka
                                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                  </svg>
                                </Link>
                  </div>
                <p><strong className='text-blue-900 text-1xl hover:text-white'> Local Rules </strong> It's essential to be aware of and adhere to Sri Lanka's traffic rules and regulations. Sri Lanka follows left-hand traffic, and road conditions may vary.
                  
                </p>
                <p><strong className='text-blue-900 text-1xl'> Insurance </strong>
                  Ensure that you have appropriate insurance coverage for driving in Sri Lanka. Some rental car agencies may include insurance as part of the rental package.
                </p>
                <p><strong className='text-blue-900 text-1xl'> Renting a Vehicle </strong>
                  If you plan to rent a vehicle, you can do so from recognized rental agencies. They may require a valid foreign driver's license and, in some cases, an IDP.
                  </p>


                    </div>
                  </div>
            
                    
            </div>
                  </div>

            </div>
        </div>
        

  );
}

export default LandingBottom