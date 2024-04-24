import React from 'react'
import Image from 'next/image'
import { SocialIcon } from 'react-social-icons'

function Footer() {
  return (
    <footer className='mt-5'>

      <div className="relativecontainer mx-auto grid sm:grid-cols-3 lg:grid-cols-3 gap-8 p-2 bg-blue-950 text-white">
        {/* Social Media Links */}

        <div className='grid-col-1'>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <ul className="flex gap-4 text-center">
            <li>
              <SocialIcon target="_blank" url="https://www.facebook.com/profile.php?id=61556607658302" />
            </li>
            <li>
              <SocialIcon target="_blank" url="https://instagram.com" />
            </li>
            <li>
              <SocialIcon target="_blank" url="https://www.youtube.com/@farawesomeworld" />
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p>Email: gotravelsrilanka94@gmail.com</p>

        </div>

        <div className="col-span-2 lg:col-span-1 pt-10">
          <p className="text-sm">&copy; 2024 gotravelsrilanka. All rights reserved.</p>
        </div>
      </div>

    </footer>
  )
}

export default Footer
