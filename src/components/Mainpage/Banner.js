import React from 'react'
import arrowright from '../../assets/arrowright.svg'
import vector from '../../assets/banner_vector.png'

function Banner() {
  return (
    <div className="flex flex-col h-[587px] md:h-auto items-start justify-start w-[427px]">
    <div className="flex flex-col h-[576px] md:h-auto items-start justify-start rounded-[16px] w-[426px] sm:w-full">
      <div className="bg-[#0052fe] flex flex-col gap-[35px] h-[576px] md:h-auto items-center justify-start px-4 py-[55px] rounded-[16px] w-[426px] sm:w-full">
        <div className="flex flex-col gap-3.5 h-[182px] md:h-auto items-center justify-start w-auto">
          <span
            className="leading-[40.00px] max-w-[268px] md:max-w-full text-2xl md:text-[22px] text-center text-white sm:text-xl font-bold font-inter"
          >
            Get Started with KoinX for FREE
          </span>
          <span
            className="leading-[24.00px] max-w-[327px] md:max-w-full text-center text-gray-100 text-sm font-inter font-medium"
          >
            <>
              With our range of features that you can equip for
              free,KoinX allows you to be more educated and aware of
              your tax reports.
            </>
          </span>
        </div>
        <img
          className="h-[166px] w-[178px]"
          src={vector}
          alt="frame"
        />
        <div className="flex flex-col items-center justify-start w-[61%] md:w-full">
          <div className="flex flex-col items-center justify-start w-full">
            {/* <div className="flex flex-col items-center justify-start w-full"> */}
              <button
                className="cursor-pointer bg-white flex h-12 items-center justify-center min-w-[237px] rounded-lg hover:scale-105 transition-ease-in-out duration-300"
              >
                <div className="!text-gray-900 font-semibold text-base text-left">
                  <>Get Started for FREE</>
                </div>
                <img
                    className="h-5 ml-2.5"
                    src={arrowright}
                    alt="arrow_right"
                  />
              </button>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Banner