import React from 'react'
import Main from "./Main"
import About from './About'
import OurCourse from "./OurCourse"
import Counter from "./Counter"
import Blog from "./Blog"
import News from "./News"
import FeedBacks from './FeedBacks'


export default function MiddleSection() {
    return (
        <div>
            <div id='home'>
                <Main />
            </div>
            <div id='about'>
                <About />
            </div>
            <div id='course'>
                <OurCourse />
            </div>
            <div id='counter'>
                <Counter />
            </div>
            <div id='blog'>
                <Blog />
            </div>
            <div id='news'>
                <News />
            </div>
            <div id='feedback'>
                <FeedBacks />
            </div>
        </div>
    )
}
