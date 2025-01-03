"use client" 
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA
interface DataType {
    profession: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "AWS Partner",
        profession: 'AWS Partner Network',
        imgSrc: '/images/Partner/AWS-Partner.png',
    },
];

// CAROUSEL SETTINGS
export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: false,  // Désactive l'infinité pour éviter la répétition
            slidesToShow: 1,  // Affiche un seul élément
            slidesToScroll: 1,  // Défile d'un élément à la fois
            arrows: false,
            autoplay: false,
            speed: 500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,  // Désactive l'infinité pour éviter la répétition
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,  // Désactive l'infinité pour éviter la répétition
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,  // Désactive l'infinité pour éviter la répétition
                        dots: false
                    }
                }
            ]
        };

        return (
            <div className="bg-testimonial pt-40 pb-32 lg:py-32" id="testimonial-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>
                    <div className="text-center mb-10">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-3">We Are Proud Partners with AWS.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4">We Are Proud Partners with AWS.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-32 my-4">We Are Proud Partners with AWS.</h3>
                    </div>

                    <div className="flex justify-center">
                        {postData.map((items, i) => (
                            <div key={i} className="relative w-full max-w-md">
                                <div className='bg-white shadow-xl m-3 p-8 rounded-3xl text-center'>
                                    <Image 
                                        src={items.imgSrc} 
                                        alt="AWS Partner" 
                                        width={150} 
                                        height={150} 
                                        className="mx-auto mb-6"
                                    />
                                    <h3 className='text-2xl font-semibold text-testColor mb-4'>{items.name}</h3>
                                    <p className='text-lg font-medium text-gray-700 mb-6'>{items.profession}</p>
                                    <hr className="my-6 border-t-2 border-gray-200" />
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
