import React from 'react'

const coupons = [
    {
        "company": "Alo Fruit",
        "couponDesc":"Get 100% off",
        "isVerified": true,
        "coins":"100"
    },
    {
        "company": "Nike",
        "couponDesc":"Get 10% off",
        "isVerified": false,
        "coins":"100"
    },{
        "company": "Muscle Blaze",
        "couponDesc":"Get 50% off",
        "isVerified": false,
        "coins":"100"
    }
]

const ShopCard = ({companyName,couponDesc,coins,isVerified}) => {

    const handleEvent = () => {
        alert("Coupon Claimed")
    }

    return(<div className=" mt-8 mx-8  flex min-w-[400px] flex-col items-center rounded-lg border md:flex-row bg-slate-50">
    
    <div className=''>
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-bold text-green-400">
          {companyName} 
        </h1>
        <p className="mt-3 text-sm text-gray-600">
          {couponDesc}
        </p>
        <div className="mt-4">
          
            {isVerified && <span className="mb-2 mr-2 inline-block rounded-full bg-red-400 px-3 py-1 text-[12px] font-semibold text-gray-900">Out of Stock</span>}
            {!isVerified && <span className="mb-2 mr-2 inline-block rounded-full bg-green-400 px-3 py-1 text-[12px] font-semibold text-gray-900">Available</span>}
            
          
        </div>
        <div className="mt-3 flex justify-around ">
          <span className="flex flex-col text-black">
            {coins} coins</span>
            
          <button
          onClick={handleEvent}
          type="button"
          disabled={isVerified}
          className="rounded-md ml-64 bg-gray-600 px-2 py-1 text-sm text-white shadow-sm hover:bg-green-400/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          CLAIM NOW&rarr;
        </button>
        </div>
      </div>
    </div>
  </div>)
}

const Shop = () => {
  return (
    <div>
    <div className=' relative text-center top-10 text-5xl font-bold text-white'>
      Coupons and Rewards
    </div>
    <div className="mt-16 flex flex-wrap justify-center">
    
    {coupons.map(coupon=> {
        return(
        <ShopCard companyName={coupon.company} couponDesc={coupon.couponDesc} coins={coupon.coins} isVerified={coupon.isVerified} />)
    })}
    </div>
    </div>
  )
}

export default Shop