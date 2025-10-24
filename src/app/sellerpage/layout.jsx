import React from 'react'
import { BsEnvelope } from 'react-icons/bs'
import { CgNotes } from 'react-icons/cg'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { IoSearchOutline, IoSettingsOutline } from 'react-icons/io5'
import { PiShoppingCartThin } from 'react-icons/pi'
import { RiContactsFill } from 'react-icons/ri'
import { TbLogout } from 'react-icons/tb'
import { TfiHome } from 'react-icons/tfi'
import Cards from '../../components/shared/Cards'


const layout = ({ children }) => {


    return (
        <div className='w-full h-screen bg-linear-to-r from-[#050544] to-[#030411] flex justify-between text-[#CCCCCC] font-sora'>

            <section className='w-[23.3%] h-[100%] bg-gradient-to-r from-[#040342] to-[#0f0b76] flex flex-col '>
                <article className='w-[100%] h-[14%]  flex p-7  '>
                    <h1 className='text-[35px] font- pl-5 font-sora'>NEXA</h1>
                </article>

                <article className='w-[100%] h-[65%] bg-amber-40 pl-8 p-5 flex gap-2 flex-col'>

                    <div className='w-[100%] h-[11%] bg-[#04041C] flex rounded-md text-[18px] p-3 cursor-pointer'>
                        <TfiHome className='size-[23px]' />
                        <p className='pl-5'>Dashboard</p>
                    </div>

                    <div className='w-[100%] h-[11%] bg-amber-5 flex rounded-md  text-[18px] p-3 cursor-pointer'>
                        <RiContactsFill className='size-[23px]' />
                        <p className='pl-5'>Customer</p>
                    </div>

                    <div className='w-[100%] h-[11%] flex rounded-md text-[18px] p-3 cursor-pointer'>
                        <PiShoppingCartThin className='size-[23px]' />
                        <p className='pl-5'>Products</p>
                    </div>

                    <div className='w-[100%] h-[11%] flex rounded-md text-[18px] p-3 cursor-pointer'>
                        <CgNotes className='size-[23px]' />
                        <p className='pl-5'>Orders</p>
                    </div>
                </article>

                <article className='w-[100%] h-[21%] pl-8 flex gap-4 flex-col bg-amber-10'>
                    <div className='w-[100%] h-[11%] flex rounded-md text-[18px] p-3 cursor-pointer'>
                        <IoSettingsOutline className='size-[23px]' />
                        <p className='pl-5'>Setting</p>
                    </div>

                    <div className='w-[100%] h-[11%] flex rounded-md text-[18px] p-3 cursor-pointer'>
                        <TbLogout className='size-[23px]' />
                        <p className='pl-5'>Logout</p>
                    </div>
                </article>

            </section>

            <div className='w-[75%] h-[100%]   flex justify-between flex-col'>
                <article className='w-[98.5%] h-[30%] bg-amber-60 flex justify-between flex-col pt-3'>
                    <div className='w-full h-[38%] bg-[#07044E] rounded-[14px] flex justify-between items-center'>
                        <p className='text-[25px] pl-4 font-bold text-amber-50'>Hello, Robert Jake ✋</p>

                        <span className='w-[60%] h-[100%] bg-amber-60 flex justify-between items-center'>

                            <article className='w-[63%] h-[40%] bg-[#07044] flex justify-between text-blue-50 items-center'>

                                <div className='w-[77%] h-full bg-[#2D2A87] rounded-2xl text-[13px] flex items-center pl-4'>
                                    <IoSearchOutline className='size-[16px]' />

                                    <input type="text" placeholder='Search your products' className='w-[89%] h-full pl-2 outline-0' />

                                </div>

                                <div className='w-[9%] h-full  bg-[#2D2A87] rounded-[50%] flex justify-center items-center'>
                                    <IoIosNotificationsOutline className='size-[19px]' />
                                </div>

                                <div className='w-[9%] h-full  bg-[#2D2A87] rounded-[50%] flex justify-center items-center'>
                                    <BsEnvelope />
                                </div>

                            </article>

                            <article className='w-[33%] h-[70%] bg-[#545370]'>r</article>
                        </span>

                    </div>

                    <div className='w-full h-[45%]  rounded-[14px] flex justify-between'>
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                    </div>
                </article>

                <article className='w-full h-[61%] bg-amber-600'>

                    {children}

                </article>
            </div>
        </div>
    )
}

export default layout