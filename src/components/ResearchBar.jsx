import React from 'react'
import { CiLocationArrow1 } from "react-icons/ci";
import { VscDebugRestart } from "react-icons/vsc";
import { IoSearch } from "react-icons/io5";
import SearchResult from './SearchResult';

const ResearchBar = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-[#E6F0F5]'>
        <div className='w-[550px] h-[528px] overflow-y-scroll'>
            <div className='flex justify-between shadow-lg py-[10px] px-[24px] rounded-lg bg-[#fff] items-center '>
                <div className='text-[28px]'>
                  <CiLocationArrow1 />
                </div>
                <div>
                   <button className='text-[#fff] flex justify-center items-center bg-[#11502A] px-[20px] py-[8px] rounded-lg'>Originality Score 8%
                   <VscDebugRestart className='ml-[5px]'/></button>
                </div>
            </div>

            {/* Tabs */}

            <div className='py-[10px] px-[20px] shadow-lg rounded-lg bg-[#fff] mt-[10px]'>
                <ul className='uppercase bg-[#EBEBFA] flex justify-between items-center px-[20px] rounded-lg font-medium text-[#418CFA] py-[7px]'>
                    <li>
                        Summarise
                    </li>
                    <li>
                        Elaborate
                    </li>
                    <li className='text-[#fff] bg-[#418CFA] px-[15px] py-[5px] rounded-lg '>
                        Research
                    </li>
                    <li>
                        Chat With PDF
                    </li>
                </ul>

                {/* Search Bar */}

                <div className='bg-[#fff] pt-[20px]'>
                   <div className='flex justify-between items-center'>
                       <input className='h-[37px] w-[88%] outline-none px-[20px] bg-[#EBF5FF] rounded-md' type='text'/>
                       <button className='text-[#fff] bg-[#3782F5] px-[12px] text-[23px] py-[6px] rounded-md'><IoSearch /></button>
                   </div>
                </div>

                {/*  Result */}

                <SearchResult />

                <SearchResult />

                <SearchResult />
                <SearchResult />

            </div>
        </div>
    </div>
  )
}

export default ResearchBar