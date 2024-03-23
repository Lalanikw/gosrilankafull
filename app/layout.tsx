"use client"

import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ChatBot from '../components/Chatbot';

const raleway = Raleway ({subsets:['latin']})

 const metadata = {
  title: 'Sri Lanka | Travel Information',
  description: 'Sri Lanka travel information site. Search for places to see, stay and eat. Find information such as VISA and Driving Licensing.Read about the history and current situation of the Island. Plan for weddings, events and photography. Checkout the major festivals. Reach out for trip tips from locals'
 }

export default function RootLayout({
  children,
}: {
    children: React.ReactNode;
  }) {

  return (
    <>
      <html lang="en">
        <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          
          <link rel="icon" href='/logo.jpg' />
          <link rel="preload" href="https://www.gotravelsrilanka.com/_next/static/css/40292f52c9994538.css" as="style"/>

          
          <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
          <style>
            {`
              df-messenger {
                --df-messenger-bot-message: #0D47A1;
                --df-messenger-button-titlebar-color: #000000;
                --df-messenger-chat-background-color:  000000;
                --df-messenger-font-color: white;
                --df-messenger-send-icon: #000000;
                --df-messenger-user-message: #479b3d;
              }
            `}
          </style>
          </head>
              
        <body className={raleway.className} >
          
                    <Header />
                    {children}
                  <Footer />
                  <ChatBot />
             
            </body>
      </html>

      </>
  )
}
