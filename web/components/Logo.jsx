'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'


export default function Logo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
 {/* To-do: replace placeholder logo with pear logo */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Pear</span>
              <img
                className="h-8 w-auto"
                src="pear_logo.svg"
                alt="Pear Logo"
              />
            </a>
          </div>
        </nav>

      </header>


       </div>   

  )
}
