import React from 'react'

const BirthdayCard = () => {
  return (
    <div className=' flex justify-between border-b mb-3 dark:border-white border-black'>
        <div>
            <p className=' text-black dark:text-blue-200 font-thin text-sm italic pl-1'>@prechy</p>
            <p>John Doe</p>
            <p className=' text-black dark:text-blue-200 font-thin text-sm pl-1'>00th january</p>
        </div>
        <div className=' flex items-center'>
            <h1 className=' font-extrabold'>in100days</h1>
        </div>
    </div>
  )
}

export default BirthdayCard