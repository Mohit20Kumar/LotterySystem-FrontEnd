import React from 'react'

const AboutUs = () => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover au-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 z-[2]' />
      <div className='p-5  z-[2] mt-[12]'>
        <h2 className=' text-5xl font-bold text-center text-slate-900 '>About Us</h2>
        <br/>
        <h2 className='text-3xl font-bold text-center text-slate-900'>“Blockchain Lottery Platform transforming Lottery Industry
Bringing fairness to the lottery ecosystem”</h2>
        <p className='py-5 text-2xl font-semibold text-slate-800 text-center'>Welcome to our blockchain-based lottery system about us page. We are a team of passionate and experienced professionals who believe that transparency and fairness are the keys to a successful lottery system. Our system is built on the principles of blockchain technology, ensuring that every lottery drawing is verifiably fair and secure.</p>
        <p className='py-5 text-2xl font-semibold text-slate-800 text-center'>Our lottery system is built on a decentralized network, meaning that it is not controlled by any central authority. This ensures that the system is transparent, immutable, and resistant to tampering. The blockchain technology we use ensures that every ticket is recorded on the blockchain, making it impossible to alter or manipulate the results.</p>
        
      </div>
      </div>
  )
}

export default AboutUs