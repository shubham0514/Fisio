"use client"
// import { log } from 'console'
// import Image from 'next/image'
import React, { useState } from 'react'
// import Slider from "react-slick";

export const Carousel = () => {
    const [selected, setSelected] = useState(0);


    // setTimeout(() => {
    //     nextSlide(selected)
    // }, 5000);


    const Slides = [
        { Img: "/Beauty .webp", Alt: "Product 1" },
        { Img: "/Dermalogica.webp", Alt: "Product 1" },
        { Img: "/FirstProduct.jpg", Alt: "Product 2" },
        { Img: "/SecondProduct.jpg", Alt: "Product 3" },
        { Img: "/ThirdProduct.jpg", Alt: "Product 4" }
    ]
    const nextSlide = (i: number) => {
        if (i < Slides.length - 1) {
            setSelected(i + 1)
        }
        else {
            setSelected(0)
        }

    }
    const prevSlide = (i: number) => {
        if (i > 0) {
            setSelected(i - 1)
        }
        else {
            setSelected(Slides.length - 1)
        }
    }
    return (
        <div className="carousel flex ">
            {Slides?.map((slide, index) => {
                return (
                    <div className='galary-cell flex align-center justify-center' style={{ display: index === selected ? 'flex' : 'none', backgroundColor: ' rgba(250,235,215,0.5)' }} key={index}>
                        <img className='rounded-xl shadow-3xl' style={{ boxShadow: "10px 10px 10px #a48e8e" }} alt={slide.Alt} src={slide.Img} />
                        <button className='Right-Side-Caurosel text-6xl rounded-[80%] text-[rgba(187,148,53,0.5)]'
                            style={{ position: 'absolute', top: '5em', right: '1em', padding: '0.4em' }}
                            onClick={() => nextSlide(index)}>{'>'}</button>
                        <button className='Left-Side-Caurosel text-6xl  rounded-[80%] text-[rgba(187,148,53,0.5)]'
                            style={{ position: 'absolute', top: '5em', left: '1em', padding: '0.4em' }}
                            onClick={() => prevSlide(index)}>{'<'}</button>
                    </div>
                )
            }
            )}
            <div>
            </div>
        </div>
        // </Slider> 

    )
}
