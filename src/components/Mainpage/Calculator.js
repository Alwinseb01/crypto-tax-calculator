import React, { useEffect } from 'react'
import { Select, Input, InputAdornment, TextField } from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import aus from '../../assets/aus.svg'
import check from '../../assets/check.svg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { income_tax_rate } from '../../data/formdata';

function Calculator() {
    
    const [purchasePrice, setPurchasePrice] = React.useState();
    const [salePrice, setSalePrice] = React.useState();
    const [expenses, setExpenses] = React.useState();
    const [longTerm, setLongTerm] = React.useState(false);
    const [incomeIndex, setIncomeIndex] = React.useState();

    const [capitalGains, setCapitalGains] = React.useState();
    const [discountGains, setDiscountGains] = React.useState();
    const [netGain, setNetGain] = React.useState();
    const [taxPayable, setTaxPayable] = React.useState();


    useEffect(() => {
        setCapitalGains(salePrice - purchasePrice - expenses);  
        console.log(capitalGains)
        setDiscountGains(longTerm?capitalGains*0.5:0);
        setNetGain(capitalGains - discountGains);
        setTaxPayable(netGain*(income_tax_rate[incomeIndex]?.tax_rate/100));
        console.log("TAX", taxPayable);
    }
    , [purchasePrice, salePrice, expenses, longTerm, incomeIndex, netGain])


  return (
    <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-auto md:w-full overflow-hidden">
    <div className="flex flex-col md:h-[879px] md:h-auto items-start justify-start w-auto md:w-full">
      <div className="bg-white flex flex-col items-center justify-start p-[35px] sm:px-5 rounded-[16px] w-full">
        <div className="flex flex-col items-start justify-start mb-[23px] p-2 w-auto md:w-full">
          <div className="flex flex-col gap-10 items-center justify-start md:max-w-[713px] w-full">
            <span
              className="text-2xl md:text-4xl text-center text-gray-900 w-auto font-bold font-inter"
            >
              Free Crypto Tax Calculator Australia
            </span>
            <div className="flex flex-col gap-7 items-start justify-start w-auto md:w-full">
              <div className="flex flex-row gap-10 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col md:flex-row items-center justify-center w-auto">
                  <span
                    className="text-[15px] text-gray-900 w-content font-inter font-normal m-2"
                  >
                    Financial Year
                  </span>
                  <div className="flex flex-col h-12 md:h-auto items-start justify-start md:w-[228px]">
                <Select
                sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }, borderRadius: '10px' }}
                value={["Fy 2023-24"]}
                onChange={""}
                renderValue={(selected) => selected}
                MenuProps={""}
                style={{width:"100%", 
                backgroundColor:"#eff2f5",
                borderColor:"#eff2f5",               
            }}
                >
                <MenuItem value={"FY 2023-24"}>FY 2023-24</MenuItem>
                </Select>
                    
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center justify-center w-auto">
                  <span
                    className="text-[15px] text-gray-900 w-content font-inter font-normal m-2"
                  >
                    Country
                  </span>
                  <div className="flex flex-col h-12 md:h-auto items-start justify-start md:w-[228px]">
                <Select
                sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }, borderRadius: '10px' }}
                onChange={""}
                value={["Australia"]}
                renderValue={()=><div className="flex flex-row items-center justify-start w-auto"> <img src={aus} alt="aus" className="h-5 w-5 mr-2" /> Australia</div>}   
                style={{width:"100%", 
                backgroundColor:"#eff2f5",
                borderColor:"#eff2f5",               
                }}
                >
                <MenuItem value={"Australia"}> 
                 <img src={aus} alt="aus" className="h-5 w-5 mr-2" />
                 Australia
                 </MenuItem>
                </Select>
                    
                  </div>
                </div>
              </div>

              <div className="bg-[#c9cfdd99] h-px w-full" />

              <div className="flex flex-col md:flex-row gap-10 items-start justify-start md:max-w-[711px] w-full">
                <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                  <span className="text-[15px] text-gray-900 w-auto font-inter font-normal">
                    Enter purchase price of Crypto
                  </span>
                  <TextField
                    sx={{
                        boxShadow: 'none',
                        '.MuiOutlinedInput-notchedOutline': { border: 0 },
                        borderRadius: '10px',
                        input: { color: '#343940', lineHeight: 1.75, fontWeight: 550, fontSize: "1rem", }, 
                    }}         
                    onChange={(e)=>setPurchasePrice(e.target.value)}  
                 className='bg-[#eff2f5] w-full'  
                 placeholder='Enter Price' 
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" sx = {{color: 'black'}}>
                        $
                      </InputAdornment>
                    ),
                  }}       
                  inputProps={{ className: "font-bold text-black text-lg w-full" }}
                />
        
                </div>

                <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                  <span
                    className="text-[15px] text-gray-900 w-auto font-inter font-normal"
                  >
                    Enter sale price of Crypto
                  </span>
                  <TextField
                  onChange={(e)=>setSalePrice(e.target.value)}
                    sx={{
                        boxShadow: 'none',
                        '.MuiOutlinedInput-notchedOutline': { border: 0 },
                        borderRadius: '10px',
                        input: { color: '#343940', lineHeight: 1.75, fontWeight: 550, fontSize: "1rem", }, 
                    }}               
                 className='bg-[#eff2f5] w-full'   
                 placeholder='Enter Price'
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" sx = {{color: 'black'}}>
                        $
                      </InputAdornment>
                    ),
                  }}       
                  inputProps={{ className: "font-bold text-black text-lg w-full" }}
                />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-10 items-start justify-start max-w-[711px] w-full">
                <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                  <span
                    className="text-[15px] text-gray-900 w-auto font-inter font-normal"
                  >
                    Enter your Expenses
                  </span>
                  <TextField
                  onChange={(e)=>setExpenses(e.target.value)}
                    sx={{
                        boxShadow: 'none',
                        '.MuiOutlinedInput-notchedOutline': { border: 0 },
                        borderRadius: '10px',
                        input: { color: '#343940', lineHeight: 1.75, fontWeight: 550, fontSize: "1rem", }, 
                    }}               
                 className='bg-[#eff2f5] w-full'   
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" sx = {{color: 'black'}}>
                        $
                      </InputAdornment>
                    ),
                  }}       
                  placeholder='Enter Expenses'
                  inputProps={{ className: "font-bold text-black text-lg w-full" }}
                />
                </div>

                <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                  <span
                    className="text-gray-900 text-sm w-auto font-inter font-normal"
                  >
                    Investment Type
                  </span>
                  <div className="flex flex-row gap-2.5 items-start justify-start w-full md:w-[335px] ">
                  <div className="flex flex-col gap-1 h-[84px] items-start justify-start w-full">
                    <div 
                    className={` cursor-pointer hover:bg-[#0052fe0f] 
                        ${longTerm?`flex flex-col gap-1 h-[84px] md:h-auto items-start justify-start w-full`
                        : `bg-[#0052fe0f] border-2 border-[#0052fe] border-solid flex flex-row gap-2 h-14 items-center justify-start px-3 py-4 rounded-lg w-full`}`
                    }
                    onClick={()=>setLongTerm(false)}
                    
                    >
                      <span
                        className={
                            longTerm?`border border-gray-800 border-solid h-14 pl-3 sm:pr-5 pr-[35px] py-4 rounded-lg text-gray-800 text-lg w-full font-inter font-medium`
                            :`text-blue-800 text-lg w-auto font-inter font-medium`
                        }
                        
                      >
                        Short Term
                      </span>
                      <img
                          className={!longTerm?"h-6 w-6":"hidden"}
                          src={check}
                          alt="checkmark"
                        />
                      
                    </div>
                    <span
                        className="text-[15px] text-gray-800 w-auto font-inter font-medium"
                      >
                        <>&lt; 12 months</>
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 h-[84px] items-start justify-start w-full">
                      <div 
                      className={` cursor-pointer hover:bg-[#0052fe0f] 
                        ${longTerm?`bg-[#0052fe0f] border-2 border-[#0052fe] border-solid flex flex-row gap-2 h-14 items-center justify-start px-3 py-4 rounded-lg w-full`
                        :`flex flex-col gap-1 h-[84px] md:h-auto items-start justify-start w-full`}`}
                        onClick={()=>setLongTerm(true)}
                      >
                        <span
                          className={
                            longTerm?"text-blue-800 text-lg w-auto font-inter font-medium"
                            :"border border-gray-800 border-solid h-14 pl-3 sm:pr-5 pr-[35px] py-4 rounded-lg text-gray-800 text-lg w-full font-inter font-medium"
                          }
                          
                        >
                          Long Term
                        </span>
                        <img
                          className={longTerm?"h-6 w-6":"hidden"}
                          src={check}
                          alt="checkmark"
                        />
                      </div>
                      <span
                        className="text-[15px] text-gray-800 w-auto font-inter font-medium"
                      >
                        <>&gt; 12 Months</>
                      </span>
                    </div>
                  </div>
                </div>
              </div>


              <div className="flex flex-col md:flex-row gap-10 items-end justify-start md:max-w-[711px] w-full">
                <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                  <span
                    className="text-gray-900 text-sm w-auto font-inter font-normal"
                  >
                    Select Your Annual Income
                  </span>
                  <Select
                sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }, borderRadius: '10px',
                "& .MuiInputBase-input": {  color: '#343940', lineHeight: 1.75, fontWeight: 550, fontSize: "1rem", }, 

            }}
                 placeholder='Select an option'
                // defaultValue={income_tax_rate[2].income}
                // value={income_tax_rate[incomeIndex].income}
                // value={null}
                renderValue={(selected) => selected}
                onChange={(e)=>setIncomeIndex(income_tax_rate.find((item) => item.income === e.target.value).id)}
                MenuProps={""}
                style={{width:"100%", 
                backgroundColor:"#eff2f5",
                borderColor:"#eff2f5",               
            }}
            IconComponent={ExpandMoreIcon}
                >
                {
                    income_tax_rate.map((item, index)=>{
                        return <MenuItem key={index} value={item.income}>{item.income}</MenuItem>
                    })
                }
                </Select>
                  
                </div>

                <div className="flex flex-1 flex-col gap-2 h-[58px] md:h-auto items-start justify-start w-full">
                  <span
                    className="text-gray-800 text-sm w-auto font-inter font-normal"
                  >
                    Tax Rate
                  </span>
                  <span
                    className="text-gray-800 text-sm md:w-[268px] font-inter font-medium"
                  >
                    {income_tax_rate[incomeIndex]?.tax_amount || "-"}
                  </span>
                </div>
              </div>


              <div className="flex flex-col md:flex-row gap-10 items-start justify-start md:max-w-[711px] w-full">
                <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                  <span
                    className="text-[15px] text-gray-900 w-auto font-inter font-normal"
                  >
                    Capital gains amount
                  </span>
                <div className="bg-[#eff2f5] w-full border-0 rounded-lg flex items-center p-3">
                    <div className="text-black px-2 font-bold text-lg" style={{ lineHeight: "1.75" }}>$</div>
                    <div className="text-black text-lg font-bold w-full" style={{ lineHeight: "1.75" }}>
                        {capitalGains || "0000"}
                    </div>
                </div>
                </div>
                <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                  <span
                    className="text-[15px] text-gray-900 w-auto font-inter font-normal"
                  >
                    Discount for long term gains
                  </span>
                <div className="bg-[#eff2f5] w-full border-0 rounded-lg flex items-center p-3">
                    <div className="text-black px-2 font-bold text-lg" style={{ lineHeight: "1.75" }}>$</div>
                    <div className="text-black text-lg font-bold w-full" style={{ lineHeight: "1.75" }}>
                        {discountGains || "0000"}
                    </div>
                </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-10 items-start justify-start md:max-w-[713px] w-full">
                <div className="bg-[#ebf8f4] flex flex-1 flex-col gap-2 h-[97px] md:h-auto items-center justify-center p-2 rounded-lg w-full">
                  <span
                    className="text-base text-center text-gray-900 w-auto font-inter font-medium"
                  >
                    Net Capital gains tax amount
                  </span>
                  <span
                    className="text-2xl md:text-[22px] text-center text-[#0fba83] sm:text-xl w-auto font-bold font-inter"
                  >
                    ${netGain|| "0000"}
                  </span>
                </div>
                <div className="bg-blue-50 flex flex-1 flex-col gap-2 h-[97px] md:h-auto items-center justify-center p-2 rounded-lg w-full">
                  <span
                    className="text-base text-center text-gray-900 w-auto font-inter font-medium"
                  >
                    The tax you need to pay*
                  </span>
                  <span
                    className="text-2xl md:text-[22px] text-blue-800 text-center sm:text-xl w-auto font-bold font-inter"
                  >
                    ${taxPayable|| "0000"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Calculator