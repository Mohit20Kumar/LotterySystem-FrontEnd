// import React from "react"
// import { ConnectButton } from "@web3uikit/web3"
// const Header = () => {
//     return (
//         <div className="bg-[#4d246f]">
//             <nav className="p-5  container m-auto font-mono flex items-center flex-row">
//                 <h1 className="font-bold text-white text-5xl"> Decentralized Lottery System</h1>
//                 <div className="ml-auto">
//                     <ConnectButton moralisAuth={false} />
//                 </div>
//             </nav>
//         </div>
//     )
// }

// export default Header

import React from "react"
import { ConnectButton } from "@web3uikit/web3"
import AboutUs from "./AboutUs"
import SupportUs from "./SupportUs"
import Contact from "./Contact"
const Header = () => {
    return (
        <div>
            <div className="flex items-center justify-center h-screen mb-[12] bg-fixed bg-center bg-cover custom-img">
                <div className="absolute top-0 left-0 right-0 bg-black"/>
                <div className="p-5 z-2 mt-[12]">
                <h1 className="font-bold text-white text-5xl "> Decentralized Lottery System</h1>
                {/* <div className=" py-5 text-xl ">
                    <ConnectButton moralisAuth={false} />
                </div> */}
                <button className="p-3 bg-slate-100 rounded-xl mt-4 font-bold text-2xl text-blue-600" >Let's Play</button>
                </div>
                
            </div>
            {/* <AboutUs/>
            <SupportUs/>
            <Contact/> */}
        </div>
    )
}

export default Header



