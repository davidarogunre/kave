"use client"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import GamepadOutlinedIcon from '@mui/icons-material/GamepadOutlined';
import SportsBaseballOutlinedIcon from '@mui/icons-material/SportsBaseballOutlined';
import DropDown from './DropDown'
export default function Sidebar(){
    return(
        <div className="pb-[30px] fixed h-full w-[240px] text-white border-r-[0.07rem] border-[#2e2e2e] flex flex-col items-center alternate hover:overlay  overflow-y-scroll  hover:overflow-x-hidden">
            <div className="flex flex-col items-center w-11/12 mt-[40px]">
                <div className='flex w-10/12 gap-4  text-[#858585] '>
                   <HomeOutlinedIcon className='w-[20px] h-[25px]'/> <span className='text-[17px]'>Home</span>
                </div>
                <div className='flex w-10/12 gap-4 text-[#858585] mt-[30px]'>
                   <ArrowOutwardOutlinedIcon className='w-[20px] h-[25px] '/> <span className='text-[17px]'>Popular</span>
                </div>
                <div className='mt-[30px] w-full h-[0.07rem] bg-[#2e2e2e]'></div>
            </div>
            <div className='flex flex-col items-center w-11/12 mt-[30px]'>
                <div className='text-[13px] font-semibold text-[#858585] w-10/12'>
                    TOPICS
                </div>
                
                <div className="flex items-center flex-col w-full mt-[20px] gap-6">
                    <DropDown title="Gaming" icon={GamepadOutlinedIcon}/>
                    <DropDown title="Sports" icon={SportsBaseballOutlinedIcon}/>
                    <DropDown title="Business" icon={HomeOutlinedIcon}/>
                    <DropDown title="Crypto" icon={HomeOutlinedIcon}/>
                    <DropDown title="Television" icon={HomeOutlinedIcon}/>
                    <DropDown title="Celebrity" icon={HomeOutlinedIcon}/>
                    <DropDown title="Animals and Pets" icon={HomeOutlinedIcon}/>
                    <DropDown title="Anime" icon={HomeOutlinedIcon}/>
                    <DropDown title="Art" icon={HomeOutlinedIcon}/>
                    <DropDown  title="Cars & Motors" icon={HomeOutlinedIcon}/>


                </div>
            </div>
        </div>
    )
}