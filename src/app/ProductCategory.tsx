import React from 'react'

export const ProductCategory = () => {
    const Products = [
        { title: "Fisiolinea Green", About: "From over 50 years of experience in the trichology market, the highest qualitative expression of a completely natural therapeutic line.", Image: "/VitaminC_Range.jpeg" },
        { title: "Fisiolinea Woman", About: "Exceptional performance from the first treatment for this line of hair, face, and body products with unique and refined packaging.", Image: "/VitaminC_Range.jpeg" },
        { title: "Fisiolinea Man", About: "A practical, elegant, and high-quality line. For the man seeking dynamic and decisive solutions in hair and beard products.", Image: "/VitaminC_Range.jpeg" },
        { title: "Fisiolinea Ambient", About: "Our new line of room fragrances with wooden sticks, available in over 10 exclusive scents featuring aromas from nature.", Image: "/VitaminC_Range.jpeg" }
    ]
    const Category = [
        { title: "Ambient", About: "From over 50 years of experience in the trichology market, the highest qualitative expression of a completely natural therapeutic line.", Image: "/ThirdProduct.jpg" },
        { title: "Anti-hair Loss", About: "Exceptional performance from the first treatment for this line of hair, face, and body products with unique and refined packaging.", Image: "/ThirdProduct.jpg" },
        { title: "Dandruff Hairs", About: "A practical, elegant, and high-quality line. For the man seeking dynamic and decisive solutions in hair and beard products.", Image: "/ThirdProduct.jpg" },
        { title: "Dry Hairs", About: "Our new line of room fragrances with wooden sticks, available in over 10 exclusive scents featuring aromas from nature.", Image: "/ThirdProduct.jpg" },
        { title: "For the Beard", About: "From over 50 years of experience in the trichology market, the highest qualitative expression of a completely natural therapeutic line.", Image: "/ThirdProduct.jpg" },
        { title: "For the Face", About: "Exceptional performance from the first treatment for this line of hair, face, and body products with unique and refined packaging.", Image: "/ThirdProduct.jpg" },
        { title: "For the Hairs", About: "A practical, elegant, and high-quality line. For the man seeking dynamic and decisive solutions in hair and beard products.", Image: "/ThirdProduct.jpg" },
        { title: "Others", About: "Our new line of room fragrances with wooden sticks, available in over 10 exclusive scents featuring aromas from nature.", Image: "/ThirdProduct.jpg" }
    ]
    return (
        <div className='mt-10 ' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', padding: '3em 0em' }}>
                <div style={{ display: 'contents' }}>
                    <p className='text-4xl' style={{ fontFamily: "Montserrat", textTransform: 'uppercase', color: 'rgba(141, 82, 48, 0.9)' }}>Shop By Category</p>
                    <p className='text-2xl' style={{ fontFamily: "Montserrat", textTransform: 'uppercase', color: 'rgba(128, 99, 25, 0.5)' }}>Find Your Category</p>
                </div>
                <div className="UI-Container p-5" style={{ display: "flex", textTransform: 'uppercase', justifyContent: 'space-evenly', flexWrap: 'wrap', padding: '2em 2em' }}>
                    {Products.map((prod, index) => (
                        <div className='Ui-card' key={index} style={{ position: 'relative', width: index === 8 ? '600px' : '414px', height: index === 8 ? '1100px' : '480px', boxShadow: "10px 10px 10px #a48e8e", borderRadius: "25px", margin: '1em' }}>
                            <img src={prod.Image} style={{ width: "100%", height: "100%", borderRadius: '25px', filter: 'brightness(70%)' }} />
                            <div style={{ position: 'absolute', bottom: '50%', top: '50%', width: '100%', textAlign: 'center' }}>
                                <p style={{ fontWeight: 'bolder', fontSize: '2.2em', color: 'Whitesmoke', backgroundColor: 'rgba(0,0,0,0.4)' }}>{prod.title}</p>
                                {/* <p title={prod.About} style={{ color: 'white', maxLines: '' }}>
                                    {prod.About.length <= 125 ? (prod.About) : `${prod.About.slice(0, 121)}...`}
                                </p> */}
                            </div>
                        </div>
                    ))}
                </div>
                <br />
                <button className='see-more p-2 border-1px bg-[rgba(187,148,53,0.5)]' style={{ padding: '0.9em 1.4em' }} >See All</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', paddingTop: '3em', paddingBottom: '3em' }}>
                <div style={{ display: 'contents' }}>
                    <p className='text-4xl' style={{ fontFamily: "sans-serif", textTransform: 'uppercase', color: 'rgba(141, 82, 48, 0.9)' }}>Shop By Category</p>
                    <p className='text-2xl' style={{ fontFamily: "sans-serif", textTransform: 'uppercase', color: 'rgba(128, 99, 25, 0.5)' }}>Find Your Category</p>
                </div>
                <div className="UI-Container p-5" style={{ display: "flex", textTransform: 'uppercase', justifyContent: 'space-evenly', flexWrap: 'wrap', padding: '2em 2em' }}>
                    {Category.map((prod, index) => (
                        <div className='Ui-card' key={index} style={{ position: 'relative', width: index === 8 ? '600px' : '414px', height: index === 8 ? '1100px' : '480px', boxShadow: "10px 10px 10px #a48e8e", borderRadius: "25px", margin: '1em' }}>
                            <img src={prod.Image} style={{ width: "100%", height: "100%", borderRadius: '25px' }} />
                            <div style={{ position: 'absolute', bottom: '50%', top: '50%', width: '100%', textAlign: 'center' }}>
                                <p style={{ fontWeight: 'bolder', fontSize: '2.2em', color: 'Whitesmoke', backgroundColor: 'rgba(0,0,0,0.4)' }}>{prod.title}</p>
                                {/* <p title={prod.About} style={{ color: 'white', maxLines: '' }}>
                                    {prod.About.length <= 125 ? (prod.About) : `${prod.About.slice(0, 121)}...`}
                                </p> */}
                            </div>
                            {/* <button style={{ color: "white", backgroundColor: 'rgba(116, 92, 92, 0.5)', borderRadius: '5%', padding: '1%', position: 'absolute', left: '40%', top: '90%', fontWeight: 'bolder' }}>Quick Look</button> */}
                        </div>
                    ))}
                </div>
                <br />
                <button className='see-more border-1px bg-[rgba(187,148,53,0.5)]' style={{ padding: '0.9em 1.4em' }}>See All</button>
            </div>
        </div>
    )
}
