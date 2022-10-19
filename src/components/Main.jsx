import React from 'react'
import Slider from "react-slick";
import { Link } from "react-router-dom"


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "green" }}
            onClick={onClick}
        />
    );
}
export default function Main() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div>
            <main className='h-[100vh]'>
                <Slider {...settings}>
                    <div className='bg-[url("/src/assets/slide-1.jpg")] h-[100vh] bg-cover bg-no-repeat bg-inherit shadow-lg cursor-pointer bg-opacity-50'>
                        <div class="bg-black w-full h-full bg-opacity-60 relative">
                            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-30%] '>
                                <div className='w-[100%]'>
                                    <p className='text-white text-[55px] text-center'><h1 className='text-[rgb(255,255,255)] font-semibold inline-block'>Hədəf Kurslarının</h1> Mingəçevir filialına xoş gəlmisiniz</p>
                                </div>
                                <div className='mx-auto w-[65%] flex justify-center mt-2'>
                                    <Link to="/apply" className="text-[20px] mx-4 bg-[#002147] text-white hover:bg-[rgb(62,64,149)]  font-semibold py-4 px-10 border-none hover:border-transparent rounded">
                                        Müraciət edin
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[url("/src/assets/slider-image-2.jpg")] h-[100vh] bg-cover bg-no-repeat bg-inherit'>
                        <div class="bg-black w-full h-full bg-opacity-60 relative">
                            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-30%] '>
                                <div>
                                    <p className='text-white text-[55px] text-center'>Bizə qoşul və öz hədəfinə bizimlə birlikdə nail ol</p>
                                </div>
                                <div className='mx-auto w-[65%] flex justify-center mt-2'>
                                    <Link to="/apply" className="text-[20px] mx-4 bg-[#002147] text-white hover:bg-[rgb(62,64,149)]  font-semibold py-4 px-10 border-none hover:border-transparent rounded">
                                        Müraciət edin
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[url("/src/assets/slider-image-3.jpg")] h-[100vh] bg-cover bg-no-repeat bg-inherit'>
                        <div class="bg-black w-full h-full bg-opacity-60 relative">
                            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-30%] '>
                                <div>
                                    <p className='text-white text-[55px] text-center'>Elə indi müraciət et və hədəfinə çatmaq üçün çalış</p>
                                </div>
                                <div className='mx-auto w-[65%] flex justify-center mt-2'>
                                    <Link to="/apply" className="text-[20px] mx-4 bg-[#002147] text-white hover:bg-[rgb(62,64,149)]  font-semibold py-4 px-10 border-none hover:border-transparent rounded">
                                        Müraciət edin
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </main>
        </div>
    )
}
