import {GiMountainCave} from 'react-icons/gi'
import {BsSearch} from 'react-icons/bs'
import ProfileSection from './ProfileSection'
interface NavbarProps{
    incognito:boolean
    username:string | null | undefined
}
export default function Navbar({incognito, username}:NavbarProps){
    return (
        <div className="w-full bg-transparent h-[70px] backdrop-blur-md border-b-[0.0012rem] border-[#2e2e2e] fixed flex justify-center z-[500]">
            <div className="w-11/12 h-full text-white flex justify-between items-center">
                <div className='flex w-96 items-center justify-between'>
                <div className="text-2xl flex items-center justify-between w-[87px]">

                    <GiMountainCave size={30}/>
                    <div>
                        Kave
                    </div>
                </div>
                <div className="w-72 translate-y-0.5 h-[37px] flex items-center">
                    <BsSearch className='relative left-7' size={17}/>
                    <input type="text"  className="outline-0 hover:input-darken w-full  pl-9 h-full rounded-2xl bg-[#2e2e2e]"/>
                </div>
                </div>
                {incognito  && (<div className="flex justify-between w-[180px] items-center">
                    <button>Log In</button>
                    <button className="bg-white text-black pt-[7px] pb-[7px] pl-[12px] pr-[12px] rounded-md hover:bg-slate-200">Sign Up</button>
                </div>)}
                {!incognito && (
                    <ProfileSection username={username}/>
                )}
            </div>
        </div>
    )
}
