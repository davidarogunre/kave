import Navbar from '../../components/Navbar'
import Main from '../../components/Main'
import { useSession } from 'next-auth/react'
export default function Dashboard() {
const { data: session, status } = useSession()
if(status !== "authenticated"){
  console.log("hello")
}
  return (
    <main className="">
      <Navbar incognito={false}/>
      <Main/>
    </main>
  )
}


