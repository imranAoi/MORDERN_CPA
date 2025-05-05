import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { RiContactsBookFill } from "react-icons/ri"

export default function Header() {
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const toggleSearch = () => setShowSearch(!showSearch)

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
    
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
         
          <div className="flex items-center">
            <RiContactsBookFill className="h-8 w-8 text-white" />
            <span className="ml-2 text-xl font-light text-white">CPA</span>
          </div>

          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">About us</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className={`relative transition-all duration-300 ${showSearch ? 'w-64' : 'w-10'}`}>
              {showSearch ? (
                <form onSubmit={handleSearch} className="w-full">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="w-full rounded-full bg-white/20 py-1.5 px-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    autoFocus
                  />
                </form>
              ) : (
                <button
                  onClick={toggleSearch}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors"
                  aria-label="Search"
                >
                  <FaSearch className="h-5 w-5" />
                </button>
              )}
            </div>

            <button className="rounded-full bg-purple-700 px-6 py-2 text-white hover:bg-purple-800 transition-colors">
              Get in touch
            </button>
          </div>

          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={toggleSearch}
              className="text-white hover:text-purple-300 transition-colors"
              aria-label="Search"
            >
              <FaSearch className="h-5 w-5" />
            </button>
            <button className="rounded-full bg-purple-700 px-4 py-1.5 text-sm text-white">
              Contact
            </button>
          </div>
        </div>


        {showSearch && (
          <div className="pb-3 md:hidden">
            <form onSubmit={handleSearch} className="w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full rounded-full bg-white/20 py-2 px-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                autoFocus
              />
            </form>
          </div>
        )}
      </div>
    </header>
  )
}