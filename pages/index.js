import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import Header from "@/components/Header"
import LotteryEntrance from "@/components/LotteryEntrance"
// import styles from "@/styles/Home.module.css"

export default function Home() {
    return (
        <div className="bg-[#000000] h-[100vh]">
            <Header />
            <LotteryEntrance />
        </div>
    )
}
