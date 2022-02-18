import Image from "next/image"
import HeaderIcon from "./HeaderIcon";
import { HiHome } from "react-icons/hi";
import { HiUserCircle } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";
import { HiInformationCircle } from "react-icons/hi";


const Header=()=>{
    return(
        <div className="bg-gray-600 flex flex-col items-center p-6 select-none sm:flex-row justify-between">
            <div className="text-gray-200 flex">
                <HeaderIcon Icon={HiHome} title="home" />
                <HeaderIcon Icon={HiUserCircle} title="account" />
                <HeaderIcon Icon={HiOutlinePhone} title="contact" />
                <HeaderIcon Icon={HiInformationCircle} title="about" />
            </div>
            <Image src="https://clipground.com/images/imdb-icon-clipart-7.png" width={100} height={100} className="cursor-pointer active:brightness-110"/>
        </div>
    )
}

export default Header