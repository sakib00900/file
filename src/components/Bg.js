import React from 'react'

const Bg = () => {
  return (
    <div className='fixed z-10 w-full h-screen'>
      <div className='w-full py-10 flex justify-center text-zinc-400 font-semibold text-xl absolute top-[5%] '>My Documents</div>
        <h1 className='absolute top-1/2 font-semibold left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tight text-zinc-900'>Docs.</h1>
    </div>
  )
}

export default Bg
