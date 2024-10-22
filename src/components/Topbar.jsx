import React from 'react'

const Topbar = () => {
    return (
        <div className='flex font-sans px-6 shadow-md'>
            <div className='flex justify-center items-center gap-2'>
                <h2 className='font-semibold'>Payouts</h2>
                <span className='flex text-[10px] font-sans font-normal text-gray-600 gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                    How it works
                </span>

            </div>
            <form class="w-80 mx-auto bg-white">
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-3 h-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full bg-gray-100 p-2 ps-10 my-2 text-xs rounded-sm" placeholder="Search features, tutorials, etc..." required />
                </div>
            </form>
        </div>
    )
}

export default Topbar
