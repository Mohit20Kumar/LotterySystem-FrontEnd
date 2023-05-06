import React from 'react'

const SupportUs = () => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover sup-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 z-[2]' />
      <div className='p-5 z-[2] mt-[12]'>
        <h2 className=' text-5xl font-bold text-center text-white '>Support Us</h2>
        <br/>
        <h2 className='text-3xl font-bold text-center text-white'>Welcome to our Support Us page.</h2>
        <p className='py-5 text-2xl  text-white text-center'>We are a blockchain-based lottery system committed to providing a transparent and secure platform for our players to participate in the lottery and win big. As we continue to grow and expand our services, we rely on the support of our community to help us achieve our goals.</p>
        <p className='py-5 text-2xl  text-white text-center'>Thank you for considering to support our platform. We are committed to providing a trustworthy and transparent lottery system, and we appreciate any support we receive from our community.</p>
      </div>
      </div>
  )
}

export default SupportUs