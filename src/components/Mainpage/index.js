import React from 'react'
import Calculator from './Calculator'
import Banner from './Banner'
import Faq from '../Faq'

function Mainpage() {
  return (
   <>
   <div className="flex flex-col overflow-hidden gap-5 max-w-[1328px] mt-7 mb-4 mx-auto h-full w-full md:flex-row">
    <Calculator/>
    <Banner/>
  </div> 
  <Faq/>
  </>
  )
}

export default Mainpage