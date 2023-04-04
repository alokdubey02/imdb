"use client";
import { ThemeProvider } from 'next-themes'
import React from 'react'

export default function Providers({children}) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className='dark:bg-gray-800 dark:text-gray-200 text-gray-900 transition-colors duration-300 min-h-screen select-none'>
        {children}
      </div>
    </ThemeProvider>

  )
}
