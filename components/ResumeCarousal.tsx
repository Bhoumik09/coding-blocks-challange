import React, { useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import Autoplay from 'embla-carousel-autoplay'
import { Button } from './ui/button'
import { AnimatePresence, motion } from 'framer-motion'
export const ResumeCarousal: React.FC = () => {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);
    const imagesArr = Array.from({ length: 10 }).fill('https://cdn.enhancv.com/images/1098/i/aHR0cHM6Ly9jZG4uZW5oYW5jdi5jb20vcHJlZGVmaW5lZC1leGFtcGxlcy91MGdNWVpUc1JkdjVqUDU4U3lVd3QyZEExMlhPVkttcUk0YXg0ZHdUL2ltYWdlLnBuZw~~.png')
    return (
        // 50% on small screens and 33% on larger screens.
        <Carousel className='px-15' opts={{ loop: true,  }} plugins={[
            Autoplay({
                delay: 4000,
                stopOnInteraction: false


            }),
        ]}>
            <CarouselContent>
                {
                    imagesArr?.map((image, index) => (
                        <CarouselItem key={`corousal-${index}`} className="md:basis-1/3 lg:basis-1/5" >
                            <div className="p-1">
                                <Card className=' hover:bg-green-200 transition-colors duration-500 p-2 bg-gray-500/10' onMouseEnter={() => setHoverIndex(index)} onMouseLeave={() => setHoverIndex(null)}>

                                    

                                    <CardContent className="flex aspect-square items-center justify-center p-2 relative h-[400px] bg-transparent">
                                        <Image src={image as string} alt='image' className='rounded-xl' fill style={{ objectFit: 'fill' }}></Image>
                                        <AnimatePresence>

                                            {hoverIndex === index && (
                                                <motion.div
                                                    key={`corousal-btn-${index}`}
                                                    initial={{ opacity: 0, y: 40 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 40 }}
                                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                    className="absolute bottom-4 left-1/2 -translate-x-1/2"
                                                >
                                                    <Button variant={'outline'} className='bg-green-200 font-semibold'>Start with a template</Button>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))
                }

            </CarouselContent>
        </Carousel>
    )
}

