import { GoHome } from "react-icons/go";
import { HiOutlineBolt } from "react-icons/hi2";
import { IoColorPaletteOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { RiDiscountPercentLine } from "react-icons/ri";
import { PiMoneyLight } from "react-icons/pi";
import { TfiBarChart } from "react-icons/tfi";
import { LiaBullhornSolid } from "react-icons/lia";
import { GrDeliver } from "react-icons/gr";
import { PiSquaresFourLight } from "react-icons/pi";
import { LuClipboardList } from "react-icons/lu";



const Sidebar = () => {
    return (
        <div>
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-[#1e2640]">
                    <div className="flex items-center ps-2.5 mb-5">
                        <img src="/me.jpg" className="h-6 me-3 sm:h-10 rounded-full" alt="I'm Stark" />
                        <div className='flex flex-col justify-start items-start text-left'>
                            <h4 className="self-center font-semibold whitespace-nowrap dark:text-white w-[-webkit-fill-available]">Stark</h4>
                            <a href="https://imstark.xyz/" target="_blank" className='text-white text-sm underline'>Visit Store</a>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 text-white absolute left-[82%]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>

                    </div>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <GoHome />
                                <span className="ms-3">Home</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <LuClipboardList />

                                <span className="flex-1 ms-3 whitespace-nowrap">Orders</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <PiSquaresFourLight />

                                <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <GrDeliver />

                                <span className="flex-1 ms-3 whitespace-nowrap">Delivery</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <LiaBullhornSolid />

                                <span className="flex-1 ms-3 whitespace-nowrap">Marketing</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <TfiBarChart />

                                <span className="flex-1 ms-3 whitespace-nowrap">Analytics</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <PiMoneyLight />

                                <span className="flex-1 ms-3 whitespace-nowrap">Payouts</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <RiDiscountPercentLine />

                                <span className="flex-1 ms-3 whitespace-nowrap">Discounts</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <GoPeople />

                                <span className="flex-1 ms-3 whitespace-nowrap">Auidence</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <IoColorPaletteOutline />

                                <span className="flex-1 ms-3 whitespace-nowrap">Apperence</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <HiOutlineBolt />
                                <span className="flex-1 ms-3 whitespace-nowrap">Plugins</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default Sidebar
