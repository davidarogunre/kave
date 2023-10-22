import Feeds from './Feeds'
import Sidebar from './Sidebar'
export default function Main(){
    return(
        <div className='pt-[70px] w-full h-[100vh] flex'>
            <Sidebar/>
            <Feeds/>

        </div>
    )
}