'use client'
import Image from 'next/image'
import React, { useState, useEffect, Fragment } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Button } from './ui/button';
import { ResumeCarousal } from './ResumeCarousal';
import { Footprints, Home, PackagePlus, PawPrint } from 'lucide-react';
import { StarRating } from './StarRating';

const imagesArr = [
    'https://enhancv.com/_next/static/images/resume3-fdd7e3eafb8f16ef8e0aa6f5ef523dca.webp',
    'https://cdn.enhancv.com/images/600/i/L19uZXh0L3N0YXRpYy9pbWFnZXMvY292ZXItbGV0dGVyLWJhbm5lci1wYXJ0LTNkYmE0OGI1ODE0YjI1ZDAzZjA2NmFmYzYxZGZjZWU1LndlYnA~.webp'
];

export const HeroSection: React.FC = () => {
    const [imgIndex, setImgIndex] = useState(0);
    const controls = useAnimation();
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const runFunction = async () => {
            await controls.start({ rotateY: rotation + 20, transition: { duration: 1.5, ease: 'easeOut' } });
            await controls.start({ rotateY: rotation + 90, transition: { duration: .4, ease: 'easeOut' } });
            setImgIndex((prev) => (prev + 1) % imagesArr.length)
            await controls.start({ rotateY: rotation + 240, transition: { duration: .4, ease: 'easeIn' } });
            await controls.start({ rotateY: rotation + 360, transition: { duration: 1, ease: 'easeIn' } });
            setRotation((prev) => prev + 360)
        }
        runFunction();
    }, [controls, rotation]);

    return (
        <div className='relative '>
            <div className='absolute  rounded-full opacity-85 z-0 inset-0 hidden xl:flex just pointer-events-none items-center bottom-40 left-40 '>
                <div className='bg-gradient-to-r absolute left-3/12 rounded-full opacity-85 blur-3xl from-blue-400 to-blue-300  h-70 w-80   ' />
                <div className='bg-gradient-to-r rounded-full left-4/12 absolute   opacity-85 blur-3xl from-green-200 to-green-400 h-70 w-80   ' />
                <div className='bg-gradient-to-r rounded-full absolute left-5/12 opacity-85 blur-3xl from-blue-100 to-blue-200 h-70 w-80   ' />

                <div className='bg-gradient-to-r rounded-full absolute left-6/12  opacity-85 blur-3xl from-purple-200 to-purple-300 h-90 w-80   ' />
                <div className='bg-gradient-to-r rounded-full absolute left-7/12 opacity-2xl blur-3xl from-red-200 to-red-300 h-90 w-80   ' />
                <div className='bg-gradient-to-r rounded-full absolute left-8/12 opacity-90 blur-3xl from-pink-200 to-pink-300 h-96 w-80   ' />

            </div>

            {/* Main Hero Content */}
            <div className='relative lg:grid lg:grid-cols-[2.5fr_1.5fr] z-10 flex flex-col font-bold mt-10 lg:min-h-[500px] min-h-[400px] w-full'>
                {/* Left Side: Text and Buttons */}
                <div className='pt-10 px-5 lg:p-20 text-center flex flex-col overflow-hidden'>
                    <div className='text-3xl lg:text-7xl'>
                        Enhancv's <span className='colored-text inline-block'>Resume</span>
                        <span className='colored-text inline-block'>Builder</span>
                        helps you get hired at top companies
                    </div>
                    <div className='mt-10 flex flex-col w-full justify-center items-center lg:flex-row gap-2.5'>
                        <Button type={'button'} variant={'outline'} className="text-white bg-green-400 py-4 text-lg font-bold rounded-md hover:bg-green-300 hover:text-white transition-all duration-500">BUILD YOUR RESUME</Button>
                        <Button type={'button'} variant={'outline'} className="border-2 border-black font-bold py-4 text-lg text-black rounded-sm hover:bg-gray-200 transition-all duration-500">GET YOUR RESUME SCORE</Button>
                    </div>
                    <div className="text-left mt-5 mb-5 text-lg opacity-70">Excellent 4,662 Reviews</div>
                    <StarRating rating={4}/>
                    <div className='mt-20 font-medium text-2xl opacity-70 text-left'>
                        Pick a resume template and build your resume in <br /> minutes!
                    </div>
                </div>
                {/* Right Side: Rotating Image */}
                <div className="flex justify-center items-center w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[800px] relative">
                    <div
                        style={{
                            perspective: 1000,
                            width: '100%',
                            height: '100%',
                            maxWidth: 900,
                            maxHeight: 700,
                        }}
                        className="mx-auto w-64 h-96 sm:w-80 sm:h-96 md:w-[300px] md:h-[400px] lg:w-[350px] lg:h-[800px] relative"
                    >
                        <motion.div
                            animate={controls}
                            initial={{ rotateY: 0 }}
                            className='absolute w-full h-full'
                            style={{
                                backfaceVisibility: 'hidden',
                                willChange: 'transform',
                                borderRadius: '1rem',
                                overflow: 'hidden',
                            }}
                        >
                            <Image
                                src={imagesArr[imgIndex]}
                                fill
                                alt='rotating img'
                                style={{ objectFit: 'contain' }}
                                className="rounded-lg"
                                draggable={false}
                                sizes="(max-width: 768px) 100vw, 500px"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Carousal below the hero section */}
            <div className="w-full relative z-10">
                <ResumeCarousal />
            </div>
            <div className="w-full items-center text-center p-10 max-lg:flex-col justify-center   gap-44 flex px-20 z-10">
                <div className='flex  flex-col items-center'>
                    <Home size={50} className='text-green-300' />

                    <div className='text-4xl font-semibold'>
                       ATS-friendly professionally
designed resumes
                    </div>
                </div>
                <div className='flex  flex-col items-center'>
                    <Footprints size={50} className='text-green-300' />

                    <div className='text-4xl font-semibold'>
                        Change the font, color
and background combinations

                    </div>
                </div>
                <div className='flex  flex-col items-center'>
                    <PackagePlus size={50} className='text-green-300' />
                    <div className='text-4xl font-semibold'>
                        Two-column, single-column,
and multi-page layouts
                    </div>
                </div>
            </div>
        </div>

    );
};
