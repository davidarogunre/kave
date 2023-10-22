import { useSession } from 'next-auth/react'
import { useRouter } from "next/router";


export default function Home({session}:any){
    const router = useRouter()
    const {status} = useSession()
if(status == "authenticated"){
        router.push('/dashboard')
}
    return(
        <div>Home</div>
    )
}