import type { Metadata } from 'next'
import './globals.css'
import { useState, useEffect } from 'react'
import { Toggle } from '@/components/ui/toggle'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <html lang="en">
      <body>
        <header className="flex justify-end p-4">
          <Toggle
            variant="outline"
            size="sm"
            onClick={toggleDarkMode}
            className="dark-mode-toggle"
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </Toggle>
        </header>
        {children}
      </body>
    </html>
  )
}
