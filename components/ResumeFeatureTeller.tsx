'use client'
import { FileText, GitBranch, Rocket } from "lucide-react"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { motion } from 'framer-motion'
export const ResumeFeatureTeller = () => {
    return (

        <section className="relative min-h-[600px] overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-teal-600 px-6 py-16 lg:px-8">
            <div className="absolute animate-pulse inset-0 overflow-hidden">
                <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full border border-white/10"></div>
                <div className="absolute -right-16 top-1/2 h-64 w-64 rounded-full border border-white/10"></div>
                <div className="absolute right-8 top-3/4 h-32 w-32 rounded-full border border-white/10"></div>
            </div>

            <div className="relative mx-auto max-w-7xl">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col justify-center space-y-6">
                        <h1 className="text-4xl font-bold leading-tight text-white lg:text-5xl xl:text-6xl">
                            Resumes optimized for applicant tracking systems (ATS)
                        </h1>

                        <p className="text-lg text-gray-200 lg:text-xl">
                            Enhancv resumes and cover letters are vigorously tested against major ATS systems to ensure complete
                            parsability
                        </p>

                        <div className="pt-4">
                            <Button
                                size="lg"
                                className="bg-emerald-500 px-8 py-3 text-lg font-semibold text-white hover:bg-emerald-600"
                            >
                                Build an ATS-Friendly Resume
                            </Button>
                        </div>
                    </div>

                    {/* Right floating cards */}
                    <div className="relative hidden lg:block">
                        {/* Card 1 - Top right */}
                        <motion.div
                            initial={{ opacity: 0, right: -20 }}
                            whileInView={{ opacity: 1, right: 240 }}
                            transition={{ duration: 2, ease: "easeIn" }}
                            exit={{ opacity: 0, right: -20 }}
                            className=" absolute w-full top-0"

                        >
                            <Card className="absolute right-0 top-8 w-80 bg-white/95 p-4 shadow-xl backdrop-blur-sm">
                                <div className="flex items-center space-x-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                                        <FileText className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <span className="text-lg font-semibold text-gray-800">Readable contact information</span>
                                </div>
                            </Card>
                        </motion.div>


                        {/* Card 2 - Middle */}
                        <motion.div
                            initial={{ opacity: 0, right: -20 }}
                            whileInView={{ opacity: 1, right: 150 }}
                            transition={{ duration: 2, ease: "easeIn" }}
                            exit={{ opacity: 0, right: -20 }}
                            className=" absolute top-42"
                            viewport={{ once: false, amount: 0.3 }}

                        >
                            <Card className="bg-white/95 p-4 shadow-xl backdrop-blur-sm">
                                <div className="flex items-center space-x-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                                        <GitBranch className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <span className="text-lg font-semibold text-gray-800">Full experience section parsing</span>
                                </div>
                            </Card>
                        </motion.div>

                        {/* Card 3 - Bottom right */}
                        <motion.div
                            initial={{ opacity: 0, right: -20 }}
                            whileInView={{ opacity: 1, right: 100 }}
                            transition={{ duration: 2, ease: "easeIn" }}
                            exit={{ opacity: 0, right: -20 }}
                            className=" absolute top-72"

                        >
                            <Card className="bg-white/95 p-4 shadow-xl backdrop-blur-sm">
                                <div className="flex items-center space-x-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                                        <Rocket className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <span className="text-lg font-semibold text-gray-800">Optimized skills section</span>
                                </div>
                            </Card>
                        </motion.div>
                    </div>

                    {/* Mobile version of cards */}
                    <div className="space-y-4 lg:hidden">
                        <Card className="bg-white/95 p-4 shadow-xl backdrop-blur-sm">
                            <div className="flex items-center space-x-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                                    <FileText className="h-6 w-6 text-purple-600" />
                                </div>
                                <span className="text-lg font-semibold text-gray-800">Readable contact information</span>
                            </div>
                        </Card>

                        <Card className="bg-white/95 p-4 shadow-xl backdrop-blur-sm">
                            <div className="flex items-center space-x-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                                    <GitBranch className="h-6 w-6 text-blue-600" />
                                </div>
                                <span className="text-lg font-semibold text-gray-800">Full experience section parsing</span>
                            </div>
                        </Card>

                        <Card className="bg-white/95 p-4 shadow-xl backdrop-blur-sm">
                            <div className="flex items-center space-x-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                                    <Rocket className="h-6 w-6 text-purple-600" />
                                </div>
                                <span className="text-lg font-semibold text-gray-800">Optimized skills section</span>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ResumeFeatureTeller
