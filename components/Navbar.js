import request from "../utils/request"
import { useRouter } from "next/router"

const Navbar = () => {
    // initialize the router
    const router = useRouter()

  return (
    <div className="flex justify-center bg-gray-600 text-gray-200 select-none text-xl lg:text-2xl">
        {/* loop through the request to get the title and url from request */}
        {Object.entries(request).map(([key, {title,url}])=>(
            <h2 onClick={()=>{
                // when clicked the page will route to top rated or trending
                router.push(`?genre=${key}`)
                console.log("You clicked!!")
            } }className="m-6 cursor-pointer hover:text-white active:text-red-400" key={key}>{title}</h2>
        ))}
    </div>
  )
}

export default Navbar