import React from 'react'
import ShowMoreText from "react-show-more-text";

export default function News() {
    return (
        <div className='pt-44 '>
            <div className='mx-auto w-[80%]'>
                <div>
                    <h1 className='text-[35px] font-semibold text-[rgb(62,69,149)] border-b-4 border-[rgb(62,69,149)] w-fit'>Xəbərlər</h1>
                </div>
                <div className="container my-16 px-6 mx-auto">
                    <section className="mb-32 text-gray-800 text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-12 text-center text-[rgb(62,69,149)]">Dövlət İmtahan Mərkəzinin son xəbərləri</h2>
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
                    </section>
                </div>
            </div>
        </div>
    )
}
