import React from 'react'
import Calculator from './Calculator'
import Banner from './Banner'

function Mainpage() {
  return (
    <div className="flex flex-row gap-5 max-w-[1328px] mt-7 mb-4 mx-auto h-full w-full">
    <Calculator/>
    <Banner/>
  </div>  )
}

export default Mainpage