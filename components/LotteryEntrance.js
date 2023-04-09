import React, { useEffect, useState } from "react"
import { useWeb3Contract, useMoralis } from "react-moralis"
import abi from "@/constants/abi"
import contractAddresses from "@/constants/contractAddresses"
import { ethers } from "ethers"
import { useNotification } from "@web3uikit/core"
// import { abi, contractAddresses } from "@/constants/index"

const LotteryEntrance = () => {
    // console.log("yoyoyoyoyoyoyyo")
    // console.log("address", contractAddresses)
    const { chainId: chainIdHex, isWeb3Enabled } = useMoralis()
    const chainId = parseInt(chainIdHex)
    const lotteryAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null
    const [entranceFee, setEntranceFee] = useState("0")
    const [numPlayers, setNumPlayers] = useState("0")
    const [recentWinner, setRecentWinner] = useState("0")

    const dispatch = useNotification()

    const {
        runContractFunction: enterLottery,
        isLoading,
        isFetching,
    } = useWeb3Contract({
        abi: abi,
        contractAddress: lotteryAddress, //specify the n/w id
        functionName: "enterLottery",
        params: {},
        msgValue: entranceFee,
    })

    const { runContractFunction: getEntranceFee } = useWeb3Contract({
        abi: abi,
        contractAddress: lotteryAddress, //specify the n/w id
        functionName: "getEntranceFee",
        params: {},
    })

    const { runContractFunction: getNumberOfPlayers } = useWeb3Contract({
        abi: abi,
        contractAddress: lotteryAddress, //specify the n/w id
        functionName: "getNumberOfPlayers",
        params: {},
    })

    const { runContractFunction: getRecentWinner } = useWeb3Contract({
        abi: abi,
        contractAddress: lotteryAddress, //specify the n/w id
        functionName: "getRecentWinner",
        params: {},
    })

    async function updateUI() {
        const entranceFeeFromCall = (await getEntranceFee()).toString()
        const numPlayersFromCall = (await getNumberOfPlayers()).toString()
        const recentWinnerFromCall = (await getRecentWinner()).toString()

        setEntranceFee(entranceFeeFromCall)
        setNumPlayers(numPlayersFromCall)
        setRecentWinner(recentWinnerFromCall)
    }

    useEffect(() => {
        if (isWeb3Enabled) {
            // trying to read the lottery fee
            updateUI()
        }
    }, [isWeb3Enabled])

    const handleSuccess = async (tx) => {
        await tx.wait(1)
        handleNewNotification(tx)
        updateUI()
    }

    const handleNewNotification = () => {
        dispatch({
            type: "success",
            message: "Transaction Complete!",
            title: "Tx Notification",
            position: "topR",
            // icon: "bell",
        })
    }

    return (
        <div className="font-mono container w-full m-auto p-5 my-[4rem] text-white">
            {lotteryAddress ? (
                <div>
                    <button
                        disabled={isLoading || isFetching}
                        onClick={async function () {
                            await enterLottery({
                                onSuccess: handleSuccess,
                                onError: (error) => console.log(error),
                            })
                        }}
                        class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-5xl font-extrabold text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                    >
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            {isLoading || isFetching ? (
                                <div
                                    className="animate-spin spinner-border-0 h-8 w-8 border-b-2 rounded-full
                                "
                                ></div>
                            ) : (
                                <div>Enter Lottery</div>
                            )}
                        </span>
                    </button>
                    <div className="my-5">
                        <p class="max-w-lg text-3xl font-semibold leading-loose text-gray-900 dark:text-white">
                            Lottery Entrance Fee : {ethers.utils.formatUnits(entranceFee, "ether")}{" "}
                            ETH
                        </p>
                        <p class="max-w-lg text-3xl font-semibold leading-loose text-gray-900 dark:text-white">
                            Number Of Players : {numPlayers}
                        </p>
                        <p class="max-w-lg text-3xl font-semibold leading-loose text-gray-900 dark:text-white">
                            Recent Winner : {recentWinner}
                        </p>
                    </div>
                </div>
            ) : (
                <p class="max-w-lg text-3xl font-semibold leading-loose text-gray-900 dark:text-white">
                    No Address Found!
                </p>
            )}
        </div>
    )
}

export default LotteryEntrance
