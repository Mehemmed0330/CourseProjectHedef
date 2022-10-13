import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
import { MdWork } from 'react-icons/md'

export default function Counter() {
    return (
        <div className='py-32'>
            <div className='bg-[url("/src/assets/counter-image.jpg")] h-[50vh] bg-cover bg-center bg-no-repeat bg-inherit shadow-lg bg-opacity-50'>
                <div class="bg-black w-full h-full bg-opacity-60 relative">
                    <div className='flex py-20 w-[40%] mx-auto justify-between'>
                        <div className='text-white mr-5 text-center'>
                            <FaGraduationCap className='text-[100px]' />
                            <h1 className='text-[22px] font-semibold'>97%</h1>
                            <span className='text-[25px] font-bold'>Məzunlar</span>
                        </div>
                        <div className='text-white mr-5 text-center'>
                            <BsFillPersonFill className='text-[100px]' />
                            <h1 className='text-[22px] font-semibold'>3000+</h1>
                            <span className='text-[25px] font-bold'>Şagird</span>
                        </div>
                        <div className='text-white mr-5 text-center'>
                            <MdWork className='text-[100px]' />
                            <h1 className='text-[22px] font-semibold'>30+</h1>
                            <span className='text-[25px] font-bold'>Müəllim</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
