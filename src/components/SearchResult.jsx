import React from 'react'
import { CiBookmark } from "react-icons/ci";
import { CiMenuKebab } from "react-icons/ci";

const SearchResult = () => {
  return (
    <div className='bg-[#fff] mt-[20px] py-[20px] px-[20px] shadow-lg'>
        <div className='flex justify-between rounded-md items-center'>
            <p>
                www.slvw.com
            </p>
            <h3 className='flex justify-center text-[#418CFA] items-center text-[17px]'>
                <CiBookmark  className='mr-[5px]'/>  Bookmark <CiMenuKebab className='ml-[10px]' />
            </h3>
        </div>

        <h3 className='text-[17px] font-medium mt-[13px]'>
                Climate change 2007 : The physical science basis 
        </h3>

        <h4 className='text-[14px] italic mt-[8px]'>
            IPOC Change Agenda 2007 - slvw.com
        </h4>

        <p className='text-[15px] font-medium mt-[13px]'>
            … of the human and natural drivers of climate change1, observed climate change, climate processes and attribution, and estimates of projected future climat…
        </p>
    </div>
  )
}

export default SearchResult