import React from 'react'

function Header() {
  return (
    <div>
      <header className="flex items-center justify-between gap-4">
       <a href="/">   <h1 className='font-mdeium'>
            Language
            <span className="text-orange-400 bold">Translation</span>
          </h1></a>
        <a  href="/" className="flex items-center gap-2
          specialBtn px-4 text-sm py-2 rounded-lg text-orange-400">
            <p>New</p>
            <i className="fa-solid fa-plus"></i>
          </a> 
        </header>
    </div>
  )
}

export default Header