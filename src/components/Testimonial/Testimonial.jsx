// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from "react-slick";

const testimonialData = [
    {
        id: 1,
        name: "Samuel",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 1,
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 1,
        name: "Smith",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/103/103",
    },
];

const Testimonial = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
    };
    return (
        <>
            <div
                data-aos="fade-up"
                data-aos-duration="500" className='py-10'>
                <div className='container'>
                    <div className='text-center dark:text-white mb-12 max-w-[400px] mx-auto'>
                        <p className='text-sm bg-clip-text text-transparent 
                        bg-gradient-to-r from-primary to-secondary'>Testimonial</p>
                        <h1 className='text-3xl
                        font-bold'>Testimonial</h1>
                        <p className='text-xs text-gray-400'>
                            {" "}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quis id rerum reprehenderit tenetur optio unde quae odit ipsum eum modi.
                        </p>
                    </div>
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="300"
                        className='grid grid-cols-1 max-w-[600px] mx-auto gap-6 dark:text-white'>
                        <Slider {...settings}>
                            {testimonialData.map(({ id, text, name, img }) => {
                                return (
                                    <div key={id} className='my-6'>
                                        <div
                                            className='flex flex-col justify-center items-center 
                                        gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800
                                        bg-primary/10 relative'>
                                            <img src={img} alt=''
                                                className='rounded-full block mx-auto' />
                                            <p className='text-sm text-gray-500'>
                                                {text}
                                            </p>
                                            <h1 className='text-xl font-bold'>
                                                {name}
                                            </h1>
                                            <p className='text-black/20 text-9xl font-serif 
                                            absolute top-0 right-0'>,,</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;