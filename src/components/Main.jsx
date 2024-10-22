import React from 'react'
import RevenueCard from './RevenueCard'
import Topbar from './Topbar'
import OrdersHistory from './OrdersHistory'
import SecondryBtns from './SecondryBtns'

const Main = () => {
    return (
        <div className='bg-[#fafafa]'>
            <Topbar />
            <div className='p-4'>
                <div className='flex justify-between px-1'>
                    <h1 className='p-2 font-bold'>Overview</h1>
                    <SecondryBtns prop={
                        <>
                            {'This Month'}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </>
                    } />
                </div>
                <RevenueCard />
                <h1 className='p-2 font-thin'>Transactions | This Month</h1>
                <div className='flex gap-2 py-2'>
                    <button className='bg-gray-200 py-1 px-2 text-gray-600 rounded-2xl text-xs'>Payouts (22)</button>
                    <button className='bg-blue-400 py-1 px-2 text-gray-100 rounded-2xl text-xs/[8px]'>Refundss (6)</button>
                </div>
                <OrdersHistory />
            </div>
        </div>
    )
}

export default Main
