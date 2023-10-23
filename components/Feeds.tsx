import Posts from "./Posts"
import FeedsTab from "./FeedsTab"
export default function Feeds(){
    return(
        <div className="md:ml-[240px] text-white w-full md:w-[calc(100%-240px)]">
            <FeedsTab/>
           <Posts/>
        </div>
    )
}