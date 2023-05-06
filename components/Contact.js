import React from 'react'

const Contact = () => {
  return (
    <div>
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover cu-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[12]'>
        <h2 className='text-5xl font-bold text-center'>Contact Us</h2>
        <p className='py-5 text-2xl  text-white text-center'>We value our users and are always happy to hear from them. If you have any questions, comments, or suggestions regarding our blockchain-based lottery system, please feel free to reach out to us. Here are the ways you can contact us:</p>
        <p className='py-5 text-2xl  text-white text-center'>You can email us at <p className='text-slate-800'><a href='\lol' >www.cryptolotto.contact.com</a></p> We will do our best to respond to your inquiry as quickly as possible.</p>
        <p className='py-5 text-2xl  text-white text-center'> You can reach out to us through our social media accounts. Follow us on Twitter, Facebook, or Instagram, and send us a direct message.</p>
        
      </div>
      </div>
      </div>
  )
}

export default Contact