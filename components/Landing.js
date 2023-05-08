import Link from "next/link"
import React, { useState, useEffect } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import LotteryGame from "../pages/lotterygame"

const Landing = () => {
    // Code for navigation
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState("transparent")
    const [textColor, setTextColor] = useState("white")

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor("#000000")
                setTextColor("#ffffff")
            } else {
                setColor("transparent")
                setTextColor("#ffffff")
            }
        }
        window.addEventListener("scroll", changeColor)
    }, [])

    return (
        <div>
            <div
                style={{ backgroundColor: `${color}` }}
                className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
            >
                <div className="max-w-[1240px] m-auto flex justify-between items-center p-5 text-white ">
                    <Link href="/">
                        <h1
                            style={{ color: `${textColor}` }}
                            className="font-bold text-4xl text-blue-400"
                        >
                            CRYPTOLOTTO
                        </h1>
                    </Link>
                    <ul style={{ color: `${textColor}` }} className="hidden items-center sm:flex ">
                        <li onClick={handleNav} className="p-4">
                            <Link
                                // className="bg-white p-2 rounded-md text-black"
                                target="_blank"
                                href="/lotterygame"
                            >
                                <button class="relative inline-flex items-center justify-center p-0.5  mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        Lets Play
                                    </span>
                                </button>
                            </Link>
                        </li>
                        <li onClick={handleNav} className="p-4">
                            <Link href="#home" legacyBehavior passHref>
                                <a>Home</a>
                            </Link>
                        </li>
                        <li onClick={handleNav} className="p-4">
                            <Link href="#about">About Us</Link>
                        </li>
                        <li onClick={handleNav} className="p-4">
                            <Link href="#support">Support Us</Link>
                        </li>
                        <li onClick={handleNav} className="p-4">
                            <Link href="#contact">Contact Us</Link>
                        </li>
                    </ul>
                    {/* Mobile button */}
                    <div onClick={handleNav} className="block sm:hidden z-10">
                        {nav ? (
                            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
                        ) : (
                            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
                        )}
                    </div>
                    {/* Mobile Menu */}
                    <div
                        className={
                            nav
                                ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-cyan-500 text-center ease-in duration-300"
                                : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-cyan-500 text-center ease-in duration-300"
                        }
                    >
                        <ul>
                            <li onClick={handleNav} className="p-4">
                                <Link
                                    // className="bg-white p-2 rounded-md text-black"
                                    target="_blank"
                                    href="/lotterygame"
                                >
                                    <button class="relative inline-flex items-center justify-center p-0.5 overflow-hidden font-medium text-gray-900 rounded-xl group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-4xl">
                                        <span class="relative  px-6 py-3.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 w-[18rem]">
                                            Lets Play
                                        </span>
                                    </button>
                                </Link>
                            </li>
                            <li onClick={handleNav} className="p-4 text-4xl hover:text-black">
                                <Link href="#home">Home</Link>
                            </li>
                            <li onClick={handleNav} className="p-4 text-4xl hover:text-black">
                                <Link href="#about">About Us</Link>
                            </li>
                            <li onClick={handleNav} className="p-4 text-4xl hover:text-black">
                                <Link href="#support">Support Us</Link>
                            </li>
                            <li onClick={handleNav} className="p-4 text-4xl hover:text-black">
                                <Link href="#contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div
                id="home"
                style={{
                    boxShadow: "0px 4px 4px 0px #00000040,inset 0 0 0 1000px rgba(0,0,0,0.4)",
                }}
                className="flex items-center justify-center h-screen mb-[12] bg-fixed bg-center bg-cover custom-img"
            >
                {/* <div className="absolute top-0 left-0 right-0 bg-black" /> */}
                <div className="p-5 flex flex-col items-center justify-center mt-[12]">
                    <h1 className="font-bold text-center  text-white text-4xl md:text-7xl">
                        Decentralized Lottery System
                    </h1>
                    <h1 className="font-bold text-white text-center mt-5 text-3xl md:text-5xl">
                        Buying Crypto Lotteries Made Fun & Easy
                    </h1>
                </div>
            </div>

            <div
                style={{
                    boxShadow: "0px 4px 4px 0px #00000040,inset 0 0 0 1000px rgba(0,0,0,0.0)",
                }}
                id="about"
                className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover au-img "
            >
                {/* Overlay */}
                <div className="absolute top-0 left-0 right-0 bottom-0 z-[2]" />
                <div className="p-5 z-[2] mt-[12]">
                    <h2 className=" text-5xl font-bold text-center text-slate-900 ">About Us</h2>
                    <br />
                    <h2 className="text-3xl font-bold text-center text-slate-900">
                        “Blockchain Lottery Platform transforming Lottery Industry Bringing fairness
                        to the lottery ecosystem”
                    </h2>
                    <p className="py-5 text-2xl font-semibold text-slate-900 text-center">
                        Welcome to our blockchain-based lottery system about us page. We are a team
                        of passionate and experienced professionals who believe that transparency
                        and fairness are the keys to a successful lottery system. Our system is
                        built on the principles of blockchain technology, ensuring that every
                        lottery drawing is verifiably fair and secure.
                    </p>
                    <p className="py-5 text-2xl font-semibold text-slate-900 text-center">
                        Our lottery system is built on a decentralized network, meaning that it is
                        not controlled by any central authority. This ensures that the system is
                        transparent, immutable, and resistant to tampering. The blockchain
                        technology we use ensures that every ticket is recorded on the blockchain,
                        making it impossible to alter or manipulate the results.
                    </p>
                </div>
            </div>

            <div
                id="support"
                className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover sup-img"
            >
                {/* Overlay */}
                <div className="absolute top-0 left-0 right-0 bottom-0 z-[2]" />
                <div className="p-5 z-[2] mt-[12]">
                    <h2 className=" text-5xl font-bold text-center text-white ">Support Us</h2>
                    <br />
                    <h2 className="text-3xl font-bold text-center text-white">
                        Welcome to our Support Us page.
                    </h2>
                    <p className="py-5 text-2xl  text-white text-center">
                        We are a blockchain-based lottery system committed to providing a
                        transparent and secure platform for our players to participate in the
                        lottery and win big. As we continue to grow and expand our services, we rely
                        on the support of our community to help us achieve our goals.
                    </p>
                    <p className="py-5 text-2xl  text-white text-center">
                        Thank you for considering to support our platform. We are committed to
                        providing a trustworthy and transparent lottery system, and we appreciate
                        any support we receive from our community.
                    </p>
                </div>
            </div>

            <div
                id="contact"
                style={{
                    boxShadow: "0px 4px 4px 0px #00000040,inset 0 0 0 1000px rgba(0,0,0,0.4)",
                }}
                className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover cu-img"
            >
                {/* Overlay */}
                <div className="absolute top-0 left-0 right-0 bottom-0 z-[2]" />
                <div className="p-5 text-white z-[2] mt-[12]">
                    <h2 className="text-5xl font-bold text-center">Contact Us</h2>
                    <p className="py-5 text-2xl  text-white text-center">
                        We value our users and are always happy to hear from them. If you have any
                        questions, comments, or suggestions regarding our blockchain-based lottery
                        system, please feel free to reach out to us. Here are the ways you can
                        contact us:
                    </p>
                    <p className="py-5 text-2xl  text-white text-center">
                        You can email us at{" "}
                        <span className="text-slate-800">
                            <a href="\lol">www.cryptolotto.contact.com</a>
                        </span>
                        We will do our best to respond to your inquiry as quickly as possible.
                    </p>
                    <p className="py-5 text-2xl  text-white text-center">
                        You can reach out to us through our social media accounts. Follow us on
                        Twitter, Facebook, or Instagram, and send us a direct message.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Landing
