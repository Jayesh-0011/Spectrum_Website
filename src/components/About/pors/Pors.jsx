import React from 'react'
import './Pors.css'

const Pors = (props) => {
  return (
    <>
        <div className="box  mb-[50px] p-[10px] bg-[#141E24] min-w-[160px] h-[250px] rounded-[20px] ">
            <div className="photo flex justify-center h-[150px] m-[10px]  "><img src={props.photo} className=' w-[125px] h-[125px] object-cover rounded-[50%] '/></div>
            <h2 className="content text-center">{props.content}</h2>
        </div>
    </>
  )
}

export default Pors
