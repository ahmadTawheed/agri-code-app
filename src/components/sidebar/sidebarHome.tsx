import { MdLibraryBooks } from "react-icons/md";
import { PiPlantFill } from "react-icons/pi";
import { RiRecycleFill } from "react-icons/ri";
import { PiFirstAidKitFill } from "react-icons/pi";
import { GiDeliveryDrone } from "react-icons/gi";
import { RiRobot3Fill } from "react-icons/ri";
import Link from "next/link";

const SidebarHome = () => {
  return (
    <div className='w-1/12 py-6 cursor-pointer bg-green-950 rounded-xl fixed top-50 -left-28 hover:-left-5 transition-all flex flex-col items-center justify-center gap-10 hover:h-auto'>
      <Link href="/pages/library">
      <MdLibraryBooks className="text-green-50 text-3xl hover:text-green-300 transition-all"/>
      </Link>

      <Link href="/pages/followCrops">
      <PiPlantFill className="text-green-50 text-3xl hover:text-green-300 transition-all"/>
      </Link>

      <Link href="/pages/recyclePlant">
      <RiRecycleFill className="text-green-50 text-3xl hover:text-green-300 transition-all"/>
      </Link>

      <Link href="/pages/clinicPlant">
      <PiFirstAidKitFill className="text-green-50 text-3xl hover:text-green-300 transition-all"/>
      </Link>

      <Link href="/pages/iot">
      <GiDeliveryDrone className="text-green-50 text-3xl hover:text-green-300 transition-all"/>
      </Link>

      <Link href="/pages/aiagricode">
      <RiRobot3Fill className="text-green-50 text-3xl hover:text-green-300 transition-all"/>
      </Link>
    </div>
  )
}

export default SidebarHome