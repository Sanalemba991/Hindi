import React from 'react'

function HomePage() {
  return (
    <main className="flex-1 p-4 flex flex-col gap-3 sm:gap-4 justify-center text-center">
    <h1 className='font-semibold text-6xl md:text-7xl'> Language <span className='text-blue-400 bold'>Translation</span></h1>
    <h3 className='font-medium md:text-lg'>Record <span className='text-blue-400'>&rarr;</span> Transcribe <span className='text-blue-400'>&rarr;</span> Translate</h3>
    
    <button className='flex items-center text-base justify-between gap-4 mx-auto w-72 max-w-full my-4 specialBtn px-4 py-2 rounded-xl'>
        <p className='text-blue-400'>Record</p>

    <i className="fa-solid fa-microphone"></i>
    </button>
    <p className='text-base'> Or  <label className='text-blue-400 cursor-pointer hover:text-blue-600 duration-150'>
      UpLoad <input className='hidden' type='file' accept='.mp3,.wave'>
      </input></label> a mp3</p>
      <p className='italic text-slate-500'> Ask Me Anything</p>
     </main>
  
)
}

export default HomePage
