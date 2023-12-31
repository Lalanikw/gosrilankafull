"use client"

import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatBot from '@/components/Chatbot'
import { useEffect, useState } from 'react'
import { UserLocationContext } from '@/context/UserLocationContext'

const raleway = Raleway ({subsets:['latin']})

 const metadata: Metadata = {
  title: 'Sri Lanka| Travel Information',
  description: 'Sri Lanka travel information site. Search for places to see, stay and eat. Find information such as VISA and Driving Licensing.Read about the history and current situation of the Island. Plan for weddings, events and photography. Reach out for trip tips from locals'
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
