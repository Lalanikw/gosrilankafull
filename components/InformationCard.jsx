"use client"

import React, { useState } from 'react';
import './style.css';
import Image from 'next/image';
import Link from 'next/link';

function InformationCard() {
  const [state, setState] = useState(1);

  const action = (index) => {
    setState(index)
  }


  return (
    <div className="box p-5">
      <div className="tabs">
            <div onClick={() => action(1)}
              className={`${state===1 ? 'tab active-tab': 'tab'}`}
            >Flying Times
            </div>

            <div onClick={() => action(2)}
              className={`${state===2 ? 'tab active-tab': 'tab'}`}
            >Calendar
            </div>

            <div onClick={() => action(3)}
              className={`${state===3 ? 'tab active-tab': 'tab'}`}
              >More Information
        </div>

      </div>

      <div className="content-tabs">
        <div className={`${state === 1 ? 'content active-content'
          : 'content'}`}>
          <div className='flex sm:flex-row'>

            <Image src='/Map_time.jpg' alt='map' width={850} height={200}
              className='information-image w-2/3 h-2/3 pt-10 p-3' />
            <div className='information p-10'>
                  <p className='pb-5'  >

                Flying to Sri Lanka can be an exciting experience, offering travelers the opportunity to explore a
                country known for its rich history, diverse landscapes, and vibrant culture. For more information, please contact us.  <br />
                  </p>
              <Link href="/ContactUs"><button className='p-3 bg-blue-900 rounded-full text-white'>Contact Us &#x27A4;</button></Link>
              </div>

          </div>
        </div>

        <div className={`${state === 2 ? 'content active-content'
          : 'content'}`}>
          <h2 className='p-5'>Events and Holidays</h2>
          <hr className="" />
          <p>
            Aperiam modi, expedita quos doloremque autem ipsum itaque incidunt ipsam reprehenderit
            fuga! Dolores quisquam eius cum accusamus? Aperiam modi, expedita quos doloremque autem
            ipsum itaque incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum accusamus?
          </p>
          <Calendar/>
        </div>

        <div className={`${state === 3 ? 'content active-content'
          : 'content'}`}>
          <h2 className='p-5'>Coming soon</h2>
          <hr className="" />
          <p>
            Aperiam modi, expedita quos doloremque autem ipsum itaque incidunt ipsam reprehenderit
            fuga! Dolores quisquam eius cum accusamus? Aperiam modi, expedita quos doloremque autem
            ipsum itaque incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum accusamus?
          </p>
        </div>
      </div>
    </div>
  );
}

export default InformationCard;
