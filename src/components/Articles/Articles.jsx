 import React from 'react'
import './Articles.css'
import Atbox from './articlebox/Atbox'

const Articles = () => {
    return (
        <div className='articles m-[25px] p-[20px] rounded-[12px] text-[#ffffff]  '>
            <div><h1 className='flex justify-center text-[3em] mb-[20px] '>Articles</h1></div>
            <div className='articleboxes m-[20px] p-[10px] flex flex-wrap justify-items-center gap-[20px]'>
                <Atbox img="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg" title="lorem" desc="lorem22"/>
                <Atbox img="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg" title="lorem" desc="lorem22"/>
                <Atbox img="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg" title="lorem" desc="lorem22"/>
                <Atbox img="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg" title="lorem" desc="lorem22"/>
                <Atbox img="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg" title="lorem" desc="lorem22"/>
                <Atbox img="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg" title="lorem" desc="lorem22"/>
                <Atbox img="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg" title="lorem" desc="lorem22"/>
                <Atbox img="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg" title="lorem" desc="lorem22"/>
            </div>
        </div>
    )
}

export default Articles
