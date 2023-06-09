import React from "react"
import { ConnectButton } from "@web3uikit/web3"
const Header = () => {
    return (
        <div className="bg-[#4d246f]">
            <nav className="p-5  container m-auto font-mono flex  items-center flex-row">
                <h1 className="font-bold text-white text-5xl">CRYPTOLOTTO</h1>
                <span className="text-2xl ml-5 font-bold text-white">
                    : Decentralized Lottery System
                </span>
                <div className="ml-auto">
                    <ConnectButton moralisAuth={false} />
                </div>
            </nav>
        </div>
    )
}

export default Header
