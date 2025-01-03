"use client"; // Pour indiquer que ce composant utilise React côté client

import React from 'react';

const Beliefs = () => {
    return (
        <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 gap-5'>
                {/* COLUMN-1 */}
                <div className="bg-black bg-beliefs pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl animate-background">
                    <h2 className="text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start">BELIEFS</h2>
                    <h3 className="text-3xl sm:text-5xl font-bold text-white leading-snug mb-5 text-center sm:text-start">Trust, <span className="text-grey">innovation, and collaboration are at the core of our beliefs.</span></h3>
                </div>

                {/* COLUMN-2 */}
                <div className="bg-build pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl animate-background">
                    <h2 className="text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start">BUILD</h2>
                    <h3 className="text-4xl sm:text-5xl font-bold text-black leading-snug mb-5 text-center sm:text-start">
                        <span className="text-3xl sm:text-5xl font-bold text-white leading-snug mb-5 text-center sm:text-start">Automate</span> <span className="text-grey">your processes with secure and scalable cloud solutions.</span>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Beliefs;
