import React from 'react'

export default function About() {
    return (
        <div className='h-[] py-44  bg-[#eeeeee]'>
            <div className='mx-auto w-[80%]  '>
                <div>
                    <h1 className='text-[35px] font-semibold text-[rgb(62,69,149)] border-b-4 border-[rgb(62,69,149)] w-fit'>Haqqımızda</h1>
                </div>
                <div className='flex'>
                    <div className='w-[60%] mr-8'>
                        <div className='my-5'>
                            <h1 className='font-semibold text-[28px] text-[#002147]'>
                                Mingəçevir Hədəf kurslarına xoş gəlmisiniz
                            </h1>
                        </div>
                        <div>
                            <p className='text-[font-medium] text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, nesciunt? Explicabo quibusdam voluptate aut nostrum laborum rem rerum. Beatae natus voluptatum porro iste molestias eligendi, ratione, recusandae deleniti cum quidem illo, ab aliquid? Quasi dolore corporis totam, accusantium quas voluptas expedita facere quibusdam error vero sequi, cum iusto aspernatur debitis.Quasi dolore corporis totam, accusantium quas voluptas expedita facere quibusdam error vero sequi, cum iusto aspernatur debitis.
                            </p>
                        </div>
                        <div className='mt-5'>
                            <button className="bg-[rgb(62,69,149)] hover:bg-[#002147] text-white font-bold py-3 px-6 rounded">
                                Daha çox
                            </button>
                        </div>
                    </div>
                    <div className='w-[40%]'>
                        <img src={require("../assets/courses-9.jpg")} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
