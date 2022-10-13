import React from 'react'

export default function News() {
    return (
        <div className='py-44 '>
            <div className='mx-auto w-[80%]'>
                <div>
                    <h1 className='text-[35px] font-semibold text-[rgb(62,69,149)] border-b-4 border-[rgb(62,69,149)] w-fit'>Xəbərlər</h1>
                </div>
                <div className="container my-16 px-6 mx-auto">
                    <section className="mb-32 text-gray-800 text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-12 text-center text-[rgb(62,69,149)]">Dövlət İmtahan Mərkəzinin son xəbərləri</h2>
                        <div className="flex flex-wrap mb-6">
                            <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
                                <div
                                    className="ripple shadow-lg rounded-lg mb-6"
                                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img src="https://mdbootstrap.com/img/new/standard/city/018.jpg"
                                        className="w-full" alt="Louvre" />

                                </div>
                            </div>
                            <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
                                <h5 className="text-lg font-bold mb-3">Welcome to California</h5>

                                <p className="text-gray-500 mb-6">
                                    <small>Paylaşıldı <u>13.01.2022</u></small>
                                </p>
                                <p className="text-gray-500">
                                    Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                                    placerat vulputate. Ut vulputate est non quam dignissim
                                    elementum. Donec a ullamcorper diam.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap mb-6">
                            <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
                                <div
                                    className="ripple shadow-lg rounded-lg mb-6"
                                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img src={require("../assets/courses-5.jpg")}
                                        className="w-full" alt="Louvre" />
                                </div>
                            </div>
                            <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
                                <h5 className="text-lg font-bold mb-3">Exhibition in Paris</h5>
                                <p className="text-gray-500 mb-6">
                                    <small>Paylaşıldı <u>12.01.2022</u> </small>
                                </p>
                                <p className="text-gray-500">
                                    Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
                                    orci, nec ornare metus semper sed. Integer volutpat ornare erat
                                    sit amet rutrum.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap mb-6">
                            <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
                                <div
                                    className="ripple shadow-lg rounded-lg mb-6"
                                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img src="https://mdbootstrap.com/img/new/standard/city/059.jpg"
                                        className="w-full" alt="Louvre" />
                                </div>
                            </div>
                            <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
                                <h5 className="text-lg font-bold mb-3">Stock market boom</h5>
                                <p className="text-gray-500 mb-6">
                                    <small>Paylaşıldı <u>10.01.2022</u></small>
                                </p>
                                <p className="text-gray-500">
                                    Curabitur tristique, mi a mollis sagittis, metus felis mattis
                                    arcu, non vehicula nisl dui quis diam. Mauris ut risus eget
                                    massa volutpat feugiat. Donec.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
