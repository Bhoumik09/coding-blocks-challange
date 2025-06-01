'use client'
import clsx from 'clsx';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.5,

        }
    }
}
const variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1, y: 0, transition: {
            duration: 0.5
        }
    },
    exit: { opacity: 0, y: 20, tansition: 0.4 }

}
const resumeFeatures = [
    {
        title: "Check your resume for grammatical and punctuation errors",
        subtitle: "A built-in content checker tool helping you stay on top of grammar errors and clichés",
        checklist: [
            "Wording and readability analysis",
            "Eliminate typos and grammatical errors",
            "Content suggestions based on your job and experience"
        ],
        img1: 'https://cdn.enhancv.com/images/1920/i/L19uZXh0L3N0YXRpYy9pbWFnZXMvZmVhdHVyZS1vbmUtZWFiNzc3M2ZkYzNjNjljYWM1YWUzNGQyYWFkZGZmMzQud2VicA~~.webp',
        img2: '/images/image1.png'
    },
    {
        title: "Optimize your resume for ATS compatibility",
        subtitle: "Ensure your resume passes through Applicant Tracking Systems with ease.",
        checklist: [
            "Standardized formatting",
            "Keyword optimization",
            "Automated section parsing"
        ],
        img1: 'https://cdn.enhancv.com/images/1920/i/L19uZXh0L3N0YXRpYy9pbWFnZXMvZmVhdHVyZS10d28tZWEzZjY1YjVhNDk5NTY0NjY2MjZmZTZlNmQ4MTEzN2Mud2VicA~~.webp',
        img2: '/images/image2.png'
    },
    {
        title: "Enhance your resume's impact with actionable content suggestions",
        subtitle: "Receive personalized feedback to make your achievements stand out.",
        checklist: [
            "Action-oriented language tips",
            "Quantifiable results emphasis",
            "Industry-specific recommendations"
        ],
        img1: 'https://cdn.enhancv.com/images/1920/i/L19uZXh0L3N0YXRpYy9pbWFnZXMvZmVhdHVyZS1vbmUtZWFiNzc3M2ZkYzNjNjljYWM1YWUzNGQyYWFkZGZmMzQud2VicA~~.webp',
        img2: '/images/image.png'
    }
];

export const ResumeAdvantages: React.FC = () => {
    return (
        <div className='relative flex flex-col'> {resumeFeatures.map((feature, index) => (
            <div key={`feature-${index}`} className={clsx('flex gap-10 h-[700px] min-h-[700px] max-lg:flex-col p-12', (
                index % 2 != 0 && 'flex-row-reverse'
            ))}>
                <motion.div initial={{ y: 20, opacity: 1 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: false }} transition={{ duration: 0.3, delay: 0.1, ease: 'easeInOut' }} className='relative flex-1'>
                    <h3 className='font-bold lg:text-3xl'>{feature.title}</h3>
                    <p className='pr-2'>{feature.subtitle}</p>
                    <motion.div variants={containerVariants} whileInView='show' initial='hidden' viewport={{ once: false }} className='flex flex-col '>
                        {feature.checklist.map((item, checkIndex) => (
                            <motion.div variants={variants} className='flex gap-2 items-center p-1' key={`checklist-${checkIndex}`}>
                                <Check size={18} type='icon' className='bg-green-400 rounded-full text-white' />
                                {item}
                            </motion.div>
                        ))}
                    </motion.div>
                    <div className='relative h-fit lg:h-72'>
                        <Image src={feature.img2} alt='image' fill style={{ objectFit: 'fill', position: 'absolute' }} />
                    </div>
                </motion.div>
                <div className='relative h-full  flex-1'>
                    <Image src={feature.img1} alt='image' fill style={{ objectFit: 'fill', position: 'absolute' }} />

                </div>
            </div>

        ))}</div>

    )
}

export default ResumeAdvantages
