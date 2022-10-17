import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";

export default function FeedBacks() {
    return (
        <div className=' mx-auto w-[80%] h-[50vh]'>
            <div className='mb-10'>
                <h1 className='text-[35px] font-semibold text-[rgb(62,69,149)] border-b-4 border-[rgb(62,69,149)] w-fit'>Rəylər</h1>
            </div>
            <Swiper
                rewind={true}
                navigation={true}
                // modules={[Navigation]}
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}

                className="mySwiper"
                style={{
                    height: "35vh"
                }}

            >
                <div className=''>
                    <SwiperSlide className='!h-[30vh]'>
                        <div className="w-full h-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                            <div className="w-full flex mb-4 items-center">
                                <div className="overflow-hidden rounded-full w-20 h-20 bg-gray-50 border border-gray-200">
                                    <img src="https://i.pravatar.cc/100?img=1" alt="" />
                                </div>
                                <div className="flex-grow pl-3">
                                    <h6 className="font-bold text-[20px] uppercase text-gray-600 ">Kenzie Edgar.</h6>
                                </div>
                            </div>
                            <div className="w-full">
                                <p className="overflow-y-auto h-24 text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='!h-[30vh]'>
                        <div className="w-full h-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                            <div className="w-full flex mb-4 items-center">
                                <div className="overflow-hidden rounded-full w-20 h-20 bg-gray-50 border border-gray-200">
                                    <img src="https://i.pravatar.cc/100?img=2" alt="" />
                                </div>
                                <div className="flex-grow pl-3">
                                    <h6 className="font-bold text-[20px] uppercase text-gray-600 ">Kenzie Edgar.</h6>
                                </div>
                            </div>
                            <div className="w-full">
                                <p className="overflow-y-auto h-24 text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est,  <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='!h-[30vh]'>
                        <div className="w-full h-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                            <div className="w-full flex mb-4 items-center">
                                <div className="overflow-hidden rounded-full w-20 h-20 bg-gray-50 border border-gray-200">
                                    <img src="https://i.pravatar.cc/100?img=3" alt="" />
                                </div>
                                <div className="flex-grow pl-3">
                                    <h6 className="font-bold text-sm uppercase text-gray-600">Tommie Ewart.</h6>
                                </div>
                            </div>
                            <div className="w-full">
                                <p className="overflow-y-auto h-24 text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati ullam excepturi dicta error deleniti sequi.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='!h-[30vh]'>
                        <div className="w-full h-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                            <div className="w-full flex mb-4 items-center">
                                <div className="overflow-hidden rounded-full w-20 h-20 bg-gray-50 border border-gray-200">
                                    <img src="https://i.pravatar.cc/100?img=4" alt="" />
                                </div>
                                <div className="flex-grow pl-3">
                                    <h6 className="font-bold text-sm uppercase text-gray-600">Charlie Howse.</h6>
                                </div>
                            </div>
                            <div className="w-full">
                                <p className="overflow-y-auto h-24 text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos neque reprehenderit natus, hic sequi itaque dicta nisi voluptatem! Culpa, iusto.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                            </div>
                        </div>
                    </SwiperSlide>

                </div>
            </Swiper>
        </div>
    )
}
