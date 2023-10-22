"use client"
// import {div, ChevronDownIcon} from '@radix-ui/react-icons'
import { useState } from 'react'
interface DropDownProps{
    title:string;
    icon:any;
}
export default function DropDown({title, icon:Icon}: DropDownProps){
    const [hidden, isHidden] = useState(true)
    const [popularTopicChoice, setPopularTopicChoice] = useState(['data', 'data', 'data'])
    return(
        <div className='w-full flex items-center flex-col'>
        <div className='flex w-10/12 text-[#858585] justify-between items-center'>
        <div className='flex gap-4 items-center' onClick={()=>isHidden(!hidden)}><Icon className='w-[20px] h-[25px]'/> <span className='text-[17px]'>{title}</span></div>
            <div className='w-[20px] h-[25px]'></div>
        </div>
        <div className={hidden ? "hidden": "flex flex-col text-base text-[#858585]"}>
            {popularTopicChoice.map((trends, index)=>{
                return(
                    <div key={index}>{trends}</div>
                )
            })}
        </div>
    </div>
    )
}