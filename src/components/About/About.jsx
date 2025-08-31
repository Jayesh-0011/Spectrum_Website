import React from 'react'
import './About.css'
import Pors from './pors/Pors'

const About = () => {
    return (
        <div className='about text-center'> 
            <h1 className='text-[3em] font-bold'>About Us</h1>
            <div className="intro mx-[400px] text-[1rem] leading-[1.6]  text-center my-50px "  >
                <h1 className='text-center'>Lorem ipsum dolor sit amet.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis fugiat sapiente earum tempore totam, quos atque ex, commodi adipisci, aut nulla dicta. Ex ipsum, necessitatibus corrupti dolores fuga eaque quae dolor qui distinctio quidem doloribus officia pariatur, nemo quos, deserunt molestias harum? Impedit neque porro eius ducimus sit, laborum eos.</p>
            </div>
            <div className="pors m-[20px] text-[#ffffff] my-[50px] py-[1px] shadow-[0_0_20px_rgba(0,0,0,0.8)] rounded-[20px] ">
                <h1 className="heading text-center p-[20px] text-[2em] font-bold ">Our POR's</h1>
                <div className="idcard flex gap-[100px] mx-[80px] p-[50px] overflow-x-auto scroll-smooth ">
                    <Pors photo="https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg" content="Ram" />
                    <Pors photo="https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg" content="Ram" />
                    <Pors photo="https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg" content="Ram" />
                    <Pors photo="https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg" content="Ram" />
                    <Pors photo="https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg" content="Ram" />
                    <Pors photo="https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg" content="Ram" />
                    <Pors photo="https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg" content="Ram" />
                    <Pors photo="https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg" content="Ram" />
                    <Pors photo="https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg" content="Ram" />
                    <Pors photo="https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg" content="Ram" />
                </div>
                
            </div>
        </div>
    )
}

export default About
