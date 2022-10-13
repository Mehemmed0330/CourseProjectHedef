import React from 'react'
import Logo from "../assets/hedefkurslarilogo.png"
import { Link } from 'react-scroll'
import { useState, useEffect } from 'react'


export default function Header() {
    const [headerColor, setHeaderColor] = useState("white");
    const [headerText, setHeaderTextColor] = useState("rgb(62,69,149)")
    const [headerTextHover, setHeaderTextHover] = useState("white");

    const listenerScrollEvent = () => {
        // window.scrollY > 700
        //     ? setHeaderColor("rgb(62,69,149)") && setHeaderTextColor("white") && setHeaderTextHover("rgb(62,69,149)")
        //     : setHeaderColor("white") && setHeaderTextColor("rgb(62,69,149)") && setHeaderTextHover("white")
        if (window.scrollY > 700) {
            setHeaderColor("rgb(62,69,149)")
            setHeaderTextColor("white")
            setHeaderTextHover("rgb(62,69,149)")
        }
        else {
            setHeaderColor("white")
            setHeaderTextColor("rgb(62,69,149)")
            setHeaderTextHover("rgb(62,69,149)")
        }
    }


    useEffect(() => {
        window.addEventListener("scroll", listenerScrollEvent)
    }, [])

    const navbarLinks = [
        { name: "Əsas Səhifə", to: "home" },
        { name: "Haqqımızda", to: "about" },
        { name: "Kursumuz", to: "course" },
        { name: "Tələbələr", to: "blog" },
        { name: "Xəbərlər", to: "news" },
        { name: "Contact", to: "contact" },
    ]
    return (
        <header style={{ backgroundColor: headerColor, position: "fixed", width: "100%", zIndex: "1000", transition: "all ease 0.3s" }}>
            <div className='mx-auto w-[80%]'>
                <div className='flex justify-between items-center py-5'>
                    <div className='object-cover h-[50px]'>
                        <img src={Logo} alt="" className="h-[100%]" />
                    </div>
                    <div>
                        <ul className='flex'>
                            {navbarLinks.map((page, index) => (
                                <Link to={page.to} key={index} smooth={true} offset={50} duration={500} style={{ color: headerText, margin: "0px 0.5rem", fontSize: "18px", padding: "10px", transition: "all ease 0.3s", fontWeight: "600", cursor: "pointer" }}>{page.name}</Link>
                            )
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
