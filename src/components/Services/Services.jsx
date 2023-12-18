// eslint-disable-next-line no-unused-vars
import React from 'react';
import Img2 from "../../assets/biryani2.png";



const ServicesData = [
    {
        id: 1,
        img: Img2,
        name: "Biryani",
        description:
            "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    },
    {
        id: 2,
        img: Img2,
        name: "Chiken kari",
        description:
            "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    },
    {
        id: 3,
        img: Img2,
        name: "Cold Cofee",
        description:
            "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    },
];
const Services = () => {
    return (
        <>
            <div className='py-10'>
                <div className='dark:text-white container'>
                    <div className='text-center mb-20 max-w-[400px] mx-auto'>
                        <p className='text-sm bg-clip-text text-transparent 
                        bg-gradient-to-r from-primary to-secondary'>Our Services</p>
                        <h1 className='text-3xl
                        font-bold'>Services</h1>
                        <p className='text-xs text-gray-400'>
                            {" "}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quis id rerum reprehenderit tenetur optio unde quae odit ipsum eum modi.
                        </p>
                    </div>
                    <div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-14
                        md:gap-14 place-items-center '>
                            {
                                ServicesData.map(({ id, description, img, name }) => {
                                    return <div
                                        data-aos="zoom-in"
                                        data-aos-duration="300"
                                        key={id} className='transition-all max-w-[300px]
                                    group rounded-2xl bg-white dark:bg-gray-800
                                    hover:bg-primary hover:text-white duration-300 p-4 
                                    shadow-xl dark:hover:bg-primary dark:text-white'>
                                        <div className='h-[100px]'>
                                            <img src={img} alt=''
                                                className='max-w-[200px] mx-auto block transform -translate-y-14
                                        group-hover:scale-105 group-hover:rotate-6 duration-300' />
                                        </div>
                                        <div className='p-4 text-center'>
                                            <h1 className='text-xl font-bold'>{name}</h1>
                                            <p className='text-gray-500 text-sm line-clamp-2
                                            group-hover:text-white duration-300'>{description}</p>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;