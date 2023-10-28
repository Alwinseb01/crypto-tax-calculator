import React from 'react'
import { faqData } from '../../data/faqdata';

function Faq() {
      
      return (
        <div className="flex flex-col items-start justify-start max-w-[881px] pb-5 w-full overflow-hidden">
        <div className="bg-white flex flex-col items-center justify-start p-[17px] rounded-[16px]  mb-4">
          <div className="flex flex-col gap-6 items-start justify-start mb-[23px] mt-1.5 w-auto md:w-full">
            <span className="text-3xl sm:text-[26px] md:text-[28px] text-[#0f1629] w-[416px] font-bold font-inter">
              Frequently Asked Questions
            </span>
            <div className="flex flex-col gap-[15px] items-start justify-start w-auto md:w-full">
              {faqData.map((faq, index) => (
                <div key={index} className="flex flex-col gap-2.5 h-[173px] p-4 h-auto items-start justify-start w-full">
                  <span className="text-[#0f1629] text-xl w-auto font-bold font-inter">
                    {faq.question}
                  </span>
                  <span className="leading-[160.00%] max-w-[830px] md:max-w-full text-base text-gray-800 font-inter font-medium">
                    {faq.answer}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      );
}

export default Faq