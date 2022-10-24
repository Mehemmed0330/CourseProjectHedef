import React from 'react'
import Vacancy from "./Vacancy"
import { useState } from 'react';

export default function Apply() {
    const [index, setIndex] = useState(0)


    return (
        <div className='bg-[rgb(62,69,149)] min-h-[100vh] '>
            <div className='py-[80px] w-[50%] mx-auto'>
                <div className='flex justify-center my-10'>
                    <button onClick={() => setIndex(0)} className="bg-[rgb(62,69,149)] hover:bg-white border-2 border-white hover:text-[rgb(62,69,149)] hover:border-2 text-white font-bold py-3 px-8 rounded mx-4 text-[18px]"
                        style={{
                            backgroundColor: index === 0 ? "white" : "rgb(62,69,149)",
                            color: index === 0 ? "rgb(62,69,149)" : "white"
                        }}>
                        Şagirdlərin qeydiyyatı üçün
                    </button>
                    <button onClick={() => setIndex(1)} className="bg-[rgb(62,69,149)] hover:bg-white border-2 border-white hover:text-[rgb(62,69,149)] hover:border-2 text-white font-bold py-3 px-8 rounded mx-4 text-[18px]"
                        style={{
                            backgroundColor: index === 1 ? "white" : "rgb(62,69,149)",
                            color: index === 1 ? "rgb(62,69,149)" : "white"

                        }}>
                        Müəllimlər vakansiyası
                    </button>
                </div>
                <form hidden={index !== 0}>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="mb-6">
                            <label htmlFor="text" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Adınız</label>
                            <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required="" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="text" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Soyadınız</label>
                            <input type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Emailiniz</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required="" />
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Nömrəniz</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required="" />
                        </div>
                    </div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-white dark:text-gray-400">Müracətiniz</label>
                    <textarea id="message" rows="4" className="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                    <button type="submit" className="mt-5 text-[rgb(62,64,149)] bg-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Göndərin</button>


                </form>
                <div hidden={index !== 1}>
                    <Vacancy />
                </div>


            </div>
        </div>
    )
}
