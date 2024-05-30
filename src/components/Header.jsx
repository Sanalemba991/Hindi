import React from 'react'

function Header() {
  return (
    <div>
      <header className="flex items-center justify-between gap-4">
          <h1 className='font-mdeium'>
            Language
            <span className="text-blue-400 bold">Translation</span>
          </h1>
          <button className="flex items-center gap-2
          specialBtn px-4 text-sm py-2 rounded-lg text-blue-400">
            <p>New</p>
            <i className="fa-solid fa-plus"></i>
          </button>
        </header>
    </div>
  )
}

export default Header
