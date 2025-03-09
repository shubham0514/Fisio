import Image from 'next/image'
import React from 'react'

export const Footer = () => {
    return (
        <div className='UI_CONTAINER' style={{ display: 'flex', justifyContent: 'center', backgroundColor: " rgba(0,0,0,0.9)", padding: '3em 2em' }}>
            <div className='UI-footer mt-4' style={{ display: 'flex', height: '273px', width: '80%', justifyContent: 'space-between' }}>
                <div style={{ color: 'white', fontSize: '1em', width: '350px', padding: '1.4em', fontFamily: 'Montserrat', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }} >
                    <p style={{ fontFamily: 'sans-serif', fontSize: '1.4em', fontWeight: 'bolder', textTransform: 'uppercase' }}>React Us</p>
                    <p><span>📍</span><span> E-19 ,International Trade Tower Nehru Palace,New Delhi, 110019</span></p>
                    <a href="mailto:info@fisio.com">✉️ info@fisiocosmatics.com</a>
                    <p>📱 +(91) 999999999</p>
                </div>
                <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', color: "white", padding: '1em' }}>
                    <Image src="/federal-palace.svg" alt='Fisio Cosmetics' width={120} height={120} />
                    <p>Fisio</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: "space-evenly", padding: '1.4em' }}>
                    <p style={{ marginBottom: '1.2em', fontSize: '1.4em' }}>Help</p>

                    <p>Raise A Concern</p>
                    <p>Shipping</p>
                    <p>Privacy and Policies</p>
                </div>
            </div>
        </div>
    )
}
