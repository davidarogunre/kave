import {GiMountainCave} from 'react-icons/gi'

interface NavbarProps{
    incognito:boolean
}
export default function Navbar({incognito}:NavbarProps){
    return (
        <div className="w-full bg-transparent h-[70px] backdrop-blur-md border-b-[0.0012rem] border-[#2e2e2e] fixed flex justify-center z-[500]">
            <div className="w-11/12 h-full text-white flex justify-between items-center">
                <div className="text-2xl flex items-center justify-between w-[87px]">

                    <GiMountainCave size={30}/>
                    <div>
                        Kave
                    </div>
                </div>
                <div className="w-6/12 h-[37px]">
                    <input type="text" placeholder="Search" className="outline-0 hover:input-darken w-full pl-2 h-full rounded-md bg-[#2e2e2e]"/>
                </div>
                {incognito  && (<div className="flex justify-between w-[180px] items-center">
                    <button>Log In</button>
                    <button className="bg-white text-black pt-[7px] pb-[7px] pl-[12px] pr-[12px] rounded-md hover:bg-slate-200">Sign Up</button>
                </div>)}
            </div>
        </div>
    )
}