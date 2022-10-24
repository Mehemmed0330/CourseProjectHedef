import React from 'react'

export default function VacancyFormSecond() {
    return (
        <div>
            <form>
                <div className="grid md:grid-cols-3 md:gap-6">
                    <div className="mb-6">
                        <label for="countries" class="block mb-2 text-sm font-medium text-white dark:text-gray-400">Kompüter bilikləri</label>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Əla</option>
                            <option value="Good">Yaxşı</option>
                            <option value="Bad">Kafi</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label for="countries" class="block mb-2 text-sm font-medium text-white dark:text-gray-400">Xarici dil bilikləri</label>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Əla</option>
                            <option value="Good">Yaxşı</option>
                            <option value="Bad">Kafi</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label for="countries" class="block mb-2 text-sm font-medium text-white dark:text-gray-400">Tədris edəcəyiniz bölmə</label>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Azərbaycan</option>
                            <option value="Russian">Rus</option>
                        </select>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="mb-6">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Universitet(bakalarvr)</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required="" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">İxtisas</label>
                        <input type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="mb-6">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Orta qiymət</label>
                        <input type="number" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required="" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Qəbul ili</label>
                        <input type="number" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                </div>
                <div className="grid md:grid-cols-3 md:gap-6">
                    <div className="mb-6">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Universitet(magistr)</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required="" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Ixitsas</label>
                        <input type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Qəbul ili</label>
                        <input type="number" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                </div>
            </form>
        </div>
    )
}
