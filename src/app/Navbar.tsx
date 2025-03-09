'use client'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

export const Navbar = () => {
    const [click, setClick] = useState(false);

    return (
        <>
            <div className='p-2 flex justify-between items-center flex-row h-20 position-static'>
                <div className='flex items-end cursor-pointor'>
                    <Image src="/FisioLogo.jpeg" alt="fisioCosmetics" title="Fisio Cosmetics" width={100} height={50} />
                </div>
                <div className="Logo drop-shadow-x1 font-bold text-base text-[rgba(187,148,53,0.5)]">Fisio Cosmetics</div>
                {!click && click != undefined ?
                    (<div
                        className="HAMBURGER-ICON space-y-3 w-15 h-9 border-0 border-[rgba(187,148,53,0.5)] rounded-[100%] p-2 "
                        onClick={() => setClick(!click)}
                    >
                        <span className="block h-0.5 w-8 bg-[rgba(187,148,53,0.5)] mr-2"></span>
                        <span className="block h-0.5 w-8 bg-[rgba(187,148,53,0.5)] ml-2"></span>
                    </div>) :
                    (<div
                        className="HAMBURGER-ICON space-x-5 w-15 h-9 border-0 border-[rgba(187,148,53,0.5)] rounded-[100%] p-2  flex align-center justify-center"
                        onClick={() => setClick(!click)}
                    >
                        <p className="block h-0.5 w-8 relative left-3 bottom-1 text-xl text-[rgba(187,148,53,0.5)] mr-2">X</p>
                    </div>)
                }
            </div >
            <div className='Desktop-Navigation' style={{ display: 'flex', justifyContent: 'center', height: '2em' }}>
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '60%', color: 'black', fontWeight: 'bolder', fontStyle: 'sans-serif' }}>
                    <Link href="">Home</Link>
                    <Link href="">
                        <select name="products" id="products">
                            <option value="0">Products</option>
                            <option value="1">Green Line</option>
                            <option value="1">Woman Line</option>
                            <option value="1">Man Line</option>
                            <option value="1">Home Asthetics</option>
                        </select>
                    </Link>
                    <Link href="">Woman&apos;s Day</Link>
                    <Link href="">Academy</Link>
                    <Link href="">Fisio4you</Link>
                    <Link href="">Contact Us</Link>
                </div>
            </div>
        </>

    )
}
