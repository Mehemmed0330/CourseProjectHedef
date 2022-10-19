import React from 'react'
import ShowMoreText from "react-show-more-text";
import { useState } from 'react';

export default function News() {
    const [index, setIndex] = useState(0)
    return (
        <div className='pt-44 '>
            <div className='mx-auto w-[80%]'>
                <div>
                    <h1 className='text-[35px] font-semibold text-[rgb(62,69,149)] border-b-4 border-[rgb(62,69,149)] w-fit'>Xəbərlər</h1>
                </div>
                <div className="container my-10 px-6 mx-auto">
                    <div className='flex justify-center my-10'>
                        <button onClick={() => setIndex(0)} className="bg-[rgb(62,69,149)] hover:bg-white border-2 border-[rgb(62,69,149)] hover:text-[rgb(62,69,149)] hover:border-2 text-white font-bold py-3 px-8 rounded mx-4 text-[18px]"
                            style={{
                                backgroundColor: index === 0 ? "rgb(62,69,149)" : "white",
                                color: index === 0 ? "white" : "rgb(62,69,149)"

                            }}>
                            DIM
                        </button>
                        <button onClick={() => setIndex(1)} className="bg-[rgb(62,69,149)] hover:bg-white border-2 border-[rgb(62,69,149)] hover:text-[rgb(62,69,149)] hover:border-2 text-white font-bold py-3 px-8 rounded mx-4 text-[18px]"
                            style={{
                                backgroundColor: index === 1 ? "rgb(62,69,149)" : "white",
                                color: index === 1 ? "white" : "rgb(62,69,149)"

                            }}>
                            Hədəf
                        </button>

                    </div>
                    <section hidden={index !== 0} className="mb-32 text-gray-800 text-center md:text-left">
                        <div className="flex flex-wrap mb-6 cursor-pointer">
                            <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
                                <div
                                    className="ripple shadow-lg rounded-lg"
                                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img src="https://mdbootstrap.com/img/new/standard/city/018.jpg"
                                        className="w-full" alt="Louvre" />

                                </div>
                            </div>
                            <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
                                <ShowMoreText
                                    lines={1}
                                    expanded={false}
                                    more={false}
                                    less={false}
                                    className="text-lg font-bold mb-3">Stock market boom
                                </ShowMoreText>
                                <p className="text-gray-500 mb-6">
                                    <small>Paylaşıldı <u>13.01.2022</u></small>
                                </p>
                                <ShowMoreText
                                    lines={3}
                                    expanded={false}
                                    more={false}
                                    less={false}
                                    className="text-gray-500">
                                    Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                                    placerat vulputate. Ut vulputate est non quam dignissim
                                    elementum. Donec a ullamcorper diam.
                                </ShowMoreText>
                            </div>
                        </div>
                        <div className="flex flex-wrap mb-6 cursor-pointer">
                            <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
                                <div
                                    className="ripple shadow-lg rounded-lg"
                                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img src={require("../assets/courses-5.jpg")}
                                        className="w-full" alt="Louvre" />
                                </div>
                            </div>
                            <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
                                <ShowMoreText
                                    lines={1}
                                    expanded={false}
                                    more={false}
                                    less={false}
                                    className="text-lg font-bold mb-3">Stock market boom
                                </ShowMoreText>                                <p className="text-gray-500 mb-6">
                                    <small>Paylaşıldı <u>12.01.2022</u> </small>
                                </p>
                                <ShowMoreText
                                    lines={3}
                                    expanded={false}
                                    more={false}
                                    less={false}
                                    className="text-gray-500">
                                    Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                                    placerat vulputate. Ut vulputate est non quam dignissim
                                    elementum. Donec a ullamcorper diam.
                                </ShowMoreText>
                            </div>
                        </div>
                        <div className="flex flex-wrap mb-6 cursor-pointer">
                            <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
                                <div
                                    className="ripple shadow-lg rounded-lg "
                                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img src="https://mdbootstrap.com/img/new/standard/city/059.jpg"
                                        className="w-full" alt="Louvre" />
                                </div>
                            </div>
                            <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
                                <ShowMoreText
                                    lines={1}
                                    expanded={false}
                                    more={false}
                                    less={false}
                                    className="text-lg font-bold mb-3">Stock market boom
                                </ShowMoreText>
                                <p className="text-gray-500 mb-6">
                                    <small>Paylaşıldı <u>10.01.2022</u></small>
                                </p>
                                <ShowMoreText
                                    lines={3}
                                    expanded={false}
                                    more={false}
                                    less={false}
                                    className="text-gray-500">
                                    Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                                    placerat vulputate. Ut vulputate est non quam dignissim
                                    elementum. Donec a ullamcorper diam.
                                </ShowMoreText>
                            </div>
                        </div>
                        <div className='py-6 mx-auto w-[50%] flex justify-center'>
                            <button className="bg-[rgb(62,69,149)] hover:bg-[#002147] text-white font-bold py-4 px-10 rounded">
                                Daha çox
                            </button>
                        </div>
                    </section>
                    <section hidden={index !== 1} className="mb-32 text-gray-800 text-center md:text-left">
                        <div className="flex flex-wrap mb-6 cursor-pointer">
                            <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
                                <div
                                    className="ripple shadow-lg rounded-lg"
                                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img src={require("../assets/courses-2.jpg")}
                                        className="w-full" alt="Louvre" />

                                </div>
                            </div>
                            <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
                                <ShowMoreText
                                    lines={1}
                                    expanded={false}
                                    more={false}
                                    less={false}
                                    className="text-lg font-bold mb-3">Imtahan vaxtlari
                                </ShowMoreText>
                                <p className="text-gray-500 mb-6">
                                    <small>Paylaşıldı <u>13.01.2022</u></small>
                                </p>
                                <ShowMoreText
                                    lines={3}
                                    expanded={false}
                                    more={false}
                                    less={false}
                                    className="text-gray-500">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid recusandae id sed ab corrupti non temporibus fuga alias, quia ad asperiores odit voluptatum ratione deleniti.
                                </ShowMoreText>
                            </div>
                        </div>
                        <div className="flex flex-wrap mb-6 cursor-pointer">
                            <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
                                <div
                                    className="ripple shadow-lg rounded-lg"
                                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img src={require("../assets/courses-10.jpg")}
                                        className="w-full" alt="Louvre" />
                                </div>
                            </div>
                            <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
                                <ShowMoreText
                                    lines={1}
                                    expanded={false}
                                    more={false}
                                    less={false}
                                    className="text-lg font-bold mb-3">Bayraminiz mubarek
                                </ShowMoreText>
                                <p className="text-gray-500 mb-6">
                                    <small>Paylaşıldı <u>12.01.2022</u> </small>
                                </p>
                                <ShowMoreText
                                    lines={3}
                                    expanded={false}
                                    more={false}
                                    less={false}
                                    className="text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate explicabo natus inventore adipisci exercitationem unde itaque, facere amet doloremque repellendus!
                                </ShowMoreText>
                            </div>
                        </div>
                        <div className="flex flex-wrap mb-6 cursor-pointer">
                            <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
                                <div
                                    className="ripple shadow-lg rounded-lg "
                                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img src={require("../assets/courses-9.jpg")}
                                        className="w-full" alt="Louvre" />
                                </div>
                            </div>
                            <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
                                <ShowMoreText
                                    lines={1}
                                    expanded={false}
                                    more={false}
                                    less={false}
                                    className="text-lg font-bold mb-3">Stock market boom
                                </ShowMoreText>
                                <p className="text-gray-500 mb-6">
                                    <small>Paylaşıldı <u>10.01.2022</u></small>
                                </p>
                                <ShowMoreText
                                    lines={3}
                                    expanded={false}
                                    more={false}
                                    less={false}
                                    className="text-gray-500">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita pariatur error, tempora temporibus quae dolore.
                                </ShowMoreText>
                            </div>
                        </div>
                        <div className='py-6 mx-auto w-[50%] flex justify-center'>
                            <button className="bg-[rgb(62,69,149)] hover:bg-[#002147] text-white font-bold py-4 px-10 rounded">
                                Daha çox
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
