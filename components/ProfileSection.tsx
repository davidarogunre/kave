import {Tilt_Neon} from "next/font/google"
const tilt = Tilt_Neon({ subsets: ['latin'] })
interface ProfileSectionProps{
    username:string | null | undefined
}
export default function ProfileSection({username}:ProfileSectionProps) {
  return (
    <div className={tilt.className}>
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black">
        <div className="text-[24px] font-light">
          {username?.toUpperCase()[0]}
        </div>
      </div>
    </div>
  );
}
