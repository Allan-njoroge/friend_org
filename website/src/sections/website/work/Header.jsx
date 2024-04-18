import React from 'react'
import Info from '@/sections/website/work/Info'

const Header = () => {
  return (
    <div className="max-w-[1440px] flex justify-center ">
      <div>
        <h1 className="my-10 text-center font-semibold text-3xl ">What Do We Do?</h1>

        <Info />
      </div>
    </div>
  )
}

export default Header